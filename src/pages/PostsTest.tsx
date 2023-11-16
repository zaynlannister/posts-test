import { useNavigate } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import styled from "styled-components";
const PostsTest = () => {
  const navigate = useNavigate();
  const codeString = `
  // This is posts test component
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

export default PostsTest;
