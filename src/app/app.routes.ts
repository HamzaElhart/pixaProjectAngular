import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { BodyComponent } from './components/home/body/body.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'body',
        component: BodyComponent,
      },
      {
        path: 'newpicture',
        component: BodyComponent,
      },
    ],
  },
];
