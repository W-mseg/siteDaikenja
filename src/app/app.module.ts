import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './component/navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatRippleModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { HomeComponent } from './routes/home/home.component';
import { DocumentationComponent } from './routes/documentation/documentation.component';
import { FeaturesComponent } from './routes/features/features.component';
import { AboutComponent } from './routes/about/about.component';
import { NotfoundComponent } from './routes/notfound/notfound.component';
import { CardlinkComponent } from './component/cardlink/cardlink.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DocumentationComponent,
    FeaturesComponent,
    AboutComponent,
    NotfoundComponent,
    CardlinkComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatRippleModule,
        MatButtonModule,
        MatMenuModule,
        MatCardModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
