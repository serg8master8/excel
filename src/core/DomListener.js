class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error(`No $root provided in doom listener`)
    }
    this.$root = $root
    this.listeners = listeners
  }

  initDOMListeners() {
    console.dir(this.listeners)
  }

  removeDOMListeners() {

  }
}

export {
  DomListener,
}
