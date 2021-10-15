import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import './styles/index.css'

const calculateMaxArray = () => {
  const arrayInputs = Array.from(document.querySelectorAll('.array'))
  let fullArray = new Array(0)

  arrayInputs.forEach(arrayInput => {
    const arrayValue = arrayInput.value.trim()

    if (arrayValue === ''){
      alert('Llena todos los campos')
    }

    fullArray.push([arrayInput.value])
  })

  maxArray(fullArray)
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

  console.log('El arreglo con el mayor número de caracteres es el: Array[', arrayMaxLengthPosition, ']',
    'Con el contenido: => ', fullArrayInput[arrayMaxLengthPosition][0])

  alert(fullArrayInput[arrayMaxLengthPosition][0])
}

const createArayInput = () => {
  const inputGroup = document.querySelector('.input-group')
  const inputArray = document.createElement('input')
  inputArray.classList.add('form-control')
  inputArray.classList.add('array')
  inputArray.placeholder = 'ABCDabcd1234'

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

export default calculateMaxArray
