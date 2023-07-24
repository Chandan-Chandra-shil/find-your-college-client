
import { AiOutlineClose } from "react-icons/ai"; // Import the close icon from react-icons

const Modal = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded shadow-lg relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <AiOutlineClose size={24} /> {/* Close icon */}
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
