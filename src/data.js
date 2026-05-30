import rb1 from './assets/rumusBangun/1.jpeg';
import rb2 from './assets/rumusBangun/2.jpeg';
import rb3 from './assets/rumusBangun/3.jpeg';
import rb4 from './assets/rumusBangun/4.jpeg';
import rb5 from './assets/rumusBangun/5.jpeg';
import rb6 from './assets/rumusBangun/6.jpeg';
import rb7 from './assets/rumusBangun/7.jpeg';
import rb8 from './assets/rumusBangun/8.jpeg';
import rb9 from './assets/rumusBangun/9.jpeg';
import rb10 from './assets/rumusBangun/10.jpeg';

import rb2_1 from './assets/rumusBangun2/1.jpeg';
import rb2_2 from './assets/rumusBangun2/2.jpeg';
import rb2_3 from './assets/rumusBangun2/3.jpeg';
import rb2_4 from './assets/rumusBangun2/4.jpeg';
import rb2_5 from './assets/rumusBangun2/5.jpeg';
import rb2_6 from './assets/rumusBangun2/6.jpeg';
import rb2_7 from './assets/rumusBangun2/7.jpeg';
import rb2_8 from './assets/rumusBangun2/8.jpeg';
import rb2_9 from './assets/rumusBangun2/9.jpeg';
import rb2_10 from './assets/rumusBangun2/10.jpeg';

// ==================== Batch 1 (1-10) ====================
const compoundsData1 = [
  {
    id: 'c1',
    name: 'Asam Klorida',
    formula: 'HCl',
    wujud: 'Cairan tidak berwarna',
    hazards: ['Korosif', 'Iritan'],
    rumusBangun: rb1,
    msds: {
      link: 'https://drive.google.com/file/d/10J9x6NhsfLvytul5-iM5Dfc6mP5Su83P/view?usp=drive_link'
    }
  },
  {
    id: 'c2',
    name: 'Asam Sulfat',
    formula: 'H₂SO₄',
    wujud: 'Cairan kental, tidak berwarna',
    hazards: ['Korosif'],
    rumusBangun: rb2,
    msds: {
      link: 'https://drive.google.com/file/d/17BxhTYKXlJsASf_16KbP7bIcq0Y1A1Yw/view?usp=drive_link'
    }
  },
  {
    id: 'c3',
    name: 'Asam Oksalat',
    formula: 'H₂C₂O₄',
    wujud: 'Padatan berwarna putih',
    hazards: ['Beracun', 'Iritan'],
    rumusBangun: rb3,
    msds: {
      link: 'https://drive.google.com/file/d/1rc-WHE2mjlZEYpGjW3ZFndgRNIgc0y05/view?usp=drive_link'
    }
  },
  {
    id: 'c4',
    name: 'Asam Nitrat',
    formula: 'HNO₃',
    wujud: 'Cairan berwarna bening',
    hazards: ['Korosif', 'Oksidator'],
    rumusBangun: rb4,
    msds: {
      link: 'https://drive.google.com/file/d/1ND_i0NtGM6wQLCIK9aU44v7Yr40R3JN_/view?usp=drive_link'
    }
  },
  {
    id: 'c5',
    name: 'Asam Perklorat',
    formula: 'HClO₄',
    wujud: 'Cairan tidak berwarna',
    hazards: ['Korosif', 'Oksidator'],
    rumusBangun: rb5,
    msds: {
      link: 'https://drive.google.com/file/d/16LmDex-9S51qj3nKetMv1PGKf_uhQnjX/view?usp=drive_link'
    }
  },
  {
    id: 'c6',
    name: 'Asam Borat',
    formula: 'H₃BO₃',
    wujud: 'Kristal tidak berwarna',
    hazards: ['Iritan'],
    rumusBangun: rb6,
    msds: {
      link: 'https://drive.google.com/file/d/1XPaYV6H2kmNAaS07OkJZOL8BHuXBgeal/view?usp=drive_link'
    }
  },
  {
    id: 'c7',
    name: 'Kalium Klorida',
    formula: 'KCl',
    wujud: 'Garam kristal berwarna putih',
    hazards: ['Iritan'],
    rumusBangun: rb7,
    msds: {
      link: 'https://drive.google.com/file/d/1xOJEVojQ1SVDctKOg2ckvTaUD0zce404/view?usp=drive_link'
    }
  },
  {
    id: 'c8',
    name: 'Kalium Hidroksida',
    formula: 'KOH',
    wujud: 'Padatan putih',
    hazards: ['Korosif'],
    rumusBangun: rb8,
    msds: {
      link: 'https://drive.google.com/file/d/1suqVa_ch2VX288QG6qqn68p5IewLuEdG/view?usp=drive_link'
    }
  },
  {
    id: 'c9',
    name: 'Kalium Iodida',
    formula: 'KI',
    wujud: 'Bubuk padat, berwarna putih',
    hazards: ['Iritan'],
    rumusBangun: rb9,
    msds: {
      link: 'https://drive.google.com/file/d/1cskxKPe6CyHjEUY6vNP7HG0TxHnr9iwe/view?usp=drive_link'
    }
  },
  {
    id: 'c10',
    name: 'Benzoil Peroksida',
    formula: 'C₁₄H₁₀O₄',
    wujud: 'Kristal tidak berwarna',
    hazards: ['Oksidator', 'Mudah Terbakar', 'Iritan'],
    rumusBangun: rb10,
    msds: {
      link: 'https://drive.google.com/file/d/1_nViPty06SdTFAinFSiPpyBfPcQ_WoBg/view?usp=drive_link'
    }
  }
];

// ==================== Batch 2 (11-20) ====================
const compoundsData2 = [
  {
    id: 'c11',
    name: 'Kalium Nitrat',
    formula: 'KNO₃',
    wujud: 'Kristal putih',
    hazards: ['Oksidator'],
    rumusBangun: rb2_1,
    msds: {
      link: 'https://drive.google.com/file/d/16SMWGl0Ij15m1haEkXPJrLHHPGzjgutC/view'
    }
  },
  {
    id: 'c12',
    name: 'Kalium Permanganat',
    formula: 'KMnO₄',
    wujud: 'Kristal ungu',
    hazards: ['Oksidator', 'Korosif'],
    rumusBangun: rb2_2,
    msds: {
      link: 'https://drive.google.com/file/d/1URWiNCxtqe859ddphnKXl_xwzzJzSuf_/view'
    }
  },
  {
    id: 'c13',
    name: 'Kalium Dikromat',
    formula: 'K₂Cr₂O₇',
    wujud: 'Kristal oranye',
    hazards: ['Toksik', 'Oksidator', 'Karsinogenik'],
    rumusBangun: rb2_3,
    msds: {
      link: 'https://drive.google.com/file/d/1MmXuclvVtxFIu1qSuy_iqdYgEFHXu0sY/view'
    }
  },
  {
    id: 'c14',
    name: 'Natrium Hidroksida',
    formula: 'NaOH',
    wujud: 'Padatan putih higroskopis',
    hazards: ['Korosif'],
    rumusBangun: rb2_4,
    msds: {
      link: 'https://drive.google.com/file/d/1fWcNsVEkk7WQ5oIvclbMU9Xjm2smOJuG/view'
    }
  },
  {
    id: 'c15',
    name: 'Natrium Klorida',
    formula: 'NaCl',
    wujud: 'Kristal putih',
    hazards: ['Iritan'],
    rumusBangun: rb2_5,
    msds: {
      link: 'https://drive.google.com/file/d/132Re4CTtkZ_DoFsAGeooSIY4pGaT_7hw/view'
    }
  },
  {
    id: 'c16',
    name: 'Natrium Azida',
    formula: 'NaN₃',
    wujud: 'Kristal putih',
    hazards: ['Beracun', 'Eksplosif'],
    rumusBangun: rb2_6,
    msds: {
      link: 'https://drive.google.com/file/d/1Cq77FQJT7tDbs9IZY6-R-x26D1IwSK1s/view'
    }
  },
  {
    id: 'c17',
    name: 'Natrium Karbonat',
    formula: 'Na₂CO₃',
    wujud: 'Padatan putih',
    hazards: ['Iritan'],
    rumusBangun: rb2_7,
    msds: {
      link: 'https://drive.google.com/file/d/1UtBv6mxuXi7yRvUTuk1OHEO8jIqf1nkG/view'
    }
  },
  {
    id: 'c18',
    name: 'Kalium Karbonat',
    formula: 'K₂CO₃',
    wujud: 'Padatan putih higroskopis',
    hazards: ['Iritan'],
    rumusBangun: rb2_8,
    msds: {
      link: 'https://drive.google.com/file/d/1vFGHse8UvQ1A7WQAqRwsBPMa9eDykY7x/view'
    }
  },
  {
    id: 'c19',
    name: 'Natrium Nitrit',
    formula: 'NaNO₂',
    wujud: 'Padatan putih kekuningan',
    hazards: ['Toksik', 'Oksidator'],
    rumusBangun: rb2_9,
    msds: {
      link: 'https://drive.google.com/file/d/130oF6_7wyAN7DuW6IY2hus0Jv1KF1jay/view'
    }
  },
  {
    id: 'c20',
    name: 'Ammonium Klorida',
    formula: 'NH₄Cl',
    wujud: 'Kristal putih',
    hazards: ['Iritan'],
    rumusBangun: rb2_10,
    msds: {
      link: 'https://drive.google.com/file/d/1qfyt5UDPQjwZ7RNxp7BRSC2JbK2-Prpc/view'
    }
  }
];

// ==================== Batch 3 (21-30) ====================
const compoundsData3 = [
  {
    id: 'c21',
    name: 'Amonia',
    formula: 'NH₃',
    wujud: 'Cairan tidak berwarna (larutan amonia) atau gas tidak berwarna',
    hazards: ['Toksik', 'Karsinogenik'],
    rumusBangun: null,
    msds: {
      link: 'https://drive.google.com/file/d/1PlZfM6tPGIdru7HLMUokUY9EC8f0Xoqa/view?usp=drive_link'
    }
  },
  {
    id: 'c22',
    name: 'Amonium Flouride',
    formula: 'NH₄F',
    wujud: 'Padatan kristal putih',
    hazards: ['Toksik', 'Korosif'],
    rumusBangun: null,
    msds: {
      link: 'https://drive.google.com/file/d/1yTgf_mBkwtd3wwV5c0aRwJ3aRZhzcm37/view?usp=drive_link'
    }
  },
  {
    id: 'c23',
    name: 'Xylene',
    formula: 'C₈H₁₀',
    wujud: 'Cairan tidak berwarna',
    hazards: ['Iritan', 'Mudah Terbakar', 'Karsinogen'],
    rumusBangun: null,
    msds: {
      link: 'https://drive.google.com/file/d/1JpyA0QwO4RMCbgEehkVlnml0_TTjQGpx/view?usp=drive_link'
    }
  },
  {
    id: 'c24',
    name: 'Kalsium Hidroksida',
    formula: 'Ca(OH)₂',
    wujud: 'Serbuk atau padatan putih',
    hazards: ['Korosif', 'Iritan'],
    rumusBangun: null,
    msds: {
      link: 'https://drive.google.com/file/d/1gywp-mtw45k49blGDc5HRMJZUX1mPL-P/view?usp=drive_link'
    }
  },
  {
    id: 'c25',
    name: 'Phenol',
    formula: 'C₆H₅OH',
    wujud: 'Kristal padat putih hingga merah muda pucat',
    hazards: ['Korosif', 'Toksik', 'Karsinogen', 'Iritan', 'Mudah Terbakar', 'Berbahaya bagi Lingkungan'],
    rumusBangun: null,
    msds: {
      link: 'https://drive.google.com/file/d/1jP53ZW549xzxT30oFSIqdSpzoqEji8U7/view?usp=drive_link'
    }
  },
  {
    id: 'c26',
    name: 'Tembaga II Sulfat',
    formula: 'CuSO₄',
    wujud: 'Kristal padat berwarna biru',
    hazards: ['Iritasi', 'Berbahaya bagi Lingkungan'],
    rumusBangun: null,
    msds: {
      link: 'https://drive.google.com/drive/folders/1OWewu2EaCHJkSaPLWrVt9myA5uyKhQ-X'
    }
  },
  {
    id: 'c27',
    name: 'Hexylamine',
    formula: 'C₆H₁₅N',
    wujud: 'Cairan tidak berwarna hingga kuning pucat',
    hazards: ['Toksik', 'Iritan', 'Mudah Terbakar', 'Karsinogen', 'Berbahaya bagi Lingkungan'],
    rumusBangun: null,
    msds: {
      link: 'https://drive.google.com/drive/folders/1OWewu2EaCHJkSaPLWrVt9myA5uyKhQ-X'
    }
  },
  {
    id: 'c28',
    name: 'Kloroform',
    formula: 'CHCl₃',
    wujud: 'Cairan tidak berwarna',
    hazards: ['Iritasi', 'Karsinogen', 'Mudah Terbakar'],
    rumusBangun: null,
    msds: {
      link: 'https://drive.google.com/file/d/1HBGViGMCQGVTnSZG21-FYs5F1Et4Sc71/view?usp=drive_link'
    }
  },
  {
    id: 'c29',
    name: 'Etil Asetat',
    formula: 'C₄H₈O₂',
    wujud: 'Cairan tidak berwarna',
    hazards: ['Toksik', 'Iritan', 'Mudah Terbakar', 'Karsinogen'],
    rumusBangun: null,
    msds: {
      link: 'https://drive.google.com/file/d/1zlSOWKAOakk0xwPC5OtE35HtLgyJLKb_/view?usp=drive_link'
    }
  },
  {
    id: 'c30',
    name: 'Formaldehida',
    formula: 'CH₂O',
    wujud: 'Larutan cair tidak berwarna (formalin) atau gas tidak berwarna',
    hazards: ['Korosif', 'Toksik', 'Karsinogen'],
    rumusBangun: null,
    msds: {
      link: 'https://drive.google.com/file/d/1607FUUhjTI4uLl1DGdmNQGrnxT5ZVZSZ/view?usp=sharing'
    }
  }
];

// ==================== Batch 4 (31-39) ====================
const compoundsData4 = [
  {
    id: 'c31',
    name: 'Metanol',
    formula: 'CH₃OH',
    wujud: 'Cairan tidak berwarna',
    hazards: ['Mudah Terbakar', 'Beracun'],
    rumusBangun: null,
    msds: {
      link: 'https://share.google/wP7XMzKQsevPEcFXy'
    }
  },
  {
    id: 'c32',
    name: 'Etanol',
    formula: 'C₂H₅OH',
    wujud: 'Cairan tidak berwarna',
    hazards: ['Mudah Terbakar'],
    rumusBangun: null,
    msds: {
      link: 'https://share.google/jzfPlmtM9OyC7Jxtj'
    }
  },
  {
    id: 'c33',
    name: 'Asetonitril',
    formula: 'C₂H₃N',
    wujud: 'Cairan tidak berwarna',
    hazards: ['Mudah Terbakar'],
    rumusBangun: null,
    msds: {
      link: 'https://share.google/uY2dWenkNsG01fYiZ'
    }
  },
  {
    id: 'c34',
    name: 'Dietil Eter',
    formula: 'C₄H₁₀O',
    wujud: 'Cairan tidak berwarna',
    hazards: ['Mudah Terbakar', 'Meledak'],
    rumusBangun: null,
    msds: {
      link: 'https://share.google/JKk1k85otMDlU3r4B'
    }
  },
  {
    id: 'c35',
    name: 'Benzena',
    formula: 'C₆H₆',
    wujud: 'Cairan tidak berwarna',
    hazards: ['Karsinogenik'],
    rumusBangun: null,
    msds: {
      link: 'https://share.google/qQ3of8T0m68INF5eo'
    }
  },
  {
    id: 'c36',
    name: 'N-Heksana',
    formula: 'C₆H₁₄',
    wujud: 'Cairan tidak berwarna',
    hazards: ['Mudah Terbakar'],
    rumusBangun: null,
    msds: {
      link: 'https://share.google/MLJEc2QLDBGh4VPac'
    }
  },
  {
    id: 'c37',
    name: 'Timbal II Nitrat',
    formula: 'Pb(NO₃)₂',
    wujud: 'Padatan kristal putih',
    hazards: ['Korosif'],
    rumusBangun: null,
    msds: {
      link: 'https://share.google/WeQzAnuOs5gmorho3'
    }
  },
  {
    id: 'c38',
    name: 'Timbal Asetat',
    formula: 'Pb(CH₃COO)₂',
    wujud: 'Kristal tidak berwarna',
    hazards: ['Beracun'],
    rumusBangun: null,
    msds: {
      link: 'https://share.google/PQQBR96RAT7d1EvgG'
    }
  },
  {
    id: 'c39',
    name: 'Strontium Nitrat',
    formula: 'Sr(NO₃)₂',
    wujud: 'Padatan tidak berwarna',
    hazards: ['Oksidator'],
    rumusBangun: null,
    msds: {
      link: 'https://share.google/vuciKMFJnUn4xP31R'
    }
  }
];

// ==================== Batch 5 (40-50) ====================
const compoundsData5 = [
  {
    id: 'c40',
    name: 'Barium Klorida',
    formula: 'BaCl₂',
    wujud: 'Padatan kristal putih',
    hazards: ['Beracun'],
    rumusBangun: null,
    msds: {
      link: 'https://drive.google.com/file/d/1iIfYM6AGQ4IH7epoCdH5r-Ffh2_dnvE_/view?usp=drive_link'
    }
  },
  {
    id: 'c41',
    name: 'Seng Klorida',
    formula: 'ZnCl₂',
    wujud: 'Serbuk kristal putih',
    hazards: ['Korosif', 'Iritan', 'Berbahaya bagi Lingkungan'],
    rumusBangun: null,
    msds: {
      link: 'https://drive.google.com/file/d/1srYJA8rToJ9pthBMwSc3rmwPAcbcwzW6/view?usp=drive_link'
    }
  },
  {
    id: 'c42',
    name: 'Tembaga (II) Nitrat Trihidrat',
    formula: 'Cu(NO₃)₂.3H₂O',
    wujud: 'Padatan kristal biru',
    hazards: ['Oksidator', 'Iritan', 'Berbahaya bagi Lingkungan'],
    rumusBangun: null,
    msds: {
      link: 'https://drive.google.com/file/d/1Kyl7ul8EOBJrRNrUB7y8DG_KqwXB-p9Y/view?usp=drive_link'
    }
  },
  {
    id: 'c43',
    name: 'Seng Sulfat Monohidrat',
    formula: 'ZnSO₄',
    wujud: 'Padatan kristal putih',
    hazards: ['Korosif', 'Iritan', 'Berbahaya bagi Lingkungan'],
    rumusBangun: null,
    msds: {
      link: 'https://drive.google.com/file/d/1AUTWIIo3rJZ576OHS5FkFgDiyGMy9UuJ/view'
    }
  },
  {
    id: 'c44',
    name: 'Meta Phosporic Acid',
    formula: 'HPO₃',
    wujud: 'Padatan kristal tak berwarna',
    hazards: ['Korosif'],
    rumusBangun: null,
    msds: {
      link: 'https://drive.google.com/file/d/12uxIVOjHPf_S79Ng7yd3jBtEcIvQrzYA/view?usp=drive_link'
    }
  },
  {
    id: 'c45',
    name: 'Toluena',
    formula: 'C₇H₈',
    wujud: 'Cairan tak berwarna',
    hazards: ['Oksidator', 'Bahaya Kesehatan', 'Iritan'],
    rumusBangun: null,
    msds: {
      link: 'https://drive.google.com/file/d/1s_QTQo4YPDrq3APS1xcRVuTHH1mSXwkd/view?usp=drive_link'
    }
  },
  {
    id: 'c46',
    name: 'Merkuri Oksida',
    formula: 'HgO',
    wujud: 'Padatan berwarna merah',
    hazards: ['Beracun', 'Bahaya Kesehatan', 'Berbahaya bagi Lingkungan'],
    rumusBangun: null,
    msds: {
      link: 'https://drive.google.com/file/d/1c42AQXPoYXF5Sg6wawieRRjdvzp5cgMZ/view'
    }
  },
  {
    id: 'c47',
    name: 'Seng Sulfat Heptahidrat',
    formula: 'ZnSO₄.7H₂O',
    wujud: 'Padatan keputih-putihan',
    hazards: ['Korosif', 'Iritan', 'Berbahaya bagi Lingkungan'],
    rumusBangun: null,
    msds: {
      link: 'https://drive.google.com/file/d/1agGjCndklVbt-HZFFiZf_pdSUzoP057X/view?usp=drive_link'
    }
  },
  {
    id: 'c48',
    name: 'Hidrogen Peroksida',
    formula: 'H₂O₂',
    wujud: 'Cairan tak berwarna',
    hazards: ['Korosif'],
    rumusBangun: null,
    msds: {
      link: 'https://drive.google.com/file/d/1QwNZ5tgGthmyiNWSnGlMzKGCoJ_UdGbE/view?usp=drive_link'
    }
  },
  {
    id: 'c49',
    name: 'Natrium Sianida',
    formula: 'NaCN',
    wujud: 'Padatan kristal putih',
    hazards: ['Beracun', 'Bahaya Kesehatan', 'Korosif', 'Berbahaya bagi Lingkungan'],
    rumusBangun: null,
    msds: {
      link: 'https://drive.google.com/file/d/150BmSfifNUP0JouhPGyITz1q3xQb4o-M/view?usp=drive_link'
    }
  },
  {
    id: 'c50',
    name: 'Bezoil Peroksida',
    formula: 'C₁₄H₁₀O₄',
    wujud: 'Padatan kristal putih',
    hazards: ['Mudah Terbakar', 'Iritan', 'Berbahaya bagi Lingkungan'],
    rumusBangun: null,
    msds: {
      link: 'https://drive.google.com/file/d/1zDKvitDmHSk3odA_vbybQFNy4whx_rpE/view?usp=drive_link'
    }
  }
];

export const compoundsData = [...compoundsData1, ...compoundsData2, ...compoundsData3, ...compoundsData4, ...compoundsData5];
