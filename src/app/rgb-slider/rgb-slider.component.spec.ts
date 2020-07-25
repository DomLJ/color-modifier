import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RgbSliderComponent } from './rgb-slider.component';

describe('RgbSliderComponent', () => {
  let component: RgbSliderComponent;
  let fixture: ComponentFixture<RgbSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RgbSliderComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RgbSliderComponent);
    component = fixture.componentInstance;
    // mock colorTupple input value
    component.colorTupple = ["r", 33];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display proper input values', () => {
    expect(component.colorTupple[0]).toBe("r");
    expect(component.colorTupple[1]).toBe(33);
    expect(component.colorTupple[1]).not.toBe(0);
  });

  it('emits proper values on change', () => {
    component.colorTupple = ["c", 222]
  
    spyOn(component.onSliderChange, "emit")

    component.handleChange(111)

    expect(component.onSliderChange.emit).toHaveBeenCalledWith(["c", 111])
  });
});
