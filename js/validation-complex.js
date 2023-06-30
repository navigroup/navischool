$(document).ready(function(){
    $('#send_message').click(function(){
        
          //Stop form submission & check the validation
        // e.preventDefault();
        
        // Variable declaration
        var error = false;
        const regex1 = /^[|가-힣a-zA-Z\s+]+$/;
        const regex = /^[|0-9|]+$/;
        // var lic = $('[name="lic"]').is(":checked");
        var position = $('#position').val();
        var id = $('#id-number').val();
        var name = $('#name').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var message = $('#message').val();
   
        var agree = $('#agree11').is(":checked");
        
        
        $('#name,#phone,#message,#agree11,#position').click(function(){
            $(this).removeClass("error_input");
        });
        


         // Form field validation
         if(!regex1.test(name) || name.length<0 ){
            var error = true;
            $('#name').addClass("error_input");
           alert("이름 입력을 확인하세요.");
        }else{
            $('#name').removeClass("error_input");
        }

        if(phone.substr(0, 3) == "010" && phone.length ==11 && regex.test(phone) ){
            
            $('#phone').removeClass("error_input");
        }else{
            var error = true;
            $('#phone').addClass("error_input");
            alert("휴대폰 번호 입력을 확인하세요.");
        }

        if(id>=24 && id<=55 && regex.test(id) ){
            
            $('#id-number').removeClass("error_input");
        }else{
            var error = true;
            $('#id-number').addClass("error_input");
            alert("24 ~ 55세까지 신청가능합니다.");
        }

        if(position == null ){
            var error = true;
            $('#position').addClass("error_input");
           alert("통화 가능 시간을 선택해주세요.");
        }else{
            $('#position').removeClass("error_input");
        }

     


        if (agree == false){
            var error = true;
            $('#agree11').addClass("error_input");
            alert("개인정보동의를 체크해주세요.");
        }else{
            $('#agree11').removeClass("error_input");
        }
        
        
        // If there is no validation error, next to process the mail function
        if(error == false){
           // Disable submit button just after the form processed 1st time successfully.
          
           $('#form_e11').prop("action", "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfos-sBcGX_p35eUrnkl8bud092eo039J9_bLvUeMkWvfdaqA/formResponse");
           $('#send_message').attr({'disabled' : 'true', 'value' : '전송 중입니다' });
           
            
     $('#send_message').prop("disabled", false);
    $('#send_message').css({transition:"1s"});
    $('#send_message').css({background:"#222222"});
    $('#send_message').css({color:"#fff"});
    // $('[name="fm"]').submit();
    // $('#hidden_iframe11').attr("onload", "");
    $('#hidden_iframe12').attr("onload", "hoa();");

    $('#send_message').attr({'disabled' : 'true', 'value' : '신청이 완료되었습니다.' });        
        }
    });    

   

});


function dll(){


}
 
function maxLengthCheck(object){
  if (object.value.length > object.maxLength){
    object.value = object.value.slice(0, object.maxLength);
  }    
}
 
 function hoa(){
    setTimeout( function(){
        alert("보시면 더 좋은 자격증 혜택!\n\n도로교통감정사 (초봉 6000 이상)\n농산물품질관리사 (초봉 4000 이상)\n수강료 전액 지원");
        window.location.reload();
       },1500);

 }
 
 function site1111(){
  //$('#mc-embedded-subscribe').click();
  

  window.location.reload();
 }


 function form_check(){

    const regex2 = /^[가-힣]+$/;
    const regex = /^[|0-9|]+$/;
    var license = $('#license').val();
    // var lic = $('[name="lic"]:checked').length;
    var position = $('#position').val();
    var id = $('#id-number').val();
    var name = $('#name').val();
    var email = $('#email').val();
    var ph = $('#phone').val();
    var message = $('#message').val();
    var agree = $('#agree11').is(":checked");


    if (license != null)
    {
        if(regex2.test(name) && name.length > 1 )
        {
            
            if(ph.substr(0, 3) == "010" && ph.length ==11 && regex.test(ph))
            {
            
                if(regex.test(id) && id.length == 2 && id >=24 && id <51)
                {
                
                    if( position != null )
                    {
                
                        if (agree == true)
                        {
                            $('#send_message').css({transition:"1s"});
                        $('#send_message').prop("disabled", false);
                        $('#send_message').prop("value", "혜택 지원 신청하기");
                        $('#send_message').css({background:"#0e3b64"});
                        $('#send_message').css({cursor:"pointer"});
                        }
                        else
                        {
                            $('#send_message').css({transition:"1s"});
                            $('#send_message').prop("disabled", true);
                            $('#send_message').prop("value", "개인정보 동의를 해주세요");
                            $('#send_message').css({background:"#595959"});
                            $('#send_message').css({cursor:"default"});     
                        }
                        
                    }
                    else
                    {
                        $('#send_message').css({transition:"1s"});
                        $('#send_message').prop("disabled", true);
                        $('#send_message').prop("value", "통화 시간을 선택하세요.");
                        $('#send_message').css({background:"#595959"});
                        $('#send_message').css({cursor:"default"});     
                    }
    
                }
                else if(id.length==0)
                {
                $('#send_message').css({transition:"1s"});
                $('#send_message').prop("disabled", true);
                $('#send_message').prop("value", "나이를 입력하세요.");
                $('#send_message').css({background:"#595959"});
                $('#send_message').css({cursor:"default"});     
                }
                else 
                {
                $('#send_message').css({transition:"1s"});
                $('#send_message').prop("disabled", true);
                $('#send_message').prop("value", "24 ~ 50세까지 가능합니다.");
                $('#send_message').css({background:"#595959"});
                $('#send_message').css({cursor:"default"});     
                }
            
            }
            else if(ph.length>0)
            {
                $('#send_message').css({transition:"1s"});
                $('#send_message').prop("disabled", true);
                $('#send_message').prop("value", "전화번호 입력을 확인하세요.");
                $('#send_message').css({background:"#595959"});
                $('#send_message').css({cursor:"default"});     
            }
            else
            {
                $('#send_message').css({transition:"1s"});
                $('#send_message').prop("disabled", true);
                $('#send_message').prop("value", "전화번호를 입력하세요.");
                $('#send_message').css({background:"#595959"});
                $('#send_message').css({cursor:"default"});     
            }
        }
        else if(name.length>0)
        {
            $('#send_message').css({transition:"1s"});
            $('#send_message').prop("disabled", true);
            $('#send_message').prop("value", "성함 입력을 확인하세요.");
            $('#send_message').css({background:"#595959"});
            $('#send_message').css({cursor:"default"});     
        }
        else
        {
            $('#send_message').css({transition:"1s"});
            $('#send_message').prop("disabled", true);
            $('#send_message').prop("value", "성함을 입력하세요.");
            $('#send_message').css({background:"#595959"});
            $('#send_message').css({cursor:"default"});     
        }
    }
    else
    {
        $('#send_message').css({transition:"1s"});
        $('#send_message').prop("disabled", true);
        $('#send_message').prop("value", "자격증 종류를 선택하세요.");
        $('#send_message').css({background:"#595959"});
        $('#send_message').css({cursor:"default"});        
    }
       


  
    }

    function form_check1(){
        var name =$('#name').val();
        var id = $('#id-number').val();
        var ph =$('#phone').val();
        var time = $('#position').val();
        var message = $('#message').val();
    
        $('[name="user_name"]').val(name);
        $('[name="나이"]').val(id);
    
        $('[name="휴대폰번호1"]').val('010');
         $('[name="휴대폰번호2"]').val(ph.substr(3,4));
         $('[name="휴대폰번호3"]').val(ph.substr(7,4));
         $('[name="통화가능시간"]').val(time);
         $('[name="문의사항"]').val(message);
        }


        function lic_pick(){
            var lic = $('#license').val();
            
            if(lic === "손해평가사")
                {
                $('#form1').attr("name", "fm");
                // alert($('#form1').attr("name"));
                }
                else
                {
                $('#form1').attr("name", "");
                }

            if(lic === "도로교통사고감정사")
            {
                $('#form2').attr("name", "fm");
                // alert($('#form1').attr("name"));
                }
                else
                {
                $('#form2').attr("name", "");
                }
            if(lic === "농산물품질관리사")
            {
                $('#form3').attr("name", "fm");
                // alert($('#form1').attr("name"));
                }
                else
                {
                $('#form3').attr("name", "");
                }
            if(lic === "반려견스타일리스트")
                {
                $('#form4').attr("name", "fm");
                // alert($('#form1').attr("name"));
                }
                else
                {
                $('#form4').attr("name", "");
                }

        }
        // function fm_add(){
        //     var lic1 = $('#license1').is(":checked");
        //     var lic2 = $('#license2').is(":checked");
        //     var lic3 = $('#license3').is(":checked");
        //     var lic4 = $('#license4').is(":checked");
   
        
        //   if(lic1 == true)
        //   {
        //     $('#form1').attr("name", "fm");
        //     // alert($('#form1').attr("name"));
        //   }
        //   else
        //   {
        //     $('#form1').attr("name", "");
        //   }
        //   if(lic2 == true)
        //   {
        //     $('#form2').attr("name", "fm");
        //     // alert($('#form2').attr("name"));
        //   }
        //   else
        //   {
        //     $('#form2').attr("name", "");
        //   }
        //   if(lic3 == true)
        //   {
        //     $('#form3').attr("name", "fm");
        //     // alert($('#form3').attr("name"));
        //   }
        //   else
        //   {
        //     $('#form3').attr("name", "");
        //   }
        //   if(lic4 == true)
        //   {
        //     $('#form4').attr("name", "fm");
        //     // alert($('#form4').attr("name"));
        //   }
        //   else
        //   {
        //     $('#form4').attr("name", "");
        //   }

          
        // }

        function chn_menu1(){
               $('.menu_list').removeClass('active');
               $('.mn1').addClass('active');
                
        }
        
        function chn_menu2(){
            $('.menu_list').removeClass('active');
            $('.mn2').addClass('active');

        }

        function chn_menu3(){
            $('.menu_list').removeClass('active');
            $('.mn3').addClass('active');
       
        }
        function chn_menu4(){
            $('.menu_list').removeClass('active');
            $('.mn4').addClass('active');
       
        }

$(function(){
 $('#name,#phone,#position,#id-number,#message,#agree11,#license').bind("keyup click change",form_check);
 $('#name,#phone,#position,#id-number,#message,#license').bind("keyup click change",form_check1);
 $('#license').bind("keyup click change",lic_pick);
//  $('#license1,#license2,#license3,#license4,#license5').bind("keyup click",fm_add);
 
 
})
