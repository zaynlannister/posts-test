import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import CloseIcon from "../../assets/icons/CloseIcon";

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

interface DrawerInterface {
  open: boolean;
  handleClose: () => void;
}

const CommentsDrawer = (props: DrawerInterface) => {
  const params = useParams();
  const [comments, setComments] = React.useState<Comment[]>([]);
  const drawerRef = React.useRef<HTMLDivElement>(null);

  const getPostComments = React.useCallback(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${params.id}`)
      .then((res) => res.json())
      .then((res) => setComments(res));
  }, [params.id]);

  React.useEffect(() => {
    getPostComments();
  }, [getPostComments]);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node)
      ) {
        props.handleClose();
      }
    };

    // Добавление слушателя событий при монтировании компонента
    document.addEventListener("mousedown", handleClickOutside);

    // Удаление слушателя событий при размонтировании компонента
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [props]);

  return (
    <StyledDrawer ref={drawerRef} open={props.open}>
      <div className="comments-container">
        <div className="comments-header">
          <p className="comments-title">Comments</p>
          <CloseIcon onClick={props.handleClose} width="20px" height="20px" />
        </div>
        {comments &&
          comments.map((item, index) => (
            <div key={index} className="comment">
              <p className="comment__title">{item.email}</p>
              <p className="comment__body">{item.body}</p>
            </div>
          ))}
      </div>
    </StyledDrawer>
  );
};

const StyledDrawer = styled.div<{ open: boolean }>`
  z-index: 99;
  position: absolute;
  right: ${(props) => (props.open ? 0 : "-100%")};
  top: 0;
  width: 400px;
  height: 100%;
  background-color: #ffff;
  border-left: 1px solid silver;
  padding: 20px;
  overflow-y: auto;
  transition: 200ms all;

  .comments-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .comments-title {
    font-weight: 500;
    font-size: 22px;
  }

  .comment {
    border-bottom: 1px solid silver;
    padding: 30px 0;
  }

  .comment__title {
    font-weight: 500;
    margin-bottom: 10px;
  }

  @media (max-width: 515px) {
    width: 80%;
  }
`;

export default CommentsDrawer;
