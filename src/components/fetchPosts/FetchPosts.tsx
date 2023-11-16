import React from "react";
import styled from "styled-components";
import Comment from "../../assets/icons/Comment";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const FetchPosts = () => {
  const [posts, setPosts] = React.useState<Post[]>([]);

  const fetchPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((res) => {
        const cuttedArray = res.slice(0, 20);
        setPosts(cuttedArray);
      });
  };

  React.useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <StyledPostContainer>
      {posts &&
        posts.map((item, index) => (
          <div key={index} className="post">
            <div className="post__title">{item.title}</div>
            <div className="post__body">{item.body}</div>
            <div className="post__actions">
              <Comment width="25px" height="25px" />
            </div>
          </div>
        ))}
    </StyledPostContainer>
  );
};

const StyledPostContainer = styled.div`
  .post {
    max-width: 900px;
    margin: 0 auto;
    border: 1px solid silver;
    border-radius: 2px;
    padding: 20px;
    margin-bottom: 40px;

    &__title {
      font-weight: 500;
      margin-bottom: 10px;
    }

    &__body {
      color: #697687;
    }

    &__actions {
      margin-top: 20px;
      display: flex;
      justify-content: flex-end;
    }
  }
`;

export default FetchPosts;
