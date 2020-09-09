import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {

  constructor(private http: HttpClient) { }

  getBlogs(): Observable<any> {
    let url = environment.apiURL + "blog/getbloginformation";
    return this.get(url);
  }

  post(url, params?, options?) {
    return this.http.post(url, params, options);
  }

  get(url, options?) {
    return this.http.get(url, options);
  }

}
