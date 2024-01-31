import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iuser } from '../../user';
import { Observable,catchError,of, throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private url: string = 'http://localhost:8080/api/v1/auth/udetails';
  private upurl:string ='http://localhost:8080/api/v1/auth/upCustomer';

  bid!: number|null;
  hid!: number|null;
  uid!:number|null;
  name !: string;
  private duserprofile !: Iuser ;
  

  
  constructor(private http:HttpClient)
  {}
 
  getUserProfile(email:string):Observable<Iuser> {


      const urlid=`${this.url}/${email}`;
      console.log(urlid);
      
      return this.http.get<Iuser>(urlid);
    
    
  }

  updateUserProfile(userProfile: Iuser): Observable<Iuser> {
   
    const userUrl = `${this.upurl}`;
    return this.http.put<Iuser>(userUrl,userProfile)
     .pipe(
      catchError(error => {
        console.error('Error updating profile', error);
        throw error;
        return of(userProfile);
  })
     );
}


   
     setPlanid(bid:number,hid:number):void
    {
        this.bid=bid;
        this.hid=hid;
    }

//     getPlanbid():number
//     {
// return this.bid;
//     }

//     getplanhid():number{
//       return this.hid;
//     }

    
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
      
      this.duserprofile=detail;

      console.log(this.duserprofile.id);
      // console.log(this.duserprofile.business_plan.plan_type);
      // console.log(this.duserprofile.home_plan.plan_type);
    }


    private access: string | null = null;

    // Function to set the access token
    setAccessToken(token: string | null): void {
      this.access = token;
    }
  
    // // Function to get the user ID from the access token
    // getUserIdFromToken(): number | null {
    //   if (this.access) {
    //     try {
    //       const decodedToken:{sub?:string} = jwtDecode(this.access);

    //       return decodedToken && decodedToken.sub ? +decodedToken.sub : null;
    //     } catch (error) {
    //       console.error('Error decoding access token:', error);
    //       return null;
    //     }
    //   }
    //   return null;
    // }
  

}