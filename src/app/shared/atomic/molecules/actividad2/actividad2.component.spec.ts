import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Actividad2Component } from './actividad2.component';

describe('Actividad2Component', () => {
  let component: Actividad2Component;
  let fixture: ComponentFixture<Actividad2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Actividad2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Actividad2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
