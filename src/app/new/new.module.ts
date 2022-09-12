import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NewComponent } from './new.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { jobReducer } from './State/new.reducer';
import { EffectsModule } from '@ngrx/effects';
import { NewEffects } from './State/new.effects';

const routes: Routes = [
  { path: '', component: NewComponent },
];

@NgModule({
  declarations: [
    NewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('jobs', jobReducer),
    EffectsModule.forFeature([NewEffects]),
  ]
})
export class NewModule { }
