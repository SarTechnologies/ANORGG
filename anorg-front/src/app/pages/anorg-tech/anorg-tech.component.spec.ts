import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnorgTechComponent } from './anorg-tech.component';

describe('AnorgTechComponent', () => {
  let component: AnorgTechComponent;
  let fixture: ComponentFixture<AnorgTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnorgTechComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnorgTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
