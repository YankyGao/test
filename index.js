// let time = new Date().toLocaleTimeString(`chinese`,{hour12:false})
// console.log(a)
// setInterval(()=> {document.getElementById('time').innerHTML = time},1000)

function myTime() {
    let date = new Date()
    let month = date.getMonth() +1 
    if(month < 10){
        month = '0' +month
    }
    let day = date.getDate()
    if(day < 10){
        day = '0' +day
    }
    let hour = date.getHours()
    let minutes = date.getMinutes()
    if(minutes < 10){
        minutes = '0' + minutes
    }
    let seconds = date.getSeconds()
    if(seconds < 10){
        seconds = '0' + seconds
    }
    let milliseconds = date.getMilliseconds()
    var time = `${month}-${day} ${hour}:${minutes}:${seconds}.${milliseconds}`
    document.getElementById('time').innerHTML = time
    // console.log(time)
}

setInterval(myTime,1)