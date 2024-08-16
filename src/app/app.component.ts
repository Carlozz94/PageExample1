import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  firstName: string = '';
  lastName: string = '';
  affair: string = '';
  message: string = '';
  phone: string = '';

  handleSubmit(event: Event) {
    event.preventDefault();

    const mailToLink = document.querySelector('#mail') as HTMLAnchorElement;
    mailToLink.setAttribute(
      'href',
      `mailto:cazc.zarate94@gmail.com?subject=asunto${this.affair}&body=nombre ${this.firstName}
  apellidos ${this.lastName}
  Mensaje ${this.message}
  telefono ${this.phone} `
    );
    mailToLink.click();

    this.clearForm();
  }

  clearForm() {
    this.firstName = '';
    this.lastName = '';
    this.affair = '';
    this.message = '';
    this.phone = '';
  }
}
