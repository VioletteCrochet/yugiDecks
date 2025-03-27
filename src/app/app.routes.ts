import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    {path: "", title: "Home", component: HomeComponent},
    {path: "login", title: "Login", component: LoginComponent},
    {path: "register", title: "Register", component: RegisterComponent},

    {path: "**", title: "Not Found", component: NotFoundComponent},   
];
