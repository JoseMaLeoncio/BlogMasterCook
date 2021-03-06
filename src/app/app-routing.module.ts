import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RecetasComponent } from './recetas/recetas.component';
import { ContentComponent } from './content/content.component';
import { ModalComponent } from './modal/modal.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';

const router: Routes = [
  {path: 'recetas', component: RecetasComponent},
  {path: 'content', component: ContentComponent},
  {path: 'modal', component:ModalComponent},
  {path: 'profile', component:ProfileComponent},
  {path: 'login', component:LoginComponent},
  {path:'**',pathMatch:'full', redirectTo: 'content'},
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(router)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
