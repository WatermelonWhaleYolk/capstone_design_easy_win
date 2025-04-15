const axios = require('axios');

const api_key = "0NUG3mS1sVy1YY27Zsmq4pD1wqM+vk8a4qFcm0HYf8+m9PZMwUSbcEzpzaJTW6tjq2R5NUArpGaHIrbXPWJIAw=="
const url = 'http://openapi.1365.go.kr/openapi/service/rest/VolunteerPartcptnService/getVltrPeriodSrvcList'

axios.get(url, {
  params: {
    serviceKey: api_key,
    numOfRows: 10,
    pageNo: 1
  },
  responseType: 'text'
})
.then(function(response) {
  console.log(response.data);
})
.catch(function(error) {
  console.log(error);
})
.finally(function() {
  console.log("끝");
})

/* req progrmBgnde 봉사시작일자 20121015
    progrmEndde 봉사종료일자 20131231
*/

/* progrmRegistNo 프로그램등록번호 1266114
progrmSj 봉사제목 (이미용봉사)의정부시희망회복종합센터지원
nanmmbyNm 모집기관(나눔주체명)* 경기도 의정부시 */