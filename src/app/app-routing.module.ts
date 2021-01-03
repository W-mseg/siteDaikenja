import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './routes/home/home.component';
import {DocumentationComponent} from './routes/documentation/documentation.component';
import {FeaturesComponent} from './routes/features/features.component';
import {AboutComponent} from './routes/about/about.component';
import {NotfoundComponent} from './routes/notfound/notfound.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'documentation', component: DocumentationComponent},
  {path: 'features', component: FeaturesComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
