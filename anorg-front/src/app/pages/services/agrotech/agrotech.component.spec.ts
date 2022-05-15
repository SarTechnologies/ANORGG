import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgrotechComponent } from './agrotech.component';

describe('AgrotechComponent', () => {
  let component: AgrotechComponent;
  let fixture: ComponentFixture<AgrotechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgrotechComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgrotechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
