import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatCardsComponent } from './mat-cards.component';

describe('MatCardsComponent', () => {
  let component: MatCardsComponent;
  let fixture: ComponentFixture<MatCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatCardsComponent]
    });
    fixture = TestBed.createComponent(MatCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
