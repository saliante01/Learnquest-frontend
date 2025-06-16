import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrosEstadisticasGeneralesComponent } from './filtros-estadisticas-generales.component';

describe('FiltrosEstadisticasGeneralesComponent', () => {
  let component: FiltrosEstadisticasGeneralesComponent;
  let fixture: ComponentFixture<FiltrosEstadisticasGeneralesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltrosEstadisticasGeneralesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltrosEstadisticasGeneralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
