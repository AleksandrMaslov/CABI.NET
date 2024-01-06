import { useContext } from 'react'

import { ModalContext } from '.'

const useModal = () => useContext(ModalContext)

export default useModal
