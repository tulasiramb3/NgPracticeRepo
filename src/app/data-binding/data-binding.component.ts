import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone:true,
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  userName : string='';
}
