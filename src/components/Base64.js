const Base64 = {
  _getSymbol(x) {
    if (x == -1) return '=';
    if (x < 26) return String.fromCharCode(65 + x);
    if (x < 52) return String.fromCharCode(71 + x);
    if (x < 62) return String.fromCharCode(-4 + x);
    if (x == 62) return '-';
    if (x == 63) return '_';
  },
  
  _getValue(x) {
    if (x == 45) return 62;
    if (x < 58) return x + 4;
    if (x == 61) return -1;
    if (x < 91) return x - 65;
    if (x == 95) return 63;
    if (x < 123) return x - 71;
  },

  _toIntermediate(plainText) {
    const intermediate = new Uint8Array(plainText.length);
    for (let i = 0; i < intermediate.length; i++) {
      intermediate[i] = Base64._getValue(plainText[i].charCodeAt(0));
    }
    return intermediate;
  },

  toBinary(plainText) {
    if (plainText[plainText.length-2] == '=') plainText = plainText.slice(0, -2);
    else if (plainText[plainText.length-1] == '=') plainText = plainText.slice(0, -1);
    const intermediate = Base64._toIntermediate(plainText);
    
    const bytes = new Uint8Array(Math.floor((intermediate.length * 3) / 4));
    for (let i = 0, j = 0; i < intermediate.length; i++) {
      const r = 2 * (i % 4);
      if (r != 0) {
        bytes[j++] = (intermediate[i-1] << r) | (intermediate[i] >> (6 - r));
      }
    }  
    return bytes;
  },

  toBase64(bytes) {
    let plainText = '';
    for (let i = 0; i < bytes.length; i++) {
      const r = i % 3;

      if (r == 0) {
        plainText += Base64._getSymbol(bytes[i] >> 2) + Base64._getSymbol((((bytes[i] << 4)) & 0x30) | (bytes[i+1] >> 4));
      } else if (r == 1) {
        plainText += Base64._getSymbol(((bytes[i] << 2) & 0x3C) | (bytes[i+1] >> 6));
      } else {
        plainText += Base64._getSymbol(bytes[i] & 0x3F);
      }
    }
    if (bytes.length % 3 == 1) plainText += '==';
    else if (bytes.length % 3 == 2) plainText += '=';
    return plainText;
  }
}

export default Base64