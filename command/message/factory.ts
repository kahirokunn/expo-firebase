import { Omit } from "../../submodule/type";
import { TextMessage, NoteMessage, ImageMessage, MessageType, Message } from '../../entity/message/index'
import { getOwnId } from "../../entity/auth";

type InputText = Omit<Omit<Omit<TextMessage, 'type'>, 'createdAt'>, 'sentFromAccountId'>
type InputNote = Omit<Omit<Omit<NoteMessage, 'type'>, 'createdAt'>, 'sentFromAccountId'>
type InputImage = Omit<Omit<Omit<ImageMessage, 'type'>, 'createdAt'>, 'sentFromAccountId'>

export function textMessageFactory(input: InputText): TextMessage {
  return {
    ...input,
    createdAt: new Date(),
    sentFromAccountId: getOwnId(),
    type: MessageType.text,
  }
}

export function noteMessageFactory(input: InputNote): NoteMessage {
  return {
    ...input,
    createdAt: new Date(),
    sentFromAccountId: getOwnId(),
    type: MessageType.note,
  }
}

export function imageMessageFactory(input: InputImage): ImageMessage {
  return {
    ...input,
    createdAt: new Date(),
    sentFromAccountId: getOwnId(),
    type: MessageType.image,
  }
}
