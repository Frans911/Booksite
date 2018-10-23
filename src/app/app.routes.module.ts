import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { EventComponent } from './components/event/event.component';
import { ViewComponent } from './components/view/view.component';
import { HomeComponent } from './components/home/home.component';
import { IntroComponent } from './components/intro/intro.component';
import { Routes } from '@angular/router'
import { FormComponent } from './components/form/form.component';


export const routes:Routes = [
{path:'',component:IntroComponent},
{path:'form',component:FormComponent},
{path:'home',component:HomeComponent,children:[
    {path:'view',component:ViewComponent},
    {path:'event',component:EventComponent}
]},
{path:'about',component:AboutComponent},
{path:'contact',component:ContactComponent}
];