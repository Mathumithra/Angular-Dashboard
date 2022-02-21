import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { AuthGuard } from './auth.guard';
import { DashboardDataComponent } from './dashboard-data/dashboard-data.component';
import { DashboardComponent } from './dashboard/dashboard.component';
//import { LoginComponent } from './login/login.component';
import { UsercreateComponent } from './usercreate/usercreate.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserviewComponent } from './userview/userview.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
  },
 
  {
    path: "dashboard",
    component: DashboardComponent,
     canActivate : [AuthGuard],
    children: [
      {
        path: '',
        component: DashboardDataComponent,
      },
      {
        path: 'user',
        component: UserComponent,
        children: [
          {
            path: 'list',
            component: UserListComponent,
          },
          {
            path: 'create',
            component: UsercreateComponent,
          },
          {
            path: 'view',
            component: UserviewComponent,
          },
          {
            path: 'edit/:id',
            component: UserEditComponent,
          },
        
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}