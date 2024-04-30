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
});
