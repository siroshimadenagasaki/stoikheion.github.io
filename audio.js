class AudioPlayer {
  constructor() {
    this.playNote = this.playNote.bind(this);
    this.resumeAudioContext = this.resumeAudioContext.bind(this);
    this.isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    this.samples = {};
    this.additionalAudios = {};
    this.initialized = false;
    this.audioContext = null;
    this.preloadPromise = null;
    this.initializationPromise = null;

    // Set up initialization on user interaction
    ["click", "touchstart"].forEach((eventName) => {
      document.addEventListener(
        eventName,
        async () => {
          if (!this.initialized) {
            console.log("Initializing audio context after user interaction");
            await this.initAudioContext();
          }
        },
        { once: true }
      );
    });
  }

  async initAudioContext() {
    if (this.initializationPromise) {
      return this.initializationPromise;
    }

    this.initializationPromise = (async () => {
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

        this.initialized = true;

        // Only start preloading after audio context is initialized
        await this.preloadAllAudio();
      } catch (error) {
        console.error("Failed to initialize audio:", error);
      }
    })();

    return this.initializationPromise;
  }

  async preloadAllAudio() {
    if (this.preloadPromise) {
      return this.preloadPromise;
    }

    if (!this.audioContext) {
      console.log("Waiting for audio context initialization before preloading");
      await this.initAudioContext();
    }

    this.preloadPromise = (async () => {
      try {
        // Preload piano samples
        await this.loadAllSamples();

        // Preload additional audio files
        await this.loadAdditionalAudios();

        console.log("All audio files preloaded successfully");
      } catch (error) {
        console.error("Error during preloading:", error);
      }
    })();

    return this.preloadPromise;
  }

  async loadAllSamples() {
    if (!this.audioContext) {
      console.warn("Cannot load samples without audio context");
      return;
    }

    const fileNames = ["C2v10", "C3v10", "C4v10", "C5v10", "C6v10", "C7v10"];
    console.log("Starting to load piano samples...");

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
          console.log(`Loaded piano sample: ${key}`);
        }
      });

      if (loadedCount === 0) {
        throw new Error("No piano samples were loaded successfully");
      }
      console.log(
        `Successfully loaded ${loadedCount} piano samples. Available samples:`,
        Object.keys(this.samples)
      );
    } catch (error) {
      console.error("Error loading piano samples:", error);
    }
  }

  async loadAdditionalAudios() {
    if (!this.audioContext) {
      console.warn("Cannot load additional audios without audio context");
      return;
    }

    const audioFiles = ["3-11", "3-11B", "4-14"];
    console.log("Starting to load additional audio files...");

    try {
      const loadedBuffers = await Promise.all(
        audioFiles.map((fileName) =>
          this.loadSample(`./audios/${fileName}.mp3`)
        )
      );

      let loadedCount = 0;
      audioFiles.forEach((fileName, index) => {
        if (loadedBuffers[index]) {
          this.additionalAudios[fileName] = loadedBuffers[index];
          loadedCount++;
          console.log(`Loaded additional audio: ${fileName}`);
        }
      });

      console.log(
        `Successfully loaded ${loadedCount} additional audio files. Available files:`,
        Object.keys(this.additionalAudios)
      );
    } catch (error) {
      console.error("Error loading additional audio files:", error);
    }
  }

  async loadSample(url) {
    if (!this.audioContext) {
      throw new Error("Audio context not initialized");
    }

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

  async ensureInitialized() {
    if (!this.initialized || !this.audioContext) {
      await this.initAudioContext();
    }
    if (this.audioContext.state === "suspended") {
      await this.resumeAudioContext();
    }
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

    await this.ensureInitialized();
    await this.preloadAllAudio();

    const [adjustedNoteValue, sample] = this.getBestSampleForNote(
      noteValue,
      octave
    );
    this.playTone(adjustedNoteValue, sample);
  }

  async playAudioFile(fileName) {
    await this.ensureInitialized();
    await this.preloadAllAudio();

    const sample = this.additionalAudios[fileName];
    if (!sample) {
      console.warn(`Audio file ${fileName} not found in cache`);
      return;
    }

    this.playTone(0, sample); // Play at original pitch
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
}
