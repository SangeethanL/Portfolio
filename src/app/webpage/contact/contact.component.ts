import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  contactData = {
    name: "",
    email: "",
    message: "",
  }

  privacyChecked: boolean = false;

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
          complete: () => this.resetCheckbox()
        });
    }
  }

}
