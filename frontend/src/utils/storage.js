
export const Utils = {
  setLocalStorage: (key, value) => {
    localStorage.setItem(`demo-${key}`, value)
  },

  getLocalStorage: (key) => {
    return localStorage.getItem(`demo-${key}`)
  },

}
