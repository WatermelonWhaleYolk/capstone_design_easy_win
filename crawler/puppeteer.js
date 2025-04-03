const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

async function runPuppeteer() {
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
  await page.goto('https://account.everytime.kr/login');
  await page.waitForSelector('input[type="submit"]');
  
  function randomDelay(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  await page.type('input[name="id"]', "kjkj5757", {delay:randomDelay(100, 300)});
  await page.type('input[name="password"]', "k1o2r3e4a5!", {delay:randomDelay(100, 300)});
  /* #에 아이디와 비밀번호*/
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
  await page.waitForNavigation();

const timetable = await page.evaluate(() =>
    document.querySelector("#subjects > .list > table > tbody > tr:nth-child(1) > td:nth-child(1)").innerHTML);
console.log(timetable);
};

runPuppeteer();
  /* 데이터 추출 */
  // async function getTimestamp() {
  //   await page.evaluate
  //   return document.querySelector(.list.tbody.tr.td:nth-child(1,2,3,4,6,7,9))
  // }
/* const title = await page.evaluate(() => {
    return document.title;
});

// 여러 요소 데이터 수집
const links = await page.evaluate(() => {
    const anchors = document.querySelectorAll('a');
    return Array.from(anchors).map(a => a.href);
});

// 매개변수 사용
const getText = await page.evaluate((selector) => {
    return document.querySelector(selector).textContent;
}, '.my-class');*/