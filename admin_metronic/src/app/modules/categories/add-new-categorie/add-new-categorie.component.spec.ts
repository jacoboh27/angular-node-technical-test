import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewCategorieComponent } from './add-new-categorie.component';

describe('AddNewCategorieComponent', () => {
  let component: AddNewCategorieComponent;
  let fixture: ComponentFixture<AddNewCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewCategorieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
