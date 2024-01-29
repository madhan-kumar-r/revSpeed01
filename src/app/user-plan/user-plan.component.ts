import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../user/userservice.service';
import { Iuser } from '../user/user';
import { UserPlanService } from '../../user-plan.service';

@Component({
  selector: 'app-user-plan',
  templateUrl: './user-plan.component.html',
  styleUrl: './user-plan.component.css'
})
export class UserPlanComponent implements OnInit{
   customer_data: Iuser | any= [];
   
  // constructor(private IusererviceService : IusererviceService){}
  
  // ngOnInit():void{
  //   this.IusererviceService.getIuser().subscribe(customer_data=>{
  //     this.customer_data=customer_data;
  //   })
  // }

  //userplan 

  customerData: Iuser[] = [];
  selectedCustomerId: number | null = null;
  selectedPlanId: number | null = null;
  selectedPlanType: string | null = null;
  constructor(private userPlanService: UserPlanService) {}

  ngOnInit(): void {
    this.userPlanService.getCustomerData().subscribe((data) => {
      this.customerData = data;
    });
  }

  onAddButtonClick(): void {
    if (this.selectedCustomerId !== null && this.selectedPlanId !== null && this.selectedPlanType !== null) {
      this.userPlanService.updateCustomerPlan(
        this.selectedCustomerId,
        this.selectedPlanId,
        this.selectedPlanType
      ).subscribe(() => {
        this.userPlanService.getCustomerData().subscribe((data) => {
          this.customerData = data;
        });
      });
    }
  }

  onSelectCustomer(customerId: number): void {
    this.selectedCustomerId = customerId;
  }

  onSelectPlan(planId: number, planType: string): void {
    this.selectedPlanId = planId;
    this.selectedPlanType = planType;
  }

}

