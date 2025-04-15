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
