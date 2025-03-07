import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ejercicio09Component } from './ejercicio-09.component';
import { By } from '@angular/platform-browser';

describe('Ejercicio09Component', () => {
  let component: Ejercicio09Component;
  let fixture: ComponentFixture<Ejercicio09Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio09Component]
    }).compileComponents();

    fixture = TestBed.createComponent(Ejercicio09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment counter when button is clicked', () => {
    const button = fixture.debugElement.query(By.css('.btn'));  // Selecciona el botón
    const counterDisplay = fixture.debugElement.query(By.css('p')); // Selecciona el contador en el DOM

    // Verifica que el contador empieza en 0
    expect(component.counter).toBe(0);
    expect(counterDisplay.nativeElement.textContent).toContain('Items added: 0');

    // Simula el clic en el botón
    button.triggerEventHandler('click', null);
    fixture.detectChanges();  // Detecta los cambios después del clic

    // Verifica que el contador se haya incrementado
    expect(component.counter).toBe(1);
    expect(counterDisplay.nativeElement.textContent).toContain('Items added: 1');
  });
});
