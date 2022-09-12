import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'post', loadChildren: () => import('./post/post.module').then((m)=>m.PostModule)},
  { path: 'counter', loadChildren: () => import('./my-counter/my-counter.module').then((m)=>m.MyCounterModule)},
  { path: 'new', loadChildren: () => import('./new/new.module').then((m)=>m.NewModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
