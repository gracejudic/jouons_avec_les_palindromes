const MAX_DAYS_PER_MONTH = {
    1:31,
    2:28,
    3:31,
    4:30,
    5:31,
    6:30,
    7:31,
    8:31,
    9:30,
    10:31,
    11:30,
    12:31
}    
    
function isBetween (myNum,minValue,maxValue) {
      
    if (myNum > minValue && myNum < maxValue) {
        console.log ("isBetween : valid")
        return true
    } else {
        console.log("isBetween : invalid")
        return false
    }
      
}    
    
function maxDaysInMonth(myDay,myMonth) {
      
    if (myDay > (MAX_DAYS_PER_MONTH[myMonth])) {
        console.log("maxDaysInMonth : invalid")
    } else {
        console.log("maxDaysInMonth : valid")
    }
      
}
        
function isValideDate (myDate) {
    let myDateCheck = myDate.split('/',3)
    myDay = parseInt(myDateCheck[0])
    myMonth = parseInt(myDateCheck[1])
    myYear = parseInt(myDateCheck[2])
  
    if (isBetween(myDay,0,32) && isBetween(myMonth,0,13) && isBetween(myYear,999,10000)) {
        maxDaysInMonth(myDay,myMonth)
        console.log("isValideDate : full date is valid")
    } else {
        console.log("isValideDate : full date isn't valid")
    }
    console.log(myDate)
    console.log(myDay)
    console.log(myMonth)
    console.log(myYear)
}  

function isPalindrome(myDate) {
    let myDate = "10/02/2001"
    let myReversedDate = myDate.split('/').join('')
    //console.log(myReversedDate, " split + join") //> ok, output : ddmmyyyy

    myReversedDate = [...myReversedDate].reverse()
    //console.log(myReversedDate, " array + reverse") > ok, output : ["6","9","9" etc ]

    myReversedDate = myReversedDate.join('')
    //console.log(myReversedDate, " join reversed") > ok, output : "yyyymmdd"

    mySplitedDate = myDate.split('/').join('')
    //console.log(mySplitedDate, " original date without /") > ok, output : "ddmmyyyy"

    if (myReversedDate === mySplitedDate) {
    console.log("c'est un palindrome")
    } else {
    console.log("c'est pas un palindrome")
    }

}
         
isValideDate("17/03/1996")