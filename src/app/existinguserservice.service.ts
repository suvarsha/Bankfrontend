import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Existinguser } from './existinguser';

@Injectable({
  providedIn: 'root'
})
export class ExistinguserserviceService {
private baseUrl='http://localhost:8890/BankData'
  constructor(private http: HttpClient) { }
  getAllusers():Observable<any>{
    return this.http.get<any>(this.baseUrl+'/getAllusers');''
  }
  saveExistinguser(existinguser: Existinguser): Observable<Existinguser> {
    return this.http.post<Existinguser>(this.baseUrl + '/initial', existinguser)
  }
  findnumber(depositornumber:number):Observable<Existinguser>{
    return this.http.get<Existinguser>(this.baseUrl+'/{depositornumber}/'+depositornumber);
  }
}
