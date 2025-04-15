import { useRef } from "react";
import "./home.css"
import AutoSlider from "../../component/auto_slider/auto_slider.js"
import kiuSlogan_img from "../../asset/images/kiu_slogan.jpg"

export default function Home() {
  const dialogRef = useRef(null);
  return (
        <div className="body_wrapper">
          <div>경일대학교 학생들을 위한 봉사활동 통합 플랫폼!</div>
          <div>
            Kyungil
            <br />
            Volunteer Portal
          </div>
          <div>
            수업 없는 시간에 봉사활동을 신청하고, 간편하게 활동 내역을
            관리해보세요
            <br />
            당신과 함께 만들어가는 나눔의 공간, KVP
          </div>
          <div>
            <button className="go_to_volunteer_work_btn">간편 봉사활동 신청</button>
            <button className="how_to_use_dialog_btn" onClick={() => dialogRef.current.showModal()}>사용 방법</button>
            <dialog className="how_to_use_dialog" ref={dialogRef}>
              <h2>1. 과목을 선택하세요</h2>
              <p> 2. 어쩌고</p>
              <AutoSlider />
              <button className="how_to_use_dialog_close_btn" onClick={() => dialogRef.current.close()}>닫기</button>
            </dialog>
          </div>
          <div>
            <img src={kiuSlogan_img} alt="kiu_slogan_img"/>
          </div>
        </div>
  );
}
