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
      customer_fname:[{ value:'',},],
      customer_lname:[{ value:'',},],
     customer_phone: [{ value:'',},],
      customer_email: [{value:'', disabled: true}, ],
      customer_address: [{ value:'',}, ],
      customer_pass:[{value:'',disabled: true},],
      
 });

  }

  ngOnInit() {
    console.log("im on it");
      const id:number=1;  
     this.UserProfileService.getUserProfile(id).subscribe(data=>{
      
      this.userProfile=data;
      console.log("customer_phone",this.userProfile.customer_phone);
      console.log("customer_address",this.userProfile.customer_address);
      this.UserProfileService.setdetails(this.userProfile);
      this.UserProfileService.setPlanid(this.userProfile.customer_buisness_plan_id,this.userProfile.customer_home_plan_id);
      
    
     this.profileForm.patchValue({
       customer_fname: data.customer_fname,
       customer_lname: data.customer_lname,
       customer_phone: data.customer_phone,
       customer_email: data.customer_email,
       customer_address: data.customer_address,
       customer_pass:data.customer_pass,
       customer_business_plan_id:data.customer_buisness_plan_id,
       customer_home_plan_id:data.customer_home_plan_id,
       customere_no_plan_id:data.customer_no_plan_id
  
  
  
    });
    
  });
 
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

