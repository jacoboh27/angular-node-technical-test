import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNewCategorieComponent } from './edit-new-categorie.component';

describe('EditNewCategorieComponent', () => {
  let component: EditNewCategorieComponent;
  let fixture: ComponentFixture<EditNewCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditNewCategorieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNewCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
