export class AuthRegisterDto {
  username: String;
  email: String;
  password: String;
  code: String;

  constructor (){
    this.username='',
    this.email='',
    this.password='',
    this.code='UDEMYANDROID'
  }
}
