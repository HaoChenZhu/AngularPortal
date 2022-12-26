import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterClothingComponent } from './filter-clothing.component';

describe('FilterClothingComponent', () => {
  let component: FilterClothingComponent;
  let fixture: ComponentFixture<FilterClothingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterClothingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterClothingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
