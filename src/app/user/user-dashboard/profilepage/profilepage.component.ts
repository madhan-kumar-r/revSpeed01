import { Component ,OnInit} from '@angular/core';
import {ProfileService } from './Profileservice.service'; 
import { Iuser } from '../../user';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../../authentication/login/login.service';


@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrl: './profilepage.component.css',
  

})
export class ProfilepageComponent implements OnInit{
  public access!:string;
  public userProfile !: Iuser ;
  public profileForm !: FormGroup;
  public isEnabled = true;
  public buttonText = 'Edit';
  public editShow:boolean =false;
  public id!:number;

  
  

  updatedProfile !:Iuser;

  constructor(private UserProfileService: ProfileService, private fb: FormBuilder,private loginService:LoginService,) { 
    
    
     
  

}
ngOnInit() {
  console.log("profile page");
 
    const profile=localStorage.getItem('profiledata');
    if(profile!=null)
    {
     this.userProfile=JSON.parse(profile);
     console.log(this.userProfile);
     
    this.profileForm = this.fb.group({
      firstname:[{ value:this.userProfile.firstname,disabled: this.isEnabled}, Validators.required],
       lastname:[{ value:this.userProfile.lastname,disabled: this.isEnabled}, Validators.required],
      phone: [{ value:this.userProfile.phone,disabled: this.isEnabled}, Validators.required],
       email: [{value:this.userProfile.email, disabled: true}, Validators.required],
       address: [{ value:this.userProfile.address,disabled: this.isEnabled}, Validators.required],
       password:[{value:this.userProfile.password,disabled: true},Validators.required],  });
     
    }
    

 



    //  const userId = this.UserProfileService.getUserIdFromToken();
    //  console.log('Raw Token:', userId);
    // console.log("im on it");
    // this.access=this.loginService.getaccess();
    //   console.log("gained token:",this.access);
    //   this.UserProfileService.setAccessToken(this.access);
    //   this.UserProfileService.getUserProfile(this.access).subscribe(data=>{
      
    //     console.log(
    //     this.userProfile=data);
    //     localStorage.setItem("profiledata",JSON.stringify(this.userProfile));
    //   });

    
    
//    this.UserProfileService.getUserProfile(this.access).subscribe(data=>{
    
//     this.userProfile=data;
//     this.userProfile.firstname= data.firstname,
     
//     this.userProfile.lastname= data. lastname,
   
//     this.userProfile.phone= data.phone,
     
//     this.userProfile.email=data.email,
    
//     this.userProfile.address=data.address,
     
//     this.userProfile.password=data.password,
     
//     this.userProfile.business_plan_id=data.business_plan_id,
   
//     this.userProfile.home_plan_id=data.home_plan_id,
  
//     this.userProfile.no_plan_id=data.no_plan_id
 
//  console.log(this.userProfile);
 
//     console.log(this.userProfile.firstname);
//     console.log(this.userProfile.lastname);
    
//     console.log(this.userProfile.phone);
//     console.log(this.userProfile.address);
//     this.UserProfileService.setdetails(this.userProfile);
//     this.UserProfileService.setPlanid(this.userProfile.business_plan_id,this.userProfile.home_plan_id);
//     this.UserProfileService.setuserid(this.userProfile.id);
   
  
//    this.profileForm.patchValue({
//     firstname: data.firstname,
//      lastname: data.lastname,
//      phone: data.phone,
//      email: data.email,
//      address: data.address,
//      password:data.password,
//      business_plan_id:data.business_plan_id,
//     home_plan_id:data.home_plan_id,
//      no_plan_id:data.no_plan_id
  



//   });
  
  
// });
// this.profileForm.get('firstname')?.valueChanges.subscribe((name: string) => {
//   if (!this.isEnabled) {
//     this.userProfile.firstname= name;
//   }
// });
}

toggleEdit()
{
  
  console.log('I am getting saved');
    this.isEnabled = !this.isEnabled;
    this.buttonText = this.isEnabled ? 'Edit' : 'Save';

    if (!this.isEnabled) {
      // Enable form controls for editing
      this.profileForm.enable();
    } else {
      // Disable form controls and update the user profile
      this.profileForm.disable();
      console.log('Updating profile...', this.profileForm.value);
      // Create a copy of the form values to avoid two-way binding issues
      let updatedProfile: Iuser = { ...this.profileForm.value, id: this.userProfile.id };
      // Save the changes to the backend using your service
      // Example: this.userProfileService.saveUserProfile(this.profileForm.value);
      this.UserProfileService.updateUserProfile(updatedProfile).subscribe(
        updatedProfile => {
          this.updatedProfile = updatedProfile;

          console.log('Profile updated successfully',updatedProfile);
          this.userProfile = updatedProfile;
          this.editShow = false;
         // Update the local profile with the server response
      },
        error => console.error('Error updating profile', error)
      );
    }
  }



  SHform()
  {
    console.log("I got clicked")
    if(this.editShow){
      this.editShow = false;
    }
    else{
      this.editShow = true;
    }
  }


 

}







