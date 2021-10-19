export interface EnvioRegistro {
  username: string;
  email: string;
  password: string;
  code: string;
}

export interface RespuestaRegistro {
  token: string;
  username: string;
  email: string;
  role: string;
  photoUrl: string;
  created: Date;
  active: boolean;
}

