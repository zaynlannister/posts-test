import { render, screen, waitFor } from "@testing-library/react";
import FetchPosts from "./FetchPosts";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

describe("FetchPosts Component", () => {
  it("renders without crashing", async () => {
    const mockFetch = jest.fn().mockResolvedValue({
      json: jest
        .fn()
        .mockResolvedValue([
          { userId: 1, id: 1, title: "Test Title", body: "Test Body" },
        ]),
    });

    jest.spyOn(global, "fetch").mockImplementation(mockFetch);

    render(<FetchPosts />);

    await waitFor(() => {
      expect(screen.getByText("Test Title")).toBeInTheDocument();
      expect(screen.queryByTestId("loading-spinner")).not.toBeInTheDocument();
    });

    jest.restoreAllMocks();
  });
});
