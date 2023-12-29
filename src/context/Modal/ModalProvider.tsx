import { Modal } from 'cabinet_ui_kit'
import { ReactNode, useState } from 'react'

import { useDelayedUnmount } from 'src/hooks'

import ModalContext from './ModalContext'

interface ModalProviderProps {
  children: ReactNode
}

const ModalProvider: (props: ModalProviderProps) => ReactNode = ({
  children,
}) => {
  const [isModalOpened, setModalOpened] = useState<boolean>(false)
  const isDelayedOpened = useDelayedUnmount(isModalOpened, 250)

  const [modalContent, setModalContent] = useState<ReactNode>(null)

  const openModal = (children: ReactNode) => {
    setModalContent(children)
    setModalOpened(true)
  }

  const closeModal = () => {
    setModalOpened(false)
  }

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}

      {isDelayedOpened && (
        <Modal {...{ isModalOpened, setModalOpened, children: modalContent }} />
      )}
    </ModalContext.Provider>
  )
}

export default ModalProvider
