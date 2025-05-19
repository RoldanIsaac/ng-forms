import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[leafInput]',
})
export class LeafInputDirective {
  private valueChanges$!: Subscription;

  constructor(private _el: ElementRef, private controlDir: NgControl) {}

  ngOnInit(): void {
    // console.log(this._el.nativeElement);
    // console.log(this.controlDir);

    this.setStyles();

    const control = this.controlDir.control;
    if (control) {
      this.valueChanges$ = control.valueChanges?.subscribe((value) => {
        if (control.valid) {
          this._el.nativeElement?.classList.remove('leaf-input-error');
        } else {
          this._el.nativeElement?.classList.add('leaf-input-error');
        }
      });
    }
    if (control?.disabled) {
      this._el.nativeElement?.classList.add('leaf-input-lock');
    }
  }

  ngOnDestroy() {
    this.valueChanges$?.unsubscribe();
  }

  setStyles(): void {
    this._el.nativeElement?.classList.add('leaf-input');
    this._el.nativeElement?.classList.add('leaf-input-default');
  }

  @HostListener('focus', ['$event'])
  onClick(event: MouseEvent) {
    this._el.nativeElement?.classList.add('leaf-input-focus');
  }

  @HostListener('blur', ['$event'])
  onBlur(event: FocusEvent) {
    this._el.nativeElement?.classList.remove('leaf-input-focus');
  }

  // @HostListener('input', ['$event'])
  // onInput(event: KeyboardEvent) {}

  // @HostListener('keydown', ['$event'])
  // onKeyDown(event: KeyboardEvent) {}
}
