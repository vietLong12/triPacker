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
