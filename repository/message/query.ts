import { Observable, Subject, Subscription } from 'rxjs'
import { Message } from './type'
import { getMessages } from './rxfire'

export class MessageRepository {
  private readonly _messages: Subject<Message[]> = new Subject<Message[]>()
  private _subscriptions: Subscription[] = []

  get messages$(): Observable<Message[]> {
    return this._messages
  }

  public fetchMessage(startAfter?: Date) {
    const subscription = getMessages(startAfter).subscribe(this._messages)
    this._subscriptions.push(subscription)
  }

  public depose() {
    this._subscriptions
      .map((subscription) => subscription.unsubscribe())
  }
}
