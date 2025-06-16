import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelPerformanceComponent } from './nivel-performance.component';

describe('NivelPerformanceComponent', () => {
  let component: NivelPerformanceComponent;
  let fixture: ComponentFixture<NivelPerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NivelPerformanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NivelPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
