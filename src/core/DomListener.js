import { capitalize } from "./utils"

class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error(`No $root provided in doom listener`)
    }
    this.$root = $root
    this.listeners = listeners
  }

  initDOMListeners() {
    this.listeners.forEach((listener) => {
      const method = getMethodName(listener)

      if (!this[method]) {
        const name = this.name || ''
        const Log = `Method ${method} is not implemented in ${name} Component`
        throw new Error(Log)
      }

      this[method] = this[method].bind(this)
      // addEventListener
      this.$root.on(listener, this[method])
    })
  }

  removeDOMListeners() {
    this.listeners.forEach((listener) => {
      const method = getMethodName(listener)
      // removeEventListener
      this.$root.off(listener, this[method])
    })
  }
}

function getMethodName(eventName) {
  return 'on' + capitalize(eventName)
}

export {
  DomListener,
}
