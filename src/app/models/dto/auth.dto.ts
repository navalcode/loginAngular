export class AuthRegisterDto {
  username: String;
  email: String;
  password: String;
  code: String;

  constructor (username:string,email:string,password:string){
    this.username=username,
    this.email=email,
    this.password=password,
    this.code='UDEMYANDROID'
  }
}
