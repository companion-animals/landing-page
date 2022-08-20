interface UserRegFormData {
  name: string;
  email: string;
  birth: Date;
  password: string;
  "password-check": string;
  sex: string;
}

interface LoginData {
  email: string;
  password: string;
}
