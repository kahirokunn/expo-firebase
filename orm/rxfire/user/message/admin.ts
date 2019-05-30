import { BaseMessageObservable } from './base'
import { AdminMessage } from '../../../ballcap/user/message';

export class AdminMessageObservable extends BaseMessageObservable {
  public query() {
    return AdminMessage.collectionReference()
  }
}
