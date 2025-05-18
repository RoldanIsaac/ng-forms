import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeafInputComponent } from './leaf-input.component';

describe('LeafInputComponent', () => {
  let component: LeafInputComponent;
  let fixture: ComponentFixture<LeafInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeafInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeafInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
