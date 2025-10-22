function decodeSecretCode(s) {
    // your solution
  
    let res = ""
    let letter
  
    for (let i = 0; i < s.length; i++){ 
      let code = (s[i]).charCodeAt(0)
      console.log(code , ('0').charCodeAt('0') , ('9').charCodeAt('0'))
      if ( code >= ('0').charCodeAt('0') && code <= ('9').charCodeAt('0')) {
        const digit = code - ('0').charCodeAt('0')
        console.log(digit,letter,String.fromCharCode(letter + digit))
        res += String.fromCharCode(letter + digit)
      } else {
        letter = code
      }
    }
  
    return res
  
}

console.log(decodeSecretCode("a2b3c1"))



function generateFibonacci(n) {

    const res = [];

    let a = 0
    let b = 1

    for (let i = 0; i < n; i++) {
        if (i < 2) {
            res.push(i)
        } else {
            const next = a+b
            res.push(next) 
            a = b
            b = next
        }
    }
    return res
}

console.log(generateFibonacci(4))