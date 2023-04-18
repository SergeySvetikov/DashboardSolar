import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyOptionsComponent } from './my-options/my-options.component';

const routes: Routes = [
  {
    path: 'my-options',
    pathMatch: 'full',
    component: MyOptionsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyOptionsRoutingModule {}
