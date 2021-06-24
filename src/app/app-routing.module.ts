import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { BodyComponent } from './sections/body/body.component';
import { MenuComponent } from './sections/menu/menu.component';
const routes: Routes = [
  {path: '', component:BodyComponent , pathMatch: 'full' ,
    children: [
    {path:'', component: AccueilComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
