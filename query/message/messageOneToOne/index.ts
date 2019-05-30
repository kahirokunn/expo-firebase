import { BaseMessageObserver } from '../base';
import { OneToOneMessageObservable } from '../../../orm/rxfire/user/message';

export class OneToOneMessageObserver extends BaseMessageObserver {
  observableFactory = new OneToOneMessageObservable()
}
