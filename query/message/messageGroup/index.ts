import { BaseMessageObserver } from '../base';
import { GroupMessageObservable } from '../../../orm/rxfire/user/message';

export class GroupMessageObserver extends BaseMessageObserver {
  observableFactory = new GroupMessageObservable()
}
