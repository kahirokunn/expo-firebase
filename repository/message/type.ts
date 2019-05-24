export enum MessageType {
  text = 'text',
  image = 'text',
  note = 'text',
}

type Base = {
  id: string
  sentFromAccountId: string
  sentToAccountId: string
  createdAt: Date
}

export type TextMessage = Base & {
  type: MessageType.text
  text: string
}

export type NoteMessage = Base & {
  type: MessageType.note
  noteId: string
}

export type ImageMessage = Base & {
  type: MessageType.image
  imageUrl: string
}

export type Message = TextMessage | NoteMessage | ImageMessage
