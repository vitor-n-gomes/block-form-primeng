import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile }  from '../model/profile'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private url: string = 'assets/demo/data/'; 

  constructor(private http: HttpClient) { }

  list() : Observable<Profile[]> {
    return this.http.get<Profile[]>(this.url + 'profile.json');
  }
}
