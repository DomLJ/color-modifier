import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorCreatorComponent } from './color-creator/color-creator.component';
import { GradientCreatorComponent } from './gradient-creator/gradient-creator.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: ColorCreatorComponent },
  { path: 'gradients', component: GradientCreatorComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
