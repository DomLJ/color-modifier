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

  it('adds new color properly', () => {
    component.addColor();

    expect(component.colorList.length).toBe(3);
    expect(component.visibilityArray.length).toBe(3);
  });

  it('deleting color works properly', () => {
    component.deleteColor(1);

    expect(component.colorList.length).toBe(1);
    expect(component.visibilityArray.length).toBe(1);

    component.deleteColor(0);

    expect(component.colorList.length).toBe(1);
    expect(component.visibilityArray.length).toBe(1);
  });

  it('sets correct angle and clamps it if it exceeds 360 or is below 0 degrees', () => {
    component.setAngle(35);
    expect(component.angle).toBe(35);

    component.setAngle(999);
    expect(component.angle).toBe(360);

    component.setAngle(-200);
    expect(component.angle).toBe(0);
  });

});
