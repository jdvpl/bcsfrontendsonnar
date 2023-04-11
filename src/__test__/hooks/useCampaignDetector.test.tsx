import { renderHook } from "@testing-library/react-hooks";
import useCampaignDetector from "../../hooks/useCampaignDetector";
import { useSessionStorage } from "../../hooks/useSessionStorage";
import { useRouter } from "next/router";

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

jest.mock('../../hooks/useSessionStorage', () => ({
  useSessionStorage: jest.fn(),
}));

const mockUseSessionStorage = (initialValue) => {
  const mockSetItem = jest.fn();
  const mockGetItem = jest.fn(() => initialValue);
  return [mockGetItem, mockSetItem];
};

describe('useCampaignDetector', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  it('should set campaign in session storage when router query is not empty', () => {
    const mockRouter = {
      query: { test: '123' },
    };
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
    const [mockGetItem, mockSetItem] = mockUseSessionStorage(null);
    (useSessionStorage as jest.Mock).mockReturnValue([mockGetItem, mockSetItem]);
    renderHook(() => useCampaignDetector());
    expect(mockSetItem).toHaveBeenCalledWith(mockRouter.query);
  });

  it('should not set campaign in session storage when router query is empty', () => {
    const mockRouter = {
      query: {},
    };
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
    const [mockGetItem, mockSetItem] = mockUseSessionStorage(null);
    (useSessionStorage as jest.Mock).mockReturnValue([mockGetItem, mockSetItem]);
    renderHook(() => useCampaignDetector());
    expect(mockSetItem).not.toHaveBeenCalled();
  });
});

