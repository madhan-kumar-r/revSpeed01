import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iuser } from '../../../user';
import { Observable,catchError,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private url:string="http://localhost:3000/customer_data";
  id!: number;
  name !: string;
  duserprofile !: Iuser;

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

    setdetails(detail:Iuser)
    {
      console.log("setdetails done");

      this.duserprofile=detail;

      console.log(this.duserprofile.id);
      console.log(this.duserprofile.plan_id);
      console.log(this.duserprofile.plan_type);
    }



    delete():Observable<Iuser>
  {
 console.log("entered proser unsub");
    this.duserprofile.plan_id=0;
    this.duserprofile.plan_type="home_plans";
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