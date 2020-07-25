import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorCreatorComponent } from './color-creator.component';

describe('ColorCreator', () => {
  let component: ColorCreatorComponent;
  let fixture: ComponentFixture<ColorCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ColorCreatorComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly tell if color is dark', () => {
    component.color = { r: 1, g: 1, b: 1 };

    expect(component.isColorDark).toBe(true);

    component.color = { r: 220, g: 240, b: 222 };

    expect(component.isColorDark).toBe(false);
  });
});
