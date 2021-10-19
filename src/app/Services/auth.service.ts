import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthRegisterDto } from '../models/dto/auth.dto';


@Injectable({
  providedIn: 'root'
})



export class AuthService {

  auth: String='auth';

 constructor(private http: HttpClient) { }

  register(envio:AuthRegisterDto) /* : Observable<RespuestaRegistro>*/ {

   this.http.post<AuthRegisterDto>(`${environment.apiBaseUrl}/${this.auth}/signup`,envio);

  }

}
