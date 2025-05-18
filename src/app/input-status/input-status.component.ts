import { Component } from '@angular/core';
import { LeafInputComponent } from '../leaf-input/leaf-input.component';
import { LeafInputDirective } from '../@leaf/inputs/leaf-input.directive';

@Component({
  selector: 'app-input-status',
  imports: [LeafInputComponent, LeafInputDirective],
  templateUrl: './input-status.component.html',
  styleUrl: './input-status.component.scss',
})
export class InputStatusComponent {}
