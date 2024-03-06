import { Component, Input } from '@angular/core';
import { PasswordDifficultyService } from '../../Services/password-difficulty.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  
  constructor(public passwordService: PasswordDifficultyService) {}

  @Input()
  spans: HTMLElement[] = [];

}
