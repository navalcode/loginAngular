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

  auth: String='auth';

 constructor(private http: HttpClient) { }

  register(envio:AuthRegisterDto)  : Observable<RespuestaRegistro> {

  return this.http.post<RespuestaRegistro>(`${environment.apiBaseUrl}/${this.auth}/signup`,envio,DEFAULT_HEADERS);

  }

}
