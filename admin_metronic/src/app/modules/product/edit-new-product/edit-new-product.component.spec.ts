import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNewProductComponent } from './edit-new-product.component';

describe('EditNewProductComponent', () => {
  let component: EditNewProductComponent;
  let fixture: ComponentFixture<EditNewProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditNewProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNewProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
