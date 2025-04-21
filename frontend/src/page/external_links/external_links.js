import "./external_links.css";

export default function ExternalLinks() {
  const volunteer_info = [
    {
      name: "VMS",
      text: "사회복지자원봉사인증관리",
      url: "https://www.vms.or.kr/main.do",
    },
    {
      name: "1365",
      text: "행정안전부 자원봉사포털",
      url: "https://www.1365.go.kr/vols/main.do",
    },
    {
      name: "V세상",
      text: "서울시 자원봉사포털",
      url: "https://volunteer.seoul.kr",
    },
    {
      name: "문화품앗이",
      text: "문화 자원봉사 플랫폼",
      url: "https://csv.culture.go.kr/frt/main.do",
    },
    {
      name: "위스타트",
      text: "아동 복지 및 교육 중심의 자원봉사 사이트",
      url: "https://www.westart.or.kr"
    },
    {
      name: "한국청소년활동진흥원(KYWA)",
      text: "청소년 대상 봉사활동과 리더십 캠프를 주관",
      url: "https://www.youth.go.kr "
    },
    {
      name: "열매나눔인터내셔널",
      text: "국내외 소외계층을 지원하는 봉사활동 사이트",
      url: "https://myi.or.kr",
    },
  ];

  return (
    <div className="external_links_wrapper">
      <table className="external_links_table">
        <thead>
          <tr>
            <td>사이트명</td>
            <td>내용</td>
            <td>바로가기</td>
          </tr>
        </thead>
        <tbody>
          {volunteer_info.map((site) => (
            <tr key={site.name}>
              <td>{site.name}</td>
              <td>{site.text}</td>
              <td>
                <button className="href_btn">
                  <a href={site.url} target="_blank" rel="noopener noreferrer">
                    바로가기
                  </a>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
