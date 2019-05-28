import { messageModelClassFactory, BaseModel, MessageCollectionName } from './model'
import { TextMessage, NoteMessage, ImageMessage } from './type'

function commonMessageMapperForCreate(model: BaseModel, message: TextMessage | NoteMessage | ImageMessage) {
  model.sentFromAccountId = message.sentFromAccountId
  model.sentToAccountId = message.sentToAccountId
  model.type = message.type
}

export async function sendTextMessage(collectionName: MessageCollectionName, message: TextMessage) {
  const __class = messageModelClassFactory(collectionName)
  const model = new __class(message.id)
  commonMessageMapperForCreate(model, message);
  model.text = message.text
  await model.save()
}

export async function sendNoteMessage(collectionName: MessageCollectionName, message: NoteMessage) {
  const __class = messageModelClassFactory(collectionName)
  const model = new __class(message.id)
  commonMessageMapperForCreate(model, message);
  model.noteId = message.noteId
  await model.save()
}

export async function sendImageMessage(collectionName: MessageCollectionName, message: ImageMessage) {
  const __class = messageModelClassFactory(collectionName)
  const model = new __class(message.id)
  commonMessageMapperForCreate(model, message);
  model.imageUrl = message.imageUrl
  await model.save()
}
