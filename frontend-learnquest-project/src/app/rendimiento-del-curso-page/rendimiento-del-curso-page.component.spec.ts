import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendimientoDelCursoPageComponent } from './rendimiento-del-curso-page.component';

describe('RendimientoDelCursoPageComponent', () => {
  let component: RendimientoDelCursoPageComponent;
  let fixture: ComponentFixture<RendimientoDelCursoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RendimientoDelCursoPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RendimientoDelCursoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
