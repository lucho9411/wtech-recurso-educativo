import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Actividad2PageComponent } from './actividad2-page.component';

describe('Actividad2PageComponent', () => {
  let component: Actividad2PageComponent;
  let fixture: ComponentFixture<Actividad2PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Actividad2PageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Actividad2PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
