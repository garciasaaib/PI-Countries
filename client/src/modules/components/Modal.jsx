import { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
const Modal = () => {
  let navigate = useNavigate()
  let params = useParams()
  let buttonRef = useRef(null)

  function onDismiss() {
    navigate(-1)
  }
  return (
    <div>
      <h2>
      este es un modal
      </h2>
      <button
        ref={buttonRef}
        onClick={onDismiss}
      >Close</button>
      </div>
  );
}

export default Modal;