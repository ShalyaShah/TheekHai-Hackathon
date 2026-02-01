
export enum View {
  ONBOARDING_SPLASH = 'ONBOARDING_SPLASH',
  ONBOARDING_TAILOR = 'ONBOARDING_TAILOR',
  ONBOARDING_CIRCLE = 'ONBOARDING_CIRCLE',
  DASHBOARD = 'DASHBOARD',
  ACTIVITY = 'ACTIVITY',
  PHARMACY = 'PHARMACY',
  TIMELINE = 'TIMELINE',
  SETTINGS = 'SETTINGS',
  MED_DETAIL = 'MED_DETAIL',
  REMINDER = 'REMINDER',
  VITALS_LOG = 'VITALS_LOG',
  CHAT = 'CHAT'
}

export interface Task {
  id: string;
  title: string;
  time: string;
  status: 'pending' | 'completed';
  note?: string;
  color?: string;
}

export interface Medication {
  name: string;
  dosage: string;
  schedule: string;
  instructions: string;
  streak: number;
  remaining: number;
}
