import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MinhasInfosComponent } from './pages/minhas-infos/minhas-infos.component';
import { AgendaComponent } from './pages/agenda/agenda.component';
import { CalendarioComponent } from './pages/calendario/calendario.component';
import { ForumComponent } from './pages/forum/forum.component';
import { SalasComponent } from './pages/salas/salas.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { DisciplinasComponent } from './pages/disciplinas/disciplinas.component';
import { HorasComponent } from './pages/horas/horas.component';
import { MinhasHorasComponent } from './pages/minhas-horas/minhas-horas.component';
import { DisciplinaComponent } from './pages/disciplina/disciplina.component';
import { NovoEventoComponent } from './pages/agenda/novo-evento/novo-evento.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'minhasInfos',
    component: MinhasInfosComponent
  },
  {
    path: 'agenda',
    component: AgendaComponent
  },
  {
    path: 'calendario',
    component: CalendarioComponent
  },
  {
    path: 'forum',
    component: ForumComponent
  },
  {
    path: 'salas',
    component: SalasComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'disciplinas',
    component: DisciplinasComponent
  },
  {
    path: 'horas',
    component: HorasComponent
  },
  {
    path: 'minhasHoras',
    component: MinhasHorasComponent
  },
  {
    path: 'disciplina',
    component: DisciplinaComponent
  },
  {
    path: 'novo-evento',
    component: NovoEventoComponent
  }
    
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
