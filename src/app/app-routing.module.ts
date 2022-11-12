import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login/login.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { NavComponent } from './nav/nav.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RecognitionComponent } from './recognition/recognition.component';
import { RegisterComponent } from './register/register.component';
import { RewardsComponent } from './rewards/rewards.component';
import { ValidationComponent } from './validation/validation.component';

const routes: Routes = [
  { path:'login', component: LoginComponent},
  { path:'register', component: RegisterComponent},
  { path: '', component: NavComponent,
  children: [
    {path: 'home', component: HomeComponent},
    {path: 'profile', component: MyProfileComponent},
    {path: 'rewards', component: RewardsComponent},
    {path:'recognition', component : RecognitionComponent},
    {path:'validation', component : ValidationComponent},
    {path: '**', pathMatch:'full', component: PageNotFoundComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
