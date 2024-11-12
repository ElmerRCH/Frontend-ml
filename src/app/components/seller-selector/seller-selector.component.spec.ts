import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerSelectorComponent } from './seller-selector.component';

describe('SellerSelectorComponent', () => {
  let component: SellerSelectorComponent;
  let fixture: ComponentFixture<SellerSelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellerSelectorComponent]
    });
    fixture = TestBed.createComponent(SellerSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
