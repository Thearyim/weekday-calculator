export function Date2(date, month, year){
  this.date = date,
  this.month = month,
  this.year = year;
  
  Date2.prototype.getDateCode = function(){
    return this.date;  
  };

  Date2.prototype.getMonthCode = function(){
    if(this.month.toLowerCase() === "january" || this.month.toLowerCase() === "october"){
      return 0;
    } else if(this.month.toLowerCase() === "may"){
      return 1;
    } else if(this.month.toLowerCase() === "august"){
      return 2;
    } else if(this.month.toLowerCase() === "february" || this.month.toLowerCase() === "march" || this.month.toLowerCase() === "november"){
      return 3;
    } else if(this.month.toLowerCase() === "june"){
      return 4;
    } else if(this.month.toLowerCase() === "september" || this.month.toLowerCase() === "december"){
      return 5;
    } else if(this.month.toLowerCase() === "april" || this.month.toLowerCase() === "july"){
      return 6;
    }  
  };

  Date2.prototype.leapYearCode = function(){
    if(this.month.toLowerCase() === "january" || this.month.toLowerCase() === "february"){
      if(this.year % 4 === 0 && this.year % 100 != 0 && this.year % 400 === 0){
        return -1;
      }
      return 0;
    } else {
      return 0;
    }
  };

  Date2.prototype.getCenturyCode = function(){
    var firstTwoDigit = parseInt(this.year.toString().substr(0,2));
    if(firstTwoDigit === 17 || firstTwoDigit === 21){
      return 4;
    } else if(firstTwoDigit === 18 || firstTwoDigit === 22){
      return 2;
    } else if(firstTwoDigit === 19 || firstTwoDigit === 23){
      return 0;
    } else if(firstTwoDigit === 20){
      return 6;
    }
  };

  Date2.prototype.getYearCode = function(){
    var yearString = this.year.toString();
    var lastTwoDigit = 0;
    if(yearString[yearString-2] === "0"){
      lastTwoDigit = parseInt(yearString[yearString-1]);
    } else {
      lastTwoDigit = parseInt(this.year.toString().substr(2,2));
    }
    var yearCode = (lastTwoDigit + Math.floor((lastTwoDigit / 4))) % 7;
    return yearCode;
  };

  Date2.prototype.calculateDay = function(){
    var totalFromFormula = this.getDateCode() + this.getMonthCode() + this.leapYearCode() + this.getCenturyCode() + this.getYearCode();
    var number = totalFromFormula % 7;
    if(number === 0){
      return "Sunday";
    } else if(number === 1){
      return "Monday";
    } else if (number === 2){
      return "Tuesday";
    } else if(number === 3){
      return "Wednesday";
    } else if (number === 4){
      return "Thursday";
    } else if(number === 5){
      return "Friday";
    } else if (number === 6){
      return "Saturday";
    }
  };
}

