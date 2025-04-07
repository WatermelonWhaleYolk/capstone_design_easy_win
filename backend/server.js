/* 미들웨어 */
const express = require('express');
const bodyParser = require('body-parser');
// const mariadb = require('mariadb');

const port = 3000;
const app = express();

app.listen(port, () => {console.log("서버와 연결되었습니다")})
