const countdown = () => {
    const countDate = new Date('May 23, 2023 00:00:00').getTime()
    const now = new Date().getTime()
    const gap = countDate - now
    const second = 1000
    const minute = second *60
    const hour = minute *60
    const day = hour *24

    const textDay = Math.floor(gap / day)
    const textHour = Math.floor((gap % day) / hour)
    const textMinute = Math.floor((gap % hour )/ minute)
    const textSecond = Math.floor((gap % minute) / second)

    document.querySelector('.day').innerText = textDay
    document.querySelector('.hour').innerText = textHour
    document.querySelector('.minute').innerText = textMinute
    document.querySelector('.second').innerText = textSecond

}

const countdown2 = () => {
    const countDate = new Date('May 24, 2023 00:00:00').getTime()
    const now = new Date().getTime()
    const gap = countDate - now
    const second = 1000
    const minute = second *60
    const hour = minute *60
    const day = hour *24

    const textDay = Math.floor(gap / day)
    const textHour = Math.floor((gap % day) / hour)
    const textMinute = Math.floor((gap % hour )/ minute)
    const textSecond = Math.floor((gap % minute) / second)

    document.querySelector('.day2').innerText = textDay
    document.querySelector('.hour2').innerText = textHour
    document.querySelector('.minute2').innerText = textMinute
    document.querySelector('.second2').innerText = textSecond

}

const countdown3 = () => {
    const countDate = new Date('May 25, 2023 00:00:00').getTime()
    const now = new Date().getTime()
    const gap = countDate - now
    const second = 1000
    const minute = second *60
    const hour = minute *60
    const day = hour *24

    const textDay = Math.floor(gap / day)
    const textHour = Math.floor((gap % day) / hour)
    const textMinute = Math.floor((gap % hour )/ minute)
    const textSecond = Math.floor((gap % minute) / second)

    document.querySelector('.day3').innerText = textDay
    document.querySelector('.hour3').innerText = textHour
    document.querySelector('.minute3').innerText = textMinute
    document.querySelector('.second3').innerText = textSecond

}

setInterval(countdown, 1000)
setInterval(countdown2, 1000)
setInterval(countdown3, 1000)
