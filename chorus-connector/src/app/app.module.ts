import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { SearchComponent } from './search/search.component';
import { TableModule } from 'primeng/table';
import { ChorusService } from './service/chorus.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { PasswordModule } from 'primeng/password';
import { AppTopBarComponent } from './app.topbar.component';
import { AuthService } from './service/auth.service';
import { DropdownModule } from "primeng/dropdown";
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    SearchComponent,
    AppTopBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    PasswordModule,
    DropdownModule,
    InputTextareaModule
  ],
  providers: [AuthService, ChorusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
