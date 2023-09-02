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
} from 'components/Features/visual/visual';

export const diseases = [
  {
    title: 'herbalPage.diseases.commonСold.title',
    id: 'Card',
    card: CommonСold,
    visual: CommonСoldVisual,
  },
  {
    title: 'herbalPage.diseases.highPressure.title',
    id: 'ForDisease',
    card: HighPressure,
    visual: HighPressureVisual,
  },
  {
    title: 'herbalPage.diseases.lowPressure.title',
    id: 'One',
    card: LowPressure,
    visual: LowPressureVisual,
  },
  {
    title: 'herbalPage.diseases.insomnia.title',
    id: 'Second',
    card: Insomnia,
    visual: InsomniaVisual,
  },
  {
    title: 'herbalPage.diseases.depression.title',
    id: 'Third',
    card: Depression,
    visual: DepressionVisual,
  },
  {
    title: 'herbalPage.diseases.allergy.title',
    id: 'Fourth',
    card: Allergy,
    visual: AllergyVisual,
  },
  {
    title: 'herbalPage.diseases.skinRashes.title',
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
