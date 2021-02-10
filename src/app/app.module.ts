import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { NewuserComponent } from './newuser/newuser.component';
import { ExistinguserComponent } from './existinguser/existinguser.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { UpdateComponent } from './update/update.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    NewuserComponent,
    ExistinguserComponent,
    UpdateComponent,
   
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  
    HttpClientModule,
    RouterModule.forRoot([
      {
        path:'',
        component: NavigationComponent
      }
    ]),
    RouterModule.forRoot([
      {
        path:'home',
        component: HomeComponent
      }
    ]),
    RouterModule.forRoot([
      {
        path:'newuser',
        component: NewuserComponent
      }
    ]),
    RouterModule.forRoot([
      {
        path:'existinguser',
        component: ExistinguserComponent
      }
    ]),
    RouterModule.forRoot([
      {
        path:'update',
        component:UpdateComponent
      }
    ]),
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  CommonModule
 }
