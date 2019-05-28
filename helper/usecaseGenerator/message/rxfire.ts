import { Message } from './type'
import { collectionData } from 'rxfire/firestore'
import { filter, map } from 'rxjs/operators'
import { Timestamp } from '../../../firebase'
import { messageModelClassFactory, MessageCollectionName } from './model'

type Document = Message & { createdAt: Timestamp }

function messageMapper(messageDocRef: Document): Message {
  return {
    ...messageDocRef,
    createdAt: messageDocRef.createdAt.toDate(),
  }
}

function query(collectionName: MessageCollectionName, startAfter?: Date) {
  const __class = messageModelClassFactory(collectionName)
  let query = __class.collectionReference().orderBy('updatedAt', 'desc').limit(20)
  if (startAfter) {
    query = query.startAfter(startAfter)
  }
  return query
}

export function generateMessagesObservable(collectionName: MessageCollectionName, startAfter?: Date) {
  return collectionData<Document>(query(collectionName, startAfter), 'id')
    .pipe(filter((dataList) => dataList.length > 0))
    .pipe(map((dataList) => dataList.map(messageMapper)))
}
