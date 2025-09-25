import "./style.css";

const MODAL_ANIMATION_DURATION = 300;

const modal = document.getElementById("modal");
const closeModal = document.getElementById("close-modal");

const handleCloseModal = () => {
  if (!modal) {
    console.error("Modal not found");
    return;
  }
  modal.classList.add("modal--hidden");
  setTimeout(() => {
    modal.remove();
  }, MODAL_ANIMATION_DURATION);
};

closeModal?.addEventListener("click", handleCloseModal);
