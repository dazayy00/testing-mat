import { Component } from '@angular/core';

@Component({
  selector: 'app-simpson',
  templateUrl: './simpson.component.html',
  styleUrls: ['./simpson.component.css']
})

export class SimpsonComponent {
  calculate = new Calculate();
  calculateArea(
    fx: any,
    x0: number,
    x1: number,
    seg: number,
    error: number
  ): any {
    if (x0 > x1) {
      let temp = x0;
      x0 = x1;
      x1 = temp;
    }


    return this.calculate(fx, x0, x1, seg, error);
  }
  calculate(fx: any, x0: number, x1: number, seg: number, error: number) {
    if (fx[0] == 0 || x1 == 0) {
      return 0;
    } else {
      let currentArea = 0;
      let previousArea = 0;
      let counter = 1;
      while (currentArea == 0 || currentArea - previousArea > error || currentArea == 0) {
        if (counter == 1) {
          currentArea = this.simpson(seg, fx, x0, x1);
        } else {
          if (currentArea != 0) {
            previousArea = currentArea;
          }
          seg *= 2;
          currentArea = this.simpson(seg, fx, x0, x1);
        }
        counter += 1;
      }
      return currentArea;
    }
  }

  simpson(segments: any, fx: any, x0: any, x1: any) {
    let w = (x1 - x0) / segments;
    let multiple = 0;
    var cal = this.calculator.calculateOperation(fx, x0);
    let sum = x0 == 0 ? 0 : (cal *= cal < 0 ? -1 : 1);
    for (let i = 1; i <= segments; i++) {
      if (i == segments) {
        sum += this.calculator.calculateOperation(fx, x1);
      } else {
        if (i % 2 != 0) {
          multiple = 4;
        } else {
          multiple = 2;
        }
        cal = this.calculator.calculateOperation(fx, w * i + x0);
        if (cal < 0) {
          cal *= -1;
        }
        sum += multiple * cal;
      }
    }
    return (w / 3) * sum;
  }
}
