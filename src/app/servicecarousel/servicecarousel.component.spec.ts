import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicecarouselComponent } from './servicecarousel.component';

describe('ServicecarouselComponent', () => {
  let component: ServicecarouselComponent;
  let fixture: ComponentFixture<ServicecarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicecarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicecarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
