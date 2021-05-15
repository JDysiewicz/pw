import { Component } from '@angular/core';
import { PasswordConfig, PasswordConfigProperty } from './app.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  password = '';

  length = 0;

  config: PasswordConfig = {
    letters: false,
    numbers: false,
    symbols: false,
  };

  valid = {
    numbers: '1234567890',
    letters: 'abcdefghijklmnopqrstuvwxyz',
    symbols: '!£$%^&*()',
  };

  onCheck(property: PasswordConfigProperty) {
    this.config[property] = !this.config[property];
  }

  onInputLength(event: any) {
    const parsedValue = parseInt(event.target.value);
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
      console.log(this.length);
    } else {
      this.length = 0;
    }
  }

  onClick() {
    let validChars = '';
    Object.keys(this.config).forEach((key) => {
      if (key === 'letters' || key === 'numbers' || key === 'symbols') {
        this.config[key] ? (validChars += this.valid[key]) : null;
      }
    });

    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const idx = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[idx];
    }

    this.password = generatedPassword;
  }

  buttonIsDisabled() {
    if (!this.length) return true;
    if (!this.configIsValid()) return true;
    return false;
  }

  private configIsValid() {
    const keys = Object.keys(this.config) as PasswordConfigProperty[];
    const values = keys.map((key) => this.config[key]);
    const isValid = values.indexOf(true) !== -1;
    return isValid;
  }
}
