import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCustomValComponent } from './add-custom-val.component';

describe('AddCustomValComponent', () => {
  let component: AddCustomValComponent;
  let fixture: ComponentFixture<AddCustomValComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCustomValComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCustomValComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
