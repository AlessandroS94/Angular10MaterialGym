export interface User {
  id: number;
  user_name: string;
  email: string;
  nome: string;
  cognome: string;
  dataNascita: string;
  password: string;
  password_token: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}
