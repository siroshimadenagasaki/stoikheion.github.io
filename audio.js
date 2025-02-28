class AudioPlayer {
  constructor() {
    this.playNote = this.playNote.bind(this);
    this.resumeAudioContext = this.resumeAudioContext.bind(this);
    this.isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    this.samples = {};
    this.initialized = false;
    this.audioContext = null;

    // Initialize immediately on mobile devices
    if (this.isIOS) {
      this.initAudioContext();
    }

    ["click", "touchstart"].forEach((eventName) => {
      document.addEventListener(
        eventName,
        async () => {
          if (!this.initialized) {
            console.log("Initializing audio context after user interaction");
            await this.initAudioContext();
            this.initialized = true;
          }
        },
        { once: true }
      );
    });
  }

  async initAudioContext() {
    try {
      const AudioContextClass =
        window.AudioContext || window.webkitAudioContext;
      this.audioContext = new AudioContextClass();
      console.log("Audio context created:", this.audioContext.state);

      if (this.audioContext.state === "suspended") {
        console.log("Resuming suspended audio context");
        await this.audioContext.resume();
        console.log("Audio context resumed:", this.audioContext.state);
      }

      await this.loadAllSamples();
    } catch (error) {
      console.error("Failed to initialize audio:", error);
    }
  }

  async loadAllSamples() {
    const fileNames = ["C2v10", "C3v10", "C4v10", "C5v10", "C6v10", "C7v10"];
    console.log("Starting to load samples...");

    try {
      const loadedBuffers = await Promise.all(
        fileNames.map((fileName) =>
          this.loadSample(`./piano-sounds/${fileName}.mp3`)
        )
      );

      let loadedCount = 0;
      fileNames.forEach((fileName, index) => {
        const key = fileName.substring(0, 2);
        if (loadedBuffers[index]) {
          this.samples[key] = loadedBuffers[index];
          loadedCount++;
          console.log(`Loaded sample: ${key}`);
        }
      });

      if (loadedCount === 0) {
        throw new Error("No samples were loaded successfully");
      }
      console.log(
        `Successfully loaded ${loadedCount} samples. Available samples:`,
        Object.keys(this.samples)
      );
    } catch (error) {
      console.error("Error loading samples:", error);
    }
  }

  async loadSample(url) {
    try {
      console.log(`Loading sample: ${url}`);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const arrayBuffer = await response.arrayBuffer();
      if (!arrayBuffer || arrayBuffer.byteLength === 0) {
        throw new Error("Empty audio buffer received");
      }

      return await new Promise((resolve, reject) => {
        this.audioContext.decodeAudioData(
          arrayBuffer,
          (buffer) => {
            console.log(`Successfully decoded: ${url}`);
            resolve(buffer);
          },
          (error) => reject(new Error(`Decoding failed: ${error}`))
        );
      });
    } catch (error) {
      console.warn(`Failed to load sample ${url}:`, error);
      return null;
    }
  }

  playTone(noteValue, sample) {
    if (!this.audioContext || !sample) {
      console.warn("Cannot play tone - missing context or sample", {
        hasContext: !!this.audioContext,
        hasSample: !!sample,
        noteValue,
      });
      return;
    }

    try {
      console.log(`Playing tone with noteValue: ${noteValue}`);
      const source = this.audioContext.createBufferSource();
      source.buffer = sample;

      const gainNode = this.audioContext.createGain();
      gainNode.gain.value = this.isIOS ? 0.3 : 0.5;

      source.connect(gainNode);
      gainNode.connect(this.audioContext.destination);

      if (this.isIOS || !source.detune) {
        const rate = Math.pow(2, noteValue / 12);
        console.log(`Using playbackRate: ${rate}`);
        source.playbackRate.value = rate;
      } else {
        console.log(`Using detune: ${noteValue * 100}`);
        source.detune.value = noteValue * 100;
      }

      source.start(0);
      console.log("Tone started playing");
    } catch (error) {
      console.error("Failed to play tone:", error);
    }
  }

  getBestSampleForNote(noteValue, octave) {
    if (!this.samples || Object.keys(this.samples).length === 0) {
      console.warn("No samples available for playback");
      return [0, null];
    }

    let adjustedNoteValue = noteValue;
    let adjustedOctave = octave;

    if (noteValue > 6 && octave <= 7) {
      adjustedOctave = octave + 1;
      adjustedNoteValue = noteValue - 12;
    }

    const key = `C${adjustedOctave}`;
    const sample = this.samples[key];
    console.log(`Selected sample for note ${noteValue}, octave ${octave}:`, {
      key,
      hasSample: !!sample,
      adjustedNoteValue,
    });

    return [adjustedNoteValue, sample];
  }

  async resumeAudioContext() {
    if (this.audioContext?.state === "suspended") {
      try {
        console.log("Attempting to resume audio context");
        await this.audioContext.resume();
        console.log("Audio context resumed successfully");
      } catch (error) {
        console.warn("Failed to resume audio context:", error);
      }
    }
  }

  async playNote(noteValue, octave) {
    console.log(`Attempting to play note: ${noteValue} in octave ${octave}`);

    if (!this.audioContext || this.audioContext.state === "suspended") {
      try {
        await this.resumeAudioContext();
      } catch (error) {
        console.warn("Could not resume audio context:", error);
        return;
      }
    }

    const [adjustedNoteValue, sample] = this.getBestSampleForNote(
      noteValue,
      octave
    );
    this.playTone(adjustedNoteValue, sample);
  }
}
