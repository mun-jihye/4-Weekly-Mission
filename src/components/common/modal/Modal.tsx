import React, { ReactNode, useRef } from 'react';
import Portal from './Portal';
import styled from 'styled-components';
import useCloseModal from 'hooks/useCloseModal';
import Image from 'next/image';

/**
 *
 * @param {Object} props
 * @param {React.Node} props.children
 * @param {boolean} props.showModal 모달 보임 유뮤 결정
 * @param {Function} props.handleClose  모달 닫는 함수
 */

interface ModalProps {
  children: ReactNode;
  showModal: boolean;
  handleClose: () => void;
}
const Modal = ({ children, showModal, handleClose }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  useCloseModal(showModal, handleClose, modalRef);
  return (
    <Portal>
      <ModalWrapper>
        <ModalInner ref={modalRef}>
          <StyledButton onClick={handleClose}>
            <Image
              src="/images/modal/modalCloseButton.png"
              alt="modal close icon"
              width={24}
              height={24}
            />
          </StyledButton>
          {children}
        </ModalInner>
      </ModalWrapper>
    </Portal>
  );
};

const ModalWrapper = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  overflow: auto;
  outline: 0;
  background-color: rgba(0, 0, 0, 0.6);
  align-items: center;
  justify-content: center;
`;
const ModalInner = styled.div`
  width: 36rem;
  min-height: 19.3rem;
  max-height: 38.9rem;
  overflow: scroll;
  background-color: ${({ theme }) => theme.white};
  border-radius: 1.5rem;
  position: relative;
  padding: 1.5rem;
`;
const StyledButton = styled.button`
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 1.5rem;
`;
export default Modal;
