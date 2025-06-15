import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrosRendimientoComponent } from './filtros-rendimiento.component';

describe('FiltrosRendimientoComponent', () => {
  let component: FiltrosRendimientoComponent;
  let fixture: ComponentFixture<FiltrosRendimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltrosRendimientoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltrosRendimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
