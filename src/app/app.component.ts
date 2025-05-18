import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputStatusComponent } from './input-status/input-status.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InputStatusComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ng-forms';
}
