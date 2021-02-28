import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseTakenComponent } from './course-taken.component';

describe('CourseTakenComponent', () => {
  let component: CourseTakenComponent;
  let fixture: ComponentFixture<CourseTakenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseTakenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseTakenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
