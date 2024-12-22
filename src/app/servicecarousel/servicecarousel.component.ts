import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-servicecarousel',
  imports: [CarouselModule],
  templateUrl: './servicecarousel.component.html',
  styleUrl: './servicecarousel.component.scss'
})
export class ServicecarouselComponent {
  customOptions: any = {
    loop:false,
			margin:20,
			nav:true,
			navText: [ '<img src="assets/images/slider-left.png">', '<img src="assets/images/slider-right.png">' ],
			dots:false,
			responsive:{
				0:{
					items:1
				},
				500:{
					items:1
				},
				768:{
					items:2
				},
				1100:{
					items:3
				}
				,
				1400:{
					items:4
				}
			}
    
  }
}
