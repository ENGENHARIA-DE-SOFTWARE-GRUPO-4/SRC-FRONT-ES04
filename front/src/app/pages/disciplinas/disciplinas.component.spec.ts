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

  it('should display the page title', () => {
    const fixture = TestBed.createComponent(DisciplinasComponent);
    fixture.detectChanges();
    const titleElement = fixture.nativeElement.querySelector('.disciplinas_page_title');
    expect(titleElement.textContent).toContain('MINHAS DISCIPLINAS');
  });

  it('should render the disciplines table', () => {
    const fixture = TestBed.createComponent(DisciplinasComponent);
    fixture.detectChanges();
    const tableElement = fixture.nativeElement.querySelector('.disciplinas_table');
    expect(tableElement).toBeTruthy();
  });

  it('should display correct table headers', () => {
    const fixture = TestBed.createComponent(DisciplinasComponent);
    fixture.detectChanges();
    const headerRow = fixture.nativeElement.querySelector('.disciplinas_table tr:first-child');
    const headers = headerRow.querySelectorAll('th');
    expect(headers.length).toBe(5);
    expect(headers[0].textContent).toBe('Disciplina');
    expect(headers[1].textContent).toBe('Nota 1');
    expect(headers[2].textContent).toBe('Nota 2');
    expect(headers[3].textContent).toBe('Nota 3');
    expect(headers[4].textContent).toBe('Média');
  });

  it('should call registerDisciplina on button click', () => {
    const fixture = TestBed.createComponent(DisciplinasComponent);
    const component = fixture.componentInstance;
    spyOn(component, 'registerDisciplina');
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('.disciplinas_footer_container button');
    button.click();

    expect(component.registerDisciplina).toHaveBeenCalled();
  });
});
