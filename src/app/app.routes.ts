import { Routes } from '@angular/router';
import { App } from './app';
import { dateTimestampProvider } from 'rxjs/internal/scheduler/dateTimestampProvider';
import { Dashboard } from './Views/dashboard/dashboard';

export const routes: Routes = [
    {
        path: '',
        component:Dashboard,
        pathMatch: 'full'
    }
];
