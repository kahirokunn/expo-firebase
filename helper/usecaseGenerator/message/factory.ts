import { TextMessage, NoteMessage, ImageMessage, MessageType } from './type'
import { factoryMessageId } from './model'
import { getUserId } from '../../auth'

type Base = {
  sentToAccountId: string
}


type InputTextMessageFactory = Base & {
  text: TextMessage['text']
}


type InputNoteMessageFactory = Base & {
  noteId: NoteMessage['noteId']
}


type InputImageMessageFactory = Base & {
  imageUrl: ImageMessage['imageUrl']
}

function getSameParams() {
  return {
    id: factoryMessageId(),
    sentFromAccountId: getUserId(),
    createdAt: new Date()
  }
}

export function textMessageFactory(input: InputTextMessageFactory): TextMessage {
  return {
    ...input,
    ...getSameParams(),
    type: MessageType.text,
  }
}

export function noteMessageFactory(input: InputNoteMessageFactory): NoteMessage {
  return {
    ...input,
    ...getSameParams(),
    type: MessageType.note,
  }
}

export function imageMessageFactory(input: InputImageMessageFactory): ImageMessage {
  return {
    ...input,
    ...getSameParams(),
    type: MessageType.image,
  }
}
