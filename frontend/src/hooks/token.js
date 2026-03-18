import { useState } from "react"
import { Utils } from "../utils/storage"

export default function useToken() {
  const [token, setToken] = useState(() => Utils.getLocalStorage('token'))

  console.log('useToken token:', token);

  const saveToken = (newToken) => {
    Utils.setLocalStorage('token', newToken)
    setToken(newToken)
  }

  const refetchToken = () => {
    console.log('Refetch token');
  }

  const clearToken = () => {
    Utils.clearLocalStorage('token')

  }

  return {
    token, saveToken, refetchToken, clearToken
  }
}
