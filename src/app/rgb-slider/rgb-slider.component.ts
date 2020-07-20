import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { clamp } from "@utils/constraintUtils"

@Component({
  selector: 'app-rgb-slider',
  templateUrl: './rgb-slider.component.html',
  styleUrls: ['./rgb-slider.component.scss']
})
export class RgbSliderComponent implements OnInit {
  @Input() colorTupple: [string, number]
  @Output() onSliderChange = new EventEmitter<[string, number]>();
  control: FormControl

  ngOnInit(): void {
    this.control = new FormControl(this.colorTupple[1])
  }

  handleChange(value) {
    if (value !== this.colorTupple[1]) {
      this.onSliderChange.emit([this.colorTupple[0], clamp(value, 0, 255)])
    }
  }
}
