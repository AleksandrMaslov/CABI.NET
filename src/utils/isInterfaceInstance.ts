import { IObject } from 'src/models'

function isInterfaceInstance<T extends IObject>(
  instance?: IObject,
): instance is T {
  return !!instance
}

export default isInterfaceInstance
