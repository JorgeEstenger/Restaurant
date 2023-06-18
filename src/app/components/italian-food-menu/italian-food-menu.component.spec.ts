import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItalianFoodMenuComponent } from './italian-food-menu.component';

describe('ItalianFoodMenuComponent', () => {
  let component: ItalianFoodMenuComponent;
  let fixture: ComponentFixture<ItalianFoodMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItalianFoodMenuComponent]
    });
    fixture = TestBed.createComponent(ItalianFoodMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
