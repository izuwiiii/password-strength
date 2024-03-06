import { Component, OnInit } from '@angular/core';
import { PasswordDifficultyService } from '../../Services/password-difficulty.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputComponent } from '../input/input.component'; 

@Component({
  selector: 'app-strong-password',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    InputComponent
  ],
  templateUrl: './strong-password.component.html',
  styleUrl: './strong-password.component.scss'
})
export class StrongPasswordComponent{
  constructor(public passwordService: PasswordDifficultyService) { }
  
}
