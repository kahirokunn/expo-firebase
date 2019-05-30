import { BaseModel, UnionMessage, mapEntityToModel } from './base'
import { USER } from '../../../../firebase/collectionSchema';
import { Message } from '../../../../entity/message';

export class AdminMessage extends BaseModel {
  public static modelName() {
    return USER.children.MESSAGE_ADMIN.name
  }

  public modelName() {
    return USER.children.MESSAGE_ADMIN.name
  }
}

export function factoryAdminMessageId(): UnionMessage['id'] {
  return AdminMessage.collectionReference().doc().id
}

export function messageToAdminMessage(message: Message) {
  return mapEntityToModel(new AdminMessage(message.id), message)
}
