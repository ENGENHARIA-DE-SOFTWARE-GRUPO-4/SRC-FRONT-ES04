import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { DisciplinasComponent } from './disciplinas.component';

describe('DisciplinasComponent', () => {
  let component: DisciplinasComponent;
  let fixture: ComponentFixture<DisciplinasComponent>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisciplinasComponent],
      providers: [
        { provide: Router, useValue: { navigate: jasmine.createSpy('navigate') } }
      ]
    });
    fixture = TestBed.createComponent(DisciplinasComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call goBack when back button is clicked', () => {
    spyOn(component, 'goBack');
    const backButton = fixture.debugElement.nativeElement.querySelector('.back');
    backButton.click();
    expect(component.goBack).toHaveBeenCalled();
  });
});
