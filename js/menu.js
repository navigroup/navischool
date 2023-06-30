const menu = document.getElementById('menu');
menu.innerHTML = `
<header>
<nav class="top">
    <a class="logo"  target="_self" >
      <img id ="logo_img" src="img/navi_book.png" onclick="window.location.href='./index.html'" style="width:30px;height:30px">
      <p class="logo-font" id="lgt" style="" onclick="window.location.href='./index.html'">나비스쿨출판</p>
      <!-- <img alt="" src="img/logo_img.png" > -->
    
    </a>
    <div class="menu-btn">
        <button class="Event_Menu blink" style="padding-top:14px;"><a class="scroll mtext" href="#fm-box">무료 PDF 다운로드</a></button>
       <button class="total_menu"><img src="img/hamburger.svg" style="width:17px;"></button>
    </div>
</nav>


<div class="ham-con" data-depth="1"><!-- 메뉴 -->
    <div class="bg"></div>
    <div class="container-box">

        <div class="top">
            <div>
                <button class="back">
                    <svg fill="none" viewBox="0 0 24 24" preserveAspectRatio="xMinYMid" class="_SN-cw _SN-cx _SN-cy _SN-cz _SN-db _SN-od"><path d="M5 9l7 7 7 -7" stroke="currentColor" data-autoid="chevron:90" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1"></path></svg>
                </button>
                
                <p class="txt-cg">학생</p>
                
                <a class="logo"  target="_self" href="./index.html">
                    <img id="menu_logo" src="img/navi_book.png" style="width:30px;height:30px;min-width:30px;margin-right:4px;margin-bottom:4px;">
                    <p class="logo-font" id="menu_text"  style="margin:0px;"> 나비스쿨출판</p>
                  <!-- <img alt="" src="img/logo_img.png" > -->
                </a>
                <p class="close-btn ham-close-btn" style="margin:14px 0px;"><svg viewBox="0 0 24 24" class="_SN-cw _SN-cx _SN-cy _SN-cz _SN-da _SN-db"><path stroke="currentColor" d="M4.222 4.222l15.556 15.556M4.222 19.778L19.778 4.222"></path></svg></p>
            </div>
        </div>

        <div class="wrap">
            <div class="menu con-01"><!-- 메뉴 1depth-->

              
                <div class="middle">
                    <ul class="left" style="padding-left:0px;margin-top:15px;">     
                    <li><p><a target="_self" href="./index.html"><img src="img/favicon.png" style="width:20px;margin-right:4px;margin-bottom:4px;">HOME
                    <!-- <span class="blink menu_event"> 확언 질문집 PDF 무료제공</span>
                    <br><span class="menu_ex">[소망을 현실로 변화시키는 질문법]</span> -->
                    </a></p></li>

                    <li><p><a target="_self" href="./about.html"><img src="img/favicon.png" style="width:20px;margin-right:4px;margin-bottom:4px;">ABOUT
                    <!-- <span class="blink menu_event"> 확언 질문집 PDF 무료제공</span>
                    <br><span class="menu_ex">[소망을 현실로 변화시키는 질문법]</span> -->
                    </a></p></li>

                    <li><p><a target="_self" href="./publishing.html"><img src="img/favicon.png" style="width:20px;margin-right:4px;margin-bottom:4px;">나비스쿨 출판
                    <!-- <span class="blink menu_event"> 확언 질문집 PDF 무료제공</span>
                    <br><span class="menu_ex">[소망을 현실로 변화시키는 질문법]</span> -->
                    </a></p></li>

                    <li><p><a target="_self" href="./program.html"><img src="img/favicon.png" style="width:20px;margin-right:4px;margin-bottom:4px;">PROGRAM
                    <!-- <span class="blink menu_event"> 확언 질문집 PDF 무료제공</span>
                    <br><span class="menu_ex">[소망을 현실로 변화시키는 질문법]</span> -->
                    </a></p></li>


                    <li><p><a target="_self" href="./navibooks.html"><img src="img/favicon.png" style="width:20px;margin-right:4px;margin-bottom:4px;">책추남TV 좋은책 살리기
                    <!-- <span class="blink menu_event"> 확언 질문집 PDF 무료제공</span>
                    <br><span class="menu_ex">[소망을 현실로 변화시키는 질문법]</span> -->
                    </a></p></li>

                              
                    <li><p><a target="_self" href="./news-letter.html"><img src="img/favicon.png" style="width:20px;margin-right:4px;margin-bottom:4px;">뉴스레터 구독하기
                    <!-- <span class="blink menu_event"> 확언 질문집 PDF 무료제공</span>
                    <br><span class="menu_ex">[소망을 현실로 변화시키는 질문법]</span> -->
                    </a></p></li>


                    <li class="tab02" data-rel="menu-02" data-tit="나비스쿨"><img src="img/favicon.png" style="width:20px;margin-right:4px;margin-bottom:4px;"><p>나비스쿨 프로그램
                    <!-- <span class="blink menu_event"> 무료 기출 문제</span> -->
                    </p><img width="24" height="24" src="img/navigation.svg#light-primary" role="presentation" alt="" class="_SN-cu _SN-cv next_point" style="height:24px;margin-bottom:18px;"></li>
                                       
                    <li class="tab02" data-rel="menu-01" data-tit="무료책 이벤트"><img src="img/favicon.png" style="width:20px;margin-right:4px;margin-bottom:4px;"><p>무료책 이벤트<span class="blink menu_event"> 샘플북 PDF 무료제공</span></p><img width="24" height="24" src="img/navigation.svg#light-primary" role="presentation" alt="" class="_SN-cu _SN-cv next_point"></li>
                     
          
             
                    </ul>
                </div>
                <!-- <div class="bottom">
                  
                  
                </div> -->
            </div>
            <div class="menu02"><!-- 메뉴 2depth-->
                <div class="menu-01">
                    <div class="set-con">
                        <p><a href="./navibooks.html">책추남TV 좋은책 살리기</a></p>
                        <ul class="bottom">
                        
                        <li><p><a target="_self" href="./afformation.html">  <img src="https://firebasestorage.googleapis.com/v0/b/navibook-459d8.appspot.com/o/book-intro.webp?alt=media&token=4162bb9c-f737-44bf-8a12-bec76aa9646a&_gl=1*1o07ykt*_ga*MjEyOTQxMzM2LjE2ODYzNDkyMzU.*_ga_CW55HF8NVT*MTY4NjM0OTIzNS4xLjEuMTY4NjM0OTQ2MS4wLjAuMA" style="width:20px;margin-right:4px;margin-bottom:-6px;">어포메이션 <span class="blink menu_event"> 확언 질문집 PDF 무료제공</span><br><span class="menu_ex">[소망을 현실로 변화시키는 질문법]</span></a></p></li>
                        
                        <li><p><a target="_self" href="./1percent.html">  <img src="https://image.aladin.co.kr/product/31035/98/cover500/k582831511_1.jpg" style="width:20px;margin-right:4px;margin-bottom:-6px;">1퍼센트 부자의 법칙 <span class="blink menu_event"> 샘플북 PDF 무료제공</span><br><span class="menu_ex">[사이토 히토리의 5가지 성공법칙]</span></a></p></li>
                        
                        <li><p><a target="_self" href="./fine.html"> <img src="https://image.yes24.com/goods/112929719/XL" style="width:20px;margin-right:4px;margin-bottom:-6px;">괜찮아, 분명 다 잘될 거야 <span class="blink menu_event"> 샘플북 PDF 무료제공</span><br><span class="menu_ex">[사이토 히토리의 행운을 부르는 삶의 지혜]</span></a></p></li>
                        
                        <li><p><a target="_self" href="./money-therapy.html"> <img src="https://image.yes24.com/goods/110009030/XL" style="width:20px;margin-right:4px;margin-bottom:-6px;">머니테라피<span class="blink menu_event"> 진단 테스트 PDF 무료제공</span><br><span class="menu_ex">[돈을 다루는 방법에 관한 최고의 안내서]</span></a></p></li>

                       

                        <li><p><a target="_self" href="./yliw.html"> <img src="https://image.yes24.com/goods/98397983/XL" style="width:20px;margin-right:4px;margin-bottom:-6px;border:1px solid #000;">여기서 끝이 아니다<span class="blink menu_event"> 30일 변화 프로그램</span><br><span class="menu_ex">[소망을 현실로 이루는 행복하고 쉬운 실전법칙]</span></a></p></li>

                       
                        </ul>
                    </div>
                    <div class="set-con">
                        <p>나비스쿨 출판</p>
                        <ul class="bottom">
                        <li><p><a target="_self" href="./miracle.html"> <img src="https://image.yes24.com/goods/104127882/XL" style="width:20px;margin-right:4px;margin-bottom:-6px;border:1px solid #000;">미라클 인사이트<span class="blink menu_event"> 샘플북 PDF 무료제공</span><br><span class="menu_ex">[여러분의 문제를 해결하는 통찰과 지혜의 문구]</span></a></p></li>
                        <li><p><a target="_self" href="./haru.html"> <img src="https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791197389474.jpg" style="width:20px;margin-right:4px;margin-bottom:-6px;border:1px solid #000;">하루 한 걸음씩 행복해지기<span class="blink menu_event"> 샘플북 PDF 무료제공</span><br><span class="menu_ex">[불안을 가라앉히고 행복을 발견하는 방법]</span></a></p></li>
                        </ul>
                    </div>
                   <!-- <div class="set-con">
                      <p>학습법</p>
                      <ul class="bottom">
                          <li><a target="_self" href="./howtostudy.html"></a></li>
                          <li><a target="_self" href="./burnout-test.html"></a></li>
                      </ul>
                  </div>-->
                </div>
                <div class="menu-02">
                    <div class="set-con">
                        <p><a href="./program.html">나비스쿨 프로그램</a></p>
                        <ul class="bottom">
                        <li>[1학년 과정]</li>
                        <li><p><a target="_self" href="./offline-meeting.html">
                        
                        <!-- <img src="img/lic_favicon.png" style="width:20px;margin-right:4px;margin-bottom:4px;"> -->
                        
                        -  책추남 오프라인 정모 <span class="blink menu_event"> 매달 셋째주 토요일</span><br><span style="padding-left:5px;">[좋은 책과 새로운 사람들을 만나보세요.]</span></a></p></li>

                        <li>
                        <p><a target="_self" href="./online-meeting.html">
                        <!-- <img src="img/lic_favicon.png" style="width:20px;margin-right:4px;margin-bottom:4px;"> -->
                        -  책추남 온라인 정모 <span class="blink menu_event"> 매주 토요일 오전 7시</span><br><span style="padding-left:5px;">[책추남과 내공 깊은 책을 만날 수 있는 기회]</span></a></p>
                        </li>

                        <li><b>[2학년 과정]</b></li>
                        <li><p><a target="_self" href="./booktuber.html">
                        
                        <!-- <img src="img/lic_favicon.png" style="width:20px;margin-right:4px;margin-bottom:4px;"> -->
                        
                        -  책추남처럼 북튜버 되기<span class="blink menu_event"> 매달 마지막주 토요일</span><br><span style="padding-left:5px;">[세상에서 가장 쉬운 북튜버 되는 방법]</span></a></p></li>

                        <li>
                        <p><a target="_self" href="./book-coaching.html">
                        <!-- <img src="img/lic_favicon.png" style="width:20px;margin-right:4px;margin-bottom:4px;"> -->
                        -  책추남 책 처방 코칭 <span class="blink menu_event"> </span><br><span style="padding-left:5px;">[현재 문제에 대한 최고의 책들을 처방해드립니다.]</span></a></p>
                        </li>

                        <li>
                        <p><a target="_self" href="./gamefull.html">
                        <!-- <img src="img/lic_favicon.png" style="width:20px;margin-right:4px;margin-bottom:4px;"> -->
                        -  게임풀싱킹 코칭 <span class="blink menu_event"> </span><br><span style="padding-left:5px;">[현재 문제에 대한 무의식적 통찰과 지혜를 끌어냅니다.]</span></a></p>
                        </li>


                        <li>[3학년 과정]</li>
                        <li><p><a target="_self" href="./booksalon.html">
                        
                        <!-- <img src="img/lic_favicon.png" style="width:20px;margin-right:4px;margin-bottom:4px;"> -->
                        
                        -  책추남 북살롱 <span class="blink menu_event"></span><br><span style="padding-left:5px;">[책추남이 엄선한 책들로 하버드식, 하브르타식 독서 토론]</span></a></p></li>

                        <li>
                        <p><a target="_self" href="./messenger.html">
                        <!-- <img src="img/lic_favicon.png" style="width:20px;margin-right:4px;margin-bottom:4px;"> -->
                        -  메신저 코칭 스쿨 <span class="blink menu_event"> </span><br><span style="padding-left:5px;">[행복한 성공과 경제적 여유를 함께 만들어가는 수업]</span></a></p>
                        </li>

                        <li>[4학년 과정]</li>
                        <li><p><a target="_self" href="./life-changing.html">
                        
                        <!-- <img src="img/lic_favicon.png" style="width:20px;margin-right:4px;margin-bottom:4px;"> -->
                        
                        -  라이프 체인저 코칭 <span class="blink menu_event"></span><br><span style="padding-left:5px;">[진정한 자신의 삶을 위한 NAVI 스쿨 핵심 프로그램]</span></a></p></li>

                        </ul>
                    
                        
                    </div>
                
                </div> 
                
                <!-- <div class="menu-04">
                    <div class="set-con pad">
                        <ul class="bottom">
                          <p style="padding: 30px 25px 10px;
                          letter-spacing: 0.02em;
                          line-height: 1.66667;
                          font-size: 12px;
                          font-weight: 500;
                          color: #707070;"></p>
                          <li><a target="_self" href=""></a></li>
                          <li><a target="_self" href=""></a></li>
                          <li><a target="_self" href=""></a></li>
                          <li><a target="_self" href=""></a></li>
                          <li><a target="_self" href=""></a></li>
                          <li><a target="_self" href=""></a></li>
                          
                        </ul>
                    </div>
                </div> -->
              
            </div>
        
        </div>
    </div>
</div>

</header>
`;

document.body.appendChild(menu.content);