
function time() {

    // get hour minute second
    let mytime = new Date(),
        hour = mytime.getHours(),
        minute = mytime.getMinutes(),
        second = mytime.getSeconds(),
        // get day
        day = mytime.getDate();


    // get month
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let monthName = month[mytime.getMonth()];
    // get day name
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let dayName = weekday[mytime.getUTCDay()];


    // time condition check
    if (mytime.getHours() == 0) {
        hour = 12;
    }
    else if (mytime.getHours() > 12) {
        hour = mytime.getHours() - 12;
        if (hour < 10) {
            hour = "0" + hour;
        }
    } else {
        hour = mytime.getHours()
    }



    if (minute < 10) {
        minute = "0" + minute;
    }
    if (second < 10) {
        second = "0" + second;
    }

    // Am and PM
    let amOrpm = (mytime.getHours() >= 12) ? "PM" : "AM";

    // main time 
    // let currentTime = hour + ":" + minute + ":" + second;
    // main day
    let currentDate = dayName + ", " + monthName + " " + day
    document.getElementsByClassName("hour")[0].innerHTML = hour;
    document.getElementsByClassName("minute")[0].innerHTML = minute
    document.getElementsByClassName("second")[0].innerHTML = second;
    document.getElementsByClassName('amOrpm')[0].innerHTML = amOrpm;

}

time()
setInterval(() => {
    time()
}, 1000);






// function mytime() {
//     let myDate = new Date();



//     // same thing with tarnary operator
//     let hr, min = (myDate.getMinutes() < 10) ? "0" + myDate.getMinutes() : myDate.getMinutes,
//         sec = (myDate.getSeconds() < 10) ? '0' + myDate.getSeconds() : myDate.getSeconds,
//         m = (myDate.getHours() >= 12) ? "PM" : "AM";

//     // //same thing without if else

//     // // for hours and min
//     // if (myDate.getMinutes() < 10) {
//     //     let hr, min = "0" + myDate.getMinutes()
//     // } else {
//     //     let hr, min = myDate.getMinutes;
//     // }

//     // // this is for second
//     // if (myDate.getSeconds() < 10) {
//     //     let sec = '0' + myDate.getSeconds;
//     // } else {
//     //     let sec = myDate.getSeconds;
//     // }

//     // // and this is for AM and PM
//     // if(myDate.getHours()>=12){
//     //     let m = "PM"
//     // }else{
//     //     let m = "AM"
//     // }


//     if (myDate.getHours() == 0) {
//         hr = 12;
//     } else if (myDate.getHours() > 12) {
//         hr = myDate.getHours() - 12;
//     } else {
//         hr = myDate.getHours
//     }
//     let currentTime = hr + ":" + min + ":" + sec

//     document.getElementsByClassName('h')[0].innerHTML = currentTime;
//     document.getElementsByClassName('m')[0].innerHTML = m

//     let myDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', "Friday", "Saturday"],
//         myMonth = ['January', 'February', "March", "April", 'May', "June", "July", 'August', "September", 'October', "November", "December"],

//         day = myDate.getDate(),
//         currentDate = myDay[myDate.getDay()] + "," + myMonth[myDate.getMonth()] + day;
//     document.getElementsByClassName('date')[0].innerHTML = currentDate
// }
// mytime()
// setInterval(function () {
//     mytime()
// }, 1000)