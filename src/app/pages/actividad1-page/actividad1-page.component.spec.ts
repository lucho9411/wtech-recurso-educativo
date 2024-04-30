import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Actividad1PageComponent } from './actividad1-page.component';

describe('Actividad1PageComponent', () => {
  let component: Actividad1PageComponent;
  let fixture: ComponentFixture<Actividad1PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Actividad1PageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Actividad1PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
