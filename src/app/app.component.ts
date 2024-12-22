import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ServicecarouselComponent } from "./servicecarousel/servicecarousel.component";
import { ClientcarouselComponent } from './clientcarousel/clientcarousel.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ServicecarouselComponent, ClientcarouselComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'atqorpractical-angular';
  heroheadingOne: string = 'AI Tech - Ready';
  heroheadingTwo: string = 'Your Partner in Building Future Applications';
  Aboutcompany: string = 'About Xcursia';

  serviceHeading: string = 'Why Choose Us as Your Offshore Outsourcing Partner?';
  servicedesc: string = 'Leverage our exceptional capabilities to develop cutting-edge software, web, and mobile applications. We specialize in transforming legacy systems, modernizing them to meet today’s technological demands. Our expertise in cloud architecture ensures enhanced flexibility, agility, and scalability, empowering your business to unlock new growth opportunities and stay ahead in a dynamic digital landscape.';

  testimonialHeading: string = 'Client Journeys: Achieving Success with Our Solutions';

  partnerHeading: string = 'Driving Success for World-Class Enterprises';

  faqHeading: string = 'Custom Software Development FAQs';
}
