import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdutechComponent } from './edutech.component';

describe('EdutechComponent', () => {
  let component: EdutechComponent;
  let fixture: ComponentFixture<EdutechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdutechComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdutechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
