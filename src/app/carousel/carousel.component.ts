import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  /* переменная с помощью которой устанавливаем связть с массивом в файле app.component.html */
  @Input() searchArr;
}
