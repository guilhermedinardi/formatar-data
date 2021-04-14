
// Primeira maneira
const periodOfTime = getNewData()
const hour = getNewHour()
const resultMsg = `${periodOfTime} ${hour}`

function getNewData(){
    const data = new Date()
    const newDay = data.getDay()
    const newData = data.getDate()
    const newMonth = data.getMonth()
    const newYear = data.getFullYear()

    let dayWeek
    let monthYear
    switch(newDay){
    case 0:
        dayWeek = 'Domingo'
        break
    case 1:
        dayWeek = 'Segunda'
        break
    case 2:
        dayWeek = 'Terça'
        break
    case 3:
        dayWeek = 'Quarta'
        break
    case 4:
        dayWeek = 'Quinta'
        break
    case 5:
        dayWeek = 'Sexta'
        break
    case 6:
        dayWeek = 'Sabado'
        break

    }
    switch(newMonth){
    case 0:
        monthYear = 'Janeiro'
        break    
    case 1:
        monthYear = 'Fevereiro'
        break    
    case 2:
        monthYear = 'Março'
        break    
    case 3:
        monthYear = 'Abril'
        break    
    case 4:
        monthYear = 'Maio'
        break    
    case 5:
        monthYear = 'Junho'
        break    
    case 6:
        monthYear = 'Julho'
        break    
    case 7:
        monthYear = 'Agosto'
        break    
    case 8:
        monthYear = 'Setembro'
        break    
    case 9:
        monthYear = 'Outubro'
        break    
    case 10:
        monthYear = 'Novembro'
        break   
    case 11:
        monthYear = 'Dezembro'
        break    
    }
    const resultData = `${dayWeek}, ${newData} de ${monthYear} de ${newYear}`
    return resultData
}
function zeroLeft (num){
    return num >= 10 ? num : `0${num}`
}
function getNewHour() {
    const hours = new Date()
    const newHour = hours.getHours()
    const newMinute = hours.getMinutes()
    const time = `${zeroLeft(newHour)}:${zeroLeft(newMinute)}`
    return time
}
function setResult(){
    const result = document.querySelector('.title-home')
    result.innerHTML = resultMsg
}
 setResult()


// Segunda maneira 

const resultadoManeira2 = document.querySelector('.resultado')
const data2 = new Date()
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
}
resultadoManeira2.innerHTML = data2.toLocaleString('pt-BR', opcoes)

// Terceira maneira

const resultadoManeira3 = document.querySelector('.resultado3')
const data3 = new Date()
resultadoManeira3.innerHTML = data3.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'short'})

// Quarta maneira

const resultadoManeira4 = document.querySelector('.resultado4')
const data4 = new Date()

function getDiasSemanaTexto(diaSemana) {
    const diasSemana = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sabado']
    return diasSemana[diaSemana]
}
function getNomeMes(numeroMes) {
    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho',
    'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    return meses[numeroMes]
}
function zeroLeft (num){
    return num >= 10 ? num : `0${num}`
}
function criaData(data4) {
    const diaSemana = data4.getDay()
    const numeroMes = data4.getMonth()

    const nomeDia = getDiasSemanaTexto(diaSemana)
    const nomeMes = getNomeMes(numeroMes)

    return (
        `${nomeDia}, ${data4.getDate()} de ${nomeMes}` +
        ` de ${data4.getFullYear()} ` + 
        `${zeroLeft(data4.getHours())}:${zeroLeft(data4.getMinutes())}`
    )
}
resultadoManeira4.innerHTML = criaData(data4)
