import { Component, OnInit } from '@angular/core';
import { RGBColor } from '../../utils/colorUtils';
import { RGBtoString } from '../../utils/colorConversionUtils';
import { FormControl } from '@angular/forms';
import { clamp } from '@utils/constraintUtils';

@Component({
  selector: 'app-gradient-creator',
  templateUrl: './gradient-creator.component.html',
  styleUrls: ['./gradient-creator.component.scss']
})
export class GradientCreatorComponent implements OnInit {

  constructor() { }

  colorList: RGBColor[];
  visibilityArray: boolean[];
  angle: number;
  control: FormControl;

  ngOnInit(): void {
    this.colorList = [{ r: 250, g: 218, b: 94 }, { r: 115, g: 212, b: 11 }];
    this.visibilityArray = this.colorList.map(() => false);
    this.setAngle(90);
    this.control = new FormControl(this.angle);
  }

  rgbToArray(color: RGBColor): [string, number][] {
    return Object.entries(color);
  }

  RGBtoString(color: RGBColor): string {
    return RGBtoString(color);
  }

  toggleSlidersVisibility(index) {
    this.visibilityArray[index] = !this.visibilityArray[index];
  }

  handleChange(data: [string, number], index: number) {
    this.colorList[index][data[0]] = data[1];
  }

  trackByFn(index, item) {
    return index;
  }

  addColor() {
    this.colorList.push({ r: 120, g: 150, b: 180 });
    this.visibilityArray.push(false);
  }

  deleteColor(index: number) {
    if (!this.isOnlyOneColor()) {
      this.colorList.splice(index, 1);
      this.visibilityArray.splice(index, 1);
    }
  }

  setAngle(angle: number) {
    if (this.angle !== angle) {
      this.angle = clamp(angle, 0, 360);
    }
  }

  isOnlyOneColor() {
    return this.colorList.length <= 1;
  }

  get colorListString(): string {
    if (this.colorList.length >= 2) {
      return this.colorList.map(RGBtoString).join(',');
    } else {
      const singleColorString  = RGBtoString(this.colorList[0]);

      return `${singleColorString}, ${singleColorString}`;
    }
  }

  get gradientString(): string {
    return `linear-gradient(${this.angle}deg, ${this.colorListString})`;
  }
}
