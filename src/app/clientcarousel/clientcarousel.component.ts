import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-clientcarousel',
  imports: [CarouselModule],
  templateUrl: './clientcarousel.component.html',
  styleUrl: './clientcarousel.component.scss'
})
export class ClientcarouselComponent {
  customOptions: any = {
    stagePadding: 200,
			loop:true,
			items:1,
			center: true,
			lazyLoad: true,
			autoplay: true,
			autoplaySpeed: 2000,
			autoplayTimeout: 5000,
			autoplayHoverPause: true,
			responsive:{
				0:{
					items:1,
					center: false,
					stagePadding: false,
				},
				500:{
					items:1,
					center: false,
					stagePadding: false,
				},
				900:{
					items:1,
					center: false,
					stagePadding: false,
				},
				1100:{
					items:1
				}
				,
				1400:{
					items:1
				}
			}
    
  }
}
