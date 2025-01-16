import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router'
import { LanguagesComponent } from '../../../models/languages';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, RouterLink, RouterOutlet, NgIf],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  languagesTS = inject(LanguagesComponent)

  goTop() {
    document.querySelector('#startScreen_link')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  contactData = {
    name: "",
    email: "",
    message: "",
  }

  privacyChecked: boolean = false;
  mailSent: any = false;

  http = inject(HttpClient);

  post = {
    endPoint: 'https://sangeethan-developer.com/sendMailPHP.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  check() {
    if (this.privacyChecked == false) {
      this.privacyChecked = true;
    } else if (this.privacyChecked == true) {
      this.privacyChecked = false;
    }
  }

  resetCheckbox() {
    let checkbox = document.getElementById('checkbox') as HTMLInputElement; checkbox.checked = false;
    this.privacyChecked = false;
  }

  enableSubmitButton() {
    if (this.contactData.name.length > 0 && this.contactData.email.length > 0 && this.contactData.message.length > 0
      && this.privacyChecked == true) {
      document.getElementById('sayHello')?.classList.remove('buttonGrey');
      document.getElementById('sayHello')?.classList.add('button');
    }
    else {
      document.getElementById('sayHello')?.classList.remove('button');
      document.getElementById('sayHello')?.classList.add('buttonGrey');
    }
  }

  mailSuccessfullySent() {
    document.getElementById('checkbox')?.setAttribute('style', 'display: none;');
    document.getElementById('read_privacy_policy')?.setAttribute('style', 'display: none;');
    document.getElementById('mailSuccess')?.setAttribute('style', 'display: unset; color:green;');
    this.mailSent = true;
  }

  resetMailSuccessfullySent() {
    if (this.mailSent == false || this.mailSent == true) {
      this.mailSent = false;
      document.getElementById('checkbox')?.setAttribute('style', 'display: unset;');
      document.getElementById('read_privacy_policy')?.setAttribute('style', 'display: unset;');
      document.getElementById('mailSuccess')?.setAttribute('style', 'display: none;');
    }
  }

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && this.privacyChecked) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => {
            this.resetCheckbox();
            this.mailSuccessfullySent();
          }
        });
    }
  }

  ngAfterContentInit() {
    this.languagesTS.loadLanguage();
  }
}
