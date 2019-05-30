import { BaseMessageObservable } from './base'
import { OneToOneMessage } from '../../../ballcap/user/message';

export class OneToOneMessageObservable extends BaseMessageObservable {
  public query() {
    return OneToOneMessage.collectionReference()
  }
}
