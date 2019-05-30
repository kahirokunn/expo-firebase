import { BaseMessageObservable } from './base'
import { GroupMessage } from '../../../ballcap/user/message';

export class GroupMessageObservable extends BaseMessageObservable {
  public query() {
    return GroupMessage.collectionReference()
  }
}
