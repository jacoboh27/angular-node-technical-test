import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteNewCategorieComponent } from './delete-new-categorie.component';

describe('DeleteNewCategorieComponent', () => {
  let component: DeleteNewCategorieComponent;
  let fixture: ComponentFixture<DeleteNewCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteNewCategorieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteNewCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
