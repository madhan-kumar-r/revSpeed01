import { Observable, catchError } from 'rxjs';
import { i_plans } from './plans';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iuser } from '../../user';


@Injectable({
  providedIn: 'root'
})
export class BasicPlanService {
  bid!:number;
  hid!:number;
  name!:string;
  private url="localhost:8080/api/v1/auth/upCustomer";
  private bplansUrl = 'localhost:8080/ubusinessplans/';
  private hplansUrl='localhost:8080/uhomeplans/';
  private noplansUrl='localhost:8080/noplans/0';
  
  duserprofile!:Iuser;
  constructor(private http: HttpClient) { }
  setPlanid(bid:number,hid:number):void
  {
      this.bid=bid;
      this.hid=hid;
  }

  getPlanbid():number
  {
return this.bid;
  }

  getplanhid():number{
    return this.hid;
  }

  
  setPlanname(name:string):void
  {
      this.name=name;
  }

  getPlanname():string
  {
return this.name;
  }
  getPlans(bid:number,hid:number): Observable<i_plans>
   {
    if(bid!=0 && hid==0)
    {
    const urlid=`${this.bplansUrl}/${bid}`;
    return this.http.get<i_plans>(urlid);
    }
    else if(bid==0 && hid!=0){
   const urlid=`${this.hplansUrl}/${hid}`;
   return this.http.get<i_plans>(urlid);
    }
    else{
      
   return this.http.get<i_plans>(this.noplansUrl);
    }
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
    
    this.duserprofile.customer_buisness_plan_id=0;
    this.duserprofile.customer_home_plan_id=0;
    
    console.log(this.duserprofile.id);
    console.log(this.duserprofile.customer_buisness_plan_id);
    console.log(this.duserprofile.customer_home_plan_id);

    const userUrl = `${this.url}/${this.duserprofile.id}`;
  return  this.http.put<Iuser>(userUrl,this.duserprofile) .pipe(
      catchError(error => {
        console.error('Error deleting plan', error);
        throw error;
  })

  )};


  
 

}






