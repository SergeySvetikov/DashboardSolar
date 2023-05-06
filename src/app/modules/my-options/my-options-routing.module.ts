import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MyOptionsComponent} from "./my-options/my-options.component";
import { AuthGuard } from "../../core/guards/auth.guard";

const routes: Routes = [
  {
    path: 'my-options',
    pathMatch: 'full',
    component: MyOptionsComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyOptionsRoutingModule { }
