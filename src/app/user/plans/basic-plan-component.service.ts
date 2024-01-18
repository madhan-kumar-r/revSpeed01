import { Observable } from 'rxjs';
import { i_plans } from './plans';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasicPlanService {
  
  private plansUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getPlans(name:string,id:number): Observable<i_plans>
   {
    console.log("im getting");
    
   
    
    
    const urlid=`${this.plansUrl}/${name}/${id}`;
    return this.http.get<i_plans>(urlid);
  }



  
 

}






