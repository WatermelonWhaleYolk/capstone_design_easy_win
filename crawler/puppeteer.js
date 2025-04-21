const dotenv = require('dotenv')
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());
dotenv.config();

async function runPuppeteer() {
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0');
  await page.goto('https://account.everytime.kr/login');
  await page.waitForSelector('input[type="submit"]');
  
  function randomDelay(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  await page.type('input[name="id"]', process.env.EVERYTIME_ID, {delay:randomDelay(100, 300)});
  await page.type('input[name="password"]', process.env.EVERYTIME_PASSWORD, {delay:randomDelay(100, 300)});
  await page.click('input[type="submit"]');

  await page.waitForNavigation();

  console.log("접속 성공");
  /* 브라우저객체(puppeteer 실행) 생성
  페이지 객체 생성
  goto 메서드로 로그인 창까지 이동
  type 메서드로 아이디와 비밀번호 타이핑
  click 메서드로 로그인 버튼 클릭
  waitForNavigation 함수로 대기*/
  await page.click('a[href="/timetable"]');
  await page.waitForSelector('ul.floating li.button');
  await page.click('ul.floating li.button');
  await page.waitForSelector("#subjects > .list > table > tbody > tr:nth-child(1) > td:nth-child(1)");

  for (let i=0; i < 27; i++) {
    await page.mouse.wheel({deltaY : 7000})
    await new Promise((page) => setTimeout(page, 5000));
  }
  

const timetable = await page.evaluate(() =>
    document.querySelector("#subjects > .list > table > tbody > tr:nth-child(1) > td:nth-child(1)").innerHTML);
console.log(timetable);


};

runPuppeteer();