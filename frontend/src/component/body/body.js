import './body.css'
import Auto_slider from '../home/auto_slider/auto_slider'
export default function Body() {
  return (
    <div className="body_wrapper">
      <div>경일대학교 학생들을 위한 봉사활동 통합 플랫폼!</div>
      <div>Kyungil<br/>Volunteer Portal</div>
      <div>수업 없는 시간에 봉사활동을 신청하고, 간편하게 활동 내역을 관리해보세요
        <br/>당신과 함께 만들어가는 나눔의 공간, KVP
      </div>
      <div>
        <button className="btn_1">Get Funded</button>
        <button className="btn_2">Get Out</button>
      </div>
      <div><Auto_slider /></div>
    </div>
  )
}