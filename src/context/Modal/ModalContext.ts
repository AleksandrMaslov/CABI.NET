import { ReactNode, createContext } from 'react'

interface IModalContext {
  openModal: (children: ReactNode) => void
  closeModal: () => Promise<void>
}

const ModalContext = createContext<IModalContext>({
  openModal: () => {},
  closeModal: async () => {},
})

export default ModalContext
