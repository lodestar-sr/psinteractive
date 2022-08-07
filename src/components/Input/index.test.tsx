import {fireEvent} from "@testing-library/dom";
import {wait} from "@testing-library/user-event/dist/utils";
import {createTestSetup, TTestSetupFn} from "../../utils/helpers";
import {Input} from "./index";

describe("<Input />", () => {
  let setup: TTestSetupFn;
  const changeFn = jest.fn();

  beforeAll(() => {
    setup = createTestSetup({
      component: Input,
      props: {
        type: "email",
        name: "email",
        label: "Email",
        onChange: changeFn,
      },
    });
  });

  it("should be rendered", () => {
    const { container } = setup();
    expect(container).toBeTruthy();
  });

  it("should render input", async () => {
    const { getByTestId } = setup();

    const label = getByTestId("label");
    expect(label).toBeTruthy();

    const input = getByTestId("input");
    expect(input).toBeTruthy();

    fireEvent.change(input, { target: { value: 'jack@gmail.com' } });
    await wait();

    expect(changeFn).toBeCalled();
  });
});