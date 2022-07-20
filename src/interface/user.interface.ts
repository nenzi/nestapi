export interface UserInterface {
  id: number;
  name: string;
  surname: string;
  age: number;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface LoginInterface {
  email: string;
  password: string;
}
