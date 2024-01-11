import { Modal } from '@aleksandrmaslov/cabinet_ui_kit'
import { ReactNode, useState } from 'react'

import { useDelayedUnmount } from 'src/hooks'
import { delay } from 'src/utils'

import ModalContext from './ModalContext'

interface ModalProviderProps {
  children: ReactNode
}

const ModalProvider: (props: ModalProviderProps) => ReactNode = ({
  children,
}) => {
  const modalUnmountTimeout = 250
  const [isModalOpened, setModalOpened] = useState<boolean>(false)
  const isDelayedOpened = useDelayedUnmount(isModalOpened, modalUnmountTimeout)

  const [modalContent, setModalContent] = useState<ReactNode>(null)

  const openModal = (children: ReactNode) => {
    setModalContent(children)
    setModalOpened(true)
  }

  const closeModal = async () => {
    setModalOpened(false)
    await delay(modalUnmountTimeout)
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
