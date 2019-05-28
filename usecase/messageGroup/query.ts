import { MessageCollectionName } from '../../helper/usecaseGenerator/message/model'
import { messageQueryClassFactory } from '../../helper/usecaseGenerator/message/query'

export const MessageGroup = messageQueryClassFactory(MessageCollectionName.group)
