import { Observable, catchError } from 'rxjs';
import { i_plans } from './plans';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iuser } from '../../../../user';


@Injectable({
  providedIn: 'root'
})
export class BasicPlanService {
  id!:number;
  name!:string;
  private url="http://localhost:3000/customer_data";
  private plansUrl = 'http://localhost:3000';
  duserprofile!:Iuser;
  constructor(private http: HttpClient) { }
  setPlanid(id:number):void
  {
      this.id=id;
  }

  getPlanid():number
  {
return this.id;
  }

  
  setPlanname(name:string):void
  {
      this.name=name;
  }

  getPlanname():string
  {
return this.name;
  }
  getPlans(name:string,id:number): Observable<i_plans>
   {
    const urlid=`${this.plansUrl}/${name}/${id}`;
    return this.http.get<i_plans>(urlid);
  }
  getUserProfile(id:number):Observable<Iuser> {
    const urlid=`${this.url}/${id}`;
  return this.http.get<Iuser>(urlid);
  }
  setdetails(user:Iuser)
  {
    this.duserprofile=user;
  }

  delete():Observable<Iuser>
  {
    console.log("entered proser unsub");
    
    this.duserprofile.plan_id=0;
    this.duserprofile.plan_type="No_plan";
    console.log(this.duserprofile.id);
    console.log(this.duserprofile.plan_id);
    console.log(this.duserprofile.plan_type);

    const userUrl = `${this.url}/${this.duserprofile.id}`;
  return  this.http.put<Iuser>(userUrl,this.duserprofile) .pipe(
      catchError(error => {
        console.error('Error deleting plan', error);
        throw error;
  })

  )};


  
 

}






