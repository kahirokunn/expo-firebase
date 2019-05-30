import { messageToAdminMessage, factoryAdminMessageId } from '../../../orm/ballcap/user/message';
import { Pick1th, Omit } from '../../../submodule/type';
import { textMessageFactory, imageMessageFactory, noteMessageFactory } from '../factory';
import { saveAdminMessage } from '../../../orm/ballcap/user';

export async function sendImageMessage(input: Omit<Pick1th<typeof imageMessageFactory>, 'id'>) {
  const imageMessage = imageMessageFactory({ ...input, id: factoryAdminMessageId() })
  const model = messageToAdminMessage(imageMessage)
  await saveAdminMessage(model)
}

export async function sendNoteMessage(input: Omit<Pick1th<typeof noteMessageFactory>, 'id'>) {
  const noteMessage = noteMessageFactory({ ...input, id: factoryAdminMessageId() })
  const model = messageToAdminMessage(noteMessage)
  await saveAdminMessage(model)
}

export async function sendTextMessage(input: Omit<Pick1th<typeof textMessageFactory>, 'id'>) {
  const textMessage = textMessageFactory({ ...input, id: factoryAdminMessageId() })
  const model = messageToAdminMessage(textMessage)
  await saveAdminMessage(model)
}
