import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TestComponent } from './components/test/test.component';

export const routes: Routes = [
    {path:'',component: HomeComponent,  title:'HomePage'},
    {path:'test',component:TestComponent,title:'Testing'}
];
