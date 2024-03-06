import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordDifficultyService {

  password: any = '';

  text: any = ''

  digits: any = /\d/

  letters: any = /\w/

  symbols: any = /[^ \w]/g 

  onWrite(spans: HTMLElement[]) {

    //All
    if ((this.password.match(this.digits) || this.password.match(this.letters) || this.password.match(this.symbols)) && this.password.length >= 8) {
      this.text = 'The password is easy'
    }

    //Letters-symbols  Letters-digits  Digits-symbols
    if (!this.password.match(this.digits) && this.password.match(this.letters) && this.password.match(this.symbols) || this.password.match(this.digits) && this.password.match(this.letters) && !this.password.match(this.symbols) || this.password.match(this.digits) && !this.password.match(this.letters) && this.password.match(this.symbols)) {
      this.text = 'The password is medium'
    }

    //Strong
    if (this.password.match(this.digits) && this.password.match(this.letters) && this.password.match(this.symbols)) {
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

}
