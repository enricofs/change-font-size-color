const optionPanel = document.querySelector('.customize-option')
const icon = document.querySelector('.customize-icon')

const allElement = document.querySelectorAll(
  'p,button,h1,h2,h3,h4,h5,h6,span,a'
)

icon.addEventListener('click', function () {
  optionPanel.classList.toggle('active')
})

function small() {
  allElement.forEach(el => {
    if (el.getAttribute('role') !== 'customize-page') {
      let elementFont = Math.floor(
        parseFloat(
          window.getComputedStyle(el, null).getPropertyValue('font-size')
        )
      )
      el.style.fontSize = elementFont - 4 + 'px'
    }
  })
}

function large() {
  allElement.forEach(el => {
    if (el.getAttribute('role') !== 'customize-page') {
      let elementFont = Math.floor(
        parseFloat(
          window.getComputedStyle(el, null).getPropertyValue('font-size')
        )
      )
      el.style.fontSize = elementFont + 4 + 'px'
    }
  })
}

function serif() {
  allElement.forEach(el => {
    if (el.getAttribute('role') !== 'customize-page') {
      el.style.fontFamily = 'serif'
    }
  })
}

function arial() {
  allElement.forEach(el => {
    if (el.getAttribute('role') !== 'customize-page') {
      el.style.fontFamily = 'arial'
    }
  })
}

function dark() {
  allElement.forEach(el => {
    document.getElementsByTagName('BODY')[0].style.background = '#1C1F28'

    if (el.getAttribute('role') !== 'customize-page') {
      let elementColor = window
        .getComputedStyle(el, null)
        .getPropertyValue('color')

      if (elementColor === 'rgb(51, 51, 51)') {
        el.style.color = '#fff'
      }
    }
  })
}
function white() {
  allElement.forEach(el => {
    document.getElementsByTagName('BODY')[0].style.background = '#fff'

    if (el.getAttribute('role') !== 'customize-page') {
      let elementColor = window
        .getComputedStyle(el, null)
        .getPropertyValue('color')

      if (elementColor === 'rgb(255, 255, 255)') {
        el.style.color = '#333333'
      }
    }
  })
}
