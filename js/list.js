
const list = document.getElementById('list');
list.innerHTML = `
<div id="menu" style="width:100%;">
<span class="menu_list mn1" onclick="window.location.href='./kl-a.html'" >손해평가사</span>
<!-- <span  class="menu_list mn2" onclick="window.location.href='./kl-b.html'">도로교통사고감정사</span> -->
<span class="menu_list mn3" onclick="window.location.href='./kl-c.html'">농산물품질관리사</span>
<span  class="menu_list active mn4" onclick="window.location.href='./kl-d.html'">반려견스타일리스트</span>
<br><br><br>
</div>

<div id="m-menu" style="width:100%;">
<span class="menu_list mn1" onclick="window.location.href='./kl-a.html'">손해평가사</span>
<!-- <span  class="menu_list mn2" onclick="window.location.href='./kl-b.html'">도로교통사고감정사</span> -->
<br>
<span class="menu_list mn3" onclick="window.location.href='./kl-c.html'">농산물품질관리사</span>
<span  class="menu_list active mn4" onclick="window.location.href='./kl-d.html'">반려견스타일리스트</span><br><br>
</div>

`;

document.body.appendChild(list.content);