// function calculate()
// {
//     // console.log(cd.value.slice(0,4));

//     let year;
//     let month;
//     let day;

//     let birthDay = parseInt(dob.value.slice(8,10),10);
//     let birthMonth = parseInt(dob.value.slice(5,7),10);
//     let birthYear = parseInt(dob.value.slice(0,4),10);
//     console.log('birthday:-',birthDay,birthMonth,birthYear);


//     let currentDay = parseInt(cd.value.slice(8,10),10);
//     let currentMonth = parseInt(cd.value.slice(5,7),10);
//     let currentYear = parseInt(cd.value.slice(0,4),10);
//     console.log('current date:-',currentDay,currentMonth,currentYear);

//     if(currentDay >= birthDay)
//     {
//         day = currentDay - birthDay;
//     } 
//     else
//     {
//         day = currentDay + new Date(currentYear,currentMonth,0).getDate() - birthDay;
//         currentDay += day;
//         currentMonth-- ;

//         if (currentMonth < 0) {
//             currentMonth = 11; 
//             currentYear--;
//         }
//     }

//     if(currentMonth >= birthMonth)
//     {
//         month = currentMonth - birthMonth;
//     }
//     else
//     {
//         month = currentMonth + 12 - birthMonth;
//         currentYear--;
//     }

//     year = currentYear-birthYear;
//     if(year < 0)
//     {
//         ageText.innerHTML = "YOU ARE NOT BORN YET";
//     }
//     else
//     {
//         ageText.innerHTML = year + " years " + month + " months " + day + " days ";
//     }

//    console.log(day);


// }


function calculate() {
    // Parse dates from input values
    const dobDate = new Date(dob.value);
    const currentDate = new Date(cd.value);
  
    // Extract year, month, and day from both dates
    let birthYear = dobDate.getFullYear();
    let birthMonth = dobDate.getMonth() + 1; // converting to 1-indexed
    let birthDay = dobDate.getDate();
  
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth() + 1;
    let currentDay = currentDate.getDate();
  
    let day, month, year;
  
    // Calculate day difference
    if (currentDay >= birthDay) {
      day = currentDay - birthDay;
    } else {
      // Borrow days from previous month
      const daysInPrevMonth = new Date(currentYear, currentMonth - 1, 0).getDate();
      day = currentDay + daysInPrevMonth - birthDay;
      currentMonth--; // Adjust month because we borrowed days
    }
  
    
    // Calculate month difference
    if (currentMonth >= birthMonth) {
      month = currentMonth - birthMonth;
    } else {
      month = currentMonth + 12 - birthMonth;
      currentYear--; // Adjust year because we borrowed months
    }
  
    // Calculate year difference
    year = currentYear - birthYear;
  
    // Display result
    if (year < 0) {
      ageText.innerHTML = "YOU ARE NOT BORN YET";
    } else {
      ageText.innerHTML = `${year} years ${month} months ${day} days`;
    }
  }
  