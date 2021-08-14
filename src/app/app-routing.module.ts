import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    {path: 'register',component:RegisterComponent},
    {path: 'login', component: LoginComponent }
];

export const AppRoutingModule = RouterModule.forRoot(routes);