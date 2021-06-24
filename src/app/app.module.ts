import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './sections/header/header.component';
import { BodyComponent } from './sections/body/body.component';
import { MenuComponent } from './sections/menu/menu.component';
import {MenubarModule} from 'primeng/menubar';
import { FooterComponent } from './sections/footer/footer.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    MenuComponent,
    FooterComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    MenubarModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
