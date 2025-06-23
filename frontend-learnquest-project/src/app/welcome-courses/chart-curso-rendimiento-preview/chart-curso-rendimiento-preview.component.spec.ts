import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartCursoRendimientoPreviewComponent } from './chart-curso-rendimiento-preview.component';

describe('ChartCursoRendimientoPreviewComponent', () => {
  let component: ChartCursoRendimientoPreviewComponent;
  let fixture: ComponentFixture<ChartCursoRendimientoPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartCursoRendimientoPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartCursoRendimientoPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
