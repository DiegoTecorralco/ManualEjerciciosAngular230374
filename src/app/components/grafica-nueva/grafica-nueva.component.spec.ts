import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaNuevaComponent } from './grafica-nueva.component';

describe('GraficaNuevaComponent', () => {
  let component: GraficaNuevaComponent;
  let fixture: ComponentFixture<GraficaNuevaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraficaNuevaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficaNuevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
