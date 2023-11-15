// ===============================================
//           JS_date_methods_Uebungen
// ===============================================

console.log("%c ======== level 1_1 ========", "color: blue; background-color: gold");

const date1 = new Date ("September 2, 2019 09:00:00");
const date2 = new Date (0);
const date3 = new Date (31556908800);
const date4 = new Date (86400000);
document.body.innerHTML = 
`<p>${date1} = new Date ("September 2, 2019 09:00:00") </p> 
<p>${date2} = new Date (0) </p> 
<p>${date3} = new Date (31556908800) </p> 
<p>${date4} = new Date (86400000) </p>` ;

console.log("%c ======== level 1_3 ========", "color: blue; background-color: gold");

document.body.innerHTML += "<br>";

const date5 = new Date ();

date5.setFullYear(2222, 9, 23);
document.body.innerHTML += "<br>" + date5;

date5.setFullYear(2123, 1, 24);
document.body.innerHTML += "<br>" + date5;

date5.setFullYear(2123, 2, 24);
document.body.innerHTML += "<br>" + date5;

date5.setFullYear(2123, 2, 3);
document.body.innerHTML += "<br>" + date5;

const d = new Date();

d.setFullYear(d.getFullYear(), d.getMonth() + 1);
document.body.innerHTML += "<br>" + d;

console.log("%c ======== level 1_5 ========", "color: blue; background-color: gold");

let list = 
[
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
];

const date6 = new Date();
// console.log(list[date6.getMonth()]);

const showMonthName = (date) =>
{
    let newDate = new Date(date);
    return list[newDate.getMonth()];
};

console.log(showMonthName("2001,3,4"));
console.log(showMonthName("2019,12,24"));
console.log(showMonthName("1410,07,15"));

console.log("%c ======== level 1_6 ========", "color: blue; background-color: gold");

const date7 = new Date(1999, 10, 5, 15); // PM
const date8 = new Date();
const date9 = new Date(2019, 12, 3, 12); // PM
const date10 = new Date(2000, 1, 1, 11); // AM

console.log(date7.getHours());

const getAmOrPm = (hours) => hours.getHours() < 12 ? "AM" : "PM";

console.log(getAmOrPm(date7));
console.log(getAmOrPm(date8));
console.log(getAmOrPm(date9));
console.log(getAmOrPm(date10));

console.log("%c ======== level 1_7 ========", "color: blue; background-color: gold");

const isWeekend = (day) =>
{
    let newDate = new Date(day);
    day = newDate.getDay()
    if(day === 0 || day === 6 )
    {
        return "Weekend";
    }
    else
    {
        return "Arbeitstag";
    } 
};

console.log(isWeekend("12, 15, 2019"));
console.log(isWeekend("2, 16, 2001"));
console.log(isWeekend("2, 1, 2020"));
console.log(isWeekend("2, 29, 2020"));

console.log("%c ======== level 1_10 ========", "color: blue; background-color: gold");

const todayDate = new Date();

const showTodayDate = (date) =>
{
    const displayDate = document.createElement('h1');
    displayDate.textContent = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
    document.body.appendChild(displayDate);
};

showTodayDate(todayDate);