import { ReactNode, createContext } from 'react'

interface IModalContext {
  openModal: (children: ReactNode) => void
  closeModal: () => void
}

const ModalContext = createContext<IModalContext>({
  openModal: () => {},
  closeModal: () => {},
})

export default ModalContext
