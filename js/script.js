function getAkanName(){
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]; //array to hold days of the week.
    var maleAkanNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];       //array to hold male akan names in order of day of the week
    var femaleAkanNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];         //array to hold female akan names in order of day of the week
    var myBirthday = document.getElementById("dateofbirth").value;                       // here we collect the dateofbirth from the form input.
    var myGender = document.getElementsByName("gender");                                 //here we collect the gender from the form radio input.
    var dateOfBirth = new Date(myBirthday);                                              //collects the specific date.
    var dayOfTheWeek = dateOfBirth.getDay();                                             //gets the weekday as a number between 0-6. (Sunday-->Monday)


    //checking if date given is not greater than actual date.
    if (dateOfBirth >= new Date()){
        console.log(myBirthday,new Date());                                             //show today's date in console
        document.getElementById('message').innerHTML ="<span>Cannot assign names to unborns</span>";  //alert user that the date has not yet reached.
    }else{
        for(var i=0;i<myGender.length;i++){
            if(myGender[i].checked){
                if(myGender[i].value === "Male"){
                    document.getElementById('message').innerHTML = " Born on a <span>" + days[dayOfTheWeek] + "</span>, Your Akan Name's <span>" + maleAkanNames[dayOfTheWeek] + "</span>";

            }
                else {
                    document.getElementById('message').innerHTML ="Born on a <span>" + days[dayOfTheWeek] + "</span>, Your Akan Name's <span>" + femaleAkanNames[dayOfTheWeek] + "</span>";
                }
                break;
            }
            else {
                alert("Please select a gender");
            }
        }
    }
}
