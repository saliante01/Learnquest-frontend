import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaRendimientoPorCursoComponent } from './tarjeta-rendimiento-por-curso.component';

describe('TarjetaRendimientoPorCursoComponent', () => {
  let component: TarjetaRendimientoPorCursoComponent;
  let fixture: ComponentFixture<TarjetaRendimientoPorCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaRendimientoPorCursoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaRendimientoPorCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
