import './styles.css';
import { Date2 } from './calculator.js';


$(document).ready(function() {
  $("#calculator").submit(function(event){
    event.preventDefault();
    var date3 = parseInt($("#date").val());
    var month3 = $("#month").val();
    var year3 = parseInt($("#year").val());
    alert(date3);
    alert(month3);
    alert(year3);
    var testDate = new Date2(date3,month3,year3);
    
    $("#solution").text(testDate.calculateDay());
  });
  
});
