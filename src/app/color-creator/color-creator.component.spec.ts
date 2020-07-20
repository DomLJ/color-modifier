import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorCreatorComponent } from './color-creator.component';

describe('ColorCreator', () => {
  let component: ColorCreatorComponent;
  let fixture: ComponentFixture<ColorCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorCreatorComponent ]
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
});
