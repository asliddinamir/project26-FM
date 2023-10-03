const dailyBtn = document.querySelector('.daily')
const weeklyBtn = document.querySelector('.weekly')
const monthlyBtn = document.querySelector('.monthly')
const times1 = document.querySelector('#times1')
const times2 = document.querySelector('#times2')
const times3 = document.querySelector('#times3')
const times4 = document.querySelector('#times4')
const times5 = document.querySelector('#times5')
const times6 = document.querySelector('#times6')

weeklyBtn.style.color = 'white'


dailyBtn.addEventListener('click', () => {
    dailyBtn.style.color = 'white'
    weeklyBtn.style.color = 'hsl(235, 45%, 61%)'
    monthlyBtn.style.color = 'hsl(235, 45%, 61%)'
    times1.innerHTML = '<h2 class="time">5hrs</h2><p>Last day - 7hrs</p>'
    times2.innerHTML = '<h2 class="time">1hrs</h2><p>Last day - 2hrs</p>'
    times3.innerHTML = '<h2 class="time">0hr</h2><p>Last day - 1hr</p>'
    times4.innerHTML = '<h2 class="time">1hr</h2><p>Last day - 1hr</p>'
    times5.innerHTML = '<h2 class="time">1hr</h2><p>Last day - 3hrs</p>'
    times6.innerHTML = '<h2 class="time">0hr</h2><p>Last day - 1hr</p>'
})

weeklyBtn.addEventListener('click', () => {
    weeklyBtn.style.color = 'white'
    dailyBtn.style.color = 'hsl(235, 45%, 61%)'
    monthlyBtn.style.color = 'hsl(235, 45%, 61%)'
    times1.innerHTML = '<h2 class="time">32hrs</h2><p>Last week - 36hrs</p>'
    times2.innerHTML = '<h2 class="time">10hrs</h2><p>Last week - 8hrs</p>'
    times3.innerHTML = '<h2 class="time">4hrs</h2><p>Last week - 7hrs</p>'
    times4.innerHTML = '<h2 class="time">4hrs</h2><p>Last week - 5hrs</p>'
    times5.innerHTML = '<h2 class="time">5hrs</h2><p>Last week - 10hrs</p>'
    times6.innerHTML = '<h2 class="time">2hrs</h2><p>Last week - 2hrs</p>'
})

monthlyBtn.addEventListener('click', () => {
    monthlyBtn.style.color = 'white'
    dailyBtn.style.color = 'hsl(235, 45%, 61%)'
    weeklyBtn.style.color = 'hsl(235, 45%, 61%)'
    times1.innerHTML = '<h2 class="time">103hrs</h2><p>Last month - 128hrs</p>'
    times2.innerHTML = '<h2 class="time">23hrs</h2><p>Last month - 29hrs</p>'
    times3.innerHTML = '<h2 class="time">13hrs</h2><p>Last month - 19hrs</p>'
    times4.innerHTML = '<h2 class="time">11hrs</h2><p>Last month - 18hrs</p>'
    times5.innerHTML = '<h2 class="time">21hrs</h2><p>Last month - 23hrs</p>'
    times6.innerHTML = '<h2 class="time">7hrs</h2><p>Last month - 11hrs</p>'
})

