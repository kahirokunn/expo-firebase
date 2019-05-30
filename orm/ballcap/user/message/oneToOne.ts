import { BaseModel, UnionMessage, mapEntityToModel } from './base'
import { USER } from '../../../../firebase/collectionSchema';
import { Message } from '../../../../entity/message';

export class OneToOneMessage extends BaseModel {
  public static modelName() {
    return USER.children.MESSAGE_ONE_TO_ONE.name
  }

  public modelName() {
    return USER.children.MESSAGE_ONE_TO_ONE.name
  }
}

export function factoryOneToOneMessageId(): UnionMessage['id'] {
  return OneToOneMessage.collectionReference().doc().id
}

export function messageToOneToOneMessage(message: Message) {
  return mapEntityToModel(new OneToOneMessage(message.id), message)
}
