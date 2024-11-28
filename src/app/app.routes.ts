import { Routes } from '@angular/router';
import { ListTasksComponent } from './components/list-tasks/list-tasks.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { authGuard } from './auth.guard';
import { AddTaskComponent } from './components/add-task/add-task.component';

export const routes: Routes = [
   {
      path: '',
      redirectTo: 'tasks',
      pathMatch: 'full',
    },
    {
      path: 'tasks',
      component: ListTasksComponent,
      canActivate: [authGuard]
    },
    {
      path: 'tasks/add',
      component: AddTaskComponent,
      canActivate: [authGuard]
    },
    {
      path: 'login',
      component: LoginComponent,
    },
    {
      path: 'register',
      component: RegisterComponent,
    }
];
