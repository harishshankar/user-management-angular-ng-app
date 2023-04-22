import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { ViewComponent } from './pages/view/view.component';
import { ViewAllComponent } from './pages/view-all/view-all.component';
import { CreateComponent } from './pages/create/create.component';
import { EditComponent } from './pages/edit/edit.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthService } from './_service/auth.service';
import { ErrorService, UserService } from './_service';
import { AuthInterceptor } from './_helpers';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    DashboardComponent,
    DashboardLayoutComponent,
    ViewComponent,
    ViewAllComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
    
  ],
  providers: [AuthService,ErrorService, UserService,
    { provide: HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
