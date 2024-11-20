/* prend en param une date en string et determine si valide (existe + format dd/mm/yyyy)
à vérif : années min 1000 et année max 9999 // mois entre 1 et 12 // nombre de jours par 
mois valide
étape 1 : 
> vérifier si date est reçue comme dd/mm/yyyy (comment ?)
> transformer strings reçue en int
> si (année < 1000 || année > 9999) || (mois < 0 || mois > 12)
    retourner une erreur
> si jour entre > 0 && =< nombre de jours max par mois
    retourner date valide */
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
        
function isValideDate (myDay,myMonth,myYear) {
      
    myDay = parseInt(myDay)
    myMonth = parseInt(myMonth)
    myYear = parseInt(myYear)
      
    if (isBetween(myDay,0,32) && isBetween(myMonth,0,13) && isBetween(myYear,999,10000)) {
        maxDaysInMonth(myDay,myMonth)
        console.log("isValideDate : full date is valid")
    } else {
        console.log("isValideDate : full date isn't valid")
    }
      
}  
         
isValideDate("20", "13", "2024")