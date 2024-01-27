import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iuser } from '../../user';
import { Observable,catchError,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private url:string="localhost:8080/api/v1/auth/upCustomer";
  bid!: number;
  hid!: number;
  uid!:number;
  name !: string;
  private duserprofile !: Iuser ;
  

  
  constructor(private http:HttpClient)
  {}
  getUserProfile(id:number):Observable<Iuser> {
    const urlid=`${this.url}/${id}`;
  return this.http.get<Iuser>(urlid);
  }
  updateUserProfile(userProfile: Iuser): Observable<Iuser> {
    const userUrl = `${this.url}/${userProfile.id}`;
    return this.http.put<Iuser>(userUrl,userProfile)
     .pipe(
      catchError(error => {
        console.error('Error updating profile', error);
        throw error;
  })
     );
}


   
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

    setuserid(id:number)
    {
this.uid=id;
    }

    getuserid()
    {
      return this.uid;
    }
    setdetails(detail:Iuser)
    {
      console.log("setdetails done");
      this.duserprofile = { ...detail }; 
      this.duserprofile=detail;

      console.log(this.duserprofile.id);
      console.log(this.duserprofile.customer_buisness_plan_id);
      console.log(this.duserprofile.customer_home_plan_id);
    }




}