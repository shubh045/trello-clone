import './modal.css';

const Modal = () => {
  return (
    <div className="modal-inner-cont">
        <div className="modal-left-part">
            <div className="modal-title">
                <p><i class="fa-solid fa-subtitles"></i></p>
                <h3>Title</h3>
            </div>
        </div>
        <div className="modal-right-part">
            <h3><i class="fa-solid fa-xmark"></i></h3>
        </div>
    </div>
  )
}

export default Modal;