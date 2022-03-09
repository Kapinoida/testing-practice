const alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function shifted(letter, shift) {
  for(var i = 0; i < alpha.length; i ++){
    if(alpha[i] == letter) {
      if(i+shift > 25){
        return alpha[((i+shift)-26)];
      } else {
        return alpha[(i+shift)]
      }
    }
  }
}

function caesarCipher(string, shift) {
  let cipher = ''
  for(let i = 0; i < string.length; i++){
    let lString = string[i].toLowerCase();
    let upper = false;
    if(string[i] === lString.toUpperCase()){
      upper = true;
    }
    if(alpha.includes(lString)){
      cipher += upper === true ? shifted(lString, shift).toUpperCase() : shifted(lString, shift);
    } else {
      cipher += string[i];
    }
  }
  return cipher;
}

module.exports = caesarCipher;