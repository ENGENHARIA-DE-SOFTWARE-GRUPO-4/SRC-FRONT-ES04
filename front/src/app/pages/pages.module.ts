import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from '../shared/shared.module';
import { AgendaComponent } from './agenda/agenda.component';
import { SalasComponent } from './salas/salas.component';
import { MinhasInfosComponent } from './minhas-infos/minhas-infos.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { ForumComponent } from './forum/forum.component';
import { LogoutComponent } from './logout/logout.component';
import { DisciplinasComponent } from './disciplinas/disciplinas.component';
import { HorasComponent } from './horas/horas.component';
import { MinhasHorasComponent } from './minhas-horas/minhas-horas.component';
import { DisciplinaComponent } from './disciplina/disciplina.component';
import { NovoEventoComponent } from './agenda/novo-evento/novo-evento.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AgendaComponent,
    SalasComponent,
    MinhasInfosComponent,
    CalendarioComponent,
    ForumComponent,
    LogoutComponent,
    DisciplinasComponent,
    HorasComponent,
    MinhasHorasComponent,
    DisciplinaComponent,
    NovoEventoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AgendaComponent,
    SalasComponent,
    MinhasInfosComponent,
    CalendarioComponent,
    ForumComponent,
    LogoutComponent,
    DisciplinasComponent,
    HorasComponent,
    MinhasHorasComponent
  ]
})
export class PagesModule { }
