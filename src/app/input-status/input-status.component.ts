import { Component, inject } from '@angular/core';
import { LeafInputComponent } from '../leaf-input/leaf-input.component';
import { LeafInputDirective } from '../@leaf/inputs/leaf-input.directive';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-input-status',
  imports: [
    LeafInputComponent,
    LeafInputDirective,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './input-status.component.html',
  styleUrl: './input-status.component.scss',
})
export class InputStatusComponent {
  _fb = inject(FormBuilder);

  formGroup!: FormGroup;

  private _buildForm(): void {
    this.formGroup = this._fb.nonNullable.group({
      default: [''],
      focus: ['Novelties'],
      error: ['Equipments', [Validators.required, Validators.maxLength(8)]],
      lock: ['Food'],
    });
  }

  ngOnInit(): void {
    this._buildForm();
    this.formGroup.get('lock')?.disable();
  }
}
