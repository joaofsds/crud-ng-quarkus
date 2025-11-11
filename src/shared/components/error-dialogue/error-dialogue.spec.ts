import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorDialogue } from './error-dialogue';

describe('ErrorDialogue', () => {
  let component: ErrorDialogue;
  let fixture: ComponentFixture<ErrorDialogue>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorDialogue]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorDialogue);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
