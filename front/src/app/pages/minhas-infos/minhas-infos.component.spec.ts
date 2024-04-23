import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhasInfosComponent } from './minhas-infos.component';

describe('MinhasInfosComponent', () => {
  let component: MinhasInfosComponent;
  let fixture: ComponentFixture<MinhasInfosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MinhasInfosComponent]
    });
    fixture = TestBed.createComponent(MinhasInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
