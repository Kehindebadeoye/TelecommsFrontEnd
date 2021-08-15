import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataplanComponent } from './dataplan.component';

describe('DataplanComponent', () => {
  let component: DataplanComponent;
  let fixture: ComponentFixture<DataplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
