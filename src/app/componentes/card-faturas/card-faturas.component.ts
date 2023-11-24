import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
register();
@Component({
  selector: 'app-card-faturas',
  templateUrl: './card-faturas.component.html',
  styleUrls: ['./card-faturas.component.scss']
})
export class CardFaturasComponent {

}
