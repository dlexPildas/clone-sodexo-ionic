import { ExtractComponent } from './extract/extract.component';
import { SlideComponent } from './../shared/components/slide/slide.component';
import { CardComponent } from './../shared/components/card/card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  declarations: [HomePage, CardComponent, SlideComponent, ExtractComponent]
})
export class HomePageModule {}
