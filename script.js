const CARDINALITIES = {
  1: '1 - Singleton',
  2: '2 - Dyad',
  3: '3 - Trichord',
  4: '4 - Tetrachord',
  5: '5 - Pentachord',
  6: '6 - Hexachord',
  7: '7 - Septachord',
  8: '8 - Octachord',
  9: '9 - Nonachord',
  10: '10 - Decachord',
  11: '11 - Undecachord',
  12: '12 - Aggregate'
}

/**
 * @typedef {Object} UIType
 * @property {HTMLButtonElement} pageModeButton
 * @property {Array<HTMLDivElement>} pianoKeys
 * @property {Array<HTMLDivElement>} guitarKeys
 * @property {HTMLDivElement} pianoDiv
 * @property {HTMLDivElement} guitarDiv
 * @property {HTMLButtonElement} resetButton
 * @property {HTMLButtonElement} complementButton
 * @property {HTMLButtonElement} invertByZeroButton
 * @property {HTMLInputElement} userPitchClassSetInput
 * @property {HTMLInputElement} cardinalityInput
 * @property {HTMLInputElement} normalFormInput
 * @property {HTMLInputElement} primeFormInput
 * @property {HTMLInputElement} icVectorInput
 * @property {HTMLInputElement} zMateInput
 * @property {HTMLInputElement} solomonCodeInput
 * @property {HTMLInputElement} solomonNameInput
 * @property {HTMLButtonElement} solomonPDFButton
 * @property {HTMLButtonElement} solomonAudioButton
 * @property {HTMLInputElement} forteCodeInput
 * @property {HTMLSelectElement} subsetSelector
 * @property {HTMLSelectElement} supersetSelector
 * @property {HTMLDivElement} subsetsDisplay
 * @property {HTMLDivElement} supersetsDisplay
 * @property {HTMLInputElement} transposeInput
 * @property {HTMLInputElement} invertInput
 * @property {HTMLSelectElement} transposeSelector
 * @property {HTMLSelectElement} invertSelector
 * @property {HTMLInputElement} transposeInvarianceInput
 * @property {HTMLInputElement} invertInvarianceInput
 * @property {HTMLSelectElement} matrixSelector
 * @property {HTMLDivElement} matrixDisplay
 * @property {HTMLDataListElement} forteCodesDataList
 */

/** @type {UIType} */
const UI = {}
const audioPlayer = new AudioPlayer()

window.addEventListener('load', initialize)

function initialize() {
  // Initialize the UI elements
  UI.pageModeButton = document.querySelector('#page-mode-button')
  const pianoKeys = document.querySelectorAll('.piano-key')
  if (!pianoKeys) throw new Error('Piano keys not found')
  UI.pianoKeys = [...pianoKeys]

  const guitarKeys = document.querySelectorAll('.guitar-finger')
  if (!guitarKeys) throw new Error('Guitar keys not found')
  UI.guitarKeys = [...guitarKeys]

  UI.pianoDiv = document.querySelector('#piano')
  UI.guitarDiv = document.querySelector('#guitar')

  UI.resetButton = document.querySelector('#reset-button')
  UI.complementButton = document.querySelector('#complement-button')
  UI.invertByZeroButton = document.querySelector('#invert-zero-button')
  UI.userPitchClassSetInput = document.querySelector('#user-pitch-class')
  UI.cardinalityInput = document.querySelector('#cardinality')
  UI.normalFormInput = document.querySelector('#normal-form')
  UI.primeFormInput = document.querySelector('#prime-form')
  UI.icVectorInput = document.querySelector('#ic-vector')
  UI.zMateInput = document.querySelector('#z-mate')
  UI.solomonCodeInput = document.querySelector('#solomon-code')
  UI.solomonNameInput = document.querySelector('#solomon-name')
  UI.solomonPDFButton = document.querySelector('#solomon-get-pdf')
  UI.solomonAudioButton = document.querySelector('#solomon-play-audio')
  UI.forteCodeInput = document.querySelector('#forte-code')

  UI.subsetSelector = document.querySelector('#subsets-selector')
  UI.supersetSelector = document.querySelector('#supersets-selector')
  UI.subsetsDisplay = document.querySelector('#subsets-display')
  UI.supersetsDisplay = document.querySelector('#supersets-display')

  UI.transposeInput = document.querySelector('#transpose')
  UI.invertInput = document.querySelector('#invert')
  UI.transposeSelector = document.querySelector('#transpose-selector')
  UI.invertSelector = document.querySelector('#invert-selector')
  UI.transposeInvarianceInput = document.querySelector('#transpose-invariance')
  UI.invertInvarianceInput = document.querySelector('#invert-invariance')

  UI.matrixSelector = document.querySelector('#matrix-selector')
  UI.matrixDisplay = document.querySelector('#matrix-display')

  UI.forteCodesDataList = document.querySelector('#forte-codes')

  // Initialize the event listeners
  UI.forteCodeInput.addEventListener('change', onForteCodeInputChanged)
  UI.pageModeButton.addEventListener('click', onPageModeButtonClicked)
  UI.resetButton.addEventListener('click', onResetButtonClicked)
  UI.complementButton.addEventListener('click', onComplementButtonClicked)
  UI.invertByZeroButton.addEventListener('click', onInvertByZeroButtonClicked)
  UI.matrixSelector.addEventListener('change', updateMatrix)

  for (let [key, value] of Object.entries(UI)) {
    if (value == null) throw new Error(`Missing element in UI: ${key}`)
    const element = UI[key]
    if (element instanceof HTMLElement && element.getAttribute('readonly') !== null) {
      element.addEventListener('click', onReadonlyElementClicked)
    } else if (element instanceof HTMLInputElement && element.getAttribute('readonly') === null) {
      element.addEventListener('dblclick', onReadonlyElementClicked)
    }
  }

  for (let key of UI.pianoKeys) {
    key.addEventListener('click', onPitchClassClicked)
  }

  for (let key of UI.guitarKeys) {
    key.addEventListener('click', onPitchClassClicked)
  }

  document.querySelectorAll('input[name="instrument-option"]').forEach((input) => {
    input.addEventListener('click', onInstrumentSelectorChanged)
  })

  document.querySelectorAll('[play-for]').forEach((element) => {
    return element.addEventListener('click', onPlayForElementClicked)
  })

  UI.userPitchClassSetInput.addEventListener('input', onUserInputChanged)
  UI.userPitchClassSetInput.addEventListener('change', onUserInputBlur)
  UI.subsetSelector.addEventListener('change', updateSubSupersets)
  UI.supersetSelector.addEventListener('change', updateSubSupersets)

  UI.transposeSelector.addEventListener('change', updateTransposeInvert)
  UI.invertSelector.addEventListener('change', updateTransposeInvert)

  document.querySelectorAll('[for-modal]').forEach((button) => {
    button.addEventListener('click', onModalButtonClicked)
  })

  document.querySelectorAll('.modal-close-button').forEach((button) => {
    button.addEventListener('click', onModalCloseButtonClicked)
  })

  UI.matrixDisplay.addEventListener('click', onMatrixDisplayClicked)
  UI.matrixDisplay.addEventListener('mouseover', onMatrixCellHover)
  UI.matrixDisplay.addEventListener('mouseout', onMatrixCellHoverOut)

  // Prepare the page
  CHORDS.data.forEach((chord) => {
    const option = document.createElement('option')
    option.value = chord['forte-code']
    UI.forteCodesDataList.appendChild(option)
  })

  // get searchParams
  const searchParams = new URLSearchParams(window.location.search)
  const pitchClasses = searchParams.get('pitch-classes')
  if (pitchClasses) {
    SELECTION.array = pitchClasses.split('-').map((pitchClass) => parseInt(pitchClass))
  }
  const fullMode = searchParams.get('full-mode')
  if (fullMode && fullMode === 'true') {
    toogleFullPageMode(true)
  } else {
    toogleFullPageMode(false)
  }
  const subsetsCardinality = searchParams.get('subsets-cardinality')
  if (subsetsCardinality) UI.subsetSelector.value = subsetsCardinality
  const supersetsCardinality = searchParams.get('supersets-cardinality')
  if (supersetsCardinality) UI.supersetSelector.value = supersetsCardinality
  const transpose = searchParams.get('transpose')
  if (transpose) UI.transposeSelector.value = transpose
  const invert = searchParams.get('invert')
  if (invert) UI.invertSelector.value = invert
  const matrix = searchParams.get('matrix')
  if (matrix) UI.matrixSelector.value = matrix
  updateUI()
}

const SELECTION = {
  array: [],

  /**
   * Adds a pitch class to the selection if it's not already present
   * @param {number | string} pitchClass The pitch class to add
   * @returns {void}
   */
  addPitchClass(pitchClass) {
    pitchClass = parseInt(pitchClass)
    if (isNaN(pitchClass) || SELECTION.array.includes(pitchClass)) return
    SELECTION.array.push(pitchClass)
    SELECTION.array.sort((a, b) => a - b)
  },

  /**
   * Removes a pitch class from the selection if it's present
   * @param {number | string} pitchClass The pitch class to remove
   * @returns {void}
   */
  removePitchClass(pitchClass) {
    pitchClass = parseInt(pitchClass)
    SELECTION.array = SELECTION.array.filter((selectedPitchClass) => selectedPitchClass !== pitchClass)
  },

  /**
   * Toggles the presence of a pitch class in the selection.
   * If the pitch class is already present in the `SELECTION.array`, it will be removed.
   * Otherwise, it will be added to the `SELECTION.array`.
   *
   * @param {number | string} pitchClass - The pitch class to toggle.
   */
  tooglePitchClass(pitchClass) {
    pitchClass = parseInt(pitchClass)
    if (SELECTION.array.includes(pitchClass)) {
      SELECTION.removePitchClass(pitchClass)
    } else {
      SELECTION.addPitchClass(pitchClass)
    }
  }
}

const PITCHCLASS = {
  /**
   * Generates all rotations of the given pitch class set.
   * @param {Array<number>} pitchClasses - The pitch class set to generate rotations for.
   * @returns {Array<Array<number>>} The rotations of the pitch class set.
   */
  generateRotations(pitchClasses) {
    let rotations = []
    for (let rotationIndex = 0; rotationIndex < pitchClasses.length; rotationIndex++) {
      let rotation = []
      for (let offset = 0; offset < pitchClasses.length; offset++) {
        const index = (rotationIndex + offset) % pitchClasses.length
        rotation.push(pitchClasses[index])
      }
      rotations.push(rotation)
    }
    return rotations
  },

  /**
   * Returns a new array with the pitch classes transposed by the given interval.
   * @param {Array<number>} pitchClasses - An array of pitch classes to transpose.
   * @param {number} transposeFactor - The interval to transpose the pitch class set by.
   * @returns {Array<number>} A new array with the transposed pitch classes.
   */
  getTransposed(pitchClasses, transposeFactor) {
    let transposed = []
    for (let pitchClass of pitchClasses) {
      transposed.push(HELPERS.mod12(pitchClass + transposeFactor))
    }
    transposed = PITCHCLASS.getNormalForm(transposed)
    return transposed
  },

  /**
   * Transposes the given pitch class set so that the first pitch class is zero.
   *
   * This function adjusts the pitch classes by transposing them by the negative
   * value of the first pitch class. The result is a new pitch class set where
   * the first pitch class is zero.
   *
   * @param {Array<number>} pitchClasses - An array of pitch classes to transpose.
   * @returns {Array<number>} A new array with the transposed pitch classes.
   */
  getTransposeToZero(pitchClasses) {
    return PITCHCLASS.getTransposed(pitchClasses, -pitchClasses[0])
  },

  /**
   * Determines the normal form of a pitch class set.
   *
   * The normal form is the most compact ordering of a pitch class set
   * after considering all possible rotations. This function calculates
   * all rotations of the given pitch classes, sorts them, and iteratively
   * removes less optimal rotations by comparing the outer intervals.
   *
   * @param {Array<number>} pitchClasses - An array of pitch classes to normalize.
   * @returns {Array<number>} The normal form of the pitch class set.
   */
  getInverted(pitchClasses, invertFactor = 0) {
    invertFactor = HELPERS.mod12(invertFactor)
    let inverted = []
    for (let pitchClass of pitchClasses) {
      let invertedPitchClass = 12 - pitchClass
      invertedPitchClass = HELPERS.mod12(invertedPitchClass + invertFactor)
      inverted.push(invertedPitchClass)
    }
    inverted = PITCHCLASS.getNormalForm(inverted)
    return inverted
  },

  /**
   * Calculates all possible intervals between the given pitch classes.
   *
   * This function returns an array of intervals, where each interval is the
   * minimum interval between two pitch classes. The intervals are calculated
   * by iterating over every pair of pitch classes and calculating the
   * minimum interval using the `calculateMinimumInterval` helper function.
   *
   * @param {Array<number>} pitchClasses - An array of pitch classes to calculate intervals from.
   * @returns {Array<number>} An array of intervals between the given pitch classes.
   */
  getIntervals(pitchClasses) {
    const intervals = []
    for (let i = 0; i < pitchClasses.length - 1; i++) {
      for (let j = i + 1; j < pitchClasses.length; j++) {
        intervals.push(HELPERS.calculateMinimumInterval(pitchClasses[i], pitchClasses[j]))
      }
    }
    return intervals
  },

  /**
   * Calculates the sequenced intervals of a pitch class set.
   *
   * This function returns an array of intervals, where each interval is the
   * interval between two adjacent pitch classes in the given array. The
   * intervals are calculated by iterating over the array and calculating
   * the interval between each pair of adjacent elements using the
   * `calculateInterval` helper function.
   *
   * @param {Array<number>} pitchClasses - An array of pitch classes to calculate intervals from.
   * @returns {Array<number>} An array of sequenced intervals between the given pitch classes.
   */
  getSequencedIntervals(pitchClasses) {
    const intervals = []
    for (let i = 0; i < pitchClasses.length; i++) {
      intervals.push(HELPERS.calculateInterval(pitchClasses[i], pitchClasses[(i + 1) % pitchClasses.length]))
    }
    return intervals
  },

  /**
   * Calculates the interval-class vector of a pitch class set.
   *
   * This function returns an array of 6 elements, where each element is the
   * count of intervals of that class in the given pitch class set.
   *
   * @param {Array<number>} pitchClasses - An array of pitch classes to calculate intervals from.
   * @returns {Array<number>} An array of 6 elements representing the interval-class vector.
   */
  getIntervalVector(pitchClasses) {
    const intervals = PITCHCLASS.getIntervals(pitchClasses)
    const vector = Array(6).fill(0)
    for (let interval of intervals) {
      if (interval > 0 && interval <= 6) vector[interval - 1]++
    }
    return vector
  },

  /**
   * Calculates the normal form of a pitch class set.
   *
   * The normal form is the most compact ordering of a pitch class set
   * after considering all possible rotations. This function calculates
   * all rotations of the given pitch classes, sorts them, and iteratively
   * removes less optimal rotations by comparing the outer intervals.
   *
   * @param {Array<number>} pitchClasses - An array of pitch classes to normalize.
   * @returns {Array<number>} The normal form of the pitch class set.
   */
  getNormalForm(pitchClasses) {
    if (pitchClasses.length === 1) return pitchClasses

    pitchClasses = pitchClasses.sort((a, b) => a - b)
    let rotations = PITCHCLASS.generateRotations(pitchClasses)
    rotations = rotations.sort((a, b) => a[0] - b[0])

    function getMostCompactRotation(rotations, comparisonIndex) {
      const intervals = []

      for (let rotation of rotations) {
        const interval = HELPERS.calculateInterval(rotation[0], rotation[comparisonIndex])
        intervals.push(interval)
      }
      const minSpan = Math.min(...intervals)
      const filteredRotations = []
      for (let intervalIndex = 0; intervalIndex < intervals.length; intervalIndex++) {
        if (intervals[intervalIndex] === minSpan) filteredRotations.push(rotations[intervalIndex])
      }
      if (comparisonIndex === 1) return filteredRotations
      else return getMostCompactRotation(filteredRotations, comparisonIndex - 1)
    }

    return getMostCompactRotation(rotations, pitchClasses.length - 1)[0]
  },

  /**
   * Calculates the prime form of a pitch class set.
   *
   * The prime form is the most compact ordering of a pitch class set.
   * Following the logic from: https://intmus.github.io/inttheory/23-intro-to-post-tonal/e1-ex-primeform.html
   *
   * @param {Array<number>} pitchClasses - An array of pitch classes to get the prime form.
   * @returns {Array<number>} The prime form of the pitch class set.
   */
  getPrimeForm(pitchClasses) {
    const normalForm = PITCHCLASS.getNormalForm(pitchClasses)
    const transposedToZero = PITCHCLASS.getTransposeToZero(normalForm)
    const inverted = PITCHCLASS.getInverted(transposedToZero)
    const invertedNormal = PITCHCLASS.getNormalForm(inverted)
    const transposedToZero2 = PITCHCLASS.getTransposeToZero(invertedNormal)
    let sliceIndex = transposedToZero2.length
    while (sliceIndex > 1) {
      const interval1 = HELPERS.calculateOuterInterval(transposedToZero.slice(0, sliceIndex))
      const interval2 = HELPERS.calculateOuterInterval(transposedToZero2.slice(0, sliceIndex))
      if (interval1 < interval2) return transposedToZero
      if (interval2 < interval1) return transposedToZero2
      sliceIndex--
    }
    return transposedToZero
  },

  /**
   * Calculates the Z-mate of a pitch class set.
   *
   * The Z-mate is the Forte code of the chord with the same interval-class vector as the given pitch class set.
   * The Z-mate is only returned if the given set is not the same as the Z-mate.
   *
   * @param {Array<number>} pitchClasses - An array of pitch classes to get the Z-mate.
   * @returns {string | undefined} The Forte code of the Z-mate, or undefined if the given set is the same as its Z-mate.
   */
  getZMate(pitchClasses) {
    const primeForm = PITCHCLASS.getPrimeForm(pitchClasses)
    const ICVector = PITCHCLASS.getIntervalVector(primeForm)
    for (let chord of CHORDS.getAllByCardinality(pitchClasses.length)) {
      const chordICVector = PITCHCLASS.getIntervalVector(chord['pitch-classes'])
      if (HELPERS.arraysAreEqual(ICVector, chordICVector) && !HELPERS.arraysAreEqual(pitchClasses, chord['pitch-classes'])) return chord['forte-code']
    }
  },

  /**
   * Calculates the Solomon code of a pitch class set.
   *
   * @param {Array<number>} pitchClasses - An array of pitch classes to calculate the Solomon code.
   * @returns {string | undefined} The Solomon code of the pitch class set, or undefined if the pitch class set is invalid.
   */
  getSolomonChord(pitchClasses) {
    const pitchClassesIntervals = PITCHCLASS.getSequencedIntervals(pitchClasses)

    const primeForm = PITCHCLASS.getPrimeForm(pitchClasses)
    const primeFormRotations = PITCHCLASS.generateRotations(primeForm)

    const primeFormRotationsIntervals = []
    for (let primeFormRotation of primeFormRotations) {
      const primeFormRotationIntervals = PITCHCLASS.getSequencedIntervals(primeFormRotation)
      primeFormRotationsIntervals.push(primeFormRotationIntervals.join(' '))
    }

    const pitchClassIntervalsString = pitchClassesIntervals.join(' ')
    const primeFormIntervalsString = primeFormRotationsIntervals.join(', ')

    const chord = CHORDS.getByPitchClasses(primeForm)
    if (!chord) return
    if (!primeFormIntervalsString.includes(pitchClassIntervalsString)) return CHORDS.getByForteCode(chord['forte-code'] + 'B')
    return chord
  },

  /**
   * Generates all subsets of a given size from a given set of pitch classes, and
   * returns an array of the chords that correspond to the
   * prime forms of the subsets.
   * @param {Array<number>} pitchClasses - The pitch classes to generate subsets from.
   * @param {number} size - The size of the subsets to generate.
   * @returns {Array<string>} An array of Forte codes of the chords that correspond
   * to the prime forms of the subsets.
   */
  getSubsetsChords(pitchClasses, size) {
    const combinations = HELPERS.arrayCombinations(pitchClasses, size)
    const chords = []
    for (let combination of combinations) {
      const combinationPrimeForm = PITCHCLASS.getPrimeForm(combination)
      const chord = CHORDS.getByPitchClasses(combinationPrimeForm)
      if (chord) chords.push(chord)
    }
    return chords
  },

  /**
   * Generates all supersets of a given size from a given set of pitch classes, and
   * returns an array of the chords that correspond to the
   * prime forms of the supersets.
   * @param {Array<number>} pitchClasses - The pitch classes to generate supersets from.
   * @param {number} size - The size of the supersets to generate.
   * @returns {Array<string>} An array of Forte codes of the chords that correspond
   * to the prime forms of the supersets.
   */
  getSupersetsChords(pitchClasses, size) {
    const remainingPitchClasses = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].filter((value) => !pitchClasses.includes(value))
    const combinations = HELPERS.arrayCombinations(remainingPitchClasses, size - pitchClasses.length)
    const chords = []
    for (let combination of combinations) {
      const primeForm = PITCHCLASS.getPrimeForm(pitchClasses.concat(combination))
      const chord = CHORDS.getByPitchClasses(primeForm)
      if (chord) chords.push(chord)
    }
    return chords
  },

  /**
   * Calculates the transpose invariance of a pitch class set.
   *
   * This function returns an array of integers representing the
   * factors by which the pitch class set can be transposed and
   * still result in the same normal form.
   *
   * @param {Array<number>} pitchClasses - The pitch classes to calculate the transpose invariance for.
   * @returns {Array<number>} An array of integers representing the transpose invariance of the pitch class set.
   */
  getTransposeInvariance(pitchClasses) {
    const normalForm = PITCHCLASS.getNormalForm(pitchClasses)
    const factors = []
    for (let factor = 0; factor < 12; factor++) {
      const transposed = PITCHCLASS.getTransposed(normalForm, factor)
      const transposedNormalForm = PITCHCLASS.getNormalForm(transposed)
      if (HELPERS.arraysAreEqual(normalForm, transposedNormalForm)) factors.push(factor)
    }
    return factors
  },

  /**
   * Calculates the invert invariance of a pitch class set.
   *
   * This function returns an array of integers representing the
   * factors by which the pitch class set can be inverted and
   * still result in the same normal form.
   *
   * @param {Array<number>} pitchClasses - The pitch classes to calculate the invert invariance for.
   * @returns {Array<number>} An array of integers representing the invert invariance of the pitch class set.
   */
  getInvertInvariance(pitchClasses) {
    const normalForm = PITCHCLASS.getNormalForm(pitchClasses)
    const factors = []
    for (let factor = 0; factor < 12; factor++) {
      const inverted = PITCHCLASS.getInverted(normalForm, factor)
      const invertedNormalForm = PITCHCLASS.getNormalForm(inverted)
      if (HELPERS.arraysAreEqual(normalForm, invertedNormalForm)) factors.push(factor)
    }
    return factors
  }
}

const HELPERS = {
  calculateInterval(pitchClass1, pitchClass2) {
    return HELPERS.mod12(pitchClass2 - pitchClass1)
  },
  calculateOuterInterval(pitchClasses) {
    return HELPERS.calculateInterval(pitchClasses[0], pitchClasses[pitchClasses.length - 1])
  },
  calculateMinimumInterval(pitchClass1, pitchClass2) {
    return Math.min(HELPERS.calculateInterval(pitchClass1, pitchClass2), HELPERS.calculateInterval(pitchClass2, pitchClass1))
  },
  mod12(n) {
    return ((n % 12) + 12) % 12
  },
  formatWithBrackets(pitchClasses, replaceLetters = false) {
    let pitchClassesString = pitchClasses.join(', ')
    if (replaceLetters) pitchClassesString = pitchClassesString.replace('10', 't').replace('11', 'e')
    return '[' + pitchClassesString + ']'
  },

  formatWithSpaces(pitchClasses, replaceLetters = false) {
    let pitchClassesString = pitchClasses.join(' ')
    if (replaceLetters) pitchClassesString = pitchClassesString.replace('10', 't').replace('11', 'e')
    return pitchClassesString
  },

  formatWithAngleBrackets(pitchClasses, replaceLetters = false) {
    let pitchClassesString = pitchClasses.join('')
    if (replaceLetters) pitchClassesString = pitchClassesString.replace('10', 't').replace('11', 'e')
    return '<' + pitchClassesString + '>'
  },

  formatICVectorTables(icVector) {
    const intervalsNames = ['2♭ | 7    ', '2   | 7♭  ', '3♭ | 6    ', '3   | 6♭  ', '4   | 5    ', '4♯ | 5♭   ']
    const strings = []
    for (let i = 0; i < icVector.length; i++) {
      strings.push(`${intervalsNames[i]} = ${icVector[i]}`)
    }
    return strings.join('\n')
  },

  formatSubOrSupersets(chords) {
    const forteCodes = {}
    chords = chords.sort((a, b) => a['forte-code'] - b['forte-code'])
    for (let chord of chords) {
      const forteCode = chord['forte-code']
      if (forteCodes[forteCode]) forteCodes[forteCode]++
      else forteCodes[forteCode] = 1
    }

    const forteStrings = []
    for (let [forteCode, count] of Object.entries(forteCodes)) {
      forteStrings.push(`${forteCode}: ${count}`)
    }

    const resultString = forteStrings.join('<br>')
    return resultString
  },

  arraysAreEqual(array1, array2) {
    if (array1.length !== array2.length) return false
    const counts1 = {}
    for (let element of array1) {
      if (counts1[element]) counts1[element]++
      else counts1[element] = 1
    }
    const counts2 = {}
    for (let element of array2) {
      if (counts2[element]) counts2[element]++
      else counts2[element] = 1
    }
    for (let [key, value] of Object.entries(counts1)) {
      if (counts2[key] !== value) return false
    }
    return true
  },

  arrayCombinations(array, size) {
    const combinations = []

    function buildCompination(currentCombination, startIndex) {
      if (currentCombination.length === size) {
        combinations.push(currentCombination.slice())
        return
      }
      for (let i = startIndex; i < array.length; i++) {
        currentCombination.push(array[i])
        buildCompination(currentCombination, i + 1)
        currentCombination.pop()
      }
    }

    buildCompination([], 0)
    return combinations
  }
}

function onPageModeButtonClicked(event) {
  let button = event.target
  if (button.textContent === 'Full') {
    toogleFullPageMode(true)
  } else {
    toogleFullPageMode(false)
  }
}

/**
 * Handles the click event on a pitch class checkbox, piano key or guitar fret.
 * Toggles the selected state of the pitch class in the `DATA.selectedPitchClasses` represented by the clicked element.
 *
 * @param {Event} event - The click event triggered by interacting with a checkbox, or piano key or guitar fret.
 */
function onPitchClassClicked(event) {
  const pitchClass = event.target.dataset.note
  SELECTION.tooglePitchClass(pitchClass)
  audioPlayer.playNote(pitchClass, 4)
  updateUI()
}

function onForteCodeInputChanged(event) {
  const input = event.target
  const forteCode = input.value
  const chord = CHORDS.getByForteCode(forteCode)
  if (!chord) {
    showNotification(`No chord found with Forte code "${forteCode}"`, 3000)
    input.value = ''
  }
  SELECTION.array = chord['pitch-classes']
  updateUI()
}

/**
 * Resets the selected pitch classes by clearing the `DATA.selectedPitchClasses` array and then calls `updateUI` to update the UI elements.
 */
function onResetButtonClicked() {
  SELECTION.array = []
  updateUI()
}

/**
 * Toggles the selected state of all 12 pitch classes in the `DATA.selectedPitchClasses` array and then calls `updateUI` to update the UI elements.
 */
function onComplementButtonClicked() {
  for (let i = 0; i < 12; i++) {
    SELECTION.tooglePitchClass(i)
  }
  updateUI()
}

/**
 * Inverts the selected pitch classes by the amount of zero and then calls `updateUI` to update the UI elements.
 */
function onInvertByZeroButtonClicked() {
  SELECTION.array = PITCHCLASS.getInverted(SELECTION.array, 0)
  updateUI()
}

function onModalButtonClicked(event) {
  const modalButton = event.target
  const modalId = modalButton.getAttribute('for-modal')
  const modal = document.querySelector(`#${modalId}`)
  if (modal) modal.removeAttribute('hidden')
}

function onModalCloseButtonClicked(event) {
  let closeButton = event.target
  let parentElement = closeButton.parentElement
  while (parentElement && !parentElement.classList.contains('modal')) {
    parentElement = parentElement.parentElement
  }
  parentElement.setAttribute('hidden', true)
}

/**
 * Handles the change event on the instrument selector.
 * Toggles the visibility of the piano or guitar display based on the selected instrument.
 *
 * @param {Event} event - The change event triggered by interacting with the instrument selector.
 */
function onInstrumentSelectorChanged(event) {
  const instrument = event.target.value
  if (instrument === 'piano') {
    UI.pianoDiv.removeAttribute('hidden')
    UI.guitarDiv.setAttribute('hidden', true)
  } else if (instrument === 'guitar') {
    UI.guitarDiv.removeAttribute('hidden')
    UI.guitarDiv.removeAttribute('complete-mode')
    UI.pianoDiv.setAttribute('hidden', true)
  } else if (instrument === 'guitar-full') {
    UI.guitarDiv.removeAttribute('hidden')
    UI.guitarDiv.setAttribute('complete-mode', true)
    UI.pianoDiv.setAttribute('hidden', true)
  }
}

/**
 * Handles the input event on the user pitch class input field.
 * Formats the input in the following way:
 * - single digit numbers (0-9) are left as is
 * - two digit numbers (10-11) are followed by a space
 * - single letters (t, T, e, E) are followed by a space
 * - two digit numbers (12-99) are split into individual digits, each followed by a space
 * - any other input is ignored
 * @param {Event} event - The input event triggered by interacting with the user pitch class input field.
 */
function onUserInputChanged(event) {
  if (event.data === ' ') return
  if (event.inputType === 'deleteContentBackward') return
  const inputField = event.target
  let value = inputField.value
  let formattedValue = ''
  let segments = value.split(/\s+/)

  for (let i = 0; i < segments.length; i++) {
    let segment = segments[i]
    if (/^0$/.test(segment)) {
      formattedValue += segment + ' '
    } else if (/^1$/.test(segment)) {
      formattedValue += segment + (i === segments.length - 1 ? '' : ' ')
    } else if (/^[2-9]$/.test(segment)) {
      formattedValue += segment + ' '
    } else if (/^(10|11)$/.test(segment)) {
      formattedValue += segment + ' '
    } else if (/^[tTeE]$/.test(segment)) {
      formattedValue += segment + ' '
    } else if (/^1[0-1]?$/.test(segment)) {
      formattedValue += segment.length === 2 ? segment + ' ' : segment
    } else if (/^(1[2-9]|1[tTeE]|[2-9][0-9])$/.test(segment)) {
      formattedValue += segment.split('').join(' ') + ' '
    } else {
      continue
    }
  }
  inputField.value = formattedValue
}

/**
 * Handles the blur event on the user pitch class input field.
 * Parses the input, removing any spaces and converting single letters (t, T, e, E) to their corresponding integer values.
 * Updates the `SELECTION.array` with the parsed values, and calls `updateUI()` to update the display.
 * @param {Event} event - The blur event triggered by interacting with the user pitch class input field.
 */
function onUserInputBlur(event) {
  const inputField = event.target
  let parsed = inputField.value.split(' ').map((value) => {
    if (/^[0-9]|(10|11)$/.test(value)) {
      return parseInt(value)
    } else if (/^[tTeE]$/.test(value)) {
      return value === 't' ? 10 : 11
    }
  })
  parsed = parsed.filter((value) => value !== undefined)
  parsed = [...new Set(parsed)].sort((a, b) => a - b)
  SELECTION.array = parsed
  updateUI()
}

/**
 * Handles the click event on a readonly element such as a div or input field.
 * Copies the element's text content or value to the clipboard.
 * Displays a notification indicating the copied content, truncated if necessary.
 *
 * @param {Event} event - The click event triggered by interacting with a readonly element.
 */
function onReadonlyElementClicked(event) {
  const element = event.target
  const value = element instanceof HTMLDivElement ? element.textContent : element.value
  if (value === '') return
  copyToClipboard(value)
  const notificationString = `${value}`.length > 20 ? `${value}`.slice(0, 17) + '...' : `${value}`
  showNotification(`Copied "${notificationString}" to clipboard`, 3000)
}

function onMatrixDisplayClicked() {
  const matrixDisplay = UI.matrixDisplay
  const table = matrixDisplay.querySelector('table')
  let tabulatedText = ''
  for (const row of table.rows) {
    const cells = [...row.cells].map((cell) => cell.textContent.trim()) // Extrai o texto das células
    tabulatedText += cells.join('\t') + '\n' // Junta as células com tabulações e adiciona uma nova linha
  }
  copyToClipboard(tabulatedText)
  showNotification('Copied matrix as table to clipboard.', 3000)
}

function onMatrixCellHover(event) {
  const cell = event.target
  if (!cell instanceof HTMLTableCellElement) return
  const colIndex = Array.from(cell.parentElement.children).indexOf(cell)
  UI.matrixDisplay.querySelectorAll('tr td:nth-child(' + (colIndex + 1) + ')').forEach((cell) => {
    cell.classList.add('hover')
  })
  const rowIndex = Array.from(cell.parentElement.parentElement.children).indexOf(cell.parentElement)
  UI.matrixDisplay.querySelectorAll('tr:nth-child(' + (rowIndex + 1) + ') td').forEach((cell) => {
    cell.classList.add('hover')
  })
}

function onMatrixCellHoverOut(event) {
  UI.matrixDisplay.querySelectorAll('td').forEach((cell) => {
    cell.classList.remove('hover')
  })
}

function onPlayForElementClicked(event) {
  const element = event.target
  const forElementId = element.getAttribute('play-for')
  const forElement = document.getElementById(forElementId)
  if (!forElement) return
  const value = forElement.value
  if (value === '') return
  let pitchClasses
  if (value[0] === '[' && value[value.length - 1] === ']') {
    pitchClasses = value
      .slice(1, -1)
      .split(',')
      .map((value) => parseInt(value))
  } else {
    pitchClasses = value
      .replace('t', '10')
      .replace('e', '11')
      .split(' ')
      .map((value) => parseInt(value))
  }
  pitchClasses = pitchClasses.sort((a, b) => a - b)
  for (let i = 0; i < pitchClasses.length; i++) {
    setTimeout(() => {
      audioPlayer.playNote(pitchClasses[i], 4)
    }, i * 500)
    setTimeout(() => {
      audioPlayer.playNote(pitchClasses[i], 4)
    }, 500 * pitchClasses.length + 500 + i * 50)
  }
}

/**
 * Updates the class of all elements with a 'data-note' attribute by adding or removing the 'selected' class, depending on whether the note is in the SELECTION.array.
 * The class is used to style the elements, indicating which notes are currently selected.
 */
function updateDataNotes() {
  const selectedPitchClasses = SELECTION.array
  const dataNotes = document.querySelectorAll('[data-note]')
  for (let dataNote of dataNotes) {
    const selected = selectedPitchClasses.includes(parseInt(dataNote.dataset.note))
    dataNote.classList.toggle('selected', selected)
  }
}

/**
 * Updates the UI to display the number of subsets and supersets of the given
 * size for the currently selected pitch classes.
 */
function updateSubSupersets() {
  const selectedPitchClasses = SELECTION.array
  const urlParams = new URLSearchParams(window.location.search)
  if (UI.subsetSelector.value !== '0') {
    const subsets = PITCHCLASS.getSubsetsChords(selectedPitchClasses, parseInt(UI.subsetSelector.value))
    const subsetsString = HELPERS.formatSubOrSupersets(subsets)
    UI.subsetsDisplay.innerHTML = subsetsString
    urlParams.set('subsets-cardinality', UI.subsetSelector.value)
  } else {
    UI.subsetsDisplay.innerHTML = ''
    urlParams.delete('subsets-cardinality')
  }
  if (UI.supersetSelector.value !== '0') {
    const supersets = PITCHCLASS.getSupersetsChords(selectedPitchClasses, parseInt(UI.supersetSelector.value))
    const supersetsString = HELPERS.formatSubOrSupersets(supersets)
    UI.supersetsDisplay.innerHTML = supersetsString
    urlParams.set('supersets-cardinality', UI.supersetSelector.value)
  } else {
    UI.supersetsDisplay.innerHTML = ''
    urlParams.delete('supersets-cardinality')
  }
  window.history.replaceState({}, '', `${window.location.pathname}?${urlParams.toString()}`)
}

/**
 * Updates the transpose and invert inputs based on the selected pitch classes.
 *
 * If no pitch classes are selected, clears the transpose and invert inputs.
 * Otherwise, transposes and inverts the selected pitch classes according to
 * the values selected in the transpose and invert selectors, respectively,
 * and updates the corresponding UI inputs with the formatted results.
 */
function updateTransposeInvert() {
  const selectedPitchClasses = SELECTION.array
  const urlParams = new URLSearchParams(window.location.search)
  if (selectedPitchClasses.length == 0) {
    UI.transposeInput.value = ''
    UI.invertInput.value = ''
    urlParams.delete('transpose')
    urlParams.delete('invert')
    return
  }
  const transposeSelected = parseInt(UI.transposeSelector.value)
  const transposedPitchClasses = PITCHCLASS.getTransposed(selectedPitchClasses, transposeSelected)
  UI.transposeInput.value = HELPERS.formatWithBrackets(transposedPitchClasses)
  if (transposeSelected !== 0) {
    urlParams.set('transpose', transposeSelected)
  } else {
    urlParams.delete('transpose')
  }

  const invertSelector = parseInt(UI.invertSelector.value)
  const invertedPitchClasses = PITCHCLASS.getInverted(selectedPitchClasses, invertSelector)
  UI.invertInput.value = HELPERS.formatWithBrackets(invertedPitchClasses)
  if (invertSelector !== 0) {
    urlParams.set('invert', invertSelector)
  } else {
    urlParams.delete('invert')
  }
  window.history.replaceState({}, '', `${window.location.pathname}?${urlParams.toString()}`)
}

function updateMatrix() {
  const pitchClasses = SELECTION.array
  const urlParams = new URLSearchParams(window.location.search)
  if (pitchClasses.length === 0) {
    UI.matrixDisplay.innerHTML = '<table><thead><tr><th>&nbsp</th><th>0</th></tr></thead><tbody><tr><th>0</th><th>&nbsp</th></tr></tbody></table>'
    urlParams.delete('matrix')
    return
  }
  const matrixType = UI.matrixSelector.value
  if (matrixType !== 'none') {
    urlParams.set('matrix', matrixType)
  } else {
    urlParams.delete('matrix')
  }
  window.history.replaceState({}, '', `${window.location.pathname}?${urlParams.toString()}`)
  const xAxisNormalForm = PITCHCLASS.getNormalForm(pitchClasses)
  const yAxis = matrixType === 't' || matrixType === 'i' || matrixType === 'none' ? xAxisNormalForm : PITCHCLASS.getInverted(xAxisNormalForm, 0)

  const table = document.createElement('table')
  const thead = document.createElement('thead')
  table.appendChild(thead)
  const tbody = document.createElement('tbody')
  table.appendChild(tbody)
  const header = document.createElement('tr')
  thead.appendChild(header)
  const operationCell = document.createElement('th')
  header.appendChild(operationCell)

  for (let y = 0; y < yAxis.length; y++) {
    const yValue = yAxis[y]
    const row = document.createElement('tr')
    tbody.appendChild(row)
    const rowHeader = document.createElement('th')
    rowHeader.textContent = yValue
    row.appendChild(rowHeader)
    for (let x = 0; x < xAxisNormalForm.length; x++) {
      const xValue = xAxisNormalForm[x]
      if (y === 0) {
        const colHeader = document.createElement('th')
        colHeader.textContent = xValue
        header.appendChild(colHeader)
      }
      const cell = document.createElement('td')
      let cellCalc
      if (matrixType === 'none') {
        cellCalc = ''
      } else if (matrixType === 't' || matrixType === 't-invert') {
        cellCalc = HELPERS.mod12(xValue - yValue)
        operationCell.textContent = '-'
      } else {
        cellCalc = HELPERS.mod12(xValue + yValue)
        operationCell.textContent = '+'
      }
      cell.textContent = cellCalc
      row.appendChild(cell)
    }
  }

  UI.matrixDisplay.innerHTML = ''
  UI.matrixDisplay.appendChild(table)
}

async function updateUI() {
  updateDataNotes()
  const selectedPitchClasses = SELECTION.array
  const urlParams = new URLSearchParams(window.location.search)

  if (selectedPitchClasses.length == 0) {
    urlParams.delete('pitch-classes')
    window.history.replaceState({}, '', `${window.location.pathname}?${urlParams.toString()}`)
    UI.userPitchClassSetInput.value = ''
    UI.cardinalityInput.value = ''
    UI.forteCodeInput.value = ''
    UI.normalFormInput.value = ''
    UI.primeFormInput.value = ''
    UI.icVectorInput.value = ''
    UI.icVectorInput.title = ''
    UI.zMateInput.value = ''
    UI.solomonCodeInput.value = ''

    Array.from(UI.subsetSelector.options).forEach((option) => {
      option.value === '0' ? option.removeAttribute('hidden') : option.setAttribute('hidden', true)
    })
    UI.subsetSelector.value = '0'
    urlParams.delete('subsets-cardinality')

    Array.from(UI.supersetSelector.options).forEach((option) => {
      option.value === '0' ? option.removeAttribute('hidden') : option.setAttribute('hidden', true)
    })
    UI.supersetSelector.value = '0'
    urlParams.delete('supersets-cardinality')

    UI.transposeInvarianceInput.value = ''
    UI.invertInvarianceInput.value = ''
  } else {
    urlParams.set('pitch-classes', selectedPitchClasses.join('-'))
    window.history.replaceState({}, '', `${window.location.pathname}?${urlParams.toString()}`)
    const cardinality = selectedPitchClasses.length
    const normalForm = PITCHCLASS.getNormalForm(selectedPitchClasses)
    const primeForm = PITCHCLASS.getPrimeForm(selectedPitchClasses)
    const forteChord = CHORDS.getByPitchClasses(primeForm)
    const icVector = PITCHCLASS.getIntervalVector(selectedPitchClasses)
    const zMate = PITCHCLASS.getZMate(selectedPitchClasses)
    const solomonChord = PITCHCLASS.getSolomonChord(selectedPitchClasses)
    const transposeInvariance = PITCHCLASS.getTransposeInvariance(selectedPitchClasses)
    const invertInvariance = PITCHCLASS.getInvertInvariance(selectedPitchClasses)

    UI.userPitchClassSetInput.value = HELPERS.formatWithSpaces(selectedPitchClasses, true)
    UI.cardinalityInput.value = CARDINALITIES[cardinality]
    UI.forteCodeInput.value = forteChord ? forteChord['forte-code'] : 'No forte'
    UI.normalFormInput.value = HELPERS.formatWithBrackets(normalForm)
    UI.primeFormInput.value = HELPERS.formatWithBrackets(primeForm)
    UI.icVectorInput.value = HELPERS.formatWithAngleBrackets(icVector)
    UI.icVectorInput.title = 'Click to copy\n\n' + HELPERS.formatICVectorTables(icVector)
    UI.zMateInput.value = zMate ?? 'No z-mate'
    const solomonCode = solomonChord ? solomonChord['forte-code'] : null
    UI.solomonCodeInput.value = solomonCode ?? 'No solomon code'
    UI.solomonNameInput.value = solomonChord ? solomonChord['name'] ?? 'No solomon name' : 'No solomon name'
    UI.solomonNameInput.title = UI.solomonNameInput.value

    if (solomonChord && solomonChord['documentation-link']) {
      UI.solomonPDFButton.setAttribute('onclick', `window.open('${solomonChord['documentation-link']}', '_blank')`)
      UI.solomonPDFButton.removeAttribute('disabled-like')
    } else {
      UI.solomonPDFButton.setAttribute('onclick', "showNotification('No documentation available for this Solomon code.')")
      UI.solomonPDFButton.setAttribute('disabled-like', true)
    }

    if (solomonCode) {
      const audioUrl = `audios/${solomonCode}.mp3`
      UI.solomonAudioButton.setAttribute('disabled-like', true)
      if (await isValidUrl(audioUrl)) {
        UI.solomonAudioButton.setAttribute('onclick', `playAudio('${audioUrl}')`)
        UI.solomonAudioButton.removeAttribute('disabled-like')
      } else {
        UI.solomonAudioButton.setAttribute('onclick', "showNotification('No audio available for this Solomon code.')")
        UI.solomonAudioButton.setAttribute('disabled-like', true)
      }
    }

    Array.from(UI.subsetSelector.options).forEach((option) => {
      if (option.value < cardinality) option.removeAttribute('hidden')
      else option.setAttribute('hidden', true)
    })
    if (parseInt(UI.subsetSelector.value) >= cardinality) UI.subsetSelector.value = cardinality - 1 === 1 ? 0 : cardinality - 1

    Array.from(UI.supersetSelector.options).forEach((option) => {
      if (option.value > cardinality || option.value === '0') option.removeAttribute('hidden')
      else option.setAttribute('hidden', true)
    })
    if (parseInt(UI.supersetSelector.value) <= cardinality && UI.supersetSelector.value !== '0') UI.supersetSelector.value = cardinality + 1

    UI.transposeInvarianceInput.value = transposeInvariance.join(', ')
    UI.invertInvarianceInput.value = invertInvariance.join(', ')
  }
  updateSubSupersets()
  updateTransposeInvert()
  updateMatrix()
}

const notifications = []

function showNotification(message, duration = 3000) {
  const notificationDiv = document.createElement('div')
  notificationDiv.classList.add('notification')
  notificationDiv.textContent = message
  notificationDiv.style.position = 'fixed'
  notificationDiv.style.top = `${notifications.length * 50 + 10}px`
  notificationDiv.style.right = '10px'
  notificationDiv.style.width = 'fit-content'
  notificationDiv.style.textAlign = 'center'

  document.body.appendChild(notificationDiv)
  notifications.push(notificationDiv)

  setTimeout(() => {
    document.body.removeChild(notificationDiv)
    notifications.splice(notifications.indexOf(notificationDiv), 1)
    for (let index = 0; index < notifications.length; index++) {
      const notification = notifications[index]
      notification.style.top = `${index * 50 + 10}px`
    }
  }, duration)
}

function playAudio(audioUrl) {
  const audio = new Audio(audioUrl)
  audio
    .play()
    .then(() => showNotification('Audio is playing', 3000))
    .catch((error) => showNotification(`Audio playback failed: ${error}`, 3000))
}

async function isValidUrl(url) {
  try {
    const response = await fetch(url)
    return response.ok
  } catch (error) {
    return false
  }
}

function copyToClipboard(text) {
  const textArea = document.createElement('textarea')
  textArea.value = text
  document.body.appendChild(textArea)
  textArea.select()
  document.execCommand('copy')
  document.body.removeChild(textArea)
}

function toogleFullPageMode(fullPageEnabled = true) {
  const modeElements = [
    UI.forteCodeInput.parentElement,
    UI.normalFormInput.parentElement,
    UI.zMateInput.parentElement,
    document.querySelector('#sub-super-sets'),
    document.querySelector('#analysis-matrix'),
    document.querySelector('#analysis-transpose-invert')
  ]
  const urlParams = new URLSearchParams(window.location.search)
  if (!fullPageEnabled) {
    urlParams.delete('full-mode')
    UI.pageModeButton.textContent = 'Full'
    for (const modeElement of modeElements) {
      modeElement.setAttribute('hidden', true)
    }
  } else {
    urlParams.set('full-mode', 'true')
    UI.pageModeButton.textContent = 'Lite'
    for (const element of modeElements) {
      element.removeAttribute('hidden')
    }
  }
  window.history.replaceState({}, '', `${window.location.pathname}?${urlParams.toString()}`)
}