import { useEffect } from 'react';

/**
 * 외부 영역이나 esc 눌렀을 때 실행되는 훅
 * @param {boolean} showModal 모달 열림 여부
 * @param {function} setShowModal
 */
const useCloseModal = (showModal, setShowModal, modalRef) => {
  useEffect(() => {
    const handleOutsideClick = e => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setShowModal(false);
      }
    };
    const handleEscapeKey = e => {
      if (e.keyCode === 27) {
        setShowModal(false);
      }
    };

    if (showModal) {
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [showModal, setShowModal, modalRef]);
};

export default useCloseModal;