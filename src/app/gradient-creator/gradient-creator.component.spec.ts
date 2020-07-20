import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradientCreatorComponent } from './gradient-creator.component';

describe('GradientCreatorComponent', () => {
  let component: GradientCreatorComponent;
  let fixture: ComponentFixture<GradientCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradientCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradientCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
