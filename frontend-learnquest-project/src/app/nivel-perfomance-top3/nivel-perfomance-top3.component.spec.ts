import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelPerfomanceTop3Component } from './nivel-perfomance-top3.component';

describe('NivelPerfomanceTop3Component', () => {
  let component: NivelPerfomanceTop3Component;
  let fixture: ComponentFixture<NivelPerfomanceTop3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NivelPerfomanceTop3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NivelPerfomanceTop3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
