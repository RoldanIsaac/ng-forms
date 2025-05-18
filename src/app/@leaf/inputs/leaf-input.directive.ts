import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[leaf-input]',
})
export class LeafInputDirective {
  constructor(private _el: ElementRef) {}

  ngOnInit(): void {
    console.log(this._el.nativeElement);
    this.setStyles();
  }

  setStyles(): void {
    this._el.nativeElement?.classList.add('leaf-input');
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {}

  @HostListener('input', ['$event'])
  onInput(event: KeyboardEvent) {}

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {}

  @HostListener('blur', ['$event'])
  onBlur(event: FocusEvent) {}
}
