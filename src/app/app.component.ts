import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ButtontestComponent } from './buttontest/buttontest.component';
import { DirectiveSampleComponent } from './directive-sample/directive-sample.component';
import { BasicFormHandlingComponent } from './basic-form-handling/basic-form-handling.component';
import { ParentChildComponent } from './parent-child/parent-child.component';
import { HttpclientSampleComponent } from './httpclient-sample/httpclient-sample.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,RouterLinkActive],
            // DataBindingComponent,
            // ButtontestComponent,
            // DirectiveSampleComponent,
            // BasicFormHandlingComponent,
            // ParentChildComponent,
            // HttpclientSampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-works';
}
