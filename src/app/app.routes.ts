import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Login } from './login/login';
import { Users } from './users/users';

export const routes: Routes = [
    // http://localhost:4200/
    {
        path:"",component:Home,title:"Home"
    },
    // http://localhost:4200/about
    {
        path:"about",component:About,title:"About"
    },
    // http://localhost:4200/contact
    {
        path:"contact",component:Contact,title:"Contact"
    },
    // http://localhost:4200/login
    {
        path:"login",component:Login,title:"Login"
    },
    // http://localhost:4200/users
    {
        path:"users",component:Users,title:"Users"
    }
];
