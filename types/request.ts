export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  terms?: boolean;
  confirmPassword?: string;
}

export interface LoginRequest {
  identifier: string;
  password: string;
  remember?: boolean;
}

interface Member {
  name: string;
  email: string;
}

export interface TemplateTrip {
  title: string;
  destination: string;
  startDate: string;
  endDate: string;
  budget: number | string;
  members: number;
  healthNotes: string;
  listMembers: Array<Member>;
  vihicle: string;
  tripType: string;
  background: string;
  description: string;
}
