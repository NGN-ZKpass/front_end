import React from 'react';

interface ModalProps {
  showModal: boolean;
  onClose: () => void;
  modalContent: string;
}

const Fail: React.FC<ModalProps> = ({ showModal, onClose, modalContent }) => {
  return (
    <>
      {showModal && (
        <div className="fixed inset-0 z-50 overflow-auto bg-opacity-50 bg-gray-900 flex justify-center items-center">
          <div className="relative bg-gradient-to-b from-red-200 to-red-800 p-4 rounded-lg shadow-lg max-w-sm w-full">
            <button
              className="absolute top-0 right-0 p-2 text-white hover:text-gray-300 focus:outline-none"
              onClick={onClose}
            >
              &#x2715;
            </button>
            <div className="text-white font-roboto text-md text-center">
              {modalContent}
              This Account has Recived Funds Already
              <span style={{color:"red"}}>You can be banned</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Fail;
