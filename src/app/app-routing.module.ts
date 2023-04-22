import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ViewAllComponent } from './pages/view-all/view-all.component';
import { ViewComponent } from './pages/view/view.component';
import { EditComponent } from './pages/edit/edit.component';
import { CreateComponent } from './pages/create/create.component';
import { AuthGuard } from './_guards';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {
    path:"",
    component:DashboardLayoutComponent,
    canActivate:[AuthGuard],
    children:[
      {path:"", component:DashboardComponent},
      {path:"view-all", component:ViewAllComponent},
      {path:"view", component:ViewComponent},
      {path:"edit/:id", component:EditComponent},
      {path:"create", component:CreateComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
