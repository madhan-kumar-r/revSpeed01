import { Component,OnInit } from '@angular/core';
import { ProfileService } from '../profilepage/Profileservice.service';
import { Iuser } from '../../../user';
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
      customer_name:[{ value:'',},],
     customer_phone: [{ value:'',},],
      customer_email: [{value:'', disabled: true}, ],
      customer_address: [{ value:'',}, ],
      customer_pass:[{value:'',disabled: true},],
      plan_id: [{value:'', disabled: true}, ],
      plan_type: [{value:'', disabled: true},],
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
      this.UserProfileService.setPlanid(this.userProfile.plan_id);
      this.UserProfileService.setPlanname(this.userProfile.plan_type);
    
     this.profileForm.patchValue({
       customer_name: data.customer_name,
       customer_phone: data.customer_phone,
       customer_email: data.customer_email,
       customer_address: data.customer_address,
       customer_pass:data.customer_pass,
       plan_id: data.plan_id,
       plan_type: data.plan_type
  
  
  
    });
    
  });
 
  }
  Cancel() {
    // Navigate to ProfilePageComponent
    this.router.navigate(['/profile']);
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

          this.router.navigate(['/profile']);
         
       
      },
        error => console.error('Error updating profile', error, this.updateFailed = true)
   
      );
     
    }
  }

