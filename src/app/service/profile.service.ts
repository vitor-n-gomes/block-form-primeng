import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from '../model/profile'
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private url: string = 'assets/demo/data/';

  public profile = new Subject<Profile>();

  constructor(private http: HttpClient) { }

  list(): Observable<Profile[]> {
    return this.http.get<Profile[]>(this.url + 'profile.json');
  }

  setProfile(profile: Profile): void {
   this.profile.next(profile);
  }
}
