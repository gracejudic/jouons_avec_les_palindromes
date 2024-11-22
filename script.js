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
        return true
    } else {
        return false
    }
}    
    
function maxDaysInMonth(myDay,myMonth) {
    if (myDay > (MAX_DAYS_PER_MONTH[myMonth])) {
        console.log("proposed day doesn't exist")
        return false
    } else {
        console.log("proposed day exists")
        return true
    }
}
        
function isValideDate(myDate) {
    let myDateCheck = myDate.split('/',3)
    myDay = parseInt(myDateCheck[0])
    myMonth = parseInt(myDateCheck[1])
    myYear = parseInt(myDateCheck[2])
  
    if (isBetween(myDay,0,32) && isBetween(myMonth,0,13) && isBetween(myYear,999,10000)) {
        if(maxDaysInMonth(myDay,myMonth)) {
            return true
        } else {
            return false
        }
    } else {
        console.log(`${myDate} : full date is not valid`)
        return false
    }
}  

function isPalindromeDate(myDate) {
    let myReversedDate = myDate.split('/').join('')
    myReversedDate = [...myReversedDate].reverse()
    //console.log(myReversedDate, " array + reverse")
    myReversedDate = myReversedDate.join('')
    //console.log(myReversedDate, " join reversed")
    myOriginalDateJoined = myDate.split('/').join('')
    //console.log(myOriginalDateJoined, " original date without /")
    if (myReversedDate === myOriginalDateJoined) {
        console.log(`${myDate} : is a date palindrome`)
        return true
    } else {
        console.log(`${myDate} : is not a date palindrome`)
        return false
    }
}

function removeAccents(mySentence) {
    return mySentence.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

function removeSpecialCharac(mySentence) {
    switch(true) {
        case mySentence.includes('!'):
            mySentence = mySentence.replaceAll('!' , '');
    
        case mySentence.includes('?'):
            mySentence = mySentence.replaceAll('?' , '');
        
        case mySentence.includes('.'):
            mySentence = mySentence.replaceAll('.' , '');
            
        case mySentence.includes(','): 
            mySentence = mySentence.replaceAll(',' , '');
            
        case mySentence.includes(';'):
            mySentence = mySentence.replaceAll(';' , '');
            
        case mySentence.includes(':'):
            mySentence = mySentence.replaceAll(':' , '');
            
        case mySentence.includes('-'):
            mySentence = mySentence.replaceAll('-' , '');
            
        case mySentence.includes('_'):
            mySentence = mySentence.replaceAll('_' , '');   
            
        case mySentence.includes('(' && ')'):
            mySentence = mySentence.replaceAll(/[()]/g , '');    
            break; 
        }
    return mySentence
}
         
function isPalindromeWords(mySentence) {
    mySentence = removeAccents(mySentence)
    mySentence = removeSpecialCharac(mySentence)
    
    let myReversedSentence = mySentence.split(' ').join('').toLowerCase()
    //console.log(myReversedSentence, " split + join + LowerCase")
    myReversedSentence = [...myReversedSentence].reverse()
    //console.log(myReversedSentence, " array + reverse")
    myReversedSentence = myReversedSentence.join('')
    //console.log(myReversedSentence, " join reversed")
    let myOriginalSentenceJoined = mySentence.split(' ').join('').toLowerCase()
    //console.log(myOriginalSentenceJoined, " original string without spaces")

    if (myReversedSentence === myOriginalSentenceJoined) {
    console.log(`${mySentence} is a words palindrome`)
      return true
    } else {
    console.log(`${mySentence} is not a words palindrome`)
      return false
    }
}

function isPalindrome(mySuggestion) {
    if(isValideDate(mySuggestion)) {
        isPalindromeDate(mySuggestion)
    } else {
        isPalindromeWords(mySuggestion)
    }
/*Problème : les dates non existantes passent dans la fonction PalindromeWords et les phrases/mots passent dans 
datePalindromes donc le code marche mais les console.log() de check sont pas terribles*/      
}

isPalindrome("32/02/2024")
isPalindrome("13/02/2031")
isPalindrome("24/02/2042")
isPalindrome("17/03/1996")

isPalindrome("Oh who was it I saw, oh who?")
isPalindrome("Ceci n'est pas un palindrome")
isPalindrome("Eve saw diamond, erred, no maid was Eve.")
isPalindrome("Lapp, Mac? No, sir, prison-camp pal.")