import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { InputComponent } from './components/input/input.component';
import { StrongPasswordComponent } from './components/strong-password/strong-password.component';
import { PasswordDifficultyService } from './Services/password-difficulty.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    CommonModule, 
    FormsModule, 
    InputComponent,
    StrongPasswordComponent  
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'password-strength';


}
