import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthRegisterDto } from '../models/dto/auth.dto';
import { RespuestaRegistro } from '../models/Interfaces/auth.interface';

const  DEFAULT_HEADERS = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class AuthService {

 constructor(private http: HttpClient) { }

  register(username:string,email:string,password:string)  : Observable<RespuestaRegistro> {
    let envio;
    envio= new AuthRegisterDto(username,email,password);

  return this.http.post<RespuestaRegistro>(`${environment.apiBaseUrl}/auth/signup`,envio,DEFAULT_HEADERS);
  }

}
