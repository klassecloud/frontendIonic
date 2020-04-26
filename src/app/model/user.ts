export interface User {
  id: number;
  userName: string;
  nickName: string;
  isTeacher: boolean;
  email: string;
  token?: string;
}
