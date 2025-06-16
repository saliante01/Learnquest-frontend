import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceStudentPageComponent } from './performance-student-page.component';

describe('PerformanceStudentPageComponent', () => {
  let component: PerformanceStudentPageComponent;
  let fixture: ComponentFixture<PerformanceStudentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerformanceStudentPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerformanceStudentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
