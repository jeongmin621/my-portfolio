import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 font-sans antialiased selection:bg-slate-200 p-4 md:p-8 print:p-0 print:bg-white">
      
      {/* 🖨️ 브라우저 인쇄 가이드라인 강제 주입 (가로 A4 단독 슬라이드 격리) */}
      <style>{`
        @media print {
          body { background-color: #ffffff !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .print-slide {
            width: 297mm !important;
            height: 210mm !important;
            padding: 20mm !important;
            margin: 0 auto !important;
            page-break-after: always !important;
            break-after: page !important;
            overflow: hidden !important;
            border: none !important;
            box-shadow: none !important;
            border-radius: 0 !important;
          }
        }
      `}</style>

      {/* 전체 포트폴리오를 감싸는 컨테이너 */}
      <div className="max-w-6xl mx-auto space-y-12 print:space-y-0">
        
        {/* PAGE 01: TITLE COVER */}
        <section className="print-slide bg-white rounded-2xl p-12 shadow-sm border border-slate-200 min-h-[70vh] flex flex-col justify-center border-l-8 border-l-slate-900">
          <div className="space-y-6">
            <span className="text-sm font-bold tracking-widest text-slate-400 uppercase">Portfolio 2026</span>
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight">김정민</h1>
            <h2 className="text-2xl font-light text-slate-600"></h2>
            <div className="max-w-3xl py-4 px-5 bg-slate-50 text-slate-700 rounded-lg text-base leading-relaxed text-justify">
              집요하게 분석하며, 실제 서비스를 이용하는 유저 관점에서 가치 있는 기능을 구현하는 개발자가 되고 싶습니다.
            </div>
            <div className="grid grid-cols-[90px_1fr] gap-2 text-sm text-slate-600 pt-4">
              <span className="font-bold text-slate-900">EMAIL</span><span>jeonminee22@gmail.com</span>
              <span className="font-bold text-slate-900">STACK</span><span>Java / JavaScript / Spring / React / Python / ROS Noetic</span>
            </div>
          </div>
        </section>

        {/* PAGE 02: ABOUT & SKILLS */}
        <section className="print-slide bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-200 space-y-8 flex flex-col justify-center">
          <div className="border-b border-slate-200 pb-4">
            <h2 className="text-2xl font-bold text-slate-900">01. ABOUT (소개와 SW 역량)</h2>
          </div>
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-5 space-y-4">
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-1">나란 누구인가</h3>
              <div className="text-sm text-slate-600 space-y-4 leading-relaxed text-justify">
                <p>
                  <strong className="text-slate-900">부딪히며 성취하는 마인드:</strong> 잘 못해도 일단 해보자는 자세로 개발에 임해왔습니다. 부족함을 솔직하게 인정하되 직접 구현하고 깨지며 배우는 방식을 통해 백엔드 인프라부터 프론트엔드 최적화까지 유기적인 웹 전 주기 흐름을 빠르게 습득했습니다.
                </p>
                <p>
                  <strong className="text-slate-900">전공 기반의 융합 시너지:</strong> 기계공학을 전공하며 습득한 물리적 역학 매커니즘 해석 능력과 공정 데이터 최적화 마인드는 다차원 데이터를 정제하는 소프트웨어 구조 설계의 밑바탕이 되었습니다. 주도적 학습력과 기술 확장 의지를 지니고 있습니다.
                </p>
              </div>
            </div>
            <div className="md:col-span-7 space-y-4">
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-1">보유 기술 스택</h3>
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-500 leading-relaxed">
                <span className="font-bold text-slate-700 block mb-1">역량 표기 기준</span>
                • ■■■■□ : 프로젝트 전반을 리드하고 구조를 설계할 수 있는 수준<br />
                • ■■■□□ : 핵심 기능을 직접 구현하고 트러블 슈팅이 가능한 수준<br />
                • ■□□□□ : 기본 개념을 이해하고 있으며, 실무 적용을 위해 적극적으로 고도화 중인 단계 (도전과 의지)
              </div>
              <div className="space-y-2 text-sm">
                {[
                  { name: 'JavaScript', bar: '■■■□□', desc: '언어 메커니즘 이해, 비동기 데이터 가공 및 최적화' },
                  { name: 'Python', bar: '■■□□□', desc: '수치 정제 파이프라인 개발 및 데이터 가공 처리 가능' },
                  { name: 'Java', bar: '■■□□□', desc: '객체 지향 원리 기반의 견고한 비즈니스 로직 설계' },
                  { name: 'Spring / MyBatis', bar: '■■□□□', desc: '표준 MVC 아키텍처 수립 및 데이터 레이어 격리 분리' },
                  { name: 'React / Vue.js', bar: '■■□□□', desc: '독립 컴포넌트 모듈화 설계 및 동적 UI 바인딩 구축' },
                  { name: 'MySQL', bar: '■■□□□', desc: '관계형 DB 스키마 모델링 및 데이터 인프라 구축' },
                  { name: 'Zustand', bar: '■□□□□', desc: '전역 상태 제어 흐름 내재화 및 응용 고도화 단계' },
                  { name: 'ROS Noetic', bar: '■□□□□', desc: '융합 제어 매커니즘 구현을 위해 독학으로 도전한 스택' },
                ].map((skill, idx) => (
                  <div key={idx} className="grid grid-cols-12 gap-2 border-b border-slate-100 pb-1.5 items-center">
                    <span className="col-span-3 font-medium text-slate-900">{skill.name}</span>
                    <span className="col-span-3 font-mono font-bold text-slate-900 tracking-wider text-xs md:text-sm">{skill.bar}</span>
                    <span className="col-span-6 text-xs text-slate-500">{skill.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PAGE 03: PROJECT 01 - AUTONOMOUS TAXI */}
        <section className="print-slide bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-200 space-y-6 flex flex-col justify-center">
          <div className="border-b border-slate-200 pb-4 flex justify-between items-end">
            <h2 className="text-2xl font-bold text-slate-900">PROJECT 01. 자율주행 택시 서비스</h2>
            <span className="px-2.5 py-0.5 bg-slate-900 text-white text-xs font-bold rounded">제어 알고리즘</span>
          </div>
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-5 space-y-4">
              <table className="w-full text-xs md:text-sm border-collapse">
                <tbody>
                  <hr className="hidden" />
                  <tr>
                    <td className="p-2 border border-slate-200 font-bold bg-slate-50 text-slate-900 w-1/4">프로젝트</td>
                    <td className="p-2 border border-slate-200 text-slate-600">MORAI 시뮬레이터 기반 자율주행 택시 서비스 구현</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-slate-200 font-bold bg-slate-50 text-slate-900">기간 / 인원</td>
                    <td className="p-2 border border-slate-200 text-slate-600">4주 / 6명 팀 프로젝트</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-slate-200 font-bold bg-slate-50 text-slate-900">내 역할</td>
                    <td className="p-2 border border-slate-200 text-slate-700 font-semibold">횡방향 제어 알고리즘 (Lateral Control) 시스템 설계 전담</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-slate-200 font-bold bg-slate-50 text-slate-900">개발 환경</td>
                    <td className="p-2 border border-slate-200 text-slate-600">Ubuntu 20.04 (WSL), ROS Noetic, Python 3, MORAI Simulator</td>
                  </tr>
                </tbody>
              </table>
              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-2">
                  <div className="w-full h-28 bg-slate-50 border border-slate-200 rounded-lg overflow-hidden shadow-sm">
                    <img src="/images/Orakai_1.png" alt="자율주행 경로 흐름도" className="w-full h-full object-cover"/>
                  </div>
                  <div className="w-full h-28 bg-slate-50 border border-slate-200 rounded-lg overflow-hidden shadow-sm">
                    <img src="/images/Orakai_2.png" alt="자율주행 서비스 화면" className="w-full h-full object-cover"/>
                  </div>
                </div>          
                <div className="w-full h-[232px] bg-slate-50 border border-slate-200 rounded-lg overflow-hidden shadow-sm">
                  <img src="/images/Orakai_3.png" alt="자율주행 모델" className="w-full h-full object-cover"/>
                </div>
              </div>
            </div>
            <div className="md:col-span-7 space-y-4 text-sm leading-relaxed">
              <div className="space-y-1">
                <h4 className="font-bold text-slate-900">⚙️ 기구학 모델 기반 핵심 알고리즘 설계</h4>
                <p className="text-xs md:text-sm text-slate-600 text-justify">
                  차량 휠베이스 기구학을 연산하는 Pure Pursuit 알고리즘 탑재 및 Global-Local 좌표계 역변환 행렬을 활용한 상대 오차 연산 기능을 구현했습니다. 속도와 도로 곡률에 감응하는 가변 시야각(LFD) 필터를 구축하여 유턴·급회전 구간 반대편 차선 오추종을 방지하고, 4단계 상태 머신 기반 차선 변경 불연속점 입력을 Cosine Smoothing 수식 오프셋으로 동적 보정했습니다.
                </p>
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-slate-900">🚨 트러블 슈팅 (차선 소실 구간 교차로의 차량 요동 제어)</h4>
                <p className="text-xs text-slate-600 text-justify">
                  교차로 진입 시 수신 경로의 데이터 노이즈로 휠이 흔들리는 진동 현상이 발생했습니다. 정밀지도 노드 검출 시 차선 변경 개입을 전면 차단하고 휠을 일직선으로 단단히 묶어주는 <span className="font-semibold text-slate-900">관성 주행 제어(Inertial Steering)</span> 기법을 구축하여 조향 변화폭을 20%로 제한하며 통과에 성공했습니다.
                </p>
              </div>
              <div className="p-4 bg-slate-50 border-l-4 border-slate-900 text-xs md:text-sm text-slate-600 text-justify rounded-r">
                <span className="font-bold block text-slate-900 mb-1">📝 프로젝트 회고 (Reflection)</span>
                기계공학전공 수치 해석 지식을 소프트웨어 제어 로직에 성공적으로 매핑했습니다. 물리적 데이터 끊김และ 하드웨어 노이즈 문제를 디지털 이중 필터링(LPF, Slew Rate Limit) 설계를 통해 상쇄 제어하며 예외 처리 시야를 크게 확장했습니다. 소프트웨어 아키텍처를 통해 하드웨어의 물리적 제약 요건을 최적화해 내는 융합 역량의 가치를 확신했습니다.
              </div>
            </div>
          </div>
        </section>

        {/* PAGE 04: PROJECT 02 - WEB GAME */}
        <section className="print-slide bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-200 space-y-6 flex flex-col justify-center">
          <div className="border-b border-slate-200 pb-4 flex justify-between items-end">
            <h2 className="text-2xl font-bold text-slate-900">PROJECT 02. 인터랙티브 웹 게임</h2>
            <span className="px-2.5 py-0.5 bg-blue-600 text-white text-xs font-bold rounded">SSAFY 우수상</span>
          </div>
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-5 space-y-4">
              <table className="w-full text-xs md:text-sm border-collapse">
                <tbody>
                  <hr className="hidden" />
                  <tr>
                    <td className="p-2 border border-slate-200 font-bold bg-slate-50 text-slate-900 w-1/4">프로젝트</td>
                    <td className="p-2 border border-slate-200 text-slate-600">스토리 모드 및 대결 모드 통합 웹 게임 개발</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-slate-200 font-bold bg-slate-50 text-slate-900">기간 / 인원</td>
                    <td className="p-2 border border-slate-200 text-slate-600">5주 / 5명 팀 프로젝트</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-slate-200 font-bold bg-slate-50 text-slate-900">내 역할</td>
                    <td className="p-2 border border-slate-200 text-slate-700 font-semibold">프론트엔드 컴포넌트 설계 및 그래픽 피드백 효과 연출 전담</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-slate-200 font-bold bg-slate-50 text-slate-900">개발 환경</td>
                    <td className="p-2 border border-slate-200 text-slate-600">React, TypeScript, Zustand, Java</td>
                  </tr>
                </tbody>
              </table>
              <div className="w-full h-64 bg-slate-50 border border-slate-200 rounded-lg overflow-hidden shadow-sm">
                  <img src="/images/Game_1.png" alt="" className="w-full h-full object-cover"/>
              </div>
            </div>
            <div className="md:col-span-7 p-2 space-y-4 text-sm leading-relaxed">
              <div className="space-y-1">
                <h4 className="font-bold text-slate-900">💡 시스템 구조화 및 공학적 컴포넌트 설계</h4>
                <p className="text-xs md:text-sm text-slate-600 text-justify">
                  스토리 진행 모드 자막창, 실시간 배틀 대결 모드 룸 UI, 체력(HP) 프로그레스 바 등 데이터 변동이 잦은 영역을 React 독립 모듈 단위 컴포넌트로 분리 설계하여 전역 리렌더링 과부하를 방지했습니다. Zustand 전역 상태 관리를 통해 복잡한 배틀 상태와 실시간 수치 변동 데이터를 단일 스토어에서 안정적으로 관리했습니다.
                </p>
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-slate-900">🚨 협업 조율 (구현 범위 대립 리스크 타개)</h4>
                <p className="text-xs text-slate-600 text-justify">
                  개발 중반 완성도 범위를 두고 팀 내 기획 대립으로 일정이 정체되었을 때, 소모적 논쟁을 멈추고 각 팀원의 강점 숙련 지표를 분석해 업무 파트를 재구성하자고 제안했습니다. 제 강점 분야인 화면 컴포넌트 구조 최적화 및 파티클 애니메이션 이펙트 구현에 리소스를 집중시켜 빌드 퀄리티를 최대로 끌어올렸습니다.
                </p>
              </div>
              <div className="p-4 bg-slate-50 border-l-4 border-blue-600 text-xs md:text-sm text-slate-600 text-justify rounded-r">
                <span className="font-bold block text-slate-900 mb-1">📝 프로젝트 회고 (Reflection)</span>
                TypeScript 기반 정밀 타입 가드를 수립해 데이터 동기화 오류를 사전에 완전 차단하는 프론트엔드 설계를 경험했습니다. 한정된 기간 내 발생한 팀 내부 마찰을 자원 최적화 관점의 역할 재배치로 슬기롭게 해결해 내며 협업 시너지의 가치를 강하게 깨달았습니다.
              </div>
            </div>
          </div>
        </section>

        {/* PAGE 05: PROJECT 03 - MONEY COMPASS */}
        <section className="print-slide bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-200 space-y-6 flex flex-col justify-center">
          <div className="border-b border-slate-200 pb-4 flex justify-between items-end">
            <h2 className="text-2xl font-bold text-slate-900">PROJECT 03. Money Compass</h2>
            <span className="px-2.5 py-0.5 bg-emerald-600 text-white text-xs font-bold rounded">풀스택</span>
          </div>
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-5 space-y-4">
              <table className="w-full text-xs md:text-sm border-collapse">
                <tbody>
                  <hr className="hidden" />
                  <tr>
                    <td className="p-2 border border-slate-200 font-bold bg-slate-50 text-slate-900 w-1/4">프로젝트</td>
                    <td className="p-2 border border-slate-200 text-slate-600">사용자 맞춤형 금융 상품 추천 서비스</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-slate-200 font-bold bg-slate-50 text-slate-900">기간 / 인원</td>
                    <td className="p-2 border border-slate-200 text-slate-600">2주 / 2명 공동 풀스택 개발 (전 기능 직접 구현)</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-slate-200 font-bold bg-slate-50 text-slate-900">개발 환경</td>
                    <td className="p-2 border border-slate-200 text-slate-600">Python, Vue.js, JavaScript, MySQL, 금감원 API, Kakao Map API</td>
                  </tr>
                </tbody>
              </table>
              <div className="w-full h-28 bg-slate-50 border border-slate-200 rounded-lg overflow-hidden shadow-sm">
                  <img src="/images/MoneyCompass_1.png" alt="" className="w-full h-full object-cover"/>
              </div>
              <div className="w-full h-28 bg-slate-50 border border-slate-200 rounded-lg overflow-hidden shadow-sm">
                  <img src="/images/MoneyCompass_2.png" alt="" className="w-full h-full object-cover"/>
              </div>
            </div>
            <div className="md:col-span-7 p-2 space-y-4 text-sm leading-relaxed">
              <div className="space-y-1">
                <h4 className="font-bold text-slate-900">💡 데이터 정제 파이프라인 및 맞춤형 로직</h4>
                <p className="text-xs md:text-sm text-slate-600 text-justify">
                  금융감독원 Open API로부터 수집된 원본 이종 로우 데이터를 파싱 정제하여 고유 MySQL 스키마 규격에 일관성 있게 적재하는 백엔드 수집 레이어를 구축했습니다. 투자 성향, 연봉 정보, 예치금 등 유저 조건 프로필 입력 속성에 감응하는 다중 조건 추천 알고리즘을 설계하고 Kakao Map 주변 은행 지점 아웃링크 기능을 연계했습니다.
                </p>
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-slate-900">🚨 트러블 슈팅 (정보 과부하 상태의 화면 가독성 저하 결함 해결)</h4>
                <p className="text-xs text-slate-600 text-justify">
                  로우 데이터 정보량이 너무 과도하여 일반 테이블 리스트 형태로 단순 출력 시 시각 피로도가 가중되는 UX 결함이 있었습니다. 이를 해결하기 위해 Vue.js 금융 카테고리별 독립 모듈 컴포넌트를 설계하고 최고/기본 금리와 가입 조건 등 핵심 지표를 색상 대조군과 볼드체로 격리 배치한 <span className="font-semibold text-slate-900">카드형 UI 패러다임</span>을 독자 적용했습니다.
                </p>
              </div>
              <div className="p-4 bg-slate-50 border-l-4 border-emerald-600 text-xs md:text-sm text-slate-600 text-justify rounded-r">
                <span className="font-bold block text-slate-900 mb-1">📝 프로젝트 회고 (Reflection)</span>
                성격이 다른 외부 API 데이터를 정제하여 신뢰성 높은 고유의 서비스 데이터 베이스 인프라로 결합 가공하는 유기적 풀스택 연동 흐름을 내재화했습니다. 대량의 데이터를 수집하는 백엔드 역량만큼이나, 이를 사용자 친화적으로 정돈하고 시각화하는 UI/UX 설계가 지닌 비즈니스 파급 가치를 배웠습니다.
              </div>
            </div>
          </div>
        </section>

        {/* PAGE 06: PROJECT 04 - MINIBOX */}
        <section className="print-slide bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-200 space-y-6 flex flex-col justify-center">
          <div className="border-b border-slate-200 pb-4 flex justify-between items-end">
            <h2 className="text-2xl font-bold text-slate-900">PROJECT 04. MINIBOX</h2>
            <span className="px-2.5 py-0.5 bg-purple-700 text-white text-xs font-bold rounded">MVC 클론코딩</span>
          </div>
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-5 space-y-4">
              <table className="w-full text-xs md:text-sm border-collapse">
                <tbody>
                  <hr className="hidden" />
                  <tr>
                    <td className="p-2 border border-slate-200 font-bold bg-slate-50 text-slate-900 w-1/4">프로젝트</td>
                    <td className="p-2 border border-slate-200 text-slate-600">영화 정보 수집 및 대화형 예매 웹 서비스 클론코딩</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-slate-200 font-bold bg-slate-50 text-slate-900">기간 / 인원</td>
                    <td className="p-2 border border-slate-200 text-slate-600">2주 / 3명 자기주도 아키텍처 수립 프로젝트</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-slate-200 font-bold bg-slate-50 text-slate-900">개발 환경</td>
                    <td className="p-2 border border-slate-200 text-slate-600">Java, Spring, MyBatis, JavaScript, MySQL, 영화 Open API</td>
                  </tr>
                </tbody>
              </table>
              <div className="w-full h-64 bg-slate-50 border border-slate-200 rounded-lg overflow-hidden shadow-sm">
                <img src="/images/Minibox_1.png" alt="MINIBOX 메인 화면" className="w-full h-full object-cover"/>
              </div>
            </div>
            <div className="md:col-span-7 p-2 space-y-4 text-sm leading-relaxed">
              <div className="space-y-1">
                <h4 className="font-bold text-slate-900">💡 표준 계층 설계 및 데이터 노출</h4>
                <p className="text-xs md:text-sm text-slate-600 text-justify">
                  데이터 접근의 독립성과 아키텍처 유연성을 통제하기 위해 Controller - Service - DAO 계층 구조를 정석 규격에 맞추어 레이어드 분리 정립했습니다. 영화 API를 파싱해 자체 MySQL 데이터베이스에 적재하고 박스오피스, 상영예정작 등 다중 카테고리 소팅 및 특수 상영관 포맷 필터 인터페이스를 연동했습니다.
                </p>
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-slate-900">🚨 트러블 슈팅 (첫 웹 아키텍처 설계 중 계층 간 강결합 오류 타개)</h4>
                <p className="text-xs text-slate-600 text-justify">
                  초기 구조화 미숙으로 인해 쿼리문 수정 하나가 프레젠테이션 레이어까지 연쇄 컴파일 에러를 번지게 하는 리스크가 있었습니다. 프레임워크 핵심 가치인 <span className="font-semibold text-slate-900">의존성 주입(DI)과 제어의 역전(IoC)</span> 설계 철학을 공식 문서를 토대로 추적 연구했고, 서비스 간 직통 구현체 참조를 끊기 위해 인터페이스 추상화 레이어를 Controller와 DAO 사이에 완벽히 빌드 삽입하여 가공 계층을 격리했습니다.
                </p>
              </div>
              <div className="p-4 bg-slate-50 border-l-4 border-purple-700 text-xs md:text-sm text-slate-600 text-justify rounded-r">
                <span className="font-bold block text-slate-900 mb-1">📝 프로젝트 회고 (Reflection)</span>
                외부 API 수집 ➔ DB 적재 ➔ 백엔드 트랜잭션 처리 ➔ 프론트 클라이언트 화면 제어로 흐르는 웹 시스템의 기동 메커니즘 전 주기를 제 지식 자산으로 수립했습니다. 결함 앞에서 본질을 탐구했던 주도적 정면 돌파 지식은 웹 구조를 유기적으로 확장하는 가장 견고한 엔진이 되었습니다.
              </div>
            </div>
          </div>
        </section>

        {/* PAGE 07: EDUCATION & CERTIFICATE */}
        <section className="print-slide bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-200 space-y-6 flex flex-col justify-center">
          <div className="border-b border-slate-200 pb-4">
            <h2 className="text-2xl font-bold text-slate-900">02. EDUCATION &amp; CERTIFICATE (교육 및 자격)</h2>
          </div>
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-5 space-y-4">
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-1">교육 이수 내역</h3>
              <div className="space-y-2 text-sm leading-relaxed text-justify">
                <p className="font-bold text-slate-900">삼성 청년 SW 아카데미 (SSAFY) 전일제 SW 교육 이수</p>
                <ul className="list-disc list-inside text-slate-600 text-xs md:text-sm space-y-2 pl-1">
                  <li><strong>1학기:</strong> 알고리즘 문제 해결 능력 및 파이썬 데이터 정제 파이프라인 지식 내재화. OpenAPI 정제 및 RDB 최적 모델링을 반영한 관통 웹 서비스 Money Compass 개발 풀스택 레이어 전담 구축.</li>
                  <li><strong>2학기:</strong> React, TypeScript, Zustand 등 현대 고도화 클라이언트 에코시스템 습득. 웹 게임 팀 프로젝트 프론트엔드를 총괄 책임 빌드하여 최종 종합 우수상 수상 영예. Git 브랜치 전략 및 코드 리뷰 문화 완벽 체화.</li>
                </ul>
              </div>
            </div>
            <div className="md:col-span-7 space-y-4">
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-1">보유 자격증 (기계공학 도메인 &amp; SW 융합 자산)</h3>
              <div className="grid grid-cols-1 gap-2 text-xs md:text-sm text-slate-600">
                {[
                  { name: '정보처리기사', desc: '필기 합격 완료 및 최종 실기 결과 합격자 발표 대기 중 (SW 이론 검증)' },
                  { name: '산업안전기사', desc: '제조·생산 설비 안전 인프라 지식 및 공정 안전 시스템 가이드라인 확보' },
                  { name: '빅데이터관리사', desc: '대용량 로우 데이터 분석 및 통계 가공 정제 프로세스 역량 증명' },
                  { name: '식스시그마 (Six Sigma)', desc: '제조 공정 불량률 최소화 마인드 기반 데이터 최적화 매커니즘 내재화' },
                  { name: 'ISO 9001 & 14001 내부심사원', desc: '품질 및 환경 경영 시스템 표준 규격 프로세스 진단 역량 확립' },
                  { name: 'CATIA / AutoCAD 2급', desc: '3차원 기하학 형상 설계 및 공간 지각 기술, 도면 수치 제어 역량' },
                ].map((cert, idx) => (
                  <div key={idx} className="flex justify-between border-b border-slate-100 pb-1">
                    <span className="font-semibold text-slate-900 w-44">{cert.name}</span>
                    <span className="text-slate-500 flex-1 pl-2 text-left">{cert.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-slate-200 pt-8 text-center space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">공학적 기본기를 바탕으로, 사용자를 위한 가치 있는 서비스를 개발하고 싶습니다.</h2>
            <p className="text-sm text-slate-500 max-w-3xl mx-auto leading-relaxed text-center">
              생산 공정 흐름을 통찰력 있게 분석하는 전공 역량과 데이터를 안정적인 웹 아키텍처에 담아내는 소프트웨어 역량을 모두 갖췄습니다.<br />
              합류하게 될 조직의 일원으로서 주도적 자율과 강한 책임을 다하며, 끊임없는 지식의 선순환을 통해 동료와 팀을 성공으로 이끄는 융합형 스페셜리스트로 도약하겠습니다. 감사합니다.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}