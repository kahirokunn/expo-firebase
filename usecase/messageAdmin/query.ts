import { MessageCollectionName } from '../../usecaseGenerator/message/model'
import { messageQueryClassFactory } from '../../usecaseGenerator/message/query'

export const MessageAdmin = messageQueryClassFactory(MessageCollectionName.admin)
