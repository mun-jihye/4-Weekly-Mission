export interface User {
  id: number;
  name: string;
  email: string;
  profileImageSource: string;
}
export interface LoginForm {
  email: string;
  password: string;
}
export interface SignUpForm {
  email: string;
  password: string;
  confirmPassword: string;
}
