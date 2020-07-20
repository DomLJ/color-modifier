import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomHueComponent } from './custom-hue.component';

describe('CustomHueComponent', () => {
  let component: CustomHueComponent;
  let fixture: ComponentFixture<CustomHueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomHueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomHueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
