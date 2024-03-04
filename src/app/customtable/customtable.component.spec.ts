import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomtableComponent } from './customtable.component';

describe('CustomtableComponent', () => {
  let component: CustomtableComponent;
  let fixture: ComponentFixture<CustomtableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomtableComponent]
    });
    fixture = TestBed.createComponent(CustomtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
