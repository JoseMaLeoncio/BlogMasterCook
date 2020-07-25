import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RecetasComponent } from './recetas/recetas.component';
import { ContentComponent } from './content/content.component';

const router: Routes = [
  {path: 'recetas', component: RecetasComponent},
  {path: 'content', component: ContentComponent}
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
