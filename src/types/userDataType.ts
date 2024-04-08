export interface User {
  id: number;
  name: string;
  email: string;
  image_source: string;
  created_at: string;
}
export interface UserData {
  profileData: User;
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
export interface CheckEmail {
  email: string;
}
