/*
Problem-1 : the "mindGame". 
This function multiplies the parameter by 3, adds 10, divides by 2, and finally subtracts 5 before returning the result.
*/ 
function mindGame ( number ) {
   if (number > 0) {
    return ((number*3)+10)/2 - 5 ;
   }
    else {
    return 'please provide a valid value!!!'
    }
}

/*
Probem - 2 : "evenOdd".
In this function we are returning the paramater's element's number is 'even' or 'odd'. To get the element's number
we have to find out the length of element. Because the number of the parameter's element is actually its length. So, here is the solution :
*/  
function evenOdd ( str ) {
    if ( typeof(str) !== 'string') {
        return 'You should provide a "string" as a parameter!!' ;
    }
    else if ( str.length % 2 == 0 ) {
        return 'even' ;
    }
    else if ( str.length % 2 !== 0 ) {
        return 'odd' ;
    }
}

/*
Problem -3 : "isLGSeven".
Throughout this function we are gonna returning the result following simple two steps.
First, if the substruction result (between the parameter and 7) is less ('<') than 7, we would return the substruction result immedietely.
Second, if the substruction result (between the parameter and 7) is anything else, that means, it's greater ('>') than 7, we would return the double of the input or parameter.
*/
function isLGSeven ( number ) {
    const substruction = number - 7 ;
    if ( typeof (number) !== 'number') {
        return 'I am sorry. I am not sure what you asking for...... '
    }
    
    else if( substruction < 7 ) {
        return substruction ;
    }
    else {
        return number *2 ;
    }
}

/*
Problem -4 : "findingBadData" :
In the context of this we shall return the length of bdaData array. To find this first we have to separate the bad datas (the negative values) in an array, and then we have to return the length of this array. We can keep the variable name of this array as "badData".
*/ 
function findingBadData (number) {
    let badData = [] ;
    for ( let i = 0 ; i < number.length ; i++ ) {
        const datasAre = number[i] ;
        if ( datasAre < 0 ) {
            badData.push(datasAre) ;
        }
        else if ( number == 'string' ) {
            return 'please enter a valid numeric figure!!!!!'
        }
    }
    return badData.length ;
}

/*
Poblem -5 : "gemsToDiamond" 
Wwithin this function we are yelding the quantity of total diamond in two steps. 
First, if the quantity of total diamond is greater than double of 1000(2000), we will return the difference value between total diamond and 2000.
Second, if the quanity of total diamond is less then 2000, we will return the total quantity of total diamond straight away. Done.
*/ 
function gemsToDiamond ( gem1, gem2, gem3 ) {
    const gem1Power = 21 ;
    const gem2Power = 32 ;
    const gem3Power = 43 ;
    const firstDiamondQuanity = gem1 * gem1Power ;
    const secondDiamondQuanity = gem2 * gem2Power ;
    const thirdDiamondQuantity = gem3 * gem3Power ;
    const totalDiamond = firstDiamondQuanity + secondDiamondQuanity + thirdDiamondQuantity ;
    if ( totalDiamond > 1000*2) {
        const weGot = totalDiamond - 2000 ;
        return weGot ;
    }
    else if ( totalDiamond < 1000*2 ) {
        return totalDiamond ;
    }
    else {
        return 'Something is not a valid. Please check your input values!!'
    }
}

/*
I don't know if you will read this message or not, but I just wanted to take a moment to express my sincere gratitude to the P-hero team. All of your support and efforts have made a significant impact on my life and I am truly grateful. I appreciate all the efforts you have made and the time you take to help us continuously. Your actions have not gone unnoticed, and I will never forget all that you have done. Thank you so much from the bottom of my heart.

                                               THANK YOU                                             
*/ 