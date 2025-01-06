class AudioPlayer {
  constructor() {
    this.playNote = this.playNote.bind(this)
    this.resumeAudioContext = this.resumeAudioContext.bind(this)

    this.audioContext = this.getCrossBrowserAudioContext()
    const audioExtension = this.getSupportedAudioExtension()

    if (!this.audioContext || !audioExtension) return

    this.applyDecodeAudioDataPolyfill()

    const fileNames = ['C2v10', 'C3v10', 'C4v10', 'C5v10', 'C6v10', 'C7v10']

    Promise.all(fileNames.map((fileName) => this.loadSample(`./piano-sounds/${fileName}.${audioExtension}`))).then((audioBuffers) => {
      const [C2, C3, C4, C5, C6, C7] = audioBuffers
      this.samples = {C2, C3, C4, C5, C6, C7}
    })
  }

  getCrossBrowserAudioContext() {
    const AudioContextCrossBrowser = window.AudioContext || window.webkitAudioContext
    if (!AudioContextCrossBrowser) return
    return new AudioContextCrossBrowser()
  }

  getSupportedAudioExtension() {
    const audioElement = document.createElement('audio')
    if (audioElement.canPlayType('audio/wav')) return 'wav'
    if (audioElement.canPlayType('audio/x-wav')) return 'wav'
    if (audioElement.canPlayType('audio/ogg')) return 'ogg'
  }

  applyDecodeAudioDataPolyfill() {
    if (!this.audioContext) return
    // Polyfill for old callback-based syntax used in Safari
    if (this.audioContext.decodeAudioData.length !== 1) {
      const originalDecodeAudioData = this.audioContext.decodeAudioData.bind(this.audioContext)
      this.audioContext.decodeAudioData = (buffer) => new Promise((resolve, reject) => originalDecodeAudioData(buffer, resolve, reject))
    }
  }

  loadSample(url) {
    return fetch(url)
      .then((response) => response.arrayBuffer())
      .then((buffer) => this.audioContext.decodeAudioData(buffer))
  }

  playTone(noteValue, sample) {
    if (!this.audioContext) return

    const source = this.audioContext.createBufferSource()
    source.buffer = sample

    // first try to use the detune property for pitch shifting
    if (source.detune) {
      source.detune.value = noteValue * 100
    } else {
      // fallback to using playbackRate for pitch shifting
      source.playbackRate.value = 2 ** (noteValue / 12)
    }

    source.connect(this.audioContext.destination)

    this.audioContext.resume().then(() => {
      source.start(0)
    })
  }

  getBestSampleForNote(noteValue, octave) {
    let adjustedNoteValue = noteValue
    let adjustedOctave = octave

    // use the closest sample to minimize pitch shifting
    if (noteValue > 6 && octave <= 7) {
      adjustedOctave = octave + 1
      adjustedNoteValue = noteValue - 12
    }

    return [adjustedNoteValue, this.samples[`C${adjustedOctave}`]]
  }

  resumeAudioContext() {
    if (this.audioContext && this.audioContext.state === 'suspended') {
      this.audioContext.resume()
    }
  }

  playNote(noteValue, octave) {
    if (!this.audioContext || !this.samples) return

    this.playTone(...this.getBestSampleForNote(noteValue, octave))
  }
}
