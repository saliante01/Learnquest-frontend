import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionCourseComponent } from './option-course.component';

describe('OptionCourseComponent', () => {
  let component: OptionCourseComponent;
  let fixture: ComponentFixture<OptionCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionCourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
