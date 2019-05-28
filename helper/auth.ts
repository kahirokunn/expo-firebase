import { auth } from '../firebase/index'

export function getUserId() {
  const { currentUser } = auth()
  if (currentUser) {
    return currentUser.uid
  }
  throw Error("未ログイン状態で getUserId を実行しようとしたのでエラーを投げました")
}
