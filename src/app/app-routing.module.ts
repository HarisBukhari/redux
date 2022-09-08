import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyCounterComponent } from './my-counter/my-counter.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'counter', component: MyCounterComponent },
  { path: 'post', loadChildren: () => import('./post/post.module').then((m)=>m.PostModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
