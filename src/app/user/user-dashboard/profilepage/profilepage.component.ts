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
     firstname:[{ value:'',disabled: this.isEnabled}, Validators.required],
      lastname:[{ value:'',disabled: this.isEnabled}, Validators.required],
     phone: [{ value:'',disabled: this.isEnabled}, Validators.required],
      email: [{value:'', disabled: true}, Validators.required],
      address: [{ value:'',disabled: this.isEnabled}, Validators.required],
      password:[{value:'',disabled: true},Validators.required],
     
    });

}
ngOnInit() {
  console.log("im on it");
    const id:number=1;  
   this.UserProfileService.getUserProfile(id).subscribe(data=>{
    
    this.userProfile=data;
    console.log(this.userProfile.phone);
    console.log(this.userProfile.address);
    this.UserProfileService.setdetails(this.userProfile);
    this.UserProfileService.setPlanid(this.userProfile.business_plan_id,this.userProfile.home_plan_id);
    this.UserProfileService.setuserid(this.userProfile.id);
   
  
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
this.profileForm.get('firstname')?.valueChanges.subscribe((name: string) => {
  if (!this.isEnabled) {
    this.userProfile.firstname= name;
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







