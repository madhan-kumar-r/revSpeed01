import { Component,Input,OnInit} from '@angular/core';
import { BasicPlanService } from './basic-plan-component.service';
import { i_plans } from './plans';
import { ProfileService } from '../profilepage/Profileservice.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Iuser } from '../../user';
import { Location } from '@angular/common';


@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {
  
  
planDetails!:i_plans;
  bplanDetails !:i_plans;
  hplanDetails !:i_plans;
  
  public yesplan :boolean=false;
  public noplan :boolean=false;
  userProfile !:Iuser;
 
 
  constructor(private basicPlanService: BasicPlanService,private profileService :ProfileService,public dialog: MatDialog,private router:Router) 
      {
        
        
        
        const data=localStorage.getItem("profiledata");
        if(data !=null)
        {
          this.userProfile=JSON.parse(data);
          console.log(data);
          
        }
        // this.basicPlanService.getUserProfile(this.userProfile.email).subscribe(data=>{
      
          // this.userProfile=data;
          this.basicPlanService.setdetails(this.userProfile);
          // this.basicPlanService.setPlanid(this.userProfile.business_plan.id,this.userProfile.home_plan.id);
          
          
         
        console.log(
        this.userProfile);
         console.log(this.userProfile.homePlans);
         console.log(
         this.userProfile.businessPlans);





         if(this.userProfile.homePlans!=null)
         {
          this.planDetails=this.userProfile.homePlans;
         }
         else if(this.userProfile.businessPlans!=null){
          this.planDetails=this.hplanDetails
         }
               
           if(this.planDetails==null)
           {
             this.yesplan=false;
             this.noplan=true;
           }
           else
           {
             this.yesplan=true;
             this.noplan=false;
           }
         
      console.log('yesplan:', this.yesplan);
      console.log('noplan:', this.noplan);
           
      
        //  });
      }
      ngOnInit() {
      
   
       
            // console.log(this.planDetails.id)
            }
    
  
    
    
  route()
  {
    this.router.navigate(['/udashboard/uprofile']);
  }
OpenDialog() {
  const dialogRef = this.dialog.open(DialogContent, {
    height: '150px'
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}

OpenAdd()
{
  const dialogRef = this.dialog.open(ChangeContent, {
    height: '150px'
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  }); 
}

        
  
}
  
  

@Component({
  selector: 'app-dialog-content',
  template: `
  <div class="dialogcontainer">
    <h2>Are You Sure Want to Unsubscribe..?</h2>
    <button mat-button class="unsubscribe-button" (click)="cancel()">Cancel</button>
    <button mat-button class="unsubscribe-button" (click)="unsub()">Unsubscribe</button>
    </div>
  `,styleUrls: ['./dialogun.css']
})
export class DialogContent {
  
  planDetails !:i_plans;
  
  
  constructor(private basicPlanService:BasicPlanService,private profileService :ProfileService,public dialogRef: MatDialogRef<DialogContent>,private router:Router, private location: Location 
  ) {}
  
  unsub() {
  
    console.log('entered unsub');
    this.basicPlanService.delete().subscribe(
      () => {
        console.log('Plan deleted successfully');
        window.location.reload();
      //  Fetch updated plan details after deletion
    //     this.basicPlanService
    //       .getPlans(this.basicPlanService.getPlanname(), this.basicPlanService.getPlanid())
    //       .subscribe(
    //         (data) => {
    //           this.planDetails = data;
    //           this.planDetails.id = data.id;
    //           this.planDetails.billing_cycle = data.billing_cycle;
    //           this.planDetails.plan_name = data.plan_name;
    //           this.planDetails.plan_speed = data.plan_speed;
    //           this.planDetails.plan_price = data.plan_price;
    //           this.planDetails.plan_type = data.plan_type;
    //           console.log(this.planDetails.id);
              
              
    //          },
    //         (error) => console.error('Error fetching plan details after deletion', error)
    //       );
    //   },
    //   (error) => console.error('Error Deleting Plan', error)
    // );
    
    this.dialogRef.close();
  });
}
  cancel():void
  {
   
      // Close the dialog without performing any additional action
      this.dialogRef.close();
    
  }
}

@Component({
  selector: 'app-Change-content',
  template: `
  <div class="dialogcontainer">
    <h2>Sorry You need to Unsubscribe Current plan..?</h2>
    <button mat-button class="unsubscribe-button" (click)="cancel()">Cancel</button>
    <button mat-button class="unsubscribe-button" (click)="unsub()">Unsubscribe</button>
    </div>
  `,styleUrls: ['./dialogun.css']
})
export class ChangeContent {
  planDetails !:i_plans;
  constructor(private basicPlanService:BasicPlanService,private profileService :ProfileService,public dialogRef: MatDialogRef<DialogContent>,private location: Location ){}
  
  unsub() {
  
    console.log('entered unsub');
    this.basicPlanService.delete().subscribe(
      (data) => {
        console.log('Plan deleted successfully');
     
        window.location.reload();
        // Fetch updated plan details after deletion
    //     this.basicPlanService
    //       .getPlans(this.profileService.getPlanname(), this.profileService.getPlanid())
    //       .subscribe(
    //         (data) => {
    //           this.planDetails = data;
    //           this.planDetails.id = data.id;
    //           this.planDetails.billing_cycle = data.billing_cycle;
    //           this.planDetails.plan_name = data.plan_name;
    //           this.planDetails.plan_speed = data.plan_speed;
    //           this.planDetails.plan_price = data.plan_price;
    //           this.planDetails.plan_type = data.plan_type;
    //         },
    //         (error) => console.error('Error fetching plan details after deletion', error)
    //       );
    //   },
    //   (error) => console.error('Error Deleting Plan', error)
    // );
    this.dialogRef.close();
  });
}
  cancel():void
  {
   
      // Close the dialog without performing any additional action
      this.dialogRef.close();
    
  }
  

  
}









 
  

