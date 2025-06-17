import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceNivelComponent } from './performance-nivel.component';

describe('PerformanceNivelComponent', () => {
  let component: PerformanceNivelComponent;
  let fixture: ComponentFixture<PerformanceNivelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerformanceNivelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerformanceNivelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
