let topicsArray = [
    "浪漫突進",
    "死而復生",
    "生死決鬥",
    "月老要Line",
    "浪漫火花",
    "量子糾纏?",
];

let startDate = new Date();

function setMonthAndDay(startMonth,startDay){
    //一次設定好月份與日期
    startDate.setMonth(startMonth-1,startDay);
    //時間先忽略,設為0
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}
let date = document.getElementById('date');
//指定第一天

$("#Duke").attr("src","assets/img/浪漫Duke.jpg");