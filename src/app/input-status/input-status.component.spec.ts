import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputStatusComponent } from './input-status.component';

describe('InputStatusComponent', () => {
  let component: InputStatusComponent;
  let fixture: ComponentFixture<InputStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
