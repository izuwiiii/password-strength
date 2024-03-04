import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'password-strength';

  constructor() {

  }

  onWrite(spans: HTMLElement[]) {

    //All
    if ((this.password.match(this.digits) || this.password.match(this.words) || this.password.match(this.symbols)) && this.password.length >= 8) {
      this.text = 'The password is easy'
    }

    //Letters-symbols 
    if (!this.password.match(this.digits) && this.password.match(this.words) && this.password.match(this.symbols)) {
      this.text = 'The password is medium'
    }

    //Letters-digits
    if (this.password.match(this.digits) && this.password.match(this.words) && !this.password.match(this.symbols)) {
      this.text = 'The password is medium'
    }

    //Digits-symbols
    if (this.password.match(this.digits) && !this.password.match(this.words) && this.password.match(this.symbols)) {
      this.text = 'The password is medium'
    }

    //Strong
    if (this.password.match(this.digits) && this.password.match(this.words) && this.password.match(this.symbols)) {
      this.text = 'The password is strong'
    }

    for (let span of spans) {
      const spanElement: HTMLElement = span;

      if (0 < this.password.length && this.password.length < 8) {
        spanElement.style.backgroundColor = 'red'
        this.text = ''
      }

      if (this.password.length == 0) {
        spanElement.style.backgroundColor = 'gray'
      }

      if (this.text == 'The password is easy') {
        spans[0].style.backgroundColor = 'red'
        spanElement.style.backgroundColor = 'gray'
      }

      if (this.text == 'The password is medium') {
        spans[0].style.backgroundColor = 'yellow'
        spans[1].style.backgroundColor = 'yellow'
        spanElement.style.backgroundColor = 'gray'
      }

      if (this.text == 'The password is strong') {
        spanElement.style.backgroundColor = 'green'
      }

    }

  }

  digits: any = /\d/

  words: any = /\w/

  symbols: any = /[^ \w]/g 

  password: string = '';

  text: string = ''

}
