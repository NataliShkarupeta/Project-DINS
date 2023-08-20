import {
  CommonСold,
  SkinRashes,
  HighPressure,
  Allergy,
  LowPressure,
  Insomnia,
  Depression,
  Hysteria,
} from 'components/Features/Features/cardForDisease';
import {
  AllergyVisual,
  CommonСoldVisual,
  DepressionVisual,
  HighPressureVisual,
  HysteriaVisual,
  InsomniaVisual,
  LowPressureVisual,
  SkinRashesVisual,
} from 'components/Features/Features/visual';

export const diseases = [
  {
    title: 'herbalPage.diseases.commonСold.title',
    id: 'Card',
    card: CommonСold,
    herbs: ['липа', 'чабрець', 'шавлія'],
    visual: CommonСoldVisual,
  },
  {
    title: 'herbalPage.diseases.highPressure',
    id: 'ForDisease',
    card: HighPressure,
    visual: HighPressureVisual,
  },
  {
    title: 'herbalPage.diseases.lowPressure',
    id: 'One',
    card: LowPressure,
    visual: LowPressureVisual,
  },
  {
    title: 'herbalPage.diseases.insomnia',
    id: 'Second',
    card: Insomnia,
    visual: InsomniaVisual,
  },
  {
    title: 'herbalPage.diseases.depression',
    id: 'Third',
    card: Depression,
    visual: DepressionVisual,
  },
  {
    title: 'herbalPage.diseases.allergy',
    id: 'Fourth',
    card: Allergy,
    visual: AllergyVisual,
  },
  {
    title: 'herbalPage.diseases.skinRashes',
    id: 'Fifthth',
    card: SkinRashes,
    visual: SkinRashesVisual,
  },
  {
    title: 'herbalPage.diseases.hysteria.title',
    id: 'Hysteria',
    card: Hysteria,
    visual: HysteriaVisual,
  },
];
