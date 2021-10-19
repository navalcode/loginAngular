import { Component, OnInit } from '@angular/core';
import { AuthRegisterDto } from '../models/dto/auth.dto';
import { AuthService } from '../Services/auth.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  registro= new AuthRegisterDto();

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  imprimir(username:String, email:String, password:String){
    console.log('UserName'+username,'Email: '+email,'Password: '+password);
  }

  postRegistro(username:String, email:String, password:String){
    let envio = new AuthRegisterDto ();
    envio.username=username;
    envio.email=email;
    envio.password=password;

    this.authService.register(envio).subscribe(res=> alert(`Te has registrado correctamente y tu token es ${res.token}`));

  }
}
