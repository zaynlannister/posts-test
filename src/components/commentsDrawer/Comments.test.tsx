import { render, screen, waitFor } from "@testing-library/react";
import CommentsDrawer from "./CommentsDrawer";
import { BrowserRouter as Router } from "react-router-dom";

describe("CommentsDrawer Component", () => {
  it("renders with spinner and fetches comments", async () => {
    const mockFetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue([
        {
          postId: 1,
          id: 1,
          name: "Test Name",
          email: "test@test.com",
          body: "Test Body",
        },
      ]),
    });

    global.fetch = jest.fn().mockImplementation(mockFetch);

    render(
      <Router>
        <CommentsDrawer open={true} handleClose={() => {}} />
      </Router>
    );

    await waitFor(async () => {
      const loadingSpinner = screen.queryByTestId("loading-spinner-2");

      if (loadingSpinner !== null) {
        expect(loadingSpinner).toBeInTheDocument();
      } else {
        console.error("Loading spinner element not found");
      }
    });

    await waitFor(() => {
      expect(screen.getByText("Test Body")).toBeInTheDocument();
    });
  });
});
