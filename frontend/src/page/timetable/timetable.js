import "./timetable.css";
export default function Timetable() {
  const courseNameArray = [];
  const professorNameArray = [];
  const divisionArray = ["전공필수", "전공선택", "교양필수", "교양선택"];

  return (
    <div className="timetable_wrapper">
      <div className="timetable_input_box">
        <label htmlFor="">교과명</label>
        <input
          type="text"
          className="courseName_input"
          placeholder="교과명"
        />
        <label htmlFor="">교수명</label>
        <input
          type="text"
          className="professorName_input"
          placeholder="교수명"
        />
        <label htmlFor="">전공/교양</label>
        <input
          type="text"
          className="division_input"
          placeholder="ex) 전공필수"
          list="division"
        />
        <datalist id="division">
          {divisionArray.map((division, index) => (
            <option key={index} value={division} />
          ))}
        </datalist>
        <button className="course_search_btn">
          검색
        </button>
        <button className="go_to_search_volunteer_work_btn">다음단계 : 봉사활동 찾기</button>
      </div>
      <div className="chosen_course">
        </div>
      <div className="course_search_list">
        <table className="course">
          <tr>
            <td>과목코드 : </td>
            <td>교수명 : </td>
            <td>전공 : </td>
            <td>시작시간 : </td>
            <td>종료시간 : </td>
            <td>요일 : </td>
          </tr>
        </table>
      </div>
    </div>
  );
}