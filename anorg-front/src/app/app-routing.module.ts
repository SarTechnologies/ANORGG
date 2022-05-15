import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnorgTechComponent } from './pages/anorg-tech/anorg-tech.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { PlacementComponent } from './pages/placement/placement.component';

const routes: Routes = [

  {
    path :'',
    component : HomeComponent
  },
  {
    path :'technology',
    component : AnorgTechComponent
  },
  {
    path : 'jobs',
    component : PlacementComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
