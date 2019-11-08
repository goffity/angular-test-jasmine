import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ForTestComponent } from "./for-test.component";

describe("ForTestComponent", () => {
  let component: ForTestComponent;
  let fixture: ComponentFixture<ForTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ForTestComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should be retunr 17 when call increaseValue with (10,7)", () => {
    expect(component.increaseValue(10, 7)).toBe(17);
  });

  it("should return number when call getRandomValue", () => {
    expect(component.getRandomValue()).not.toBeNull;
    expect(component.getRandomValue()).toEqual(jasmine.any(Number));
  });
  it("should return greater than or equal 0 when call getRandomValue", () => {
    expect(component.getRandomValue()).not.toBeNull;
    expect(component.getRandomValue()).toBeGreaterThanOrEqual(0);
  });

  it("should return 'Success' when call setSomething() and random value return 10", () => {
    spyOn(component, "getRandomValue").and.returnValue(10);
    expect(component.setSomething(10)).toBe("Success");
  });
  it("should return 'Fail' when call setSomething() and random value return 10", () => {
    spyOn(component, "getRandomValue").and.returnValue(10);
    expect(component.setSomething(20)).toBe("Fail");
  });
});
