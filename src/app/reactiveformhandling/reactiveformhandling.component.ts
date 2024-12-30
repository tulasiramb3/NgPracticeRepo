import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Job } from '../models/job';

@Component({
  selector: 'app-reactiveformhandling',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './reactiveformhandling.component.html',
  styleUrl: './reactiveformhandling.component.css'
})
export class ReactiveformhandlingComponent {
  // name = new FormControl('');
  formSubmitted = false;
  isFormValid = false;
  job?: Job;
  
  jobFormGroup = new FormGroup({
    name: new FormControl('', [Validators.required,Validators.minLength(3)]),
    description : new FormControl('',[Validators.required,Validators.minLength(3)]),
    jobType : new FormControl('' , Validators.required)
  }
  );


  submit() {
    // console.log('submit cliccked', this.name.value);
    // this.name.setValue('tulasi') 
    // console.log({...this.jobFormGroup.value});
    
    this.formSubmitted=true;
    this.isFormValid = this.jobFormGroup.valid;
    if(this.isFormValid){
       const formValues = this.jobFormGroup.value;
       this.job = {
        description : formValues.description ?? '',
        name : formValues.jobType ??'',
        type: formValues.name ??''
       };
       console.log(this.job);
       this.reset();
    }
    
  }
  reset() {
    this.formSubmitted=false;
    this.jobFormGroup.reset();
    console.log('reset cliccked');
  }
}
