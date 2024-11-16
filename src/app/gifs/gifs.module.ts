import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { SharedModule } from '../shared/shared.module';

import { HomePagesComponent } from './pages/home/home-page.component';
import { searchBoxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardComponent } from './components/card/card.components';



@NgModule({
  declarations: [
    HomePagesComponent,
    searchBoxComponent,
    CardListComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    SharedModule

  ],
  exports:[
    HomePagesComponent,

  ],
})
export class GifsModule { }
