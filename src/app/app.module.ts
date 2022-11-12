import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { MaterialModule } from './material.module';
import { WebcamModule } from 'ngx-webcam';
import { HomeComponent } from './home/home.component';
import { CameraComponent } from './camera/camera.component';
import { LoginModule } from './login/login.module';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { RewardsComponent } from './rewards/rewards.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RecognitionComponent } from './recognition/recognition.component';
import { ValidationComponent } from './validation/validation.component';
import { ValidationService } from './services/validation.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat'
import { environment } from 'src/environments/environment';
import { FirestoreModule } from '@angular/fire/firestore';
import { RegisterComponent } from './register/register.component';






@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    CameraComponent,
    MyProfileComponent,
    RewardsComponent,
    PageNotFoundComponent,
    RecognitionComponent,
    ValidationComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    WebcamModule,
    HttpClientModule,
    LoginModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    FirestoreModule,
  ],
  providers: [ValidationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
