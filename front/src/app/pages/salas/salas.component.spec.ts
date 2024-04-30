import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalasComponent } from './salas.component';

describe('SalasComponent', () => {
  let component: SalasComponent;
  let fixture: ComponentFixture<SalasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalasComponent]
    });
    fixture = TestBed.createComponent(SalasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('verificar se botão de voltar funciona',()=>{
    spyOn(component, 'goBack');
    const backButton = fixture.debugElement.nativeElement.querySelector('.back');
    backButton.click();
    expect(component.goBack).toHaveBeenCalled();
  });

  it('verificar se titulo é exibido corretamente',()=>{
    const titleElement = fixture.nativeElement.querySelector('.salas_page_title');
    expect(titleElement.textContent).toContain('SALAS VIRTUAIS');

  });

  it('should navigate to the selected virtual room', () => {
    const navigateSpy = spyOn((<any>component).router, 'navigate');
    const virtualRoomLink = fixture.nativeElement.querySelector('.virtual_room_link');
    virtualRoomLink.click();
    expect(navigateSpy).toHaveBeenCalledWith(['/virtual-room', 'sala-id']);
  });

  it('should display correct table headers', () => {
    const headerRow = fixture.nativeElement.querySelector('.salas_table tr:first-child');
    const headers = headerRow.querySelectorAll('th');
    expect(headers.length).toBe(2);
    expect(headers[0].textContent).toBe('Nome da sala' );
    expect(headers[1].textContent).toBe('Disciplina associada');
    expect(headers[1].textContent).toBe('Data da chamada');
    expect(headers[1].textContent).toBe('Tópico');

  });
});
