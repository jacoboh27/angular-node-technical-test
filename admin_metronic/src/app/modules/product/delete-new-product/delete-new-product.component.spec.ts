import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteNewProductComponent } from './delete-new-product.component';

describe('DeleteNewProductComponent', () => {
  let component: DeleteNewProductComponent;
  let fixture: ComponentFixture<DeleteNewProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteNewProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteNewProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
