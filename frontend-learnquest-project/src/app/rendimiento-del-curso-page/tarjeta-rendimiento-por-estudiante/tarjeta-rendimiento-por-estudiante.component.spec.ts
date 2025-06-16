import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaRendimientoPorEstudianteComponent } from './tarjeta-rendimiento-por-estudiante.component';

describe('TarjetaRendimientoPorEstudianteComponent', () => {
  let component: TarjetaRendimientoPorEstudianteComponent;
  let fixture: ComponentFixture<TarjetaRendimientoPorEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaRendimientoPorEstudianteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaRendimientoPorEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
