import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-for-test",
  templateUrl: "./for-test.component.html",
  styleUrls: ["./for-test.component.css"]
})
export class ForTestComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.increaseValue(5, 7);
  }

  increaseValue(val: number, inc: number): number {
    return val + inc;
  }

  setSomething(val: number): string {
    let returnValue: string;
    if (val - this.getRandomValue() < 1) {
      returnValue = "Success";
    } else {
      returnValue = "Fail";
    }
    return returnValue;
  }

  getRandomValue(): number {
    return Math.random() * 100 + 1;
  }
}
