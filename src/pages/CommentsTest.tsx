import { useNavigate } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import styled from "styled-components";
const CommentsTest = () => {
  const navigate = useNavigate();
  const codeString = `
// This is comments test component
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
  `;
  return (
    <div>
      <StyledTitle onClick={() => navigate("/")}>Back to the main</StyledTitle>
      <SyntaxHighlighter
        customStyle={{
          padding: "0 20px",
          height: "100vh",
        }}
        wrapLongLines={true}
        language="javascript"
        style={atomOneDark}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

const StyledTitle = styled.a`
  cursor: pointer;
  color: #bcbcff;
  display: block;
  background-color: #282c34;
  font-weight: 600;
  font-size: 20px;
  padding: 10px 0 0 20px;
  text-decoration: underline;
`;

export default CommentsTest;
