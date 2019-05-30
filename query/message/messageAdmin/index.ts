import { BaseMessageObserver } from '../base';
import { AdminMessageObservable } from '../../../orm/rxfire/user/message';

export class AdminMessageObserver extends BaseMessageObserver {
  observableFactory = new AdminMessageObservable()
}
