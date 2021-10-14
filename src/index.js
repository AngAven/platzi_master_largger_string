import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './styles/index.css'

const maxArray = () => {
  const fullArray = document
    .querySelector('.full-array')
    .value
    .trim()
    .split(' ')

  let arrayMaxLengthPosition = 0

  fullArray.forEach((element, index, array) => {
    if (index > 0 ){
      const actualElementLength = element.length

      // Comparación entre el elemento actual, el que tuvo la cadena mas larga anteriormente
      if (actualElementLength > array[arrayMaxLengthPosition].length){
        arrayMaxLengthPosition = index
      }

      return
    }

    arrayMaxLengthPosition = index
  })

  console.log('El elemento con mayor número de caracteres es el: ',  fullArray[arrayMaxLengthPosition])
}

export default maxArray
