import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Existinguser } from './existinguser';

@Injectable({
  providedIn: 'root'
})
export class NewuserserviceService {
  private baseUrl = 'http://localhost:8890/BankData'; 
  constructor(private http:HttpClient) { }
  
  saveuser(newuser:Existinguser ): Observable<Existinguser> {
    return this.http.put<Existinguser>(this.baseUrl + '/updating/{depositornumber}', newuser)
  }
}
