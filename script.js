const meuArray = [09, 'eric', false]
const primeiro = meuArray[0]
const segundo = meuArray[1]
const terceiro = meuArray[2]
console.log(`Primeiro array: ${primeiro}
Segundo array: ${segundo}
Terceiro array: ${terceiro}`)
console.log(`--------------------------------------------------`)

// Prática guiada I
const arrayString = ['Futebol', 'Basquete', 'Surf']

const arrayNumber = [1, 2, 3, 4]
const arrayVariasCoisas = ['Zé', 7, true]
const arrayApenasUmNum = [2023]
const arraySemValorInfo = []

const tamArrayString = arrayString.length
console.log(`Tamanho do array string: ${tamArrayString}
Acessando o indice 3 do array >> ${tamArrayString[3]}`)
console.log(`--------------------------------------------------`)

const temJesus = arrayVariasCoisas.includes('Zé')
const temSete = arrayVariasCoisas.includes(7)
const temTrue = arrayVariasCoisas.includes(true)
console.log(`Tem Zé no array? ${temJesus}
Tem 7 na array? ${temSete}
Tem true na array: ${temTrue}`)
console.log(`--------------------------------------------------`)

const imprValorItem = arrayApenasUmNum
console.log(`O valor do item do quarto array é: ${imprValorItem}
Seu tamanho é: ${imprValorItem.length}`)
console.log(`--------------------------------------------------`)

const arrayStringCopiaErrada = arrayString
arrayStringCopiaErrada.push('Skate')
console.log(`Array original: ${arrayString}
Array copia errada: ${arrayStringCopiaErrada}`)
console.log(`--------------------------------------------------`)

const arrayStringCopiaCerta = arrayString.slice()
console.log(`Copia certa: ${arrayStringCopiaCerta}`)

arrayStringCopiaCerta.splice(2,2)
console.log(`Copia certa pos splice: ${arrayStringCopiaCerta}`)
console.log(`--------------------------------------------------`)

const novaArrayNum = [24,10,20,29,11,1960,2023,13]
const novaArrayNumCopia = novaArrayNum.slice()
novaArrayNumCopia.pop()
novaArrayNumCopia.push(6)
novaArrayNumCopia.splice(2,1)
console.log(`Array original: ${novaArrayNum}
Array copia: ${novaArrayNumCopia}`)
