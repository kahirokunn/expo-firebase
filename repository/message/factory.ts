import { TextMessage, NoteMessage, ImageMessage } from './type'

type Base = {
  sentToAccountId: string
}

export type InputTextMessageFactory = Base & {
  text: TextMessage['text']
}

export type InputNoteMessageFactory = Base & {
  noteId: NoteMessage['noteId']
}

export type InputImageMessageFactory = Base & {
  imageUrl: ImageMessage['imageUrl']
}

export function textMessageFactory(input: InputTextMessageFactory): TextMessage {
  // TODO:
  throw Error('TODO')
}

export function noteMessageFactory(message: InputNoteMessageFactory): NoteMessage {
  // TODO:
  throw Error('TODO')
}

export function imageMessageFactory(message: InputImageMessageFactory): ImageMessage {
  // TODO:
  throw Error('TODO')
}
