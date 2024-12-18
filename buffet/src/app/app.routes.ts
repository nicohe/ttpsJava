import { Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { MenuCreateComponent } from './components/menu/menu-create/menu-create.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MenuEditComponent } from './components/menu/menu-edit/menu-edit.component';


export const routes: Routes = [
    { path: 'menu', component: MenuComponent },
    { path: 'home', component: HomeComponent },
    { path: 'new-menu', component: MenuCreateComponent },
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'menu/:id/edit', component: MenuEditComponent}
];
