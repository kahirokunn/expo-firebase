import { Omit } from '../../helper/type'
import { TextMessage, NoteMessage, ImageMessage, MessageType } from './type'
import { Field, Doc } from '@1amageek/ballcap'

type UnionMessage = Omit<Omit<TextMessage & NoteMessage & ImageMessage, 'type'>, 'createdAt'> & {
  type: MessageType
}

export class BaseModel extends Doc implements UnionMessage {
  @Field
  type!: MessageType

  @Field
  sentFromAccountId!: TextMessage['sentFromAccountId']

  @Field
  sentToAccountId!: TextMessage['sentToAccountId']

  @Field
  text!: TextMessage['text']

  @Field
  noteId!: NoteMessage['noteId']

  @Field
  imageUrl!: ImageMessage['imageUrl']
}

export enum MessageCollectionName {
  admin = 'messageAdmin',
  oneToOne = 'message1to1',
  group = 'messageGroup',
}

export function messageModelClassFactory(collectionName: MessageCollectionName) {
  return class Message extends BaseModel {
    public static modelName() {
      return collectionName
    }

    public modelName() {
      return collectionName
    }
  }
}

export function factoryMessageId(): UnionMessage['id'] {
  return BaseModel.collectionReference().doc().id
}
