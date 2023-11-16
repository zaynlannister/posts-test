import styled from "styled-components";
import FetchPosts from "./components/fetchPosts/FetchPosts";

const App = () => {
  return (
    <div className="container">
      <StyledTitle>Posts feed</StyledTitle>
      <FetchPosts />
    </div>
  );
};

const StyledTitle = styled.p`
  position: relative;
  font-weight: 600;
  font-size: 30px;
  border-bottom: 1px solid silver;
  padding: 10px 0;
  margin-bottom: 40px;
`;

export default App;
