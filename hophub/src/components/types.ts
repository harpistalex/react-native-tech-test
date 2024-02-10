interface Measurement {
  value: number;
  unit: string;
}

export interface Beer {
  abv: number;
  attenuation_level: number;
  boil_volume: Measurement;
  brewers_tips: string;
  contributed_by: string;
  description: string;
  ebc: number;
  first_brewed: string;
  food_pairing: string[];
  ibu: number;
  id: number;
  image_url: string;
  ingredients: Record<string, [] | object | string | number | null>;
  method: Record<string, [] | object | string | number | null>;
  name: string;
  ph: number;
  srm: number;
  tagline: string;
  target_fg: number;
  target_og: number;
  volume: Measurement;
}
