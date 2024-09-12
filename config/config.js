const crypto = require('crypto');

const algorithm = 'aes-256-cbc';
const key = Buffer.from('b41ee67d84622d781a60a348ac7415d9d8b37a73920435712df397f405ddc452', 'hex'); // Clave de 32 bytes
const iv = Buffer.from('aecb28ab0146b6149a840f90f8b1a6f1', 'hex'); // IV de 16 bytes
// Cadena encriptada (tu URI encriptada)
const encryptedUrl = 'd2e276f0fbdc6addb11f3fe73f7e64a2625d28b699b1ef7c1593135e124d05d55e82e891b04bb53361f792a2c5fc95a9ebbeb9619fd05619326bd3e834665bbf1785305ec5a4964411b8e7f9f2e170fc9af2f381c6748afd44b517721e818947f3ae16dfe3f58dd55a1d4bc7fa90f057955bd754dd9b81b21518e3eee4a872e6d19f65462ba7edeeffbe9ee0a58403ce';

// Función para desencriptar la URL
function decrypt(encryptedText) {
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
    let decrypted = decipher.update(Buffer.from(encryptedText, 'hex'), 'binary', 'utf-8');
    decrypted += decipher.final('utf-8');
    return decrypted;
}

const decryptedUri = decrypt(encryptedUrl);

module.exports = {
    mongoURI: decryptedUri,
    secretOrKey: 'secret'
  };