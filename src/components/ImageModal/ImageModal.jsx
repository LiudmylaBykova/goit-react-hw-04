import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({
  closeModal,
  modalIsOpen,
  imageSrc = "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg",
  imageAltDescription = "Regular gallery image",
  imageAutor = "Unknown",
  imageLikes = "0",
}) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className={css.Modal}
      overlayClassName={css.Overlay}
    >
      {" "}
      <div className={css.modalContainer}>
        <div className={css.imageContainer}>
          <img className={css.image} src={imageSrc} alt={imageAltDescription} />
        </div>
        <ul className={css.imageInfo}>
          <li>
            <p>Author: {imageAutor}</p>
          </li>
          <li>
            <p>Likes: {imageLikes}</p>
          </li>
        </ul>
      </div>
    </Modal>
  );
};

export default ImageModal;
