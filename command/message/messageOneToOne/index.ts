import { messageToOneToOneMessage, factoryOneToOneMessageId } from '../../../orm/ballcap/user/message';
import { Pick1th, Omit } from '../../../submodule/type';
import { textMessageFactory, imageMessageFactory, noteMessageFactory } from '../factory';
import { saveOneToOneMessage } from '../../../orm/ballcap/user';

export async function sendImageMessage(input: Omit<Pick1th<typeof imageMessageFactory>, 'id'>) {
  const imageMessage = imageMessageFactory({ ...input, id: factoryOneToOneMessageId() })
  const model = messageToOneToOneMessage(imageMessage)
  await saveOneToOneMessage(model)
}

export async function sendNoteMessage(input: Omit<Pick1th<typeof noteMessageFactory>, 'id'>) {
  const imageMessage = noteMessageFactory({ ...input, id: factoryOneToOneMessageId() })
  const model = messageToOneToOneMessage(imageMessage)
  await saveOneToOneMessage(model)
}

export async function sendTextMessage(input: Omit<Pick1th<typeof textMessageFactory>, 'id'>) {
  const imageMessage = textMessageFactory({ ...input, id: factoryOneToOneMessageId() })
  const model = messageToOneToOneMessage(imageMessage)
  await saveOneToOneMessage(model)
}
