import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CardlistComponent } from './pages/cardlist/cardlist.component';

export const routes: Routes = [
    {path: "", title: "Home", component: HomeComponent},
    {path: "login", title: "Login", component: LoginComponent},
    {path: "register", title: "Register", component: RegisterComponent},
    {path: "cardlist", title: "Card List", component: CardlistComponent},

    {path: "**", title: "Not Found", component: NotFoundComponent},   
];
