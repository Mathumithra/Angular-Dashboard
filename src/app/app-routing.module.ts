import { createComponentType } from '@angular/compiler/src/render3/view/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { create } from 'domain';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { UsercreateComponent } from './usercreate/usercreate.component';
import { UserviewComponent } from './userview/userview.component';

const routes: Routes = [
    {
      path : "dashboard",
      component : DashboardComponent
    },
    {
      path : "user",
      component : UserComponent,
      children : [
        {
          path : "list",
          component : UserListComponent
        },
        {
          path : "create",
          component : UsercreateComponent
        },
        {
          path : "view/:id",
          component : UserviewComponent
        }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
