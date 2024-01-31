import { Component,OnInit } from '@angular/core';
import { ProfileService } from '../profilepage/Profileservice.service';
import { Iuser } from '../../user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrl: './updateprofile.component.css'
})
export class UpdateprofileComponent {
  public userProfile !: Iuser ;
  public buttonText = 'Save';
  public isEnabled = false;
  public profileForm : FormGroup;
  public updatedProfile !: Iuser;
  public updateFailed = false;


  constructor(private UserProfileService: ProfileService, private fb: FormBuilder,private router: Router) { 
    this.profileForm = this.fb.group({
      firstname:[{ value:'',},],
      lastname:[{ value:'',},],
     phone: [{ value:'',},],
      email: [{value:'', disabled: true}, ],
      address: [{ value:'',}, ],
      password:[{value:'',disabled: true},],
      
 });

  }

  ngOnInit() {
    console.log("im on it");
    const user = localStorage.getItem('profiledata'); 
    if (user != null) {
     this.UserProfileService.getUserProfile(user).subscribe(data=>{
      
      this.userProfile=data;
      console.log("customer_phone",this.userProfile.phone);
      console.log("customer_address",this.userProfile.address);
      this.UserProfileService.setdetails(this.userProfile);
      this.UserProfileService.setPlanid(this.userProfile.business_plan_id,this.userProfile.home_plan_id);
      
    
     this.profileForm.patchValue({
      firstname: data.firstname,
      lastname: data.lastname,
      phone: data.phone,
      email: data.email,
      address: data.address,
      password:data.password,
      business_plan_id:data.business_plan_id,
      home_plan_id:data.home_plan_id,
      no_plan_id:data.no_plan_id
   
  
  
  
    });
    
  });
 
  }
}
  Cancel() {
    // Navigate to ProfilePageComponent
    this.router.navigate(['/udashboard/uprofile']);
  }
 
Save()
{
  
  console.log('I am getting saved');
   
      
     this.profileForm.enable(); 
      console.log('Updating profile...', this.profileForm.value);
      
      let updatedProfile: Iuser = { ...this.profileForm.value, id: this.userProfile.id };
  
      this.UserProfileService.updateUserProfile(updatedProfile).subscribe(
        updatedProfile => {
          this.updatedProfile = updatedProfile;

          console.log('Profile updated successfully',updatedProfile);
          this.userProfile = updatedProfile;

          this.router.navigate(['/udashboard/uprofile']);
         
       
      },
        error => console.error('Error updating profile', error, this.updateFailed = true)
   
      );
     
    }
  }

