import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tarea03Component } from './tarea03.component';

describe('Tarea03Component', () => {
  let component: Tarea03Component;
  let fixture: ComponentFixture<Tarea03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tarea03Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tarea03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
