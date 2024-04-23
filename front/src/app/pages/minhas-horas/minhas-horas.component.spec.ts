import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhasHorasComponent } from './minhas-horas.component';

describe('MinhasHorasComponent', () => {
  let component: MinhasHorasComponent;
  let fixture: ComponentFixture<MinhasHorasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MinhasHorasComponent]
    });
    fixture = TestBed.createComponent(MinhasHorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
