import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  contactForm: any;
  isSubmitted: boolean = true;

  constructor(private formBuilder: FormBuilder) {

    {
      this.contactForm = this.formBuilder.group({
        name: ['', [Validators.required, Validators.minLength(3)]],
        apellidos: ['', [Validators.minLength(5)]],
        description: [''],
        email: ['', Validators.email],
        edad: ['', ],
        // Validators.min(2), Validators.max(5)
      });
    }

   }

  ngOnInit(): void {
  }

  submitted(){
    this.isSubmitted = true;
    console.log(this.contactForm);
    console.log(this.contactForm.value);
  }

}
