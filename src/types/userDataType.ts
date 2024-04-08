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
export type LoginForm = {
  email: string;
  password: string;
};
export type SignUpForm = {
  email: string;
  password: string;
  confirmPassword: string;
};
