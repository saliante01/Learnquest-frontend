import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartCursosComponent } from './chart-cursos.component';

describe('ChartCursosComponent', () => {
  let component: ChartCursosComponent;
  let fixture: ComponentFixture<ChartCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartCursosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
