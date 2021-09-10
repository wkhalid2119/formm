import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class ApiService {

  // Change URL here...
  private URL = "https://www.google.com/";
  constructor(
    private http: HttpClient,
  ) { }




  post(body: Object = {}): Observable<any> {
    return this.http.post(this.URL, JSON.stringify(body));
  }


}
