import {fireEvent} from "@testing-library/dom";
import {wait} from "@testing-library/user-event/dist/utils";
import {createTestSetup, TTestSetupFn} from "../../../utils/helpers";
import CoordinateForm from "./index";

describe("<CoordinateForm />", () => {
  let setup: TTestSetupFn;
  const changeFn = jest.fn();

  beforeAll(() => {
    setup = createTestSetup({
      component: CoordinateForm,
      props: {
        value: {
          latitude: 42.6665921,
          longitude: 23.351723,
        },
        onChange: changeFn,
      },
    });
  });

  it("should be rendered", () => {
    const { container } = setup();
    expect(container).toBeTruthy();
  });

  it("should render coordinate inputs", async () => {
    const { getByTestId, getAllByTestId } = setup();

    const inputs = getAllByTestId("input");
    expect(inputs.length).toBe(2);

    fireEvent.change(inputs[0], { target: { value: '45.5' } });
    await wait();
    fireEvent.change(inputs[1], { target: { value: '27.75' } });
    await wait();

    const searchButton = getByTestId("search-button");
    expect(searchButton).toBeTruthy();
    fireEvent.click(searchButton);
    await wait();

    expect(changeFn).toBeCalledWith({
      latitude: 45.5,
      longitude: 27.75,
    });
  });
});