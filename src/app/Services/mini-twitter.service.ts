import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EnvioRegistro, RespuestaRegistro } from '../Interfaces/miniTwitter';

@Injectable({
  providedIn: 'root'
})



export class MiniTwitterService {

  auth: String='auth';

  constructor(private http: HttpClient) { }

  register(envio:EnvioRegistro) /* : Observable<RespuestaRegistro>*/ {

  // this.http.post<EnvioRegistro>(`${environment.apiTwitter}/${this.auth}/signup`,envio).subscribe(Respuesta);

  }

}
