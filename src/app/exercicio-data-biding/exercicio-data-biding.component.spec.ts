import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioDataBidingComponent } from './exercicio-data-biding.component';

describe('ExercicioDataBidingComponent', () => {
  let component: ExercicioDataBidingComponent;
  let fixture: ComponentFixture<ExercicioDataBidingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercicioDataBidingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercicioDataBidingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
