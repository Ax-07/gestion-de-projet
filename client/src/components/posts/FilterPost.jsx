import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const FilterPost = ({ posts, handleFilterChange, selectedFilters }) => {
  const [filterBy, setFilterBy] = useState([]);

  const titleFilter = posts.reduce((acc, post) => {
    if (post.titre && !acc.includes(post.titre)) {
      acc.push(post.titre);
    }
    return acc;
  }, []);

  const handleFilterClick = (titre) => {
    if (filterBy.includes(titre)) {
      setFilterBy(filterBy.filter((filter) => filter !== titre));
    } else {
      setFilterBy([...filterBy, titre]);
    }
  };

  useEffect(() => {
    handleFilterChange(filterBy);
  }, [filterBy, handleFilterChange]);

  return (
    <div className="filterListe">
      <h2>Filtre</h2>
      {titleFilter.map((titre) => (
        <li key={titre}>
          <label htmlFor="filtre-titre">{titre}</label>
          <input
            type="checkbox"
            id="filtre-titre"
            value={titre}
            checked={selectedFilters.includes(titre)}
            onChange={() => handleFilterClick(titre)}
          />
        </li>
      ))}
    </div>
  );
};

FilterPost.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      titre: PropTypes.string.isRequired,
      contenu: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleFilterChange: PropTypes.func.isRequired,
  selectedFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FilterPost;
