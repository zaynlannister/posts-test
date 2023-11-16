import styled from "styled-components";
import FetchPosts from "./components/fetchPosts/FetchPosts";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <StyledHeader className="header-container">
        <StyledTitle>Posts feed</StyledTitle>
        <a href="" onClick={() => navigate("/posts/test")}>
          test 1
        </a>
        <a href="" onClick={() => navigate("/comments/test")}>
          test 2
        </a>
      </StyledHeader>
      <FetchPosts />
    </div>
  );
};

const StyledTitle = styled.p`
  font-weight: 600;
  font-size: 30px;
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  position: relative;
  border-bottom: 1px solid silver;
  padding: 10px 0;
  margin-bottom: 30px;
`;

export default App;
