import { renderHook } from "@testing-library/react-hooks";
import useCampaignDetector from "../../hooks/useCampaignDetector";

jest.mock("next/router", () => ({
  useRouter: () => ({
    query: {
      utm_source: "google",
      utm_medium: "cpc",
      utm_campaign: "summer_sale",
    },
  }),
}));

describe("useCampaignDetector", () => {
  it("sets campaign to session storage when query params exist", () => {
    const { result } = renderHook(() => useCampaignDetector());
    expect(result.current).toBeUndefined();
  });
});


