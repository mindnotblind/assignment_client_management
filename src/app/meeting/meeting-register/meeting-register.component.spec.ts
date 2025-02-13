import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingRegisterComponent } from './meeting-register.component';

describe('MeetingRegisterComponent', () => {
  let component: MeetingRegisterComponent;
  let fixture: ComponentFixture<MeetingRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeetingRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetingRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
