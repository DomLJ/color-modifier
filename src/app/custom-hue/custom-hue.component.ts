import { Component, OnInit, Input } from '@angular/core';
import { RGBColor, getShade, getTint, isColorDark } from '@utils/colorUtils';
import { RGBtoHex } from '@utils/colorConversionUtils';


@Component({
  selector: 'app-custom-hue',
  templateUrl: './custom-hue.component.html',
  styleUrls: ['./custom-hue.component.scss']
})
export class CustomHueComponent implements OnInit {
  @Input() initialColor: RGBColor;

  constructor() { }

  ngOnInit(): void {
  }

  get modifiedColorsArray(): [string, boolean][] {
    const colorArray: [string, boolean][] = [];

    for (let i = 1; ; i++) {
      const newTint = getTint(this.initialColor, i / 10);
      const hexTint = RGBtoHex(newTint).toUpperCase();

      colorArray.push([hexTint, isColorDark(newTint)]);

      if (hexTint === '#FFFFFF') {
        break;
      }
    }
    colorArray.reverse();

    for (let i = 0; ; i++) {
      const newShade = getShade(this.initialColor, i / 10);
      const hexShade = RGBtoHex(newShade).toUpperCase();

      colorArray.push([hexShade, isColorDark(newShade)]);

      if (hexShade === '#000000') {
        break;
      }
    }

    return colorArray;
  }
}
