import { Component, OnInit } from '@angular/core';
import { RGBColor, isColorDark } from '../../utils/colorUtils';
import { RGBtoString, RGBtoHex, RGBtoCMYK, CMYKtoString } from '../../utils/colorConversionUtils';

@Component({
  selector: 'app-color-creator',
  templateUrl: './color-creator.component.html',
  styleUrls: ['./color-creator.component.scss']
})
export class ColorCreatorComponent implements OnInit {

  color: RGBColor;

  constructor() { }

  ngOnInit(): void {
    this.color = { r: 250, g: 218, b: 94 };
  }

  get rgbArray(): [string, number][] {
    return Object.entries(this.color);
  }

  get rgbString(): string {
    return RGBtoString(this.color);
  }

  get hexString(): string {
    return RGBtoHex(this.color);
  }

  get cmykString(): string {
    return CMYKtoString(RGBtoCMYK(this.color));
  }

  get isColorDark(): boolean {
    return isColorDark(this.color);
  }

  handleChange(data: [string, number]) {
    this.color[data[0]] = data[1];
  }

  trackByFn(index, item) {
    return index;
  }

}
