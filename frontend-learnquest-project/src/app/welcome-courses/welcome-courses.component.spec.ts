import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeCoursesComponent } from './welcome-courses.component';

describe('WelcomeCoursesComponent', () => {
  let component: WelcomeCoursesComponent;
  let fixture: ComponentFixture<WelcomeCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelcomeCoursesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
