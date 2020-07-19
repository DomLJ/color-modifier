import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorCreatorComponent } from './color-creator/color-creator.component';
import { GradientCreatorComponent } from './gradient-creator/gradient-creator.component';

const routes: Routes = [
  { path: '', component: ColorCreatorComponent },
  { path: 'gradients', component: GradientCreatorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
