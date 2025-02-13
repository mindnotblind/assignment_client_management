import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';

import { ClientRegisterComponent } from './client/client-register/client-register.component';
import { ClientListComponent } from './client/client-list/client-list.component';
import { MeetingRegisterComponent } from './meeting/meeting-register/meeting-register.component';
import { MeetingListComponent } from './meeting/meeting-list/meeting-list.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'meeting/list' }, // ✅ Redirect to meeting list
  { path: 'client/register', component: ClientRegisterComponent },
  { path: 'client/list', component: ClientListComponent },
  { path: 'meeting/register', component: MeetingRegisterComponent },
  { path: 'meeting/list', component: MeetingListComponent }
];

export const appConfig = [
  provideRouter(routes)
];
