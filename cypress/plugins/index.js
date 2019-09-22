// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  on("task", {

    getRandomBytes(length) {
      const crypto = require("crypto");
      return crypto.randomBytes(length).toString('base64');
    },

    aesEncrypt({ plainText, key, mode, keyLength, iv }) {
      const crypto = require("crypto");
      const algorithm = `aes-${keyLength}-${mode}`;
      const cipher = crypto.createCipheriv(algorithm,
        Buffer.from(key, "base64"),
        Buffer.from(iv, "base64")
      );
      let encrypted = cipher.update(plainText);
      const cipherText = Buffer.concat([encrypted, cipher.final() ]);
      return cipherText.toString("base64");
    },
    aesDecrypt({ plainText, key, mode, keyLength, iv }) {
      const crypto = require("crypto");
      const cipher = crypto.createDecipheriv(`aes-${keyLength}-${mode}`,
        Buffer.from(key, "base64"),
        Buffer.from(iv, "base64")
      );
      let decrypted = cipher.update(plainText);
      decrypted = Buffer.concat([decrypted, cipher.final() ]);
      return decrypted.toString("utf8");
    }
  })
}
