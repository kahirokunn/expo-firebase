import { MessageCollectionName } from '../../usecaseGenerator/message/model'
import { messageQueryClassFactory } from '../../usecaseGenerator/message/query'

export const MessageOneToOne = messageQueryClassFactory(MessageCollectionName.oneToOne)
