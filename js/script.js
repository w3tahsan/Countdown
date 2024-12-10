let countdown_date = document.querySelector('#countdown_date').dataset.date;
let countdown_item = document.querySelectorAll('.countdown')

function countdown(){
    let endDate = new Date(countdown_date)
    let startDate = new Date()
    let datediffrence = (endDate - startDate) / 1000

    if(datediffrence > 0){
        let day = Math.floor(datediffrence / 3600 / 24)
        let hour = Math.floor(datediffrence / 3600) % 24
        let min = Math.floor(datediffrence / 60) % 60
        let sec = Math.floor(datediffrence % 60)

        countdown_item[0].textContent = day
        countdown_item[1].textContent = hour
        countdown_item[2].textContent = min
        countdown_item[3].textContent = sec
    }
    else{
        clearInterval(stop)
    }
}
const stop = setInterval(() => {
    countdown()
}, 1000)
