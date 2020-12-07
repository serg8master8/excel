const { ExcelComponent } = require("../../core/ExcelComponent");

class Formula extends ExcelComponent {
  static className = 'excel__formula'

  toHTML() {
    return `
    <div class="info">fx</div>
        <div class="input" contenteditable spellcheck="false"></div>
    `
  }
}

export {
  Formula,
}
