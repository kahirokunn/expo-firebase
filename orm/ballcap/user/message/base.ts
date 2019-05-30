import { Omit } from '../../../../submodule/type'
import { TextMessage, NoteMessage, ImageMessage, MessageType, Message } from '../../../../entity/message'
import { Field, Doc } from '@1amageek/ballcap'
import { isTextMessage, isNoteMessage } from '../../../../entity/message/distinguish';

export type UnionMessage = Omit<Omit<TextMessage & NoteMessage & ImageMessage, 'type'>, 'createdAt'> & {
  type: MessageType
}

export abstract class BaseModel extends Doc implements UnionMessage {
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

export function mapEntityToModel<T extends BaseModel>(model: T, message: Message): T {
  model.sentFromAccountId = message.sentFromAccountId
  model.sentToAccountId = message.sentToAccountId
  model.type = message.type

  if (isTextMessage(message)) {
    model.text = message.text
  } else if (isNoteMessage(message)) {
    model.noteId = message.noteId
  } else {
    model.imageUrl = message.imageUrl
  }
  return model
}
