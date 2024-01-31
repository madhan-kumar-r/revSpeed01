import { Observable, catchError, throwError } from 'rxjs';
import { i_plans } from './plans';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iuser } from '../../user';
import { log } from 'console';


@Injectable({
  providedIn: 'root'
})
export class BasicPlanService {
  bplan!:i_plans|null;
  hplan!:i_plans|null;
  name!:string;
  private url='http://localhost:8080/api/v1/auth/udetails';
  private upurl='http://localhost:8080/api/v1/auth/upCustomer';
  private bplansUrl = 'http://localhost:8080/api/v1/auth/ubusinessplans';
  private hplansUrl='http://localhost:8080/api/v1/auth/uhomeplans';
  private noplansUrl='http://localhost:8080/api/v1/auth/noplans/0';
 
  duserprofile!:Iuser;

  constructor(private http: HttpClient) { }
//   setPlanid(bid:number,hid:number):void
//   {
//       this.bid=bid;
//       this.hid=hid;
//   }

//   getPlanbid():number
//   {
// return this.bid;
//   }

//   getplanhid():number{
//     return this.hid;
//   }

  
//   setPlanname(name:string):void
//   {
//       this.name=name;
//   }

//   getPlanname():string
//   {
// return this.name;
//   }
  getPlans(bplan:any,hplan:any): Observable<i_plans>
   {
    this.bplan=bplan;
    this.hplan=hplan;
    console.log("buisness plan id=",bplan.id);
    console.log("home plan id=",hplan.id);
    if(bplan!=null )
    {
      console.log("i'm business");
      
      const urlid=`${this.bplansUrl}/${bplan.id}`;
      return this.http.get<i_plans>(urlid);
    }
    else if(hplan!=null )
    {
      console.log("I'm home");
      
      const hurlid=`${this.hplansUrl}/${hplan.id}`;
      return this.http.get<i_plans>(hurlid);
    }
    else if(bplan==null || hplan==null){
      return this.http.get<i_plans>(this.noplansUrl);
    }
    else{
      return this.http.get<i_plans>(this.noplansUrl);
    }

  }
  getUserProfile(email:string):Observable<Iuser> {
    const urlid=`${this.url}/${email}`;
  return this.http.get<Iuser>(urlid);
  }
  setdetails(user:Iuser)
  {
    this.duserprofile=user;
    console.log("setdetails",this.duserprofile);
    
  }

  delete():Observable<Iuser>
  {
    console.log("entered proser unsub");
 
    console.log(this.duserprofile.address);
    const userupdate:Iuser={
      "id": this.duserprofile.id,
      firstname: this.duserprofile.firstname,
      lastname: this.duserprofile.lastname,
      email: this.duserprofile.email,
      phone: this.duserprofile.phone,
      address: this.duserprofile.address,
      password: this.duserprofile.password,
      businessPlans: null,
      homePlans: null,
      noPlan: null,
      role: this.duserprofile.role
    }

    localStorage.setItem("profiledata",JSON.stringify(userupdate));
    
    window.location.reload();
    

    
    

    
  return  this.http.put<Iuser>(this.upurl,userupdate) .pipe(
      catchError(error => {
        console.error('Error deleting plan', error);
        throw error;
  })

  )};


  
 

}





export interface updateUserProfile{
  
  firstname:string;
lastname: string,
email: string,
password: string,
phone: string,
address: string,
role: string, 
homePlans:any,
businessPlans:any,

}

