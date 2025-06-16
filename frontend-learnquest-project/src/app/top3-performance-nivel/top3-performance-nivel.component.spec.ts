import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top3PerformanceNivelComponent } from './top3-performance-nivel.component';

describe('Top3PerformanceNivelComponent', () => {
  let component: Top3PerformanceNivelComponent;
  let fixture: ComponentFixture<Top3PerformanceNivelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Top3PerformanceNivelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Top3PerformanceNivelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
