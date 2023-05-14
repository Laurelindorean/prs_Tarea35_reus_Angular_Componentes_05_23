import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoFormularioComponent } from './resultado-formulario.component';

describe('ResultadoFormularioComponent', () => {
  let component: ResultadoFormularioComponent;
  let fixture: ComponentFixture<ResultadoFormularioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultadoFormularioComponent]
    });
    fixture = TestBed.createComponent(ResultadoFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
