/**
 * @typedef {Object} Chord
 * @property {string} forte-code - The forte code of the chord.
 * @property {Array.<Number>} pitch-classes - An array of pitch classes that the chord is comprised of.
 * @property {string} name - The name of the chord.
 * @property {string | null} carter-number - The Carter number of the chord.
 * @property {string | null} complement-forte-code - The forte code of the complement of the chord.
 * @property {string | null} documentation-link - A link to the documentation for the chord.
 */

const CHORDS = {
  /** @type {Chord[]} */
  data: [
    {
      'forte-code': '3-1',
      'pitch-classes': [0, 1, 2],
      'name': 'Chromatic tricord',
      'carter-number': '4',
      'complement-forte-code': '9-1',
      'documentation-link': 'https://drive.google.com/file/d/1VF9ZlCfnjY--pqIb-k0shD4WZrkOXNAH/view?usp=drive_link'
    },
    {
      'forte-code': '3-2',
      'pitch-classes': [0, 1, 3],
      'name': 'Phrygian triad',
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '3-2A',
      'pitch-classes': [0, 1, 3],
      'name': null,
      'carter-number': '12',
      'complement-forte-code': '9-2B',
      'documentation-link': null
    },
    {
      'forte-code': '3-2B',
      'pitch-classes': [0, 2, 3],
      'name': 'Minor tricord',
      'carter-number': null,
      'complement-forte-code': '9-2A',
      'documentation-link': null
    },
    {
      'forte-code': '3-3',
      'pitch-classes': [0, 1, 4],
      'name': 'mMaj7(no5) - (Major/minor triad n1)',
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': 'https://drive.google.com/file/d/1mt0iooczHY7eGaUSPCR245dbKuvyL4ZP/view?usp=drive_link'
    },
    {
      'forte-code': '3-3A',
      'pitch-classes': [0, 1, 4],
      'name': null,
      'carter-number': '11',
      'complement-forte-code': '9-3B',
      'documentation-link': null
    },
    {
      'forte-code': '3-3B',
      'pitch-classes': [0, 3, 4],
      'name': ' Major/minor triad n2 ',
      'carter-number': null,
      'complement-forte-code': '9-3A',
      'documentation-link': null
    },
    {
      'forte-code': '3-4',
      'pitch-classes': [0, 1, 5],
      'name': 'Maj7(no5) - incomplete Maj7 n1',
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': 'https://drive.google.com/file/d/11G26XcGI1vDzvukLQiA6C4wiz5LbZnQH/view?usp=drive_link'
    },
    {
      'forte-code': '3-4A',
      'pitch-classes': [0, 1, 5],
      'name': null,
      'carter-number': '9',
      'complement-forte-code': '9-4B',
      'documentation-link': null
    },
    {
      'forte-code': '3-4B',
      'pitch-classes': [0, 4, 5],
      'name': 'Maj7(no3) - incomplete Maj7 n2',
      'carter-number': null,
      'complement-forte-code': '9-4A',
      'documentation-link': null
    },
    {
      'forte-code': '3-5',
      'pitch-classes': [0, 1, 6],
      'name': 'Fourth/Tritone triad - Rite n1 - Lydian triad',
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': 'https://drive.google.com/file/d/1y5sfPFCGkDWUiXiV9jFyLZbNBdFaFU2z/view?usp=drive_link'
    },
    {
      'forte-code': '3-5A',
      'pitch-classes': [0, 1, 6],
      'name': null,
      'carter-number': '7',
      'complement-forte-code': '9-5B',
      'documentation-link': null
    },
    {
      'forte-code': '3-5B',
      'pitch-classes': [0, 5, 6],
      'name': 'Tritone/Fourth triad - Rite n2 - Phrygian triad n2',
      'carter-number': null,
      'complement-forte-code': '9-5A',
      'documentation-link': 'https://drive.google.com/file/d/1jFrR8JjTuGHKMKzampx9P2ZHxWSbo8YQ/view?usp=drive_link'
    },
    {
      'forte-code': '3-6',
      'pitch-classes': [0, 2, 4],
      'name': 'Tonal triad',
      'carter-number': '3',
      'complement-forte-code': '9-6',
      'documentation-link': 'https://drive.google.com/file/d/1jhF-ioYnp7Ux7xYxhTxH0hACVEqmwume/view?usp=drive_link'
    },
    {
      'forte-code': '3-7',
      'pitch-classes': [0, 2, 5],
      'name': 'm7(no5) - Incomplete minor seventh',
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': 'https://drive.google.com/file/d/1Gj7n9HHUye9521BDmABnqwhdfbXwiE4V/view?usp=drive_link'
    },
    {
      'forte-code': '3-7A',
      'pitch-classes': [0, 2, 5],
      'name': null,
      'carter-number': '10',
      'complement-forte-code': '9-7B',
      'documentation-link': null
    },
    {
      'forte-code': '3-7B',
      'pitch-classes': [0, 3, 5],
      'name': '7(no3) - Incomplete dominant triad n1',
      'carter-number': null,
      'complement-forte-code': '9-7A',
      'documentation-link': 'https://drive.google.com/file/d/1Ss6UMiJsLbJUxkkkma8umnPKuBs0svcT/view?usp=drive_link'
    },
    {
      'forte-code': '3-8',
      'pitch-classes': [0, 2, 6],
      'name': '7(no5) - Incomplete dominant triad n2',
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': 'https://drive.google.com/file/d/1Ld9ltyWInviSO52W_xjXuD51vGddJMUN/view?usp=drive_link'
    },
    {
      'forte-code': '3-8A',
      'pitch-classes': [0, 2, 6],
      'name': null,
      'carter-number': '8',
      'complement-forte-code': '9-8B',
      'documentation-link': null
    },
    {
      'forte-code': '3-8B',
      'pitch-classes': [0, 4, 6],
      'name': '5b triad - 1 3 5b ',
      'carter-number': null,
      'complement-forte-code': '9-8A',
      'documentation-link': 'https://drive.google.com/file/d/1bHV3UnYhdheC31krMxcdjwD8imdNGQAY/view?usp=drive_link'
    },
    {
      'forte-code': '3-9',
      'pitch-classes': [0, 2, 7],
      'name': 'Cuartal triad',
      'carter-number': '5',
      'complement-forte-code': '9-9',
      'documentation-link': 'https://drive.google.com/file/d/1_yVMuQMVDMGIFRVZ7cqPxupL07FRBdrq/view?usp=drive_link'
    },
    {
      'forte-code': '3-10',
      'pitch-classes': [0, 3, 6],
      'name': 'Diminished triad - m6(no5)',
      'carter-number': '2',
      'complement-forte-code': '9-10',
      'documentation-link': 'https://drive.google.com/file/d/1YSoV--g83b9eGJn2TuHXvfVFSyeYm4OA/view?usp=drive_link'
    },
    {
      'forte-code': '3-11',
      'pitch-classes': [0, 3, 7],
      'name': ' Minor triad - 6(no5)',
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': 'https://drive.google.com/file/d/1rxkvSrXy8PUCd7TXnGJaB6V4xx_5MQx4/view?usp=drive_link'
    },
    {
      'forte-code': '3-11A',
      'pitch-classes': [0, 3, 7],
      'name': null,
      'carter-number': '6',
      'complement-forte-code': '9-11B',
      'documentation-link': null
    },
    {
      'forte-code': '3-11B',
      'pitch-classes': [0, 4, 7],
      'name': 'Major triad - m6(no5)',
      'carter-number': null,
      'complement-forte-code': '9-11A',
      'documentation-link': 'https://drive.google.com/file/d/19B0wNReMW1-5h_3q157HNu0KQoqer4dd/view?usp=drive_link'
    },
    {
      'forte-code': '3-12',
      'pitch-classes': [0, 4, 8],
      'name': 'Augmented triad',
      'carter-number': '1',
      'complement-forte-code': '9-12',
      'documentation-link': 'https://drive.google.com/file/d/1KgWtxQV8QI-rm9xEFGrvHFpcG4v2-L37/view?usp=drive_link'
    },
    {
      'forte-code': '3-12B',
      'pitch-classes': [0, 4, 8],
      'name': 'Augmented triad',
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': 'https://drive.google.com/file/d/1KgWtxQV8QI-rm9xEFGrvHFpcG4v2-L37/view?usp=drive_link'
    },
    {
      'forte-code': '4-1',
      'pitch-classes': [0, 1, 2, 3],
      'name': 'Chromatic tetrachord - X Cell',
      'carter-number': '1',
      'complement-forte-code': '8-1',
      'documentation-link': 'https://drive.google.com/file/d/1wlBcPDZJ5ci4KyflLdxDCHMy6vm2d-bR/view?usp=drive_link'
    },
    {
      'forte-code': '4-2',
      'pitch-classes': [0, 1, 2, 4],
      'name': 'Major second tetracluster no2',
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '4-2A',
      'pitch-classes': [0, 1, 2, 4],
      'name': null,
      'carter-number': '17',
      'complement-forte-code': '8-2B',
      'documentation-link': null
    },
    {
      'forte-code': '4-2B',
      'pitch-classes': [0, 2, 3, 4],
      'name': 'Major second tetracluster no1',
      'carter-number': null,
      'complement-forte-code': '8-2A',
      'documentation-link': null
    },
    {
      'forte-code': '4-3',
      'pitch-classes': [0, 1, 3, 4],
      'name': 'mMaj9(no5) - Alternating tetrachord',
      'carter-number': '9',
      'complement-forte-code': '8-3',
      'documentation-link': 'https://drive.google.com/file/d/1nkPmyWMbuu1TvBF0OKWHcCcw5YXTqgYJ/view?usp=drive_link'
    },
    {
      'forte-code': '4-4',
      'pitch-classes': [0, 1, 2, 5],
      'name': 'Minor third tetracluster no2 - 1 2b 3 7',
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': 'https://drive.google.com/file/d/1-00E3mRvMsKRT3euDNbOI-XNzQUGra--/view?usp=drive_link'
    },
    {
      'forte-code': '4-4A',
      'pitch-classes': [0, 1, 2, 5],
      'name': null,
      'carter-number': '20',
      'complement-forte-code': '8-4B',
      'documentation-link': null
    },
    {
      'forte-code': '4-4B',
      'pitch-classes': [0, 3, 4, 5],
      'name': 'Minor third tetracluster no1',
      'carter-number': null,
      'complement-forte-code': '8-4A',
      'documentation-link': null
    },
    {
      'forte-code': '4-5',
      'pitch-classes': [0, 1, 2, 6],
      'name': 'Major third tetracluster n2 - 1 2b 5 7',
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': 'https://drive.google.com/file/d/12WC3EZsdWl3tpmDCsRhEFTYvSlzwo__c/view?usp=drive_link'
    },
    {
      'forte-code': '4-5A',
      'pitch-classes': [0, 1, 2, 6],
      'name': null,
      'carter-number': '22',
      'complement-forte-code': '8-5B',
      'documentation-link': null
    },
    {
      'forte-code': '4-5B',
      'pitch-classes': [0, 4, 5, 6],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '8-5A',
      'documentation-link': null
    },
    {
      'forte-code': '4-6',
      'pitch-classes': [0, 1, 2, 7],
      'name': 'Perfect fourth tetrachord',
      'carter-number': '6',
      'complement-forte-code': '8-6',
      'documentation-link': null
    },
    {
      'forte-code': '4-7',
      'pitch-classes': [0, 1, 4, 5],
      'name': 'Arab tetrachord - 1 2# 3 7',
      'carter-number': '8',
      'complement-forte-code': '8-7',
      'documentation-link': 'https://drive.google.com/file/d/1ZuJwArdTyzSDMAtdIqwO91dmyBqAUIfP/view?usp=drive_link'
    },
    {
      'forte-code': '4-8',
      'pitch-classes': [0, 1, 5, 6],
      'name': 'Double fourth tetrachord - 1 4# 5 7',
      'carter-number': '10',
      'complement-forte-code': '8-8',
      'documentation-link': 'https://drive.google.com/file/d/1Gwd7rKv25qYGT-K8hfKr44MjsxxLKSVS/view?usp=drive_link'
    },
    {
      'forte-code': '4-9',
      'pitch-classes': [0, 1, 6, 7],
      'name': 'Double tritone tetrachord',
      'carter-number': '2',
      'complement-forte-code': '8-9',
      'documentation-link': 'https://drive.google.com/file/d/1cEs98yxFmAw66WaC9GULTR5PfkEppEgr/view?usp=drive_link'
    },
    {
      'forte-code': '4-10',
      'pitch-classes': [0, 2, 3, 5],
      'name': 'Minor tetrachord (Dorian)',
      'carter-number': '3',
      'complement-forte-code': '8-10',
      'documentation-link': null
    },
    {
      'forte-code': '4-11',
      'pitch-classes': [0, 1, 3, 5],
      'name': 'Maj9(no5) - Phrygian tetrachord',
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': 'https://drive.google.com/file/d/1DPvJgg106f2LrGzX2X6sr2YxvliLzsYS/view?usp=drive_link'
    },
    {
      'forte-code': '4-11A',
      'pitch-classes': [0, 1, 3, 5],
      'name': null,
      'carter-number': '26',
      'complement-forte-code': '8-11B',
      'documentation-link': null
    },
    {
      'forte-code': '4-11B',
      'pitch-classes': [0, 2, 4, 5],
      'name': 'm9(no5) - Major tetrachord - Ionian tetrachord',
      'carter-number': null,
      'complement-forte-code': '8-11A',
      'documentation-link': 'https://drive.google.com/file/d/1Par1hjp12OE705FJexzxViMvmPumrgT5/view?usp=drive_link'
    },
    {
      'forte-code': '4-12',
      'pitch-classes': [0, 2, 3, 6],
      'name': '7(9b no5) - mMaj6(no5) - Minor Harmonic tetrachord',
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': 'https://drive.google.com/file/d/15Y5NtFR4_zp_uTB8awzk0HkJqS3ExiXz/view?usp=drive_link'
    },
    {
      'forte-code': '4-12A',
      'pitch-classes': [0, 2, 3, 6],
      'name': null,
      'carter-number': '28',
      'complement-forte-code': '8-12A',
      'documentation-link': null
    },
    {
      'forte-code': '4-12B',
      'pitch-classes': [0, 3, 4, 6],
      'name': 'Diminished major third tetrachord - 1 2b 3b 6',
      'carter-number': null,
      'complement-forte-code': '8-12B',
      'documentation-link': 'https://drive.google.com/file/d/192029FjmwF8DrkPUCLLt4KHM8X31F0eA/view?usp=drive_link'
    },
    {
      'forte-code': '4-13',
      'pitch-classes': [0, 1, 3, 6],
      'name': 'Diminish 9b tetrachord - 1 2 3b 6',
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': 'https://drive.google.com/file/d/1zqTXP2Ofl3ft3GVmi30DWuby0Y1v4NCg/view?usp=drive_link'
    },
    {
      'forte-code': '4-13A',
      'pitch-classes': [0, 1, 3, 6],
      'name': null,
      'carter-number': '7',
      'complement-forte-code': '8-13B',
      'documentation-link': null
    },
    {
      'forte-code': '4-13B',
      'pitch-classes': [0, 3, 5, 6],
      'name': 'Diminish perfect fourth tetrachord - 1 2 3b 6',
      'carter-number': null,
      'complement-forte-code': '8-13A',
      'documentation-link': 'https://drive.google.com/file/d/1fd_G1dP6B9-xIUm2ZP_odlq2Rtz-WeaC/view?usp=drive_link'
    },
    {
      'forte-code': '4-14',
      'pitch-classes': [0, 2, 3, 7],
      'name': 'm9(no7) - Maj6(no5) - Minor second major tetrachord - Bbm/C ',
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': 'https://drive.google.com/file/d/1XptitRDhQCnGIAZAa4_8AI8X1_KuIHWm/view?usp=drive_link'
    },
    {
      'forte-code': '4-14A',
      'pitch-classes': [0, 2, 3, 7],
      'name': null,
      'carter-number': '25',
      'complement-forte-code': '8-14A',
      'documentation-link': null
    },
    {
      'forte-code': '4-14B',
      'pitch-classes': [0, 4, 5, 7],
      'name': 'Major perfect fourth tetrachord - 1 2 5 7 - G/C ',
      'carter-number': null,
      'complement-forte-code': '8-14B',
      'documentation-link': 'https://drive.google.com/file/d/1IdLLelAdqGUvlIUpozfyCynHvC7_npnm/view?usp=drive_link'
    },
    {
      'forte-code': '4-16',
      'pitch-classes': [0, 1, 5, 7],
      'name': 'Maj(4# no5) - Minor second Cuartal tetrachord',
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': 'https://drive.google.com/file/d/1DpqCV9KUmLbonWR_ieaXiePDLkaSc0GZ/view?usp=drive_link'
    },
    {
      'forte-code': '4-16A',
      'pitch-classes': [0, 1, 5, 7],
      'name': null,
      'carter-number': '19',
      'complement-forte-code': '8-16B',
      'documentation-link': null
    },
    {
      'forte-code': '4-16B',
      'pitch-classes': [0, 2, 6, 7],
      'name': '7(4 no5) - Cuartal tritone tetrachord',
      'carter-number': null,
      'complement-forte-code': '8-16A',
      'documentation-link': 'https://drive.google.com/file/d/1WHlYxdWF01w0PRs-OCJTvYUEI0Bzfu0g/view?usp=drive_link'
    },
    {
      'forte-code': '4-17',
      'pitch-classes': [0, 3, 4, 7],
      'name': 'Bitonal - Major/Minor tetrachord - 1 3b 3 5 - A/C - Abm/C',
      'carter-number': '13',
      'complement-forte-code': '8-17',
      'documentation-link': 'https://drive.google.com/file/d/1WpV2g-DfCuGPdkXz6869qdWzMhoGtP4k/view?usp=drive_link'
    },
    {
      'forte-code': '4-18',
      'pitch-classes': [0, 1, 4, 7],
      'name': 'Dim Maj7 - Major diminish tetrachord - B/C',
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': 'https://drive.google.com/file/d/1EnPOrZZD7DKV8-u1jwu5E3SSZwh9pdqc/view?usp=drive_link'
    },
    {
      'forte-code': '4-18A',
      'pitch-classes': [0, 1, 4, 7],
      'name': null,
      'carter-number': '21',
      'complement-forte-code': '8-18B',
      'documentation-link': null
    },
    {
      'forte-code': '4-18B',
      'pitch-classes': [0, 3, 6, 7],
      'name': 'Minor diminish tetrachord - F#m/C',
      'carter-number': null,
      'complement-forte-code': '8-18A',
      'documentation-link': 'https://drive.google.com/file/d/1XfHvEqVF8XYwd3Yw6JqIsiEN9zoo8Vlu/view?usp=drive_link'
    },
    {
      'forte-code': '4-19',
      'pitch-classes': [0, 1, 4, 8],
      'name': 'mMaj9 - minor augmented tretrachord Dbm/C',
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': 'https://drive.google.com/file/d/11-R4y-tuTzsi0-WRzv0kktWvqB4i12E2/view?usp=drive_link'
    },
    {
      'forte-code': '4-19A',
      'pitch-classes': [0, 1, 4, 8],
      'name': null,
      'carter-number': '24',
      'complement-forte-code': '8-19B',
      'documentation-link': null
    },
    {
      'forte-code': '4-19B',
      'pitch-classes': [0, 3, 4, 8],
      'name': 'Maj+ - Major augmented tetrachord - E/C',
      'carter-number': null,
      'complement-forte-code': '8-19A',
      'documentation-link': 'https://drive.google.com/file/d/1r7N2AbQZkw2-Apn5zEmfOlvZCWGhcJ8b/view?usp=drive_link'
    },
    {
      'forte-code': '4-20',
      'pitch-classes': [0, 1, 5, 8],
      'name': 'Maj - Major seventh chord - Db/C - Em/C',
      'carter-number': '15',
      'complement-forte-code': '8-20',
      'documentation-link': 'https://drive.google.com/file/d/1jPZDxrHisJOxX4Wjw7uo3ZPFo4gfOa5q/view?usp=drive_link'
    },
    {
      'forte-code': '4-21',
      'pitch-classes': [0, 2, 4, 6],
      'name': '7(9 no5) - Tonal tetrachord - Lydian tetrachord',
      'carter-number': '11',
      'complement-forte-code': '8-21',
      'documentation-link': 'https://drive.google.com/file/d/1h5Stu5bz1ByFh6GwUqu_5Q6qTgqf4WvR/view?usp=drive_link'
    },
    {
      'forte-code': '4-22',
      'pitch-classes': [0, 2, 4, 7],
      'name': 'Major 9 - 1 2 3 5 - Coltrane major pattern - Bb/C',
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': 'https://drive.google.com/file/d/1N-RNu5-JtII7v8FYzIBGskqNBteecZqR/view?usp=drive_link'
    },
    {
      'forte-code': '4-22A',
      'pitch-classes': [0, 2, 4, 7],
      'name': null,
      'carter-number': '27',
      'complement-forte-code': '8-22B',
      'documentation-link': null
    },
    {
      'forte-code': '4-22B',
      'pitch-classes': [0, 3, 5, 7],
      'name': 'Perfect fourth minor tetrachord - Minor 11 - Gm/C',
      'carter-number': null,
      'complement-forte-code': '8-22A',
      'documentation-link': 'https://drive.google.com/file/d/1AoYypZbkXik3hjh9WXn6cLUXN6IWK8DV/view?usp=drive_link'
    },
    {
      'forte-code': '4-23',
      'pitch-classes': [0, 2, 5, 7],
      'name': 'Cuartal tetrachord - m7(11 no5) - 7 Sus4',
      'carter-number': '4',
      'complement-forte-code': '8-23',
      'documentation-link': 'https://drive.google.com/file/d/1vKDVjEOmvmsJT10yK8-YvxGAZxWlxvOl/view?usp=drive_link'
    },
    {
      'forte-code': '4-24',
      'pitch-classes': [0, 2, 4, 8],
      'name': 'Augmented seventh chord - 7+',
      'carter-number': '16',
      'complement-forte-code': '8-24',
      'documentation-link': 'https://drive.google.com/file/d/1jlAXCFySTXtbklnlh0f0Zct6qStHCc6h/view?usp=drive_link'
    },
    {
      'forte-code': '4-25',
      'pitch-classes': [0, 2, 6, 8],
      'name': '7(5b) - C7(no5) + F#7(no5) - French sixth chord',
      'carter-number': '12',
      'complement-forte-code': '8-25',
      'documentation-link': 'https://drive.google.com/file/d/1WxhEDXAQG3sGnjYcgDfR7t1xU01uUQ82/view?usp=drive_link'
    },
    {
      'forte-code': '4-26',
      'pitch-classes': [0, 3, 5, 8],
      'name': 'Minor seventh chord - m7 - Eb/C - Dm/C',
      'carter-number': '14',
      'complement-forte-code': '8-26',
      'documentation-link': 'https://drive.google.com/file/d/1yYPahaFH_L5xp--s-b1eBpC5B-ZmrOVv/view?usp=drive_link'
    },
    {
      'forte-code': '4-27',
      'pitch-classes': [0, 2, 5, 8],
      'name': 'Half diminished chord - m7(5b) - Ebm/C',
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': 'https://drive.google.com/file/d/12nQ8qRlnHVVxt6b72qdit-vqic_cVtU9/view?usp=drive_link'
    },
    {
      'forte-code': '4-27A',
      'pitch-classes': [0, 2, 5, 8],
      'name': null,
      'carter-number': '29',
      'complement-forte-code': '8-27B',
      'documentation-link': null
    },
    {
      'forte-code': '4-27B',
      'pitch-classes': [0, 3, 6, 8],
      'name': 'Seventh chord - D/C - German sixth',
      'carter-number': null,
      'complement-forte-code': '8-27A',
      'documentation-link': 'https://drive.google.com/file/d/1EBpEAJcf7UnZoFpL2jRJuA1sL2-e0gxl/view?usp=drive_link'
    },
    {
      'forte-code': '4-28',
      'pitch-classes': [0, 3, 6, 9],
      'name': 'Diminish seventh chord - Dim7',
      'carter-number': '5',
      'complement-forte-code': '8-28',
      'documentation-link': 'https://drive.google.com/file/d/1iKDTGoFbzonRkZLp9nSJg9Smg9_vSiUP/view?usp=drive_link'
    },
    {
      'forte-code': '4-z15',
      'pitch-classes': [0, 1, 4, 6],
      'name': 'mMaj(11 no5) - All interval tetrachord no1',
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': 'https://drive.google.com/file/d/15viK4g-DyY6S8U-7XRXboxuZ3JDX1zKs/view?usp=drive_link'
    },
    {
      'forte-code': '4-Z15A',
      'pitch-classes': [0, 1, 4, 6],
      'name': null,
      'carter-number': '18',
      'complement-forte-code': '8-Z15B',
      'documentation-link': null
    },
    {
      'forte-code': '4-Z15B',
      'pitch-classes': [0, 2, 5, 6],
      'name': '7(9# no5) - All interval tetrachord no2',
      'carter-number': null,
      'complement-forte-code': '8-Z15A',
      'documentation-link': 'https://drive.google.com/file/d/1ae1eIosAlDl5vYd8stS2PPt4s0VtoHv_/view?usp=drive_link'
    },
    {
      'forte-code': '4-z29',
      'pitch-classes': [0, 1, 3, 7],
      'name': '7(6 no5) - All intervals tetrachord n3 - Bm/C',
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': 'https://drive.google.com/file/d/10XpPfBnuvc9Y0h3f9gfOIjHFVZJmEhmq/view?usp=drive_link'
    },
    {
      'forte-code': '4-Z29A',
      'pitch-classes': [0, 1, 3, 7],
      'name': null,
      'carter-number': '23',
      'complement-forte-code': '8-Z29B',
      'documentation-link': null
    },
    {
      'forte-code': '4-Z29B',
      'pitch-classes': [0, 4, 6, 7],
      'name': 'Major 4# - All intervals tetrachord n4 - F#/C',
      'carter-number': null,
      'complement-forte-code': '8-Z29A',
      'documentation-link': 'https://drive.google.com/file/d/1x-Vla4D_rFMMylDE89NmEba1sIDUh-qk/view?usp=drive_link'
    },
    {
      'forte-code': '5-1',
      'pitch-classes': [0, 1, 2, 3, 4],
      'name': 'Chromatic pentantonic',
      'carter-number': null,
      'complement-forte-code': '7-1',
      'documentation-link': 'https://drive.google.com/file/d/1LyJXJ61_iY8FVNNBzjZaajCFwKDqo-zs/view?usp=drive_link'
    },
    {
      'forte-code': '5-2',
      'pitch-classes': [0, 1, 2, 3, 5],
      'name': 'Minor second pentacluster n2',
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '5-2A',
      'pitch-classes': [0, 1, 2, 3, 5],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '7-2B',
      'documentation-link': null
    },
    {
      'forte-code': '5-2B',
      'pitch-classes': [0, 2, 3, 4, 5],
      'name': 'Minor second pentacluster n1',
      'carter-number': null,
      'complement-forte-code': '7-2A',
      'documentation-link': null
    },
    {
      'forte-code': '5-3',
      'pitch-classes': [0, 1, 2, 4, 5],
      'name': 'Major 9b pentatonic',
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '5-3A',
      'pitch-classes': [0, 1, 2, 4, 5],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '7-3B',
      'documentation-link': null
    },
    {
      'forte-code': '5-3B',
      'pitch-classes': [0, 1, 3, 4, 5],
      'name': 'Spanish pentacluster',
      'carter-number': null,
      'complement-forte-code': '7-3A',
      'documentation-link': null
    },
    {
      'forte-code': '5-4',
      'pitch-classes': [0, 1, 2, 3, 6],
      'name': 'Blues pentacluster',
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '5-4A',
      'pitch-classes': [0, 1, 2, 3, 6],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '7-4B',
      'documentation-link': null
    },
    {
      'forte-code': '5-4B',
      'pitch-classes': [0, 3, 4, 5, 6],
      'name': 'Minor third pentacluster',
      'carter-number': null,
      'complement-forte-code': '7-4A',
      'documentation-link': null
    },
    {
      'forte-code': '5-5',
      'pitch-classes': [0, 1, 2, 3, 7],
      'name': 'Major third pentacluster n2',
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '5-5A',
      'pitch-classes': [0, 1, 2, 3, 7],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '7-5B',
      'documentation-link': null
    },
    {
      'forte-code': '5-5B',
      'pitch-classes': [0, 4, 5, 6, 7],
      'name': 'Major third pentacluster n1',
      'carter-number': null,
      'complement-forte-code': '7-5A',
      'documentation-link': null
    },
    {
      'forte-code': '5-6',
      'pitch-classes': [0, 1, 2, 5, 6],
      'name': 'Oriental pentacluster n1 - Raga Megharanji - 1 3 1 6 1',
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '5-6A',
      'pitch-classes': [0, 1, 2, 5, 6],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '7-6B',
      'documentation-link': null
    },
    {
      'forte-code': '5-6B',
      'pitch-classes': [0, 1, 4, 5, 6],
      'name': 'Oriental pentacluster n2',
      'carter-number': null,
      'complement-forte-code': '7-6A',
      'documentation-link': null
    },
    {
      'forte-code': '5-7',
      'pitch-classes': [0, 1, 2, 6, 7],
      'name': 'Double pentacluser n1 - Raga Nabhomani - 1 1 4 1 5',
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '5-7A',
      'pitch-classes': [0, 1, 2, 6, 7],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '7-7B',
      'documentation-link': null
    },
    {
      'forte-code': '5-7B',
      'pitch-classes': [0, 1, 5, 6, 7],
      'name': 'Double pentacluster n2',
      'carter-number': null,
      'complement-forte-code': '7-7A',
      'documentation-link': null
    },
    {
      'forte-code': '5-8',
      'pitch-classes': [0, 2, 3, 4, 6],
      'name': 'Tritone symetrical pentatonic - Mirror pentatonic',
      'carter-number': null,
      'complement-forte-code': '7-8',
      'documentation-link': 'https://drive.google.com/file/d/1LyJXJ61_iY8FVNNBzjZaajCFwKDqo-zs/view?usp=drive_link'
    },
    {
      'forte-code': '5-9',
      'pitch-classes': [0, 1, 2, 4, 6],
      'name': 'Expanded tritone pentatonic',
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '5-9A',
      'pitch-classes': [0, 1, 2, 4, 6],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '7-9B',
      'documentation-link': null
    },
    {
      'forte-code': '5-9B',
      'pitch-classes': [0, 2, 4, 5, 6],
      'name': 'Contracted tritone pentatonic',
      'carter-number': null,
      'complement-forte-code': '7-9A',
      'documentation-link': null
    },
    {
      'forte-code': '5-10',
      'pitch-classes': [0, 1, 3, 4, 6],
      'name': 'Alternated pentatonic n1',
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '5-10A',
      'pitch-classes': [0, 1, 3, 4, 6],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '7-10B',
      'documentation-link': null
    },
    {
      'forte-code': '5-10B',
      'pitch-classes': [0, 2, 3, 5, 6],
      'name': 'Alternated pentatonic n2',
      'carter-number': null,
      'complement-forte-code': '7-10A',
      'documentation-link': null
    },
    {
      'forte-code': '5-11',
      'pitch-classes': [0, 2, 3, 4, 7],
      'name': 'Central cluster pentatonic n1',
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '5-11A',
      'pitch-classes': [0, 2, 3, 4, 7],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '7-11A',
      'documentation-link': null
    },
    {
      'forte-code': '5-11B',
      'pitch-classes': [0, 3, 4, 5, 7],
      'name': 'Central cluster pentatonic n2',
      'carter-number': null,
      'complement-forte-code': '7-11B',
      'documentation-link': null
    },
    {
      'forte-code': '5-12',
      'pitch-classes': [0, 1, 5, 6, 10],
      'name': 'Locrian pentatonic',
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '5-13',
      'pitch-classes': [0, 1, 2, 4, 8],
      'name': 'Augmented pentatonic n1',
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '5-13A',
      'pitch-classes': [0, 1, 2, 4, 8],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '7-13B',
      'documentation-link': null
    },
    {
      'forte-code': '5-13B',
      'pitch-classes': [0, 2, 3, 4, 8],
      'name': 'Augmented pentatonic n2',
      'carter-number': null,
      'complement-forte-code': '7-13A',
      'documentation-link': null
    },
    {
      'forte-code': '5-14',
      'pitch-classes': [0, 1, 2, 5, 7],
      'name': 'Doble second triple fourth pentatonic n1',
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '5-14A',
      'pitch-classes': [0, 1, 2, 5, 7],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '7-14B',
      'documentation-link': null
    },
    {
      'forte-code': '5-14B',
      'pitch-classes': [0, 2, 5, 6, 7],
      'name': 'Doble second triple fourth pentatonic n2',
      'carter-number': null,
      'complement-forte-code': '7-14A',
      'documentation-link': null
    },
    {
      'forte-code': '5-15',
      'pitch-classes': [0, 1, 2, 6, 8],
      'name': 'Asymetric pentatonic',
      'carter-number': null,
      'complement-forte-code': '7-15',
      'documentation-link': null
    },
    {
      'forte-code': '5-16',
      'pitch-classes': [0, 1, 3, 4, 7],
      'name': 'Major minor diminished pentatonic n1',
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '5-16A',
      'pitch-classes': [0, 1, 3, 4, 7],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '7-16B',
      'documentation-link': null
    },
    {
      'forte-code': '5-16B',
      'pitch-classes': [0, 3, 4, 6, 7],
      'name': 'Major minor diminished pentatonic n2',
      'carter-number': null,
      'complement-forte-code': '7-16A',
      'documentation-link': null
    },
    {
      'forte-code': '5-19',
      'pitch-classes': [0, 1, 3, 6, 7],
      'name': null,
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '5-19A',
      'pitch-classes': [0, 1, 3, 6, 7],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '7-19B',
      'documentation-link': null
    },
    {
      'forte-code': '5-19B',
      'pitch-classes': [0, 1, 4, 6, 7],
      'name': 'Balinese Pentatonic',
      'carter-number': null,
      'complement-forte-code': '7-19A',
      'documentation-link': 'https://drive.google.com/file/d/1kc6b7FK_WrtEngeUR9ea8VU-n9uJMVMm/view?usp=drive_link'
    },
    {
      'forte-code': '5-20',
      'pitch-classes': [0, 1, 5, 6, 8],
      'name': 'Pelog pentatonic',
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': 'https://drive.google.com/file/d/1io-n6aSCy0qNRZE99-aHC-gTXf0SdP6h/view?usp=drive_link'
    },
    {
      'forte-code': '5-20A',
      'pitch-classes': [0, 1, 5, 6, 8],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '7-20B',
      'documentation-link': null
    },
    {
      'forte-code': '5-20B',
      'pitch-classes': [0, 2, 3, 7, 8],
      'name': 'Hirajoshi Pentatonic',
      'carter-number': null,
      'complement-forte-code': '7-20A',
      'documentation-link': 'https://drive.google.com/file/d/10Zqxfonr2TS7Rg7mZyT3z9r0uSJVa26v/view?usp=drive_link'
    },
    {
      'forte-code': '5-21',
      'pitch-classes': [0, 1, 4, 5, 8],
      'name': 'Sirian Pentatonic',
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': 'https://drive.google.com/file/d/1ykHsS3JpBb1L5Z_YQlTnMSg024frZJet/view?usp=drive_link'
    },
    {
      'forte-code': '5-21A',
      'pitch-classes': [0, 1, 4, 5, 8],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '7-21B',
      'documentation-link': null
    },
    {
      'forte-code': '5-21B',
      'pitch-classes': [0, 3, 4, 7, 8],
      'name': 'Libanese Pentatonic - Minor augmented chord',
      'carter-number': null,
      'complement-forte-code': '7-21A',
      'documentation-link': 'https://drive.google.com/file/d/1ygcXS00iQLGbCR5IIrP-9uxRf8kIpmGa/view?usp=drive_link'
    },
    {
      'forte-code': '5-22',
      'pitch-classes': [0, 1, 4, 7, 8],
      'name': 'Persian pentatonic',
      'carter-number': null,
      'complement-forte-code': '7-22',
      'documentation-link': 'https://drive.google.com/file/d/1p-XFAVQafNcDYXZPPD-6n41lOpeDEHBR/view?usp=drive_link'
    },
    {
      'forte-code': '5-23',
      'pitch-classes': [0, 2, 3, 5, 7],
      'name': 'Minor pentatonic',
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '5-23A',
      'pitch-classes': [0, 2, 3, 5, 7],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '7-23B',
      'documentation-link': null
    },
    {
      'forte-code': '5-23B',
      'pitch-classes': [0, 2, 4, 5, 7],
      'name': 'Major pentatonic - m11(no5)',
      'carter-number': null,
      'complement-forte-code': '7-23A',
      'documentation-link': 'https://drive.google.com/file/d/1o-Ytby6SdRXF3M1d056LEm6o0rkEYs4U/view?usp=drive_link'
    },
    {
      'forte-code': '5-24',
      'pitch-classes': [0, 1, 3, 5, 7],
      'name': 'Phrygian pentatonic',
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '5-24A',
      'pitch-classes': [0, 1, 3, 5, 7],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '7-24B',
      'documentation-link': null
    },
    {
      'forte-code': '5-24B',
      'pitch-classes': [0, 2, 4, 6, 7],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '7-24A',
      'documentation-link': null
    },
    {
      'forte-code': '5-25',
      'pitch-classes': [0, 2, 3, 5, 8],
      'name': 'Major ninth diminished chord',
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '5-25A',
      'pitch-classes': [0, 2, 3, 5, 8],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '7-25B',
      'documentation-link': null
    },
    {
      'forte-code': '5-25B',
      'pitch-classes': [0, 3, 5, 6, 8],
      'name': 'Minor 9b chord',
      'carter-number': null,
      'complement-forte-code': '7-25A',
      'documentation-link': null
    },
    {
      'forte-code': '5-26',
      'pitch-classes': [0, 2, 4, 5, 8],
      'name': 'Diminished 9# chord - mMaj(6)',
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': 'https://drive.google.com/file/d/1gEOT6UtT3tSK5E5nogLLbSXRcE0d0HBr/view?usp=drive_link'
    },
    {
      'forte-code': '5-26A',
      'pitch-classes': [0, 2, 4, 5, 8],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '7-26A',
      'documentation-link': null
    },
    {
      'forte-code': '5-26B',
      'pitch-classes': [0, 3, 4, 6, 8],
      'name': 'Augmented 9b chord',
      'carter-number': null,
      'complement-forte-code': '7-26B',
      'documentation-link': null
    },
    {
      'forte-code': '5-27',
      'pitch-classes': [0, 1, 3, 5, 8],
      'name': 'Major 9 chord - Maj9',
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': 'https://drive.google.com/file/d/1Bhl3Poc5cuxGY9vbPTcFAbchCpTfCLXM/view?usp=drive_link'
    },
    {
      'forte-code': '5-27A',
      'pitch-classes': [0, 1, 3, 5, 8],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '7-27B',
      'documentation-link': null
    },
    {
      'forte-code': '5-27B',
      'pitch-classes': [0, 3, 5, 7, 8],
      'name': 'Minor 9 chord - m9 - Maj(6)',
      'carter-number': null,
      'complement-forte-code': '7-27A',
      'documentation-link': 'https://drive.google.com/file/d/10m5WJzh7hBs-NDLlml-HkUzQJ9VGlsWi/view?usp=drive_link'
    },
    {
      'forte-code': '5-28',
      'pitch-classes': [0, 2, 3, 6, 8],
      'name': 'Augmented sixth pentatonic n1',
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': 'https://drive.google.com/file/d/1hU7Kv1KMiWAvbnxfBmkPWOxGeNSqUxz1/view?usp=drive_link'
    },
    {
      'forte-code': '5-28A',
      'pitch-classes': [0, 2, 3, 6, 8],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '7-28A',
      'documentation-link': null
    },
    {
      'forte-code': '5-28B',
      'pitch-classes': [0, 2, 5, 6, 8],
      'name': 'Augmented sixth pentatonic n2',
      'carter-number': null,
      'complement-forte-code': '7-28B',
      'documentation-link': null
    },
    {
      'forte-code': '5-29',
      'pitch-classes': [0, 1, 3, 6, 8],
      'name': 'Kumoi pentatonic n2',
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': 'https://drive.google.com/file/d/1gCHPqn1Q-6PTaes7ERJnWt2FMD_47347/view?usp=drive_link'
    },
    {
      'forte-code': '5-29A',
      'pitch-classes': [0, 1, 3, 6, 8],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '7-29B',
      'documentation-link': null
    },
    {
      'forte-code': '5-29B',
      'pitch-classes': [0, 2, 5, 7, 8],
      'name': 'Kumoi pentatonic n1',
      'carter-number': null,
      'complement-forte-code': '7-29A',
      'documentation-link': 'https://drive.google.com/file/d/1wb8-yTkGk031p1kCPZSWz8Nz16Ws3IlE/view?usp=drive_link'
    },
    {
      'forte-code': '5-30',
      'pitch-classes': [0, 1, 4, 6, 8],
      'name': 'Enigmatic pentatonic n1',
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': 'https://drive.google.com/file/d/1UzqyAZ8BWk2Qv6x9rG1mtcZXNBF4zjn4/view?usp=drive_link'
    },
    {
      'forte-code': '5-30A',
      'pitch-classes': [0, 1, 4, 6, 8],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '7-30B',
      'documentation-link': null
    },
    {
      'forte-code': '5-30B',
      'pitch-classes': [0, 2, 4, 7, 8],
      'name': 'Enigmatic pentatonic n2 - Altered pentatonic',
      'carter-number': null,
      'complement-forte-code': '7-30A',
      'documentation-link': 'https://drive.google.com/file/d/11OnKPca2D7KlInQNWP8RkDDiGHcj2V3Q/view?usp=drive_link'
    },
    {
      'forte-code': '5-31',
      'pitch-classes': [0, 1, 3, 6, 9],
      'name': 'Diminished 9b chord',
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': 'https://drive.google.com/file/d/1yjMHjuK50ohABI1cMSXm-5f8vW74qsc8/view?usp=drive_link'
    },
    {
      'forte-code': '5-31A',
      'pitch-classes': [0, 1, 3, 6, 9],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '7-31B',
      'documentation-link': null
    },
    {
      'forte-code': '5-31B',
      'pitch-classes': [0, 2, 3, 6, 9],
      'name': 'Diminished 9 chord',
      'carter-number': null,
      'complement-forte-code': '7-31A',
      'documentation-link': 'https://drive.google.com/file/d/1BCV8332Ul7GxHAhoOLVmSSQqJ7YsuPUM/view?usp=drive_link'
    },
    {
      'forte-code': '5-32',
      'pitch-classes': [0, 1, 4, 6, 9],
      'name': 'Napolitan pentatonic n1',
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': 'https://drive.google.com/file/d/11tnZYgBu7gpRFHw0x2lY5nprYasnL4Jl/view?usp=drive_link'
    },
    {
      'forte-code': '5-32A',
      'pitch-classes': [0, 1, 4, 6, 9],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '7-32B',
      'documentation-link': null
    },
    {
      'forte-code': '5-32B',
      'pitch-classes': [0, 2, 5, 6, 9],
      'name': 'Napolitan pentatonic n2',
      'carter-number': null,
      'complement-forte-code': '7-32A',
      'documentation-link': 'https://drive.google.com/file/d/1bYbP0BtNK_TFgjm_48Hz7JTdBuM2gdoW/view?usp=drive_link'
    },
    {
      'forte-code': '5-33',
      'pitch-classes': [0, 2, 4, 6, 8],
      'name': 'Tonal pentatonic',
      'carter-number': null,
      'complement-forte-code': '7-33',
      'documentation-link': 'https://drive.google.com/file/d/1qKJsgzgocuy4x3uoZi7YhkhN8yKvndeZ/view?usp=drive_link'
    },
    {
      'forte-code': '5-34',
      'pitch-classes': [0, 2, 4, 6, 9],
      'name': 'Prometeus pentatonic - m(4 6)',
      'carter-number': null,
      'complement-forte-code': '7-34',
      'documentation-link': 'https://drive.google.com/file/d/1qJX-pt-JK1ORqOPM-X6bbbJPVROxbIAM/view?usp=drive_link'
    },
    {
      'forte-code': '5-35',
      'pitch-classes': [0, 2, 4, 7, 9],
      'name': 'Traditional pentatonic',
      'carter-number': null,
      'complement-forte-code': '7-35',
      'documentation-link': 'https://drive.google.com/file/d/1dZG3jX8V1-W8Idm7EQ-JaPtWm7t4JsLv/view?usp=drive_link'
    },
    {
      'forte-code': '5-35B',
      'pitch-classes': [0, 2, 4, 7, 9],
      'name': 'Traditional pentatonic',
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': 'https://drive.google.com/file/d/1dZG3jX8V1-W8Idm7EQ-JaPtWm7t4JsLv/view?usp=drive_link'
    },
    {
      'forte-code': '5-Z12',
      'pitch-classes': [0, 1, 3, 5, 6],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '7-Z12',
      'documentation-link': null
    },
    {
      'forte-code': '5-Z17',
      'pitch-classes': [0, 1, 3, 4, 8],
      'name': 'Maj+(6) - Minor 9 chord',
      'carter-number': null,
      'complement-forte-code': '7-Z17',
      'documentation-link': 'https://drive.google.com/file/d/18jQCav0D4jgYGZnESoed8-4rq1faw1Yv/view?usp=drive_link'
    },
    {
      'forte-code': '5-z18',
      'pitch-classes': [0, 1, 4, 5, 7],
      'name': 'Gypsy pentatonic n1',
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': 'https://drive.google.com/file/d/1pZdcs2Cq7jhSz2rWMZ4uB13g6iAsljes/view?usp=drive_link'
    },
    {
      'forte-code': '5-Z18A',
      'pitch-classes': [0, 1, 4, 5, 7],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '7-Z18B',
      'documentation-link': null
    },
    {
      'forte-code': '5-Z18B',
      'pitch-classes': [0, 2, 3, 6, 7],
      'name': 'Gypsy pentatonic n2',
      'carter-number': null,
      'complement-forte-code': '7-Z18A',
      'documentation-link': 'https://drive.google.com/file/d/1mYY5_aGX_ns0-YRrth76jdjohyu1afpI/view?usp=drive_link'
    },
    {
      'forte-code': '5-z36',
      'pitch-classes': [0, 1, 2, 4, 7],
      'name': null,
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '5-Z36A',
      'pitch-classes': [0, 1, 2, 4, 7],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '7-Z36B',
      'documentation-link': null
    },
    {
      'forte-code': '5-Z36B',
      'pitch-classes': [0, 3, 5, 6, 7],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '7-Z36A',
      'documentation-link': null
    },
    {
      'forte-code': '5-Z37',
      'pitch-classes': [0, 3, 4, 5, 8],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '7-Z37',
      'documentation-link': null
    },
    {
      'forte-code': '5-z38',
      'pitch-classes': [0, 1, 2, 5, 8],
      'name': null,
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '5-Z38A',
      'pitch-classes': [0, 1, 2, 5, 8],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '7-Z38B',
      'documentation-link': null
    },
    {
      'forte-code': '5-Z38B',
      'pitch-classes': [0, 3, 6, 7, 8],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '7-Z38A',
      'documentation-link': null
    },
    {
      'forte-code': '6-1',
      'pitch-classes': [0, 1, 2, 3, 4, 5],
      'name': 'Chromatic hexatonic',
      'carter-number': '4',
      'complement-forte-code': '6-1',
      'documentation-link': null
    },
    {
      'forte-code': '6-2',
      'pitch-classes': [0, 1, 2, 3, 4, 6],
      'name': null,
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '6-2A',
      'pitch-classes': [0, 1, 2, 3, 4, 6],
      'name': null,
      'carter-number': '19',
      'complement-forte-code': '6-2B',
      'documentation-link': null
    },
    {
      'forte-code': '6-2B',
      'pitch-classes': [0, 2, 3, 4, 5, 6],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '6-2A',
      'documentation-link': null
    },
    {
      'forte-code': '6-5',
      'pitch-classes': [0, 1, 2, 3, 6, 7],
      'name': null,
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '6-5A',
      'pitch-classes': [0, 1, 2, 3, 6, 7],
      'name': null,
      'carter-number': '16',
      'complement-forte-code': '6-5B',
      'documentation-link': null
    },
    {
      'forte-code': '6-5B',
      'pitch-classes': [0, 1, 4, 5, 6, 7],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '6-5A',
      'documentation-link': null
    },
    {
      'forte-code': '6-7',
      'pitch-classes': [0, 1, 2, 6, 7, 8],
      'name': 'Messiaen modo 5 - CMaj(no5) + F#Maj(no5)',
      'carter-number': '7',
      'complement-forte-code': '6-7',
      'documentation-link': 'https://drive.google.com/file/d/1aclynd1b0-rY0xXPLAbxzWj8czqg6n_Z/view?usp=drive_link'
    },
    {
      'forte-code': '6-8',
      'pitch-classes': [0, 2, 3, 4, 5, 7],
      'name': null,
      'carter-number': '5',
      'complement-forte-code': '6-8',
      'documentation-link': null
    },
    {
      'forte-code': '6-9',
      'pitch-classes': [0, 1, 2, 3, 5, 7],
      'name': null,
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '6-9A',
      'pitch-classes': [0, 1, 2, 3, 5, 7],
      'name': null,
      'carter-number': '20',
      'complement-forte-code': '6-9B',
      'documentation-link': null
    },
    {
      'forte-code': '6-9B',
      'pitch-classes': [0, 2, 4, 5, 6, 7],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '6-9A',
      'documentation-link': null
    },
    {
      'forte-code': '6-14',
      'pitch-classes': [0, 1, 3, 4, 5, 8],
      'name': null,
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '6-14A',
      'pitch-classes': [0, 1, 3, 4, 5, 8],
      'name': null,
      'carter-number': '3',
      'complement-forte-code': '6-14A',
      'documentation-link': null
    },
    {
      'forte-code': '6-14B',
      'pitch-classes': [0, 3, 4, 5, 7, 8],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '6-14B',
      'documentation-link': null
    },
    {
      'forte-code': '6-15',
      'pitch-classes': [0, 1, 2, 4, 5, 8],
      'name': null,
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '6-15A',
      'pitch-classes': [0, 1, 2, 4, 5, 8],
      'name': null,
      'carter-number': '13',
      'complement-forte-code': '6-15B',
      'documentation-link': null
    },
    {
      'forte-code': '6-15B',
      'pitch-classes': [0, 3, 4, 6, 7, 8],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '6-15A',
      'documentation-link': null
    },
    {
      'forte-code': '6-16',
      'pitch-classes': [0, 1, 4, 5, 6, 8],
      'name': null,
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '6-16A',
      'pitch-classes': [0, 1, 4, 5, 6, 8],
      'name': null,
      'carter-number': '11',
      'complement-forte-code': '6-16B',
      'documentation-link': null
    },
    {
      'forte-code': '6-16B',
      'pitch-classes': [0, 2, 3, 4, 7, 8],
      'name': 'Megha Raga',
      'carter-number': null,
      'complement-forte-code': '6-16A',
      'documentation-link': null
    },
    {
      'forte-code': '6-18',
      'pitch-classes': [0, 1, 2, 5, 7, 8],
      'name': null,
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '6-18A',
      'pitch-classes': [0, 1, 2, 5, 7, 8],
      'name': null,
      'carter-number': '17',
      'complement-forte-code': '6-18B',
      'documentation-link': null
    },
    {
      'forte-code': '6-18B',
      'pitch-classes': [0, 1, 3, 6, 7, 8],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '6-18A',
      'documentation-link': null
    },
    {
      'forte-code': '6-20',
      'pitch-classes': [0, 1, 4, 5, 8, 9],
      'name': 'Augmented scale',
      'carter-number': '2',
      'complement-forte-code': '6-20',
      'documentation-link': 'https://drive.google.com/file/d/1BA9SG7iQVvOQBRanPJRhdb4AMmpDol47/view?usp=drive_link'
    },
    {
      'forte-code': '6-21',
      'pitch-classes': [0, 2, 3, 4, 6, 8],
      'name': null,
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '6-21A',
      'pitch-classes': [0, 2, 3, 4, 6, 8],
      'name': null,
      'carter-number': '12',
      'complement-forte-code': '6-21B',
      'documentation-link': null
    },
    {
      'forte-code': '6-21B',
      'pitch-classes': [0, 2, 4, 5, 6, 8],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '6-21A',
      'documentation-link': null
    },
    {
      'forte-code': '6-22',
      'pitch-classes': [0, 1, 2, 4, 6, 8],
      'name': null,
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '6-22A',
      'pitch-classes': [0, 1, 2, 4, 6, 8],
      'name': null,
      'carter-number': '10',
      'complement-forte-code': '6-22B',
      'documentation-link': null
    },
    {
      'forte-code': '6-22B',
      'pitch-classes': [0, 2, 4, 6, 7, 8],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '6-21A',
      'documentation-link': null
    },
    {
      'forte-code': '6-27',
      'pitch-classes': [0, 1, 3, 4, 6, 9],
      'name': null,
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '6-27A',
      'pitch-classes': [0, 1, 3, 4, 6, 9],
      'name': null,
      'carter-number': '14',
      'complement-forte-code': '6-27B',
      'documentation-link': null
    },
    {
      'forte-code': '6-27B',
      'pitch-classes': [0, 2, 3, 5, 6, 9],
      'name': 'Pyramid hexatonic',
      'carter-number': null,
      'complement-forte-code': '6-27A',
      'documentation-link': 'https://drive.google.com/file/d/1YZiSSFOGesCtqosdlWKnLVfPihZ0oT3L/view?usp=drive_link'
    },
    {
      'forte-code': '6-30',
      'pitch-classes': [0, 1, 3, 6, 7, 9],
      'name': 'Minor Bitonal hexatonic',
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': 'https://drive.google.com/file/d/1Xpstperk8O3uWeiVTeXUmkmEZS5otDEs/view?usp=drive_link'
    },
    {
      'forte-code': '6-30A',
      'pitch-classes': [0, 1, 3, 6, 7, 9],
      'name': null,
      'carter-number': '15',
      'complement-forte-code': '6-30B',
      'documentation-link': null
    },
    {
      'forte-code': '6-30B',
      'pitch-classes': [0, 2, 3, 6, 8, 9],
      'name': 'Major bitonal hexatonic - Pretrushka chord',
      'carter-number': null,
      'complement-forte-code': '6-30A',
      'documentation-link': 'https://drive.google.com/file/d/1uRB1X5Xn2aNcG9hiBn_o_NyQYaQfLXWy/view?usp=drive_link'
    },
    {
      'forte-code': '6-31',
      'pitch-classes': [0, 1, 4, 5, 7, 9],
      'name': null,
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '6-31A',
      'pitch-classes': [0, 1, 4, 5, 7, 9],
      'name': null,
      'carter-number': '8',
      'complement-forte-code': '6-31B',
      'documentation-link': null
    },
    {
      'forte-code': '6-31B',
      'pitch-classes': [0, 2, 4, 5, 8, 9],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '6-31A',
      'documentation-link': null
    },
    {
      'forte-code': '6-32',
      'pitch-classes': [0, 2, 4, 5, 7, 9],
      'name': 'Major hexatonic - m11 - Arezzo diatonic major (221223)',
      'carter-number': '6',
      'complement-forte-code': '6-32',
      'documentation-link': 'https://drive.google.com/file/d/1SJjBy-rqloleja__OYxrYzlPXP9A4oeb/view?usp=drive_link'
    },
    {
      'forte-code': '6-33',
      'pitch-classes': [0, 2, 3, 5, 7, 9],
      'name': 'Dorian no7 hexatonic - Lydian no5 - ',
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': 'https://drive.google.com/file/d/1MgYcNIoazZzR-jtlwS9s7uIbGNjJrCFG/view?usp=drive_link'
    },
    {
      'forte-code': '6-33A',
      'pitch-classes': [0, 2, 3, 5, 7, 9],
      'name': null,
      'carter-number': '18',
      'complement-forte-code': '6-33B',
      'documentation-link': null
    },
    {
      'forte-code': '6-33B',
      'pitch-classes': [0, 2, 4, 6, 7, 9],
      'name': 'Lydian no7 hexatonic - Dominant 11 - 9(6)',
      'carter-number': null,
      'complement-forte-code': '6-33A',
      'documentation-link': 'https://drive.google.com/file/d/1xqbLI-YLE2K-qLDS6YzpJOZQeEDaROAM/view?usp=drive_link'
    },
    {
      'forte-code': '6-34',
      'pitch-classes': [0, 1, 3, 5, 7, 9],
      'name': 'Prometeus chord - Mixolydian 4# no5 - 9(4# 6 no5)',
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': 'https://drive.google.com/file/d/1ZBSFAPvvMUSCcw4ygedpnsHs6Iep8h2K/view?usp=drive_link'
    },
    {
      'forte-code': '6-34A',
      'pitch-classes': [0, 1, 3, 5, 7, 9],
      'name': null,
      'carter-number': '9',
      'complement-forte-code': '6-34B',
      'documentation-link': null
    },
    {
      'forte-code': '6-34B',
      'pitch-classes': [0, 2, 4, 6, 8, 9],
      'name': 'Harmonic hexatonic - Augmented 11 - Mixolydian 4# no6 - 9(4#)',
      'carter-number': null,
      'complement-forte-code': '6-34A',
      'documentation-link': 'https://drive.google.com/file/d/1j3wKVg143fwhtyqC9wO9ZFLglN_SEIGK/view?usp=drive_link'
    },
    {
      'forte-code': '6-35',
      'pitch-classes': [0, 2, 4, 6, 8, 10],
      'name': 'Tonal scale',
      'carter-number': '1',
      'complement-forte-code': '6-35',
      'documentation-link': 'https://drive.google.com/file/d/1V_U8aXPt9U1wu2ngg204SFkB2sy1HNDD/view?usp=drive_link'
    },
    {
      'forte-code': '6-z3',
      'pitch-classes': [0, 1, 2, 3, 5, 6],
      'name': null,
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '6-Z3A',
      'pitch-classes': [0, 1, 2, 3, 5, 6],
      'name': null,
      'carter-number': '49',
      'complement-forte-code': '6-Z36B',
      'documentation-link': null
    },
    {
      'forte-code': '6-Z3B',
      'pitch-classes': [0, 1, 3, 4, 5, 6],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '6-Z36A',
      'documentation-link': null
    },
    {
      'forte-code': '6-Z4',
      'pitch-classes': [0, 1, 2, 4, 5, 6],
      'name': null,
      'carter-number': '24',
      'complement-forte-code': '6-Z37',
      'documentation-link': null
    },
    {
      'forte-code': '6-Z6',
      'pitch-classes': [0, 1, 2, 5, 6, 7],
      'name': 'Double cluster Hexatonic',
      'carter-number': '33',
      'complement-forte-code': '6-Z38',
      'documentation-link': null
    },
    {
      'forte-code': '6-z10',
      'pitch-classes': [0, 1, 3, 4, 5, 7],
      'name': null,
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '6-Z10A',
      'pitch-classes': [0, 1, 3, 4, 5, 7],
      'name': null,
      'carter-number': '42',
      'complement-forte-code': '6-Z39A',
      'documentation-link': null
    },
    {
      'forte-code': '6-Z10B',
      'pitch-classes': [0, 2, 3, 4, 6, 7],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '6-Z39B',
      'documentation-link': null
    },
    {
      'forte-code': '6-z11',
      'pitch-classes': [0, 1, 2, 4, 5, 7],
      'name': null,
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '6-Z11A',
      'pitch-classes': [0, 1, 2, 4, 5, 7],
      'name': null,
      'carter-number': '47',
      'complement-forte-code': '6-Z40B',
      'documentation-link': null
    },
    {
      'forte-code': '6-Z11B',
      'pitch-classes': [0, 2, 3, 5, 6, 7],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '6-Z40A',
      'documentation-link': null
    },
    {
      'forte-code': '6-z12',
      'pitch-classes': [0, 1, 2, 4, 6, 7],
      'name': null,
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '6-Z12A',
      'pitch-classes': [0, 1, 2, 4, 6, 7],
      'name': null,
      'carter-number': '46',
      'complement-forte-code': '6-Z41B',
      'documentation-link': null
    },
    {
      'forte-code': '6-Z12B',
      'pitch-classes': [0, 1, 3, 5, 6, 7],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '6-Z41A',
      'documentation-link': null
    },
    {
      'forte-code': '6-Z13',
      'pitch-classes': [0, 1, 3, 4, 6, 7],
      'name': 'Alternated Hexatonic',
      'carter-number': '29',
      'complement-forte-code': '6-Z42',
      'documentation-link': null
    },
    {
      'forte-code': '6-z17',
      'pitch-classes': [0, 1, 2, 4, 7, 8],
      'name': 'All intervals hexatonic',
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '6-Z17A',
      'pitch-classes': [0, 1, 2, 4, 7, 8],
      'name': null,
      'carter-number': '35',
      'complement-forte-code': '6-Z43B',
      'documentation-link': null
    },
    {
      'forte-code': '6-Z17B',
      'pitch-classes': [0, 1, 4, 6, 7, 8],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '6-Z43A',
      'documentation-link': null
    },
    {
      'forte-code': '6-z19',
      'pitch-classes': [0, 1, 3, 4, 7, 8],
      'name': 'Pseudo Augmented minor - mMaj9(4#) - Lydian 3b(no6)',
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': 'https://drive.google.com/file/d/1qcFW5FWIGfhYwSNSGPxt36ksosiArNk6/view?usp=drive_link'
    },
    {
      'forte-code': '6-Z19A',
      'pitch-classes': [0, 1, 3, 4, 7, 8],
      'name': null,
      'carter-number': '37',
      'complement-forte-code': '6-Z44B',
      'documentation-link': null
    },
    {
      'forte-code': '6-Z19B',
      'pitch-classes': [0, 1, 4, 5, 7, 8],
      'name': 'Maj7(2#4) - Lydian2# (no6)',
      'carter-number': null,
      'complement-forte-code': '6-Z44A',
      'documentation-link': 'https://drive.google.com/file/d/11UnhQplzSWti6kIdxVX9eAOvDXzSc7ek/view?usp=drive_link'
    },
    {
      'forte-code': '6-Z23',
      'pitch-classes': [0, 2, 3, 5, 6, 8],
      'name': 'Super locrian Hexatonic',
      'carter-number': '27',
      'complement-forte-code': '6-Z45',
      'documentation-link': null
    },
    {
      'forte-code': '6-z24',
      'pitch-classes': [0, 1, 3, 4, 6, 8],
      'name': null,
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '6-Z24A',
      'pitch-classes': [0, 1, 3, 4, 6, 8],
      'name': null,
      'carter-number': '39',
      'complement-forte-code': '6-Z46B',
      'documentation-link': null
    },
    {
      'forte-code': '6-Z24B',
      'pitch-classes': [0, 2, 4, 5, 7, 8],
      'name': 'Melodic minor Hexatonic - mMaj9(6)',
      'carter-number': null,
      'complement-forte-code': '6-Z46A',
      'documentation-link': 'https://drive.google.com/file/d/1Qtd9x6-rLtj30pdR2pXbo-t09sBGV46G/view?usp=drive_link'
    },
    {
      'forte-code': '6-z25',
      'pitch-classes': [0, 1, 3, 5, 6, 8],
      'name': 'Locrian no7 Hexachord - Suddha Saveri raga -Ionian no6',
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': 'https://drive.google.com/file/d/1vQikTG7RF066LFVhK8jMqCOPNRFt5l_Y/view?usp=drive_link'
    },
    {
      'forte-code': '6-Z25A',
      'pitch-classes': [0, 1, 3, 5, 6, 8],
      'name': null,
      'carter-number': '43',
      'complement-forte-code': '6-Z47B',
      'documentation-link': null
    },
    {
      'forte-code': '6-Z25B',
      'pitch-classes': [0, 2, 3, 5, 7, 8],
      'name': 'minor Hexatonic - Dorian no4 - m9(6)',
      'carter-number': null,
      'complement-forte-code': '6-Z47A',
      'documentation-link': 'https://drive.google.com/file/d/1VYGJnvn3Ib4KqD6Ec_FnYeniGaLh_AKl/view?usp=drive_link'
    },
    {
      'forte-code': '6-Z26',
      'pitch-classes': [0, 1, 3, 5, 7, 8],
      'name': 'Phrygian no7 hexatonic - Lydian no6 - Maj9(4#)',
      'carter-number': '26',
      'complement-forte-code': '6-Z48',
      'documentation-link': 'https://drive.google.com/file/d/1BE7-NqeGWRn9SzlN5MKsCUcRrVsSzlz5/view?usp=drive_link'
    },
    {
      'forte-code': '6-Z28',
      'pitch-classes': [0, 1, 3, 5, 6, 9],
      'name': 'Double Phrygian hexatonic',
      'carter-number': '21',
      'complement-forte-code': '6-Z49',
      'documentation-link': null
    },
    {
      'forte-code': '6-Z29',
      'pitch-classes': [0, 2, 3, 6, 7, 9],
      'name': null,
      'carter-number': '32',
      'complement-forte-code': '6-Z50',
      'documentation-link': null
    },
    {
      'forte-code': '6-z36',
      'pitch-classes': [0, 1, 2, 3, 4, 7],
      'name': null,
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '6-Z36A',
      'pitch-classes': [0, 1, 2, 3, 4, 7],
      'name': null,
      'carter-number': '50',
      'complement-forte-code': '6-Z3B',
      'documentation-link': null
    },
    {
      'forte-code': '6-Z36B',
      'pitch-classes': [0, 3, 4, 5, 6, 7],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '6-Z3A',
      'documentation-link': null
    },
    {
      'forte-code': '6-Z37',
      'pitch-classes': [0, 1, 2, 3, 4, 8],
      'name': null,
      'carter-number': '23',
      'complement-forte-code': '6-Z4',
      'documentation-link': null
    },
    {
      'forte-code': '6-Z38',
      'pitch-classes': [0, 1, 2, 3, 7, 8],
      'name': 'Two quartal triads one semitone apart',
      'carter-number': '34',
      'complement-forte-code': '6-Z6',
      'documentation-link': null
    },
    {
      'forte-code': '6-z39',
      'pitch-classes': [0, 2, 3, 4, 5, 8],
      'name': null,
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '6-Z39A',
      'pitch-classes': [0, 2, 3, 4, 5, 8],
      'name': null,
      'carter-number': '41',
      'complement-forte-code': '6-Z10A',
      'documentation-link': null
    },
    {
      'forte-code': '6-Z39B',
      'pitch-classes': [0, 3, 4, 5, 6, 8],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '6-Z10B',
      'documentation-link': null
    },
    {
      'forte-code': '6-z40',
      'pitch-classes': [0, 1, 2, 3, 5, 8],
      'name': null,
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '6-Z40A',
      'pitch-classes': [0, 1, 2, 3, 5, 8],
      'name': null,
      'carter-number': '48',
      'complement-forte-code': '6-Z11B',
      'documentation-link': null
    },
    {
      'forte-code': '6-Z40B',
      'pitch-classes': [0, 3, 5, 6, 7, 8],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '6-Z11A',
      'documentation-link': null
    },
    {
      'forte-code': '6-z41',
      'pitch-classes': [0, 1, 2, 3, 6, 8],
      'name': null,
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '6-Z41A',
      'pitch-classes': [0, 1, 2, 3, 6, 8],
      'name': null,
      'carter-number': '45',
      'complement-forte-code': '6-Z12B',
      'documentation-link': null
    },
    {
      'forte-code': '6-Z41B',
      'pitch-classes': [0, 2, 5, 6, 7, 8],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '6-Z12A',
      'documentation-link': null
    },
    {
      'forte-code': '6-Z42',
      'pitch-classes': [0, 1, 2, 3, 6, 9],
      'name': null,
      'carter-number': '30',
      'complement-forte-code': '6-Z13',
      'documentation-link': null
    },
    {
      'forte-code': '6-z43',
      'pitch-classes': [0, 1, 2, 5, 6, 8],
      'name': null,
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '6-Z43A',
      'pitch-classes': [0, 1, 2, 5, 6, 8],
      'name': null,
      'carter-number': '36',
      'complement-forte-code': '6-Z17B',
      'documentation-link': null
    },
    {
      'forte-code': '6-Z43B',
      'pitch-classes': [0, 2, 3, 6, 7, 8],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '6-Z17A',
      'documentation-link': null
    },
    {
      'forte-code': '6-z44',
      'pitch-classes': [0, 1, 2, 5, 6, 9],
      'name': 'Schoemberg anagram hexatonic',
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '6-Z44A',
      'pitch-classes': [0, 1, 2, 5, 6, 9],
      'name': null,
      'carter-number': '38',
      'complement-forte-code': '6-Z19B',
      'documentation-link': null
    },
    {
      'forte-code': '6-Z44B',
      'pitch-classes': [0, 1, 4, 5, 6, 9],
      'name': 'Bauli Raga 133131',
      'carter-number': null,
      'complement-forte-code': '6-Z19A',
      'documentation-link': null
    },
    {
      'forte-code': '6-Z45',
      'pitch-classes': [0, 2, 3, 4, 6, 9],
      'name': null,
      'carter-number': '28',
      'complement-forte-code': '6-Z23',
      'documentation-link': null
    },
    {
      'forte-code': '6-z46',
      'pitch-classes': [0, 1, 2, 4, 6, 9],
      'name': null,
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '6-Z46A',
      'pitch-classes': [0, 1, 2, 4, 6, 9],
      'name': null,
      'carter-number': '40',
      'complement-forte-code': '6-Z24B',
      'documentation-link': null
    },
    {
      'forte-code': '6-Z46B',
      'pitch-classes': [0, 2, 4, 5, 6, 9],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '6-Z24A',
      'documentation-link': null
    },
    {
      'forte-code': '6-z47',
      'pitch-classes': [0, 1, 2, 4, 7, 9],
      'name': null,
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '6-Z47A',
      'pitch-classes': [0, 1, 2, 4, 7, 9],
      'name': null,
      'carter-number': '44',
      'complement-forte-code': '6-Z25B',
      'documentation-link': null
    },
    {
      'forte-code': '6-Z47B',
      'pitch-classes': [0, 2, 3, 4, 7, 9],
      'name': 'Blues mode 1 321132',
      'carter-number': null,
      'complement-forte-code': '6-Z25A',
      'documentation-link': 'https://drive.google.com/file/d/1Sni73ViPXTIsfY0xc7X4IAF5CucjpFBJ/view?usp=drive_link'
    },
    {
      'forte-code': '6-Z48',
      'pitch-classes': [0, 1, 2, 5, 7, 9],
      'name': null,
      'carter-number': '25',
      'complement-forte-code': '6-Z26',
      'documentation-link': null
    },
    {
      'forte-code': '6-Z49',
      'pitch-classes': [0, 1, 3, 4, 7, 9],
      'name': 'Prometeus napolitan 132312',
      'carter-number': '22',
      'complement-forte-code': '6-Z28',
      'documentation-link': 'https://drive.google.com/file/d/1QdrbOupV7XvnV4ux-gTnbZVg6GYP0Eul/view?usp=drive_link'
    },
    {
      'forte-code': '6-Z50',
      'pitch-classes': [0, 1, 4, 6, 7, 9],
      'name': 'C + F#m',
      'carter-number': '31',
      'complement-forte-code': '6-Z29',
      'documentation-link': 'https://drive.google.com/file/d/1ynYX5fpqz0hDqFaqtsyw3YbwujBKqhat/view?usp=drive_link'
    },
    {
      'forte-code': '7-1',
      'pitch-classes': [0, 1, 2, 3, 4, 5, 6],
      'name': 'Chromatic heptatonic',
      'carter-number': '1',
      'complement-forte-code': '5-1',
      'documentation-link': null
    },
    {
      'forte-code': '7-2',
      'pitch-classes': [0, 1, 2, 3, 4, 5, 7],
      'name': null,
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '7-2A',
      'pitch-classes': [0, 1, 2, 3, 4, 5, 7],
      'name': null,
      'carter-number': '11',
      'complement-forte-code': '5-2B',
      'documentation-link': null
    },
    {
      'forte-code': '7-2B',
      'pitch-classes': [0, 2, 3, 4, 5, 6, 7],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '5-2A',
      'documentation-link': null
    },
    {
      'forte-code': '7-3',
      'pitch-classes': [0, 1, 2, 3, 4, 5, 8],
      'name': null,
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '7-3A',
      'pitch-classes': [0, 1, 2, 3, 4, 5, 8],
      'name': null,
      'carter-number': '14',
      'complement-forte-code': '5-3B',
      'documentation-link': null
    },
    {
      'forte-code': '7-3B',
      'pitch-classes': [0, 3, 4, 5, 6, 7, 8],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '5-3A',
      'documentation-link': null
    },
    {
      'forte-code': '7-4',
      'pitch-classes': [0, 1, 2, 3, 4, 6, 7],
      'name': null,
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '7-4A',
      'pitch-classes': [0, 1, 2, 3, 4, 6, 7],
      'name': null,
      'carter-number': '12',
      'complement-forte-code': '5-4B',
      'documentation-link': null
    },
    {
      'forte-code': '7-4B',
      'pitch-classes': [0, 1, 3, 4, 5, 6, 7],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '5-4A',
      'documentation-link': null
    },
    {
      'forte-code': '7-5',
      'pitch-classes': [0, 1, 2, 3, 5, 6, 7],
      'name': null,
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '7-5A',
      'pitch-classes': [0, 1, 2, 3, 5, 6, 7],
      'name': null,
      'carter-number': '13',
      'complement-forte-code': '5-5B',
      'documentation-link': null
    },
    {
      'forte-code': '7-5B',
      'pitch-classes': [0, 1, 2, 4, 5, 6, 7],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '5-5A',
      'documentation-link': null
    },
    {
      'forte-code': '7-6',
      'pitch-classes': [0, 1, 2, 3, 4, 7, 8],
      'name': null,
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '7-6A',
      'pitch-classes': [0, 1, 2, 3, 4, 7, 8],
      'name': null,
      'carter-number': '27',
      'complement-forte-code': '5-6B',
      'documentation-link': null
    },
    {
      'forte-code': '7-6B',
      'pitch-classes': [0, 1, 4, 5, 6, 7, 8],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '5-6A',
      'documentation-link': null
    },
    {
      'forte-code': '7-7',
      'pitch-classes': [0, 1, 2, 3, 6, 7, 8],
      'name': null,
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '7-7A',
      'pitch-classes': [0, 1, 2, 3, 6, 7, 8],
      'name': null,
      'carter-number': '30',
      'complement-forte-code': '5-7B',
      'documentation-link': null
    },
    {
      'forte-code': '7-7B',
      'pitch-classes': [0, 1, 2, 5, 6, 7, 8],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '5-7A',
      'documentation-link': null
    },
    {
      'forte-code': '7-8',
      'pitch-classes': [0, 2, 3, 4, 5, 6, 8],
      'name': null,
      'carter-number': '2',
      'complement-forte-code': '5-8',
      'documentation-link': null
    },
    {
      'forte-code': '7-9',
      'pitch-classes': [0, 1, 2, 3, 4, 6, 8],
      'name': null,
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '7-9A',
      'pitch-classes': [0, 1, 2, 3, 4, 6, 8],
      'name': null,
      'carter-number': '15',
      'complement-forte-code': '5-9B',
      'documentation-link': null
    },
    {
      'forte-code': '7-9B',
      'pitch-classes': [0, 2, 4, 5, 6, 7, 8],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '5-9A',
      'documentation-link': null
    },
    {
      'forte-code': '7-10',
      'pitch-classes': [0, 1, 2, 3, 4, 6, 9],
      'name': null,
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '7-10A',
      'pitch-classes': [0, 1, 2, 3, 4, 6, 9],
      'name': null,
      'carter-number': '19',
      'complement-forte-code': '5-10B',
      'documentation-link': null
    },
    {
      'forte-code': '7-10B',
      'pitch-classes': [0, 2, 3, 4, 5, 6, 9],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '5-10A',
      'documentation-link': null
    },
    {
      'forte-code': '7-11',
      'pitch-classes': [0, 1, 3, 4, 5, 6, 8],
      'name': null,
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '7-11A',
      'pitch-classes': [0, 1, 3, 4, 5, 6, 8],
      'name': null,
      'carter-number': '18',
      'complement-forte-code': '5-11A',
      'documentation-link': null
    },
    {
      'forte-code': '7-11B',
      'pitch-classes': [0, 2, 3, 4, 5, 7, 8],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '5-11B',
      'documentation-link': null
    },
    {
      'forte-code': '7-13',
      'pitch-classes': [0, 1, 2, 4, 5, 6, 8],
      'name': null,
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '7-13A',
      'pitch-classes': [0, 1, 2, 4, 5, 6, 8],
      'name': null,
      'carter-number': '17',
      'complement-forte-code': '5-13B',
      'documentation-link': null
    },
    {
      'forte-code': '7-13B',
      'pitch-classes': [0, 2, 3, 4, 6, 7, 8],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '5-13A',
      'documentation-link': null
    },
    {
      'forte-code': '7-14',
      'pitch-classes': [0, 1, 2, 3, 5, 7, 8],
      'name': null,
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '7-14A',
      'pitch-classes': [0, 1, 2, 3, 5, 7, 8],
      'name': null,
      'carter-number': '28',
      'complement-forte-code': '5-14B',
      'documentation-link': null
    },
    {
      'forte-code': '7-14B',
      'pitch-classes': [0, 1, 3, 5, 6, 7, 8],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '5-14A',
      'documentation-link': null
    },
    {
      'forte-code': '7-15',
      'pitch-classes': [0, 1, 2, 4, 6, 7, 8],
      'name': null,
      'carter-number': '4',
      'complement-forte-code': '5-15',
      'documentation-link': null
    },
    {
      'forte-code': '7-16',
      'pitch-classes': [0, 1, 2, 3, 5, 6, 9],
      'name': null,
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '7-16A',
      'pitch-classes': [0, 1, 2, 3, 5, 6, 9],
      'name': null,
      'carter-number': '20',
      'complement-forte-code': '5-16B',
      'documentation-link': null
    },
    {
      'forte-code': '7-16B',
      'pitch-classes': [0, 1, 3, 4, 5, 6, 9],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '5-16A',
      'documentation-link': null
    },
    {
      'forte-code': '7-19',
      'pitch-classes': [0, 1, 2, 3, 6, 7, 9],
      'name': null,
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '7-19A',
      'pitch-classes': [0, 1, 2, 3, 6, 7, 9],
      'name': null,
      'carter-number': '31',
      'complement-forte-code': '5-19B',
      'documentation-link': null
    },
    {
      'forte-code': '7-19B',
      'pitch-classes': [0, 1, 2, 3, 6, 8, 9],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '5-19A',
      'documentation-link': null
    },
    {
      'forte-code': '7-20',
      'pitch-classes': [0, 1, 2, 5, 6, 7, 9],
      'name': 'Persa 1 - Chromatic phrygian inverse 1123113',
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': 'https://drive.google.com/file/d/1PT3FYArZmYP5PL8CCuNbqwOv24brNbtR/view?usp=drive_link'
    },
    {
      'forte-code': '7-20A',
      'pitch-classes': [0, 1, 2, 5, 6, 7, 9],
      'name': null,
      'carter-number': '34',
      'complement-forte-code': '5-20B',
      'documentation-link': null
    },
    {
      'forte-code': '7-20B',
      'pitch-classes': [0, 2, 3, 4, 7, 8, 9],
      'name': 'Chalanata - Chromatic mixolydian 1131132 - Chromatic dorian - Pantuvarali raga 1321131 - Mela Kanakangi 1132113',
      'carter-number': null,
      'complement-forte-code': '5-20A',
      'documentation-link': 'https://drive.google.com/file/d/1qPa-Ym3dN-M785sopzhXt_6Kz_CkmBXT/view?usp=drive_link'
    },
    {
      'forte-code': '7-21',
      'pitch-classes': [0, 1, 2, 4, 5, 8, 9],
      'name': null,
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '7-21A',
      'pitch-classes': [0, 1, 2, 4, 5, 8, 9],
      'name': null,
      'carter-number': '21',
      'complement-forte-code': '5-21B',
      'documentation-link': null
    },
    {
      'forte-code': '7-21B',
      'pitch-classes': [0, 1, 3, 4, 5, 8, 9],
      'name': 'Gypsy heptatonic 1312113',
      'carter-number': null,
      'complement-forte-code': '5-21A',
      'documentation-link': 'https://drive.google.com/file/d/1zNg8AvrV7y9Ngqc-s2y3IT3ASFh5vDTZ/view?usp=drive_link'
    },
    {
      'forte-code': '7-22',
      'pitch-classes': [0, 1, 2, 5, 6, 8, 9],
      'name': 'Hungarian minor - Parsi scale - Major Gypsy - Double Harmonic - Bhairav that 1312131 - Oriental scale 1311312',
      'carter-number': '8',
      'complement-forte-code': '5-22',
      'documentation-link': 'https://drive.google.com/file/d/1MbBtRLh2uyPFmU0EENuAs9fy0sAGIXmK/view?usp=drive_link'
    },
    {
      'forte-code': '7-23',
      'pitch-classes': [0, 2, 3, 4, 5, 7, 9],
      'name': null,
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '7-23A',
      'pitch-classes': [0, 2, 3, 4, 5, 7, 9],
      'name': null,
      'carter-number': '25',
      'complement-forte-code': '5-23B',
      'documentation-link': null
    },
    {
      'forte-code': '7-23B',
      'pitch-classes': [0, 2, 4, 5, 6, 7, 9],
      'name': 'Major + tritone heptatonic',
      'carter-number': null,
      'complement-forte-code': '5-23A',
      'documentation-link': null
    },
    {
      'forte-code': '7-24',
      'pitch-classes': [0, 1, 2, 3, 5, 7, 9],
      'name': 'Enigmatic heptatonic 1322211',
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': 'https://drive.google.com/file/d/1BsuE2MHF7AFavQq_mTmjtaBn5KbQV7Gq/view?usp=drive_link'
    },
    {
      'forte-code': '7-24A',
      'pitch-classes': [0, 1, 2, 3, 5, 7, 9],
      'name': null,
      'carter-number': '22',
      'complement-forte-code': '5-24B',
      'documentation-link': null
    },
    {
      'forte-code': '7-24B',
      'pitch-classes': [0, 2, 4, 6, 7, 8, 9],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '5-24A',
      'documentation-link': null
    },
    {
      'forte-code': '7-25',
      'pitch-classes': [0, 2, 3, 4, 6, 7, 9],
      'name': 'Blues heptatonic',
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': 'https://drive.google.com/file/d/1jquhyqbacqON3xBxBm6NYOdxghiRcZeB/view?usp=drive_link'
    },
    {
      'forte-code': '7-25A',
      'pitch-classes': [0, 2, 3, 4, 6, 7, 9],
      'name': null,
      'carter-number': '24',
      'complement-forte-code': '5-25B',
      'documentation-link': null
    },
    {
      'forte-code': '7-25B',
      'pitch-classes': [0, 2, 3, 5, 6, 7, 9],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '5-25A',
      'documentation-link': null
    },
    {
      'forte-code': '7-26',
      'pitch-classes': [0, 1, 3, 4, 5, 7, 9],
      'name': null,
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '7-26A',
      'pitch-classes': [0, 1, 3, 4, 5, 7, 9],
      'name': null,
      'carter-number': '26',
      'complement-forte-code': '5-26A',
      'documentation-link': null
    },
    {
      'forte-code': '7-26B',
      'pitch-classes': [0, 2, 4, 5, 6, 8, 9],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '5-26B',
      'documentation-link': null
    },
    {
      'forte-code': '7-27',
      'pitch-classes': [0, 1, 2, 4, 5, 7, 9],
      'name': null,
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '7-27A',
      'pitch-classes': [0, 1, 2, 4, 5, 7, 9],
      'name': null,
      'carter-number': '23',
      'complement-forte-code': '5-27B',
      'documentation-link': null
    },
    {
      'forte-code': '7-27B',
      'pitch-classes': [0, 2, 4, 5, 7, 8, 9],
      'name': 'Modified Blues 2121132',
      'carter-number': null,
      'complement-forte-code': '5-27A',
      'documentation-link': null
    },
    {
      'forte-code': '7-28',
      'pitch-classes': [0, 1, 3, 5, 6, 7, 9],
      'name': null,
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '7-28A',
      'pitch-classes': [0, 1, 3, 5, 6, 7, 9],
      'name': null,
      'carter-number': '36',
      'complement-forte-code': '5-28A',
      'documentation-link': null
    },
    {
      'forte-code': '7-28B',
      'pitch-classes': [0, 2, 3, 4, 6, 8, 9],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '5-28B',
      'documentation-link': null
    },
    {
      'forte-code': '7-29',
      'pitch-classes': [0, 1, 2, 4, 6, 7, 9],
      'name': 'Locrian natural seventh',
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '7-29A',
      'pitch-classes': [0, 1, 2, 4, 6, 7, 9],
      'name': null,
      'carter-number': '32',
      'complement-forte-code': '5-29B',
      'documentation-link': null
    },
    {
      'forte-code': '7-29B',
      'pitch-classes': [0, 2, 3, 5, 7, 8, 9],
      'name': 'Ionian 5b',
      'carter-number': null,
      'complement-forte-code': '5-29A',
      'documentation-link': null
    },
    {
      'forte-code': '7-30',
      'pitch-classes': [0, 1, 2, 4, 6, 8, 9],
      'name': 'Napolitan minor - Mela Dhenuka',
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': 'https://drive.google.com/file/d/1J3VXIhrRabFtsrad7sy9im_Iysj4HVd-/view?usp=drive_link'
    },
    {
      'forte-code': '7-30A',
      'pitch-classes': [0, 1, 2, 4, 6, 8, 9],
      'name': null,
      'carter-number': '37',
      'complement-forte-code': '5-30B',
      'documentation-link': null
    },
    {
      'forte-code': '7-30B',
      'pitch-classes': [0, 1, 3, 5, 7, 8, 9],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '5-30A',
      'documentation-link': null
    },
    {
      'forte-code': '7-31',
      'pitch-classes': [0, 1, 3, 4, 6, 7, 9],
      'name': 'Hungarian major - Alternated heptatonic 1',
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': 'https://drive.google.com/file/d/1lsij-RaVISR3ohzVjEpPxZe7uBr2VuGb/view?usp=drive_link'
    },
    {
      'forte-code': '7-31A',
      'pitch-classes': [0, 1, 3, 4, 6, 7, 9],
      'name': null,
      'carter-number': '38',
      'complement-forte-code': '5-31B',
      'documentation-link': null
    },
    {
      'forte-code': '7-31B',
      'pitch-classes': [0, 2, 3, 5, 6, 8, 9],
      'name': 'Alternated heptatonic 2',
      'carter-number': null,
      'complement-forte-code': '5-31A',
      'documentation-link': null
    },
    {
      'forte-code': '7-32',
      'pitch-classes': [0, 1, 3, 4, 6, 8, 9],
      'name': 'Harmonic minor - Spanish gypsy - Mela Kiravani - Pilu That',
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': 'https://drive.google.com/file/d/1Qi56o5AznSmXAfeYJifoQE0y11YdeGdk/view?usp=drive_link'
    },
    {
      'forte-code': '7-32A',
      'pitch-classes': [0, 1, 3, 4, 6, 8, 9],
      'name': null,
      'carter-number': '33',
      'complement-forte-code': '5-32B',
      'documentation-link': null
    },
    {
      'forte-code': '7-32B',
      'pitch-classes': [0, 1, 3, 5, 6, 8, 9],
      'name': 'Harmonic major - Dharmavati scale 2131221 - Mela cakravana - Raga ahir bhairav',
      'carter-number': null,
      'complement-forte-code': '5-32A',
      'documentation-link': 'https://drive.google.com/file/d/1yrusFZRf0tRP31bZEUx7stTQev7-Mblm/view?usp=drive_link'
    },
    {
      'forte-code': '7-33',
      'pitch-classes': [0, 1, 2, 4, 6, 8, 10],
      'name': 'Major napolitan 1222221 - Leading tone scale 222211',
      'carter-number': '6',
      'complement-forte-code': '5-33',
      'documentation-link': 'https://drive.google.com/file/d/1m0IpSX_V5oOGVsIjd87UJjzAF2ii56OS/view?usp=drive_link'
    },
    {
      'forte-code': '7-34',
      'pitch-classes': [0, 1, 3, 4, 6, 8, 10],
      'name': 'Melodic minor - Jazz minor - Super locrian',
      'carter-number': '9',
      'complement-forte-code': '5-34',
      'documentation-link': 'https://drive.google.com/file/d/1NMew6PPWhaOV6tWHIWT-ZeCKbBbuu4Ys/view?usp=drive_link'
    },
    {
      'forte-code': '7-35',
      'pitch-classes': [0, 1, 3, 5, 6, 8, 10],
      'name': 'Major scale - Diatonic scale - Heptatonic major - Major inverse',
      'carter-number': '7',
      'complement-forte-code': '5-35',
      'documentation-link': 'https://drive.google.com/file/d/1BaePHUIS59Q5KQeTzLN72aeZ1EEefLtN/view?usp=drive_link'
    },
    {
      'forte-code': '7-Z12',
      'pitch-classes': [0, 1, 2, 3, 4, 7, 9],
      'name': 'Afro american blues scale',
      'carter-number': '5',
      'complement-forte-code': '5-Z12',
      'documentation-link': 'https://drive.google.com/file/d/1dtKKy9WWWKRIqdR3REzshO0VoGukUOmH/view?usp=drive_link'
    },
    {
      'forte-code': '7-Z17',
      'pitch-classes': [0, 1, 2, 4, 5, 6, 9],
      'name': null,
      'carter-number': '10',
      'complement-forte-code': '5-Z17',
      'documentation-link': null
    },
    {
      'forte-code': '7-z18',
      'pitch-classes': [0, 1, 4, 5, 6, 7, 9],
      'name': 'Enigmatica menor',
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': 'https://drive.google.com/file/d/10jnSwf__2hLGHgLhwjAwCXL6PWyWxPyB/view?usp=drive_link'
    },
    {
      'forte-code': '7-Z18A',
      'pitch-classes': [0, 1, 4, 5, 6, 7, 9],
      'name': null,
      'carter-number': '35',
      'complement-forte-code': '5-Z18B',
      'documentation-link': null
    },
    {
      'forte-code': '7-Z18B',
      'pitch-classes': [0, 2, 3, 4, 5, 8, 9],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '5-Z18A',
      'documentation-link': null
    },
    {
      'forte-code': '7-z36',
      'pitch-classes': [0, 1, 2, 3, 5, 6, 8],
      'name': null,
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '7-Z36A',
      'pitch-classes': [0, 1, 2, 3, 5, 6, 8],
      'name': null,
      'carter-number': '16',
      'complement-forte-code': '5-Z36B',
      'documentation-link': null
    },
    {
      'forte-code': '7-Z36B',
      'pitch-classes': [0, 2, 3, 5, 6, 7, 8],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '5-Z36A',
      'documentation-link': null
    },
    {
      'forte-code': '7-Z37',
      'pitch-classes': [0, 1, 3, 4, 5, 7, 8],
      'name': null,
      'carter-number': '3',
      'complement-forte-code': '5-Z37',
      'documentation-link': null
    },
    {
      'forte-code': '7-z38',
      'pitch-classes': [0, 1, 2, 4, 5, 7, 8],
      'name': null,
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '7-Z38A',
      'pitch-classes': [0, 1, 2, 4, 5, 7, 8],
      'name': null,
      'carter-number': '29',
      'complement-forte-code': '5-Z38B',
      'documentation-link': null
    },
    {
      'forte-code': '7-Z38B',
      'pitch-classes': [0, 1, 3, 4, 6, 7, 8],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '5-Z38A',
      'documentation-link': null
    },
    {
      'forte-code': '8-1',
      'pitch-classes': [0, 1, 2, 3, 4, 5, 6, 7],
      'name': 'Chromatic octatonic',
      'carter-number': null,
      'complement-forte-code': '4-1',
      'documentation-link': null
    },
    {
      'forte-code': '8-2',
      'pitch-classes': [0, 1, 2, 3, 4, 5, 6, 8],
      'name': null,
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '8-2A',
      'pitch-classes': [0, 1, 2, 3, 4, 5, 6, 8],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '4-2B',
      'documentation-link': null
    },
    {
      'forte-code': '8-2B',
      'pitch-classes': [0, 2, 3, 4, 5, 6, 7, 8],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '4-2A',
      'documentation-link': null
    },
    {
      'forte-code': '8-3',
      'pitch-classes': [0, 1, 2, 3, 4, 5, 6, 9],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '4-3',
      'documentation-link': null
    },
    {
      'forte-code': '8-4',
      'pitch-classes': [0, 1, 2, 3, 4, 5, 7, 8],
      'name': null,
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '8-4A',
      'pitch-classes': [0, 1, 2, 3, 4, 5, 7, 8],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '4-4B',
      'documentation-link': null
    },
    {
      'forte-code': '8-4B',
      'pitch-classes': [0, 1, 3, 4, 5, 6, 7, 8],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '4-4A',
      'documentation-link': null
    },
    {
      'forte-code': '8-5',
      'pitch-classes': [0, 1, 2, 3, 4, 6, 7, 8],
      'name': null,
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '8-5A',
      'pitch-classes': [0, 1, 2, 3, 4, 6, 7, 8],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '4-5B',
      'documentation-link': null
    },
    {
      'forte-code': '8-5B',
      'pitch-classes': [0, 1, 2, 4, 5, 6, 7, 8],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '4-5A',
      'documentation-link': null
    },
    {
      'forte-code': '8-6',
      'pitch-classes': [0, 1, 2, 3, 5, 6, 7, 8],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '4-6',
      'documentation-link': null
    },
    {
      'forte-code': '8-7',
      'pitch-classes': [0, 1, 2, 3, 4, 5, 8, 9],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '4-7',
      'documentation-link': null
    },
    {
      'forte-code': '8-8',
      'pitch-classes': [0, 1, 2, 3, 4, 7, 8, 9],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '4-8',
      'documentation-link': null
    },
    {
      'forte-code': '8-9',
      'pitch-classes': [0, 1, 2, 3, 6, 7, 8, 9],
      'name': 'Messiaen mode 4 11131113',
      'carter-number': null,
      'complement-forte-code': '4-9',
      'documentation-link': 'https://drive.google.com/file/d/1B2f5NJwgJ83FuVM0MGHw45BJUtHSFpw5/view?usp=drive_link'
    },
    {
      'forte-code': '8-10',
      'pitch-classes': [0, 2, 3, 4, 5, 6, 7, 9],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '4-10',
      'documentation-link': null
    },
    {
      'forte-code': '8-11',
      'pitch-classes': [0, 1, 2, 3, 4, 5, 7, 9],
      'name': null,
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '8-11A',
      'pitch-classes': [0, 1, 2, 3, 4, 5, 7, 9],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '4-11B',
      'documentation-link': null
    },
    {
      'forte-code': '8-11B',
      'pitch-classes': [0, 2, 4, 5, 6, 7, 8, 9],
      'name': 'Blues octatonic 1',
      'carter-number': null,
      'complement-forte-code': '4-11A',
      'documentation-link': null
    },
    {
      'forte-code': '8-12',
      'pitch-classes': [0, 1, 3, 4, 5, 6, 7, 9],
      'name': null,
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '8-12A',
      'pitch-classes': [0, 1, 3, 4, 5, 6, 7, 9],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '4-12A',
      'documentation-link': null
    },
    {
      'forte-code': '8-12B',
      'pitch-classes': [0, 2, 3, 4, 5, 6, 8, 9],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '4-12B',
      'documentation-link': null
    },
    {
      'forte-code': '8-13',
      'pitch-classes': [0, 1, 2, 3, 4, 6, 7, 9],
      'name': 'Blues octatonic 2',
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '8-13A',
      'pitch-classes': [0, 1, 2, 3, 4, 6, 7, 9],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '4-13B',
      'documentation-link': null
    },
    {
      'forte-code': '8-13B',
      'pitch-classes': [0, 2, 3, 5, 6, 7, 8, 9],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '4-13A',
      'documentation-link': null
    },
    {
      'forte-code': '8-14',
      'pitch-classes': [0, 1, 2, 4, 5, 6, 7, 9],
      'name': null,
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '8-14A',
      'pitch-classes': [0, 1, 2, 4, 5, 6, 7, 9],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '4-14A',
      'documentation-link': null
    },
    {
      'forte-code': '8-14B',
      'pitch-classes': [0, 2, 3, 4, 5, 7, 8, 9],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '4-14B',
      'documentation-link': null
    },
    {
      'forte-code': '8-16',
      'pitch-classes': [0, 1, 2, 3, 5, 7, 8, 9],
      'name': null,
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '8-16A',
      'pitch-classes': [0, 1, 2, 3, 5, 7, 8, 9],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '4-16B',
      'documentation-link': null
    },
    {
      'forte-code': '8-16B',
      'pitch-classes': [0, 1, 2, 4, 6, 7, 8, 9],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '4-16A',
      'documentation-link': null
    },
    {
      'forte-code': '8-17',
      'pitch-classes': [0, 1, 3, 4, 5, 6, 8, 9],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '4-17',
      'documentation-link': null
    },
    {
      'forte-code': '8-18',
      'pitch-classes': [0, 1, 2, 3, 5, 6, 8, 9],
      'name': null,
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '8-18A',
      'pitch-classes': [0, 1, 2, 3, 5, 6, 8, 9],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '4-18B',
      'documentation-link': null
    },
    {
      'forte-code': '8-18B',
      'pitch-classes': [0, 1, 3, 4, 6, 7, 8, 9],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '4-18A',
      'documentation-link': null
    },
    {
      'forte-code': '8-19',
      'pitch-classes': [0, 1, 2, 4, 5, 6, 8, 9],
      'name': null,
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '8-19A',
      'pitch-classes': [0, 1, 2, 4, 5, 6, 8, 9],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '4-19B',
      'documentation-link': null
    },
    {
      'forte-code': '8-19B',
      'pitch-classes': [0, 1, 3, 4, 5, 7, 8, 9],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '4-19A',
      'documentation-link': null
    },
    {
      'forte-code': '8-20',
      'pitch-classes': [0, 1, 2, 4, 5, 7, 8, 9],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '4-20',
      'documentation-link': null
    },
    {
      'forte-code': '8-21',
      'pitch-classes': [0, 1, 2, 3, 4, 6, 8, 10],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '4-21',
      'documentation-link': null
    },
    {
      'forte-code': '8-22',
      'pitch-classes': [0, 1, 2, 3, 5, 6, 8, 10],
      'name': 'Bebop ionian 2b 2',
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': 'https://drive.google.com/file/d/1UIqRsNdBqdZo0f7PjcE59yOCxk2CFrLA/view?usp=drive_link'
    },
    {
      'forte-code': '8-22A',
      'pitch-classes': [0, 1, 2, 3, 5, 6, 8, 10],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '4-22B',
      'documentation-link': null
    },
    {
      'forte-code': '8-22B',
      'pitch-classes': [0, 1, 3, 4, 5, 6, 8, 10],
      'name': 'Spanish octatonic 12111222',
      'carter-number': null,
      'complement-forte-code': '4-22A',
      'documentation-link': null
    },
    {
      'forte-code': '8-23',
      'pitch-classes': [0, 1, 2, 3, 5, 7, 8, 10],
      'name': 'Quartal oxtatonic - Bebop dorian - Bebop mixolydian ',
      'carter-number': null,
      'complement-forte-code': '4-23',
      'documentation-link': 'https://drive.google.com/file/d/1XZPq5sWiUpRU02v-jCKqJ-f9WyCKDsMg/view?usp=drive_link'
    },
    {
      'forte-code': '8-24',
      'pitch-classes': [0, 1, 2, 4, 5, 6, 8, 10],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '4-24',
      'documentation-link': null
    },
    {
      'forte-code': '8-25',
      'pitch-classes': [0, 1, 2, 4, 6, 7, 8, 10],
      'name': 'Dominant 5b diminished scale (Barry harris) - Messiaen mode 6 11221122',
      'carter-number': null,
      'complement-forte-code': '4-25',
      'documentation-link': 'https://drive.google.com/file/d/148OfImSUoMghoM3ElmVuqBzJbRHnahOJ/view?usp=drive_link'
    },
    {
      'forte-code': '8-26',
      'pitch-classes': [0, 1, 3, 4, 5, 7, 8, 10],
      'name': 'Major sixth diminished scale (Barry harris) - Bebop ionian - Phrygian spanish 12112122 - Blues mode 2 21211212 ',
      'carter-number': null,
      'complement-forte-code': '4-26',
      'documentation-link': 'https://drive.google.com/file/d/1_xdgH_aakyJm9MvzjwiwpTza5Fd_0R26/view?usp=drive_link'
    },
    {
      'forte-code': '8-27',
      'pitch-classes': [0, 1, 2, 4, 5, 7, 8, 10],
      'name': 'Minor sixth diminished scale (Barry harris)',
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': 'https://drive.google.com/file/d/1rFmh85WxVxar1AyV1E_sXtQSVdtQ-eM5/view?usp=drive_link'
    },
    {
      'forte-code': '8-27A',
      'pitch-classes': [0, 1, 2, 4, 5, 7, 8, 10],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '4-27B',
      'documentation-link': null
    },
    {
      'forte-code': '8-27B',
      'pitch-classes': [0, 1, 3, 4, 6, 7, 8, 10],
      'name': 'Dominant diminished scale (Barry harris)',
      'carter-number': null,
      'complement-forte-code': '4-27A',
      'documentation-link': 'https://drive.google.com/file/d/1yAPUFT8xD3FbxUGyaewlCjxmysE96HWv/view?usp=drive_link'
    },
    {
      'forte-code': '8-28',
      'pitch-classes': [0, 1, 3, 4, 6, 7, 9, 10],
      'name': 'Octatonic - Diminished scale',
      'carter-number': null,
      'complement-forte-code': '4-28',
      'documentation-link': 'https://drive.google.com/file/d/14XegTozCCxXft5Hv5c-qIN6Z5zHZ3s_K/view?usp=drive_link'
    },
    {
      'forte-code': '8-z15',
      'pitch-classes': [0, 1, 2, 3, 4, 6, 8, 9],
      'name': null,
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '8-Z15A',
      'pitch-classes': [0, 1, 2, 3, 4, 6, 8, 9],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '4-Z15B',
      'documentation-link': null
    },
    {
      'forte-code': '8-Z15B',
      'pitch-classes': [0, 1, 3, 5, 6, 7, 8, 9],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '4-Z15A',
      'documentation-link': null
    },
    {
      'forte-code': '8-z29',
      'pitch-classes': [0, 1, 2, 3, 5, 6, 7, 9],
      'name': null,
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '8-Z29A',
      'pitch-classes': [0, 1, 2, 3, 5, 6, 7, 9],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '4-Z29B',
      'documentation-link': null
    },
    {
      'forte-code': '8-Z29B',
      'pitch-classes': [0, 2, 3, 4, 6, 7, 8, 9],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '4-Z29A',
      'documentation-link': null
    },
    {
      'forte-code': '9-1',
      'pitch-classes': [0, 1, 2, 3, 4, 5, 6, 7, 8],
      'name': 'Chromatic nonachord',
      'carter-number': null,
      'complement-forte-code': '3-1',
      'documentation-link': null
    },
    {
      'forte-code': '9-2',
      'pitch-classes': [0, 1, 2, 3, 4, 5, 6, 7, 9],
      'name': null,
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '9-2A',
      'pitch-classes': [0, 1, 2, 3, 4, 5, 6, 7, 9],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '3-2B',
      'documentation-link': null
    },
    {
      'forte-code': '9-2B',
      'pitch-classes': [0, 2, 3, 4, 5, 6, 7, 8, 9],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '3-2A',
      'documentation-link': null
    },
    {
      'forte-code': '9-3',
      'pitch-classes': [0, 1, 2, 3, 4, 5, 6, 8, 9],
      'name': null,
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '9-3A',
      'pitch-classes': [0, 1, 2, 3, 4, 5, 6, 8, 9],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '3-3B',
      'documentation-link': null
    },
    {
      'forte-code': '9-3B',
      'pitch-classes': [0, 1, 3, 4, 5, 6, 7, 8, 9],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '3-3A',
      'documentation-link': null
    },
    {
      'forte-code': '9-4',
      'pitch-classes': [0, 1, 2, 3, 4, 5, 7, 8, 9],
      'name': null,
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '9-4A',
      'pitch-classes': [0, 1, 2, 3, 4, 5, 7, 8, 9],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '3-4B',
      'documentation-link': null
    },
    {
      'forte-code': '9-4B',
      'pitch-classes': [0, 1, 2, 4, 5, 6, 7, 8, 9],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '3-4A',
      'documentation-link': null
    },
    {
      'forte-code': '9-5',
      'pitch-classes': [0, 1, 2, 3, 4, 6, 7, 8, 9],
      'name': null,
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '9-5A',
      'pitch-classes': [0, 1, 2, 3, 4, 6, 7, 8, 9],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '3-5B',
      'documentation-link': null
    },
    {
      'forte-code': '9-5B',
      'pitch-classes': [0, 1, 2, 3, 5, 6, 7, 8, 9],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '3-5A',
      'documentation-link': null
    },
    {
      'forte-code': '9-6',
      'pitch-classes': [0, 1, 2, 3, 4, 5, 6, 8, 10],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '3-6',
      'documentation-link': null
    },
    {
      'forte-code': '9-7',
      'pitch-classes': [0, 1, 2, 3, 4, 5, 7, 8, 10],
      'name': 'Blues nonatonic scale - Barry harris major chromatic scale',
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': 'https://drive.google.com/file/d/1kWo3GnwLMjt-MDI8TdnlPO3F1TwT1pGD/view?usp=drive_link'
    },
    {
      'forte-code': '9-7A',
      'pitch-classes': [0, 1, 2, 3, 4, 5, 7, 8, 10],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '3-7B',
      'documentation-link': null
    },
    {
      'forte-code': '9-7B',
      'pitch-classes': [0, 1, 3, 4, 5, 6, 7, 8, 10],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '3-7A',
      'documentation-link': null
    },
    {
      'forte-code': '9-8',
      'pitch-classes': [0, 1, 2, 3, 4, 6, 7, 8, 10],
      'name': null,
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '9-8A',
      'pitch-classes': [0, 1, 2, 3, 4, 6, 7, 8, 10],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '3-8B',
      'documentation-link': null
    },
    {
      'forte-code': '9-8B',
      'pitch-classes': [0, 1, 2, 4, 5, 6, 7, 8, 10],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '3-8A',
      'documentation-link': null
    },
    {
      'forte-code': '9-9',
      'pitch-classes': [0, 1, 2, 3, 5, 6, 7, 8, 10],
      'name': 'Raga Ramdasi Malhar 211122111',
      'carter-number': null,
      'complement-forte-code': '3-9',
      'documentation-link': null
    },
    {
      'forte-code': '9-10',
      'pitch-classes': [0, 1, 2, 3, 4, 6, 7, 9, 10],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '3-10',
      'documentation-link': null
    },
    {
      'forte-code': '9-11',
      'pitch-classes': [0, 1, 2, 3, 5, 6, 7, 9, 10],
      'name': null,
      'carter-number': null,
      'complement-forte-code': null,
      'documentation-link': null
    },
    {
      'forte-code': '9-11A',
      'pitch-classes': [0, 1, 2, 3, 5, 6, 7, 9, 10],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '3-11B',
      'documentation-link': null
    },
    {
      'forte-code': '9-11B',
      'pitch-classes': [0, 1, 2, 4, 5, 6, 7, 9, 10],
      'name': 'Diminished nonachord',
      'carter-number': null,
      'complement-forte-code': '3-11A',
      'documentation-link': null
    },
    {
      'forte-code': '9-12',
      'pitch-classes': [0, 1, 2, 4, 5, 6, 8, 9, 10],
      'name': 'Tcherepnin - Messiaen mode 3 112112112',
      'carter-number': null,
      'complement-forte-code': '3-12',
      'documentation-link': 'https://drive.google.com/file/d/1_nlEqfmh3FRjP64Wi2LuMrtZ_8G8ypif/view?usp=drive_link'
    },
    {
      'forte-code': '10-1',
      'pitch-classes': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      'name': 'Chromatic dodecatonic scale',
      'carter-number': null,
      'complement-forte-code': '2-1',
      'documentation-link': null
    },
    {
      'forte-code': '10-2',
      'pitch-classes': [0, 1, 2, 3, 4, 5, 6, 7, 8, 10],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '2-2',
      'documentation-link': null
    },
    {
      'forte-code': '10-3',
      'pitch-classes': [0, 1, 2, 3, 4, 5, 6, 7, 9, 10],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '2-3',
      'documentation-link': null
    },
    {
      'forte-code': '10-4',
      'pitch-classes': [0, 1, 2, 3, 4, 5, 6, 8, 9, 10],
      'name': null,
      'carter-number': null,
      'complement-forte-code': '2-4',
      'documentation-link': null
    },
    {
      'forte-code': '10-5',
      'pitch-classes': [0, 1, 2, 3, 4, 5, 7, 8, 9, 10],
      'name': 'Major-minor mixed scale',
      'carter-number': null,
      'complement-forte-code': '2-5',
      'documentation-link': null
    },
    {
      'forte-code': '10-6',
      'pitch-classes': [0, 1, 2, 3, 4, 6, 7, 8, 9, 10],
      'name': 'Messiaen mode 7 1111211112',
      'carter-number': null,
      'complement-forte-code': '2-6',
      'documentation-link': 'https://drive.google.com/file/d/1MFhCF1B1DKBdCDt8Z-hzEhQ_EuI740iS/view?usp=drive_link'
    },
    {
      'forte-code': '11-1',
      'pitch-classes': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      'name': 'Undecatonic scale',
      'carter-number': null,
      'complement-forte-code': '1-1',
      'documentation-link': null
    },
    {
      'forte-code': '12-1',
      'pitch-classes': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      'name': 'Chromatic scale',
      'carter-number': null,
      'complement-forte-code': '0-1',
      'documentation-link': 'https://drive.google.com/file/d/1XMDylQSsUWToe6EOAQPgY2jBWwob59xB/view?usp=drive_link'
    }
  ],

  /**
   * Returns the chord with the given forte code from the `CHORDS.data` array.
   * @param {string} forteCode - The forte code of the chord to retrieve.
   * @returns {Chord | undefined} The chord with the given forte code, or undefined if no
   * chord exists with that forte code.
   */
  getByForteCode(forteCode) {
    for (let chord of this.data) {
      if (chord['forte-code'] === forteCode) {
        return chord
      }
    }
  },

  /**
   * Returns the chord with the specified pitch classes from the `CHORDS.data` array.
   * @param {Array<number>} pitchClasses - An array of pitch classes to match.
   * @returns {Chord | undefined} The chord object if found, otherwise undefined.
   */
  getByPitchClasses(pitchClasses) {
    pitchClasses = pitchClasses.sort((a, b) => a - b)
    for (let chord of this.data) {
      chordClasses = chord['pitch-classes'].sort((a, b) => a - b)
      if (pitchClasses.length !== chordClasses.length) continue
      for (let i = 0; i < pitchClasses.length; i++) {
        if (pitchClasses[i] !== chordClasses[i]) break
        if (i === pitchClasses.length - 1) return chord
      }
    }
  },

  /**
   * Returns all chords with the given cardinality from the `CHORDS.data` array.
   * @param {number} cardinality - The cardinality of the chords to retrieve.
   * @returns {Array<Chord>} An array of chord objects with the given cardinality.
   */
  getAllByCardinality(cardinality) {
    const chordsWithCardinality = []
    for (let chord of this.data) {
      if (chord['pitch-classes'].length === cardinality) chordsWithCardinality.push(chord)
    }
    return chordsWithCardinality
  }
}