import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { User, MUser, List,Info } from '@app/types/user';


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

 newUser(user): Observable<MUser>  {

return this.http.post <MUser>(this.apiUrl + 'api/users', user);

}

get List(): Observable<List>  {
  return  this.http.get<List>(this.apiUrl + 'api/unknown');
}

UpdateUser(data): Observable<MUser> {
return this.http.put<MUser>(this.apiUrl + 'api/users', data);
}
UpdateUserPatch(data): Observable<MUser> {
return this.http.patch<MUser>(this.apiUrl + 'api/users', data);
}
RemoveUser(id) {
  return this.http.delete(this.apiUrl + 'api/users', id);
}
getSingleUser(id) {
  return  this.http.get(this.apiUrl + 'api/users/'+ id);
}
}

