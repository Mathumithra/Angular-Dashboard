import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { SideBarComponent } from './sidebar/side-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserListComponent } from './user-list/user-list.component';
import { SidebarComponent } from './sidebar/sidebar.component';
//import { UserComponent } from './user/user.component';
import { UsercreateComponent } from './usercreate/usercreate.component';
import { UserviewComponent } from './userview/userview.component';
import { UserComponent } from './user/user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { UserEditComponent } from './user-edit/user-edit.component';
//import { DashboardataComponent } from './dashboardata/dashboardata.component';
import { DashboardDataComponent } from './dashboard-data/dashboard-data.component';
import { DashboardDirective } from './dashboard.directive';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
   // SideBarComponent,
    TopBarComponent,
    DashboardComponent,
    UserListComponent,
    SidebarComponent,
    //UserComponent,
    UsercreateComponent,
    UserviewComponent,
    UserComponent,
    UserEditComponent,
    //DashboardataComponent,
    DashboardDataComponent,
    DashboardDirective,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
