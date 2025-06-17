import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentLevelCardComponent } from './student-level-card.component';

describe('StudentLevelCardComponent', () => {
  let component: StudentLevelCardComponent;
  let fixture: ComponentFixture<StudentLevelCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentLevelCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentLevelCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
