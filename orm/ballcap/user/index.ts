import { Doc, SubCollection, Collection, Batch } from '@1amageek/ballcap'
import {
  AdminMessage,
  OneToOneMessage,
  GroupMessage,
} from './message'

export class User extends Doc {
  @SubCollection
  adminMessage: Collection<AdminMessage> = new Collection()

  @SubCollection
  oneToOneMessage: Collection<OneToOneMessage> = new Collection()

  @SubCollection
  groupMessage: Collection<GroupMessage> = new Collection()
}

async function saveMessage(model: AdminMessage | GroupMessage | OneToOneMessage) {
  const batch = new Batch()
  const user = new User(model.sentFromAccountId)
  batch.save([model], user.adminMessage.collectionReference)
  await batch.commit()
}

export async function saveAdminMessage(model: AdminMessage) {
  await saveMessage(model)
}

export async function saveGroupMessage(model: GroupMessage) {
  await saveMessage(model)
}

export async function saveOneToOneMessage(model: OneToOneMessage) {
  await saveMessage(model)
}
