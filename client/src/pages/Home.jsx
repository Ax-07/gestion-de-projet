import { useState } from "react";
import { useGetPostsQuery } from "../api/PostApi";
import AddPostModal from "../components/posts/AddPostForm";
import FilterPost from "../components/posts/FilterPost";
import PostsList from "../components/posts/PostsList";

const Home = () => {
  const { data: posts = [], refetch: refetchPosts } = useGetPostsQuery();
  const [filterBy, setFilterBy] = useState([]);

  const filteredPosts = filterBy.length > 0
    ? posts.filter((post) => post.titre && filterBy.includes(post.titre))
    : posts;

  const handleFilterChange = (selectedFilters) => {
    setFilterBy(selectedFilters);
  };

  return (
    <div className="layout-wrapper">
      <nav className="sidebar">
        <FilterPost
          posts={posts}
          handleFilterChange={handleFilterChange}
          selectedFilters={filterBy}
        />
      </nav>
      <main className="content">
        <AddPostModal />
        <br />
        <PostsList posts={filteredPosts} refetchPosts={refetchPosts} />
      </main>
    </div>
  );
};

export default Home;
