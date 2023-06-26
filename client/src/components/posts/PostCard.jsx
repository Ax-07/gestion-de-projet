import PropTypes from "prop-types";
import styled from "styled-components";
import { useDeletePostMutation } from "../../api/PostApi";

const PostCardContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "theme",
})`
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 15px;
  margin-bottom: 10px;
  box-shadow: 0 0 5px #222;
  position: relative;
`;

const Titre = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "theme",
})`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Contenu = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "theme",
})`
  font-size: 14px;
`;

const DeleteButton = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "theme",
})`
  position: absolute;
  border-radius: 15px;
  cursor: pointer;
  top: 5px;
  right: 5px;
`;

const PostCard = ({ post, refetchPosts }) => {
  const [deletePost] = useDeletePostMutation();



  const handleDelete = (e) => {
     e.preventDefault();
    deletePost({ postId: post._id })
    .then(()=> refetchPosts())
    .catch(()=> console.log("error deleting"))
  };

  return (
    <PostCardContainer>
      <Titre>{post.titre}</Titre>
      <Contenu>{post.contenu}</Contenu>
      <DeleteButton onClick={handleDelete}>✖️</DeleteButton>
    </PostCardContainer>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    titre: PropTypes.string.isRequired,
    contenu: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
  refetchPosts: PropTypes.func.isRequired,
};

export default PostCard;
