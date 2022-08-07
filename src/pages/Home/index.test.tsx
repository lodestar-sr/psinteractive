import {fireEvent} from "@testing-library/dom";
import {wait} from "@testing-library/user-event/dist/utils";
import {createTestSetup, TTestSetupFn} from "../../utils/helpers";
import HomePage from "./index";

describe("<HomePage />", () => {
  let setup: TTestSetupFn;

  beforeAll(() => {
    setup = createTestSetup({
      component: HomePage,
    });
  });

  it("should be rendered", () => {
    const { container } = setup();
    expect(container).toBeTruthy();
  });

  it("should render coordinate form", async () => {
    const { getByTestId } = setup();

    const coordinatesForm = getByTestId("coordinate-form");
    expect(coordinatesForm).toBeTruthy();

    const partnersTable = getByTestId("partners-table");
    expect(partnersTable).toBeTruthy();
  });
});