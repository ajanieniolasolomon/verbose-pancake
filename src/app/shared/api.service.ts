import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { User,AddUser } from '../types/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
private apiUrl = 'https://reqres.in/';
private weather ='http://samples.openweathermap.org/data/2.5/history/city?q=Warren,OH&appid=b6907d289e10d714a6e88b30761fae22';
  constructor( private http: HttpClient) { }

get User(): Observable<User> {

  return this.http.get<User>(this.apiUrl + 'api/users?page=2');
}

 newUser(user): Observable<AddUser>  {

return this.http.post <AddUser>(this.apiUrl + 'api/users', user);

}
dailyForecast() {
  return this.http.get(this.weather).pipe(
    map(result => result)
  );

}

}

