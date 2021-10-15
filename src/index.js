import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import './styles/index.css'

const calculateMaxArray = () => {
  const arrayInputs = Array.from(document.querySelectorAll('.array'))
  let fullArray = new Array(0)

  arrayInputs.forEach(arrayInput => {
    const arrayValue = arrayInput.value.trim()

    if (arrayValue === ''){
      arrayInput.classList.add('border-alert')
      console.log(arrayInput)
    }

    fullArray.push([arrayInput.value])
  })

  arrayInputs[maxArray(fullArray)].classList.add('border-string-largger')
}

const maxArray = fullArray => {
  const fullArrayInput = fullArray
  let arrayMaxLengthPosition = 0

  fullArrayInput.forEach((element, index, array) => {
    if (index > 0 ){
      const actualElementLength = element[0].length
      const pastElementLength = array[arrayMaxLengthPosition][0]

      // Comparación entre el elemento actual, el que tuvo la cadena mas larga anteriormente
      if (actualElementLength > pastElementLength.length){
        arrayMaxLengthPosition = index
      }

      return
    }

    arrayMaxLengthPosition = index
  })

  return arrayMaxLengthPosition
}

const createArayInput = () => {
  const inputGroup = document.querySelector('.input-group')
  const inputArray = document.createElement('input')
  inputArray.classList.add('form-control')
  inputArray.classList.add('array')
  inputArray.placeholder = 'texto'
  inputArray.type = 'text'

  inputGroup.appendChild(inputArray)
}

const removeLastArrayInput = () => {
  const inputGroup = Array.from(document.querySelectorAll('.array'))
  const inputGroupLength = inputGroup.length

  if (inputGroupLength === 1){
    return
  }

  inputGroup[inputGroupLength - 1].remove()
}

const addEvents = () => {
  const addArray = document.querySelector('.add-array')
  const removeArray = document.querySelector('.remove-array')
  const calculateArray = document.querySelector('.calculate-array')

  addArray.addEventListener('click', () => {
    console.log('add')
    removeBorderAlert()
    removeBorderSuccess()
    createArayInput()
  })

  removeArray.addEventListener('click', () => {
    console.log('remove')
    removeBorderAlert()
    removeBorderSuccess()
    removeLastArrayInput()
  })

  calculateArray.addEventListener('click', () => {
    console.log('calculate')
    removeBorderAlert()
    removeBorderSuccess()
    calculateMaxArray()
  })
}

const removeBorderAlert = () => {
  const arrayInputs = Array.from(document.querySelectorAll('.array'))
  arrayInputs.forEach(arrayInput => {
    if (arrayInput.classList.contains('border-alert')){
      arrayInput.classList.remove('border-alert')
    }
  })
}

const removeBorderSuccess = () => {
  const arrayInputs = Array.from(document.querySelectorAll('.array'))
  arrayInputs.forEach(arrayInput => {
    if (arrayInput.classList.contains('border-string-largger')){
      arrayInput.classList.remove('border-string-largger')
    }
  })
}

addEvents()
