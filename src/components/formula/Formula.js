const { ExcelComponent } = require("../../core/ExcelComponent");

class Formula extends ExcelComponent {
  static className = 'excel__formula'

  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input'],
    })
  }

  toHTML() {
    return `
    <div class="info">fx</div>
        <div class="input" contenteditable spellcheck="false"></div>
    `
  }

  onInput() {
    console.log('Formula: onInput', event);
  }
}

export {
  Formula,
}
