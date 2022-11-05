// algo helpers
const filterAlphaNumeric = (s, nonAlphaNumeric = new RegExp('[^a-z0-9]', 'gi')) => {
    s.toLowerCase().replace(nonAlphaNumeric, '')
}
// end algo helpers

var isPalindrome = function(s) {
    const newStr = filterAlphaNumeric(s)
    return newStr === newStr.split('').reverse().join('');
}

