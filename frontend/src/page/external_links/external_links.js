import "./external_links.css";

export default function ExternalLinks() {
  const volunteer_site_name = ["VMS", "1365", "V세상", "문화품앗이"];
  const volunteer_site = [
    "https://www.vms.or.kr/main.do",
    "https://www.1365.go.kr/vols/main.do",
    "https://volunteer.seoul.kr",
    "https://csv.culture.go.kr/frt/main.do",
  ];
  return (
    <table id="external_links_table">
      <thead>
        <tr>
          <th>사이트명</th>
          <th>내용</th>
          <th>바로가기</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            VMS
            <br />
            (사회복지자원봉사인증관리)
          </td>
          <td>내용</td>
          <td>
            <button className="href_btn">
              <a
                href="https://www.vms.or.kr/main.do"
                target="_blank"
                rel="noopener noreferrer"
              >
                바로가기
              </a>
            </button>
          </td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td>1365</td>
          <td>내용</td>
          <td>
            <button className="href_btn">
              <a
                href="https://www.1365.go.kr/vols/main.do"
                target="_blank"
                rel="noopener noreferrer"
              >
                바로가기
              </a>
            </button>
          </td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td>V세상</td>
          <td>내용</td>
          <td>
            <button className="href_btn">
              <a
                href="https://volunteer.seoul.kr"
                target="_blank"
                rel="noopener noreferrer"
              >
                바로가기
              </a>
            </button>
          </td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td>문화품앗이</td>
          <td>내용</td>
          <td>
            <button className="href_btn">
              <a
                href="https://csv.culture.go.kr/frt/main.do"
                target="_blank"
                rel="noopener noreferrer"
              >
                바로가기
              </a>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
