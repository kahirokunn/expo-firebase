import { Message } from './type'
import { collectionData } from 'rxfire/firestore'
import { filter, map } from 'rxjs/operators'
import { firestore } from '../../firebase'

function messageMapper(message: any): Message {
  return {
    ...message,
    createdAt: message.createdAt.toDate(),
  }
}

function query(startAfter?: Date) {
  let query = firestore.collection('message').orderBy('updatedAt', 'desc').limit(20)
  if (startAfter) {
    query = query.startAfter(startAfter)
  }
  return query
}

export function getMessages(startAfter?: Date) {
  return collectionData(query(startAfter), 'id')
    .pipe(filter((dataList) => dataList.length > 0))
    .pipe(map((dataList) => dataList.map(messageMapper)))
}
