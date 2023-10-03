const dailyBtn = document.querySelector('.daily')
const weeklyBtn = document.querySelector('.weekly')
const monthlyBtn = document.querySelector('.monthly')
const times1 = document.querySelector('#times1')
const times2 = document.querySelector('#times2')
const times3 = document.querySelector('#times3')
const times4 = document.querySelector('#times4')
const times5 = document.querySelector('#times5')
const times6 = document.querySelector('#times6')

dailyBtn.addEventListener('click', () => {
    dailyBtn.classList.add('active')
    times1.innerHTML = '<h2 class="time">5hrs</h2><p>Last day - 7hrs</p>'
    times2.innerHTML = '<h2 class="time">1hrs</h2><p>Last day - 2hrs</p>'
    times3.innerHTML = '<h2 class="time">0hr</h2><p>Last day - 1hr</p>'
    times4.innerHTML = '<h2 class="time">1hr</h2><p>Last day - 1hr</p>'
    times5.innerHTML = '<h2 class="time">1hr</h2><p>Last day - 3hrs</p>'
    times6.innerHTML = '<h2 class="time">0hr</h2><p>Last day - 1hr</p>'
})

