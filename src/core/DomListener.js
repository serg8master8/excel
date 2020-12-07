class DomListener {
  constructor($root) {
    if (!$root) {
      throw new Error(`No $root provided in doom listener`)
    }
    this.$root = $root
  }
}

export {
  DomListener,
}
