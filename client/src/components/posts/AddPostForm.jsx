import { useState } from "react";
import Modal from "react-modal";
import { useAddPostMutation, useGetPostsQuery } from "../../api/PostApi";

// eslint-disable-next-line react/prop-types
const AddPostForm = ({ closeModal }) => {
  const [addPost] = useAddPostMutation();
  const { refetch: refetchPost } = useGetPostsQuery();
  const [titre, setTitre] = useState("");
  const [contenu, setcontenu] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (titre && contenu) {
        const formData = new FormData();
        formData.append("titre", titre);
        formData.append("contenu", contenu);
        addPost(formData);
        refetchPost();
      }
      setTitre("");
      setcontenu("");
      //   refetchPost();
      closeModal(); // Fermer la modal après la soumission réussie
    } catch (error) {
      console.log("Error creating post:", error);
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label htmlFor="titre" className="form-label">
        Titre:
      </label>
      <input
        type="text"
        id="titre"
        className="form-input"
        value={titre}
        onChange={(e) => setTitre(e.target.value)}
        required
      />

      <label htmlFor="contenu" className="form-label">
        contenu:
      </label>
      <textarea
        id="contenu"
        className="form-textarea"
        value={contenu}
        onChange={(e) => setcontenu(e.target.value)}
        required
      />

      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
};

const AddPostModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <button onClick={openModal}>Add Post</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={"addPostModal"}
      >
        <div className="modalGroupe">
          <h2>Add Post</h2>
          <div className="closeModal-btn" onClick={closeModal}>
            ✖️
          </div>
          <AddPostForm closeModal={closeModal} />
        </div>
      </Modal>
    </>
  );
};
export default AddPostModal;
