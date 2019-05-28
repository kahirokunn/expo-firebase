import { Observable, Subject, Subscription } from 'rxjs'
import { Message } from './type'
import { MessageCollectionName } from './model'
import { generateMessagesObservable } from './rxfire'

abstract class BaseQuery {
  private readonly _messages: Subject<Message[]> = new Subject<Message[]>()
  private _subscriptions: Subscription[] = []

  abstract collectionName: MessageCollectionName

  get messages$(): Observable<Message[]> {
    return this._messages
  }

  public fetchMessage(startAfter?: Date) {
    const subscription = generateMessagesObservable(this.collectionName, startAfter)
      .subscribe(this._messages)
    this._subscriptions.push(subscription)
  }

  public depose() {
    this._subscriptions
      .map((subscription) => subscription.unsubscribe())
  }
}

export function messageQueryClassFactory(collectionName: MessageCollectionName) {
  return class MessageQuery extends BaseQuery {
    get collectionName() {
      return collectionName
    }
  }
}
