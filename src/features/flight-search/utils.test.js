import { getPassengersIcon } from "./utils";

test("getPassengersIcon when numberOfPassengers < 3", () => {
  const numberOfPassengers = 2;

  const expectedNumberOfChildren = 2;

  const result = getPassengersIcon(numberOfPassengers);
  const numberOfChildren = result.props.children.length;

  expect(numberOfChildren).toBe(expectedNumberOfChildren);
});

test("getPassengersIcon when numberOfPassengers > 3", () => {
  const numberOfPassengers = 5;

  const expectedNumberOfChildren = 3;
  const expectedLastChildIconName = "plus";

  const result = getPassengersIcon(numberOfPassengers);
  const numberOfChildren = result.props.children.length;
  const lastChildIconName = result.props.children[numberOfChildren - 1].props.icon.iconName;

  expect(result.props.children.length).toBe(expectedNumberOfChildren);
  expect(lastChildIconName).toBe(expectedLastChildIconName);
});
