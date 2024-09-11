const crypto = require('crypto');

const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32); // Clave para cifrar
const iv = crypto.randomBytes(16); // Vector de inicialización

const decrypt = (encryptedText) => {
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
};

const encrypt = (text) => {
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
};

const uri = 'mongodb+srv://Daciros:K8MWGZvddF52pfgL@cluster0.bwvh0sb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const encryptedUri = encrypt(uri);
console.log('URI cifrada:', encryptedUri);

//const encryptedUri = '50647975665485d4335218c47fc48835007c13217be85c19c1719874a6f31d03443ad07cef5b82cd3af1fa0659f3aa59a2a3ff66879dd9e39c6d2d38f118cb521e01addb7555618de3cb38b2edf92b15367b018fd753bbec098c184d0676848f9f1feffe4ac7f5ca6382dc37b09d664288f3247cebb201033b479ae62b555564'; // Usa el valor cifrado generado
const decryptedUri = decrypt(encryptedUri);

module.exports = {
    mongoURI: decryptedUri,
    secretOrKey: 'secret'
  };