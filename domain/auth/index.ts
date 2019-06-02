import { auth } from '../../firebase/index'

export function getOwnId() {
  const { currentUser } = auth()
  if (currentUser) {
    return currentUser.uid
  }
  throw Error("未ログイン状態で getOwnId を実行したのでエラーを投げました")
}
