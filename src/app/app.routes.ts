import { Routes } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ButtontestComponent } from './buttontest/buttontest.component';
import { DirectiveSampleComponent } from './directive-sample/directive-sample.component';
import { BasicFormHandlingComponent } from './basic-form-handling/basic-form-handling.component';
import { ParentChildComponent } from './parent-child/parent-child.component';
import { HttpclientSampleComponent } from './httpclient-sample/httpclient-sample.component';
import { PipesconceptsComponent } from './pipesconcepts/pipesconcepts.component';
import { ReactiveformhandlingComponent } from './reactiveformhandling/reactiveformhandling.component';
import { ArrayspecialoperatorsComponent } from './arrayspecialoperators/arrayspecialoperators.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './login/profile/profile.component';

export const routes: Routes = [
    {path:'' , component:DataBindingComponent},
    {path:'simpledatabinding' , component:DataBindingComponent},
    {path:'buttontest' , component:ButtontestComponent},
    {path:'directivesample' , component:DirectiveSampleComponent},
    {path:'templatedrivenform' , component:BasicFormHandlingComponent},
    {path:'parentchild' , component:ParentChildComponent},
    {path:'httpclientsample' , component:HttpclientSampleComponent},
    {path:'pipesconcepts' , component:PipesconceptsComponent},
    {path:'reactiveform' , component:ReactiveformhandlingComponent},
    {path:'arraysploperators',component : ArrayspecialoperatorsComponent},
    {path:'login',component : LoginComponent},
    {path:'profile',component : ProfileComponent}

];
