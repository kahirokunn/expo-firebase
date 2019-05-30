import { BaseModel, UnionMessage, mapEntityToModel } from './base'
import { USER } from '../../../../firebase/collectionSchema';
import { Message } from '../../../../entity/message';

export class GroupMessage extends BaseModel {
  public static modelName() {
    return USER.children.MESSAGE_GROUP.name
  }

  public modelName() {
    return USER.children.MESSAGE_GROUP.name
  }
}

export function factoryGroupMessageId(): UnionMessage['id'] {
  return GroupMessage.collectionReference().doc().id
}

export function messageToGroupMessage(message: Message) {
  return mapEntityToModel(new GroupMessage(message.id), message)
}
