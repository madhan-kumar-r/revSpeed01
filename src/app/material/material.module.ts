import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';

const materialComponents = [MatCardModule]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,materialComponents
  ], exports : [
    materialComponents
  ]
})
export class MaterialModule { }
