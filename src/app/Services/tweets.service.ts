import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TweetsService {

  constructor(private http:HttpClient) { }

  getTweets(): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
    })
    return this.http.get<any>(`${environment.apiBaseUrl}/tweets/all`,{headers:headers});
  }
}
