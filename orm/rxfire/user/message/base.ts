import { Message } from '../../../../entity/message'
import { collectionData } from 'rxfire/firestore'
import { filter, map } from 'rxjs/operators'
import { Timestamp, Query } from '../../../../firebase/type'
import { PaginationObservableFactory } from '../../observableFactory';
import { getOwnId } from '../../../../domain/auth';
import { firestore } from '../../../../firebase';

export type Document = Message & { createdAt: Timestamp }

export function messageMapper(messageDocRef: Document): Message {
  return {
    ...messageDocRef,
    createdAt: messageDocRef.createdAt.toDate(),
  }
}

function getPaginationQuery(query: Query, limit: number, startAfter?: Date) {
  query = query.orderBy('updatedAt', 'desc').limit(limit)
  if (startAfter) {
    query = query.startAfter(startAfter)
  }
  return query
}

export abstract class BaseMessageObservable implements PaginationObservableFactory<Message[]> {
  abstract messageCollectionName(): string

  public factory(limit: number, startAfter?: Date) {
    const collectionPath = `user/${getOwnId()}/${this.messageCollectionName()}`
    const query = firestore.collection(collectionPath)
    return collectionData<Document>(getPaginationQuery(query, limit, startAfter), 'id')
      .pipe(filter((dataList) => dataList.length > 0))
      .pipe(map((dataList) => dataList.map(messageMapper)))
  }
}