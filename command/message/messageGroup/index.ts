import { messageToGroupMessage, factoryGroupMessageId } from '../../../orm/ballcap/user/message';
import { Pick1th, Omit } from '../../../submodule/type';
import { textMessageFactory, imageMessageFactory, noteMessageFactory } from '../factory';
import { saveGroupMessage } from '../../../orm/ballcap/user';

export async function sendImageMessage(input: Omit<Pick1th<typeof imageMessageFactory>, 'id'>) {
  const imageMessage = imageMessageFactory({ ...input, id: factoryGroupMessageId() })
  const model = messageToGroupMessage(imageMessage)
  await saveGroupMessage(model)
}

export async function sendNoteMessage(input: Omit<Pick1th<typeof noteMessageFactory>, 'id'>) {
  const imageMessage = noteMessageFactory({ ...input, id: factoryGroupMessageId() })
  const model = messageToGroupMessage(imageMessage)
  await saveGroupMessage(model)
}

export async function sendTextMessage(input: Omit<Pick1th<typeof textMessageFactory>, 'id'>) {
  const imageMessage = textMessageFactory({ ...input, id: factoryGroupMessageId() })
  const model = messageToGroupMessage(imageMessage)
  await saveGroupMessage(model)
}
