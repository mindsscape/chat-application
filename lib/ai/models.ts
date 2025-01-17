// Define your models here.

export interface Model {
  id: string;
  label: string;
  apiIdentifier: string;
  description: string;
}

export const models: Array<Model> = [
  {
    id: "gpt-4o-mini",
    label: "GPT 4o mini",
    apiIdentifier: "gpt-4o-mini",
    description: "Small model for fast, lightweight tasks",
  },
  {
    id: "gpt-4o",
    label: "GPT 4o",
    apiIdentifier: "gpt-4o",
    description: "For complex, multi-step tasks",
  },
  // {
  //   id: "gpt-3.5-turbo",
  //   label: "gpt-3.5-turbo",
  //   apiIdentifier: "gpt-3.5-turbo",
  //   description: "gpt-3.5-turbo",
  // },
  // {
  //   id: 'gemini-free',
  //   label: 'Gemini Free',
  //   apiIdentifier: 'gemini-free',
  //   description: 'Free-tier model by Google for basic tasks',
  // },
] as const;


export const DEFAULT_MODEL_NAME: string = "gpt-4o-mini";
