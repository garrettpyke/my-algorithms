///// Palindrome Test /////
// Set 'str' variable to any word; this function will return true if word is a palindrome.

// Examples: kayak, level, civic, madam, mom, noon, racecar, saippuakivikauppias, sexatnoontaxes - all return true.

// This function works from the outside in. Thus if a near-palindrome has faults at the edges, it will execute in relatively few cycles. If the faults are near the center, it's not as optimized.

//get str length
//compare outer chars
//increment inwards until midpoint, which is str.len / 2

str = 'kayak'
len = str.length

const log = (arg) => console.log(arg) //lazy shortcut for console.log

function palindromeCheck(word) { 
    j = 1 // Used to count characters from end of string  
    // Stop testing at midpoint of word. len/2 works for both odd and even numbered palindromes (modulus is dropped).
    for (i=0; i < len/2; i++) {
        if (word.at(i) !== word.at(len-j)) {
            return false
        }
        j++
    }
    return true
}

log(palindromeCheck(str))