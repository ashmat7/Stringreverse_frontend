import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReverseComponent } from './reverse/reverse.component';


const routes: Routes = [
  {path : 'reverse', component: ReverseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ReverseComponent]