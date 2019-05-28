import { Pick2th } from '../../helper/type'
import { MessageCollectionName } from '../../helper/usecaseGenerator/message/model'
import {
  sendImageMessage as baseSendImageMessage,
  sendNoteMessage as baseSendNoteMessage,
  sendTextMessage as baseSendTextMessage,
} from '../../helper/usecaseGenerator/message/command'

const collectionName = MessageCollectionName.admin

export function sendImageMessage(message: Pick2th<typeof baseSendImageMessage>) {
  return baseSendImageMessage(collectionName, message)
}

export function sendNoteMessage(message: Pick2th<typeof baseSendNoteMessage>) {
  return baseSendNoteMessage(collectionName, message)
}

export function sendTextMessage(message: Pick2th<typeof baseSendTextMessage>) {
  return baseSendTextMessage(collectionName, message)
}
