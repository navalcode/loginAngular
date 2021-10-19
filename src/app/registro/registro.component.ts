import { Component, OnInit } from '@angular/core';
import { EnvioRegistro } from '../dto/dtos';
import { MiniTwitterService } from '../Services/mini-twitter.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  registro= new EnvioRegistro();

  constructor(private miniservice:MiniTwitterService) { }

  ngOnInit(): void {
  }

  imprimir(username:String, email:String, password:String){
    console.log('UserName'+username,'Email: '+email,'Password: '+password);
  }

  postRegistro(){

  }
}
