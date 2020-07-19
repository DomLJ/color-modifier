import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ColorCreatorComponent } from './color-creator/color-creator.component';
import { FooterComponent } from './footer/footer.component';
import { RgbSliderComponent } from './rgb-slider/rgb-slider.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { CustomHueComponent } from './custom-hue/custom-hue.component';
import { GradientCreatorComponent } from './gradient-creator/gradient-creator.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ColorCreatorComponent,
    FooterComponent,
    RgbSliderComponent,
    NavbarComponent,
    CustomHueComponent,
    GradientCreatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    RgbSliderComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
