import { Component ,OnInit} from '@angular/core';
import {ProfileService } from './Profileservice.service'; 
import { Iuser } from '../../user';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrl: './profilepage.component.css',
  

})
export class ProfilepageComponent implements OnInit{
  public userProfile !: Iuser ;
  public profileForm : FormGroup;
  public isEnabled = true;
  public buttonText = 'Edit';
  public editShow:boolean =false;
  

  updatedProfile !:Iuser;

  constructor(private UserProfileService: ProfileService, private fb: FormBuilder) { 
    this.profileForm = this.fb.group({
      customer_fname:[{ value:'',disabled: this.isEnabled}, Validators.required],
      customer_lname:[{ value:'',disabled: this.isEnabled}, Validators.required],
     customer_phone: [{ value:'',disabled: this.isEnabled}, Validators.required],
      customer_email: [{value:'', disabled: true}, Validators.required],
      customer_address: [{ value:'',disabled: this.isEnabled}, Validators.required],
      customer_pass:[{value:'',disabled: true},Validators.required],
     
    });

}
ngOnInit() {
  console.log("im on it");
    const id:number=1;  
   this.UserProfileService.getUserProfile(id).subscribe(data=>{
    
    this.userProfile=data;
    console.log(this.userProfile.customer_phone);
    console.log(this.userProfile.customer_address);
    this.UserProfileService.setdetails(this.userProfile);
    this.UserProfileService.setPlanid(this.userProfile.customer_buisness_plan_id,this.userProfile.customer_home_plan_id);
    this.UserProfileService.setuserid(this.userProfile.id);
   
  
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
this.profileForm.get('customer_fname')?.valueChanges.subscribe((name: string) => {
  if (!this.isEnabled) {
    this.userProfile.customer_fname= name;
  }
});
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







