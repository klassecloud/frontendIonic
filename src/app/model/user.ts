export interface User {
  id: number;
  password: string;
  username: string;
  nickname: string;
  isTeacher: boolean;
  email: string;
  token?: string;
}
