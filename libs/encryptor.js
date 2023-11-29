const crypto = require('crypto');
class AppEncryptor {
    encryptionResult;
    encryptionResultConcat;
    secretKey = "57bKEtwMFu/xa6P5QZFlns6ZQV2s1HVXJZWRxCAoIvpMo7cVToh07/zNklJLwB/E";
    algorithm = 'aes-256-cbc'
    iv = crypto.randomBytes(16);
    key = crypto.createHash('sha512').update(this.secretKey, 'utf-8').digest('hex').substr(0, 32);

    encrypt(plainText) {
        let cipher = crypto.createCipheriv(this.algorithm, this.key, this.iv);
        let encrypted = cipher.update(plainText);
        encrypted = Buffer.concat([encrypted, cipher.final()]);
        this.encryptionResult = { iv: this.iv.toString('hex'), encryptedData: encrypted.toString('hex') };
        this.encryptionResultConcat = ''.concat(this.encryptionResult.iv, this.encryptionResult.encryptedData);
    }

    decrypt(cipherText) {
        let iv = Buffer.from(cipherText.slice(0,32), 'hex');
        let decipher = crypto.createDecipheriv(this.algorithm, Buffer.from(this.key), iv);
        let decrypted = decipher.update(Buffer.from(cipherText.slice(32), 'hex'));
        decrypted = Buffer.concat([decrypted, decipher.final()]).toString();
        return decrypted;
    }
}
module.exports = AppEncryptor;