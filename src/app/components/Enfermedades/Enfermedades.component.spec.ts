import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfermedadesComponent } from './Enfermedades.component';

describe('EnfermedadesComponent', () => {
  let component: EnfermedadesComponent;
  let fixture: ComponentFixture<EnfermedadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnfermedadesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnfermedadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
