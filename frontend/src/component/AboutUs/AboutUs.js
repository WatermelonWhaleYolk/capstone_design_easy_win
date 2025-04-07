import './AboutUs.css';
import Header from '../home/header/header.js';
import aboutImg from '../../asset/about.png';

export default function AboutUs() {
    return (
        <div className="about_us_wrapper">
          
            <div className="main_content">
                <Header />
<img src={aboutImg} alt="" className="about_top_image" />

                <div className="c_width aaaa">
                    <div className="">
                        <div className="goal">
                            <div className="bx_tit c1">
                                <p className="tit1">설립 배경</p>
                            </div>
                            <div className="cont">
                                <p className="tit c1">
                                    <span>웹사이트 소개 설립 배경 </span>
                                </p>
                                <p>
                                    바쁜 대학 생활 속에서
                                    봉사활동에 참여하고 싶지만, 수업 시간과 겹치거나 정보를 찾기 어려워 망설이는
                                    학생들이 많습니다. 
                                </p>
                                <p>
                                저희 팀은 이러한 어려움을 직접 경험하며, 학생들이 자신의 시간표에
                                    맞춰 효율적으로 봉사활동에 참여할 수 있도록 돕는 플랫폼의 필요성을 절실히
                                    느꼈습니다. 

                                </p>
                                <p>
                                시간표 봉사활동 매칭은은 이러한 고민에서 시작되었으며, 시간 제약으로
                                봉사활동 참여를 포기했던 학생들에게 새로운 기회를 제공하고자 합니다.
                                </p>
                            </div>
                        </div>
                        <div className="goal">
                            <div className="bx_tit c2">
                                <p className="tit1">핵심 가치</p>
                                <p className="tit2">및 비전</p>
                            </div>
                            <div className="cont">
                                <p className="tit c2">
                                    <span>
                                        저희는 다음과 같은 핵심 가치를 바탕으로 서비스를 제공하며, 미래에 대한 명확한
                                        비전을 가지고 나아갑니다.
                                    </span>
                                </p>
                                <p>
                                    효율성: 학생들의 소중한 시간을 낭비하지 않고, 시간표에 최적화된 봉사활동 정보를
                                    제공하여 효율적인 참여를 돕습니다.
                                </p>
                                <p>
                                    접근성: 복잡한 검색 과정 없이, 누구나 쉽고 편리하게 봉사활동 정보를 확인하고 신청할
                                    수 있는 환경을 제공합니다. 사회 기여
                                </p>
                                <p>
                                    장려: 학생들이 의미 있는 봉사활동을 통해 사회에 긍정적인 영향을 미치도록 동기를
                                    부여하고 참여를 활성화합니다.
                                </p>
                                <p>
                                    맞춤형 정보 제공: 획일적인 정보 나열이 아닌, 개인의 시간표와 관심사를 기반으로
                                    맞춤형 봉사활동 정보를 제공하여 만족도를 높입니다.
                                </p>
                            </div>
                        </div>
                        <div className="goal">
                            <div className="bx_tit c3">
                                <p className="tit1">기능 소개</p>
                            
                            </div>
                            <div className="cont">
                                <p className="tit c3">
                                    <span>123</span>
                                    
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
