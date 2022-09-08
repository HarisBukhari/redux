import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { MyCounterComponent } from './my-counter.component';
import { counterReducer } from '../Redux_Name/Name.reducer';

const routes: Routes = [
  { path: '', component: MyCounterComponent },
];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('count', counterReducer),
  ]
})
export class MyCounterModule { }
