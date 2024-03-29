import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './admin/admin.component';
import { CustomformComponent } from './customform/customform.component';
import { CustomtableComponent } from './customtable/customtable.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'Login',component:LoginComponent},
  {path:'Signup', component:SignupComponent},
  {path:'Profile',component:ProfileComponent},
  {path:'Admin', component:AdminComponent},
  {path:'Form', component:CustomformComponent},
  {path:'Table',component:CustomtableComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
