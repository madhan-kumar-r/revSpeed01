import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BasicPlanService } from './basic-plan.service';
import { i_plans,b_plans } from '../../../card';
import { Iuser } from '../../user';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-basic-plan',
  templateUrl: './basic-plan.component (1).html',
  styleUrls: ['./basic-plan.component (1).css']
})
export class BasicPlanComponent implements OnInit {
  updated!:Iuser;
  userProfile!:Iuser;
  plans: i_plans[] | any = [];
  bplans: b_plans[] | any= [];
  selectedType: string = 'individual';

  constructor(private basicPlanService: BasicPlanService,private http : HttpClient, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.fetchData();

    const id:number=1;  
   this.basicPlanService.getUserProfile(id).subscribe(data=>{
   
    this.userProfile=data;

    console.log(this.userProfile.plan_id);
    
   
   });
  }

  selectType(type: string): void {
    if (type === 'individual') {
      this.selectedType = 'individual';
      this.basicPlanService.getIndividualPlans().subscribe((plans) => {
        this.plans = plans;
      });
    } else if (type === 'business') {
      this.selectedType = 'business';
      
      
      this.basicPlanService.getBusinessPlans().subscribe((bplans) => {

        this.bplans = bplans;
        this.fetchData();
    
      });
    }
  }

  getFilteredPlans(): any[] {
    return this.selectedType === 'individual' ? this.plans : this.bplans;
  }

  fetchData(): void {
    if(this.selectedType === 'individual')
    {
    this.selectType('individual'); // Default to individual plans
  }else{
    this.selectType('business'); 
  }
  }

updatedUser: Iuser | undefined;


recharge(id: number, type: string): void {
  console.log(type);

  if (this.userProfile) {
    this.basicPlanService.rereq(id, type, this.userProfile).subscribe(
      updatedUserData => {
        this.updatedUser = updatedUserData;
        console.log('User profile updated:', updatedUserData);

        // Show success message
        this.snackBar.open('Recharge successful', 'Close', {
          duration: 3000,  // Duration in milliseconds
        });
      },
      error => {
        console.error('updated', error);

        // Show error message
        this.snackBar.open('Recharge failed', 'Close', {
          duration: 3000,
        });
      }
    );
  }
}
}
  


  




