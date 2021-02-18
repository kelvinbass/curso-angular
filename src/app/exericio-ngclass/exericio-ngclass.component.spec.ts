import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExericioNgclassComponent } from './exericio-ngclass.component';

describe('ExericioNgclassComponent', () => {
  let component: ExericioNgclassComponent;
  let fixture: ComponentFixture<ExericioNgclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExericioNgclassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExericioNgclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
