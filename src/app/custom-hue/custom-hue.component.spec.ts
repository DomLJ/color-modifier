import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomHueComponent } from './custom-hue.component';

describe('CustomHueComponent', () => {
  let component: CustomHueComponent;
  let fixture: ComponentFixture<CustomHueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomHueComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomHueComponent);
    component = fixture.componentInstance;

    component.initialColor = { r: 3, g: 125, b: 99 }

    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display proper input values', () => {
    expect(component.initialColor.r).toBe(3);
    expect(component.initialColor.g).toBe(125);
    expect(component.initialColor.b).toBe(99);
    
    expect(component.initialColor.b).not.toBe(66);
  });

});
