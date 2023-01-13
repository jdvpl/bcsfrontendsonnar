import { renderHook } from "@testing-library/react-hooks";
import useVerificationForm from "../../hooks/useVerificationForm";

const initialFields = { password: "" };
const { result } = renderHook(() => useVerificationForm(initialFields, jest.fn()));

describe('<useVerificationForm/>', () => {
  test("set border to #798C98 when password is not empty", () => {
    const setBorder = jest.fn();
    const { rerender } = renderHook(() => useVerificationForm({ password: "password" }, setBorder));
    expect(setBorder).toHaveBeenCalledWith("#798C98");
  });
})

