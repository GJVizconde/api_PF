// ¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶
// ¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶_______¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶
// ¶¶¶¶¶¶¶¶¶¶¶¶¶_________________________¶¶¶¶¶¶¶¶¶¶¶¶
// ¶¶¶¶¶¶¶¶¶¶____¶¶______¶¶__¶¶_______¶¶____¶¶¶¶¶¶¶¶¶
// ¶¶¶¶¶¶¶____¶¶¶¶_______¶¶¶¶¶¶________¶¶¶¶____¶¶¶¶¶¶
// ¶¶¶¶¶___¶¶¶¶¶¶________¶¶¶¶¶¶¶_______¶¶¶¶¶¶¶___¶¶¶¶
// ¶¶¶¶__¶¶¶¶¶¶¶¶¶______¶¶¶¶¶¶¶¶_______¶¶¶¶¶¶¶¶¶__¶¶¶
// ¶¶¶_¶¶¶¶¶¶¶¶¶¶¶¶¶___¶¶¶¶¶¶¶¶¶¶¶___¶¶¶¶¶¶¶¶¶¶¶¶___¶
// ¶¶_¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶__¶
// ¶__¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶_¶
// ¶__¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶_¶
// ¶¶_¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶_¶
// ¶¶__¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶__¶
// ¶¶¶__¶¶¶¶¶¶_____¶¶____¶¶¶¶¶¶¶____¶¶_____¶¶¶¶¶¶__¶¶
// ¶¶¶¶___¶¶¶¶____________¶¶¶¶_____________¶¶¶¶___¶¶¶
// ¶¶¶¶¶¶___¶¶¶____________¶¶_____________¶¶¶___¶¶¶¶¶
// ¶¶¶¶¶¶¶¶___________________________________¶¶¶¶¶¶¶
// ¶¶¶¶¶¶¶¶¶¶¶¶___________________________¶¶¶¶¶¶¶¶¶¶¶
// ¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶_______________¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶
// ¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶GJVL¶¶¶

require('dotenv').config();
const app = require('./src/app');
const { conn } = require('./src/db');
const port = process.env.PORT || 3001;

// conn.sync({ alter: true }).then(() => {
//   app.listen(port, () => {
//     console.log(`%s listening at %s`, "Server", port);
//   });
// });

app.listen(port, () => {
  console.log(`%s listening at %s`, 'Server', port);
});
