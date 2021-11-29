const months = [31,28,31,30,31,30,31,31,30,31,30,31];

//Disable future
var today = new Date();
    var maxDate = today.getDate();
    var maxMonth = today.getMonth()+1;
    var maxYear = today.getFullYear();

    var maxTime = maxYear+"-"+maxMonth+"-"+maxDate;
    
    document.getElementById("date-input1").setAttribute("max", maxTime);
    document.getElementById("date-input2").setAttribute("max", maxTime);

function ageCalculate(){
    let today = new Date();
    let inputDate1 = new Date(document.getElementById("date-input1").value);
    let inputDate2 = new Date(document.getElementById("date-input2").value);
    let birthMonth,birthDate,birthYear;
    //copying value
    let birthDetails = {
        date:inputDate1.getDate(),
        month:inputDate1.getMonth()+1,
        year:inputDate1.getFullYear()
    }
    let currentYear = inputDate2.getFullYear();
    let currentMonth = inputDate2.getMonth()+1;
    let currentDate = inputDate2.getDate();

    leapChecker(currentYear);
    //not born
    if(
        birthDetails.year > currentYear ||
        ( birthDetails.month > currentMonth && birthDetails.year == currentYear) || 
        (birthDetails.date > currentDate && birthDetails.month == currentMonth && birthDetails.year == currentYear)
    ){
        alert("Not Born Yet");
        displayResult("-","-","-");
        return;
    }

    birthYear = currentYear - birthDetails.year;

    if(currentMonth >= birthDetails.month){
        birthMonth = currentMonth - birthDetails.month;
    }
    else{
        birthYear--;
        birthMonth = 12 + currentMonth - birthDetails.month;
    }

    if(currentDate >= birthDetails.date){
        birthDate = currentDate - birthDetails.date;
    }
    else{
        birthMonth--;
        let days = months[currentMonth - 2];
        birthDate = days + currentDate - birthDetails.date;
        if(birthMonth < 0){
            birthMonth = 11;
            birthYear--;
        }
    }
    displayResult(birthDate,birthMonth,birthYear);
}
//changing value
function displayResult(bDate,bMonth,bYear){
    document.getElementById("years").textContent = bYear;
    document.getElementById("months").textContent = bMonth;
    document.getElementById("days").textContent = bDate;
}
//leap year
function leapChecker(year){
    if(year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)){
        months[1] = 29;
    }
    else{
        months[1] = 28;
    }
}
