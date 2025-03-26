import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaFavComponent } from './Materia-fav.component';

describe('MateriaFavComponent', () => {
  let component: MateriaFavComponent;
  let fixture: ComponentFixture<MateriaFavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MateriaFavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MateriaFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
