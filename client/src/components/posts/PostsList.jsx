
import PostCard from "./PostCard";

const PostsList = ({posts, refetchPosts}) => {

  return (
    posts &&
    posts.map((post) => (
      <div key={post._id} className="post-list-container">
        <PostCard post={post} refetchPosts={refetchPosts} />
      </div>
    ))
  );
};

export default PostsList;
