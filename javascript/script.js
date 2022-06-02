jQuery(document).ready(function(){
    $(".navi>li").mouseover(function(){
        $(this).find('.submenu').stop().slideDown(500);
        //children()을 사용할 경우 직계 자식 태그를 반환함
    }).mouseout(function(){
        $(this).find(".submenu").stop().slideUp(500);
    });

// imgslide a:gt(0) 인덱스0보다 더 큰값을 가진 요소를 선택(1,2,3)
    $('.imgslide a:gt(0)').hide();
    setInterval(function(){
        $(".imgslide a:first-child").fadeOut().next('a').fadeIn()
        .end().appendTo(".imgslide")},3000);

        



//
    $(function(){
        $(".tabmenu>li>a").click(function(){
            $(this).parent().addClass("active")
            //현재태그의 부모 태그를 찾아 active 클래스를 추가해줌
            .siblings().removeClass("active")
            return false
            //클릭이벤트처리를 중단하고 함수를 호출한 곳으로 즉시 돌아가도록 함
            //이것은 html에서 태그들은 중첩되어 있기 때문에 <a>태그를 클릭하면 이요소를 감싸고 있는 부모 태그들도 클릭한 것처럼 이벤트에 반응하게 됨 이런것을 이벤트 버블링이라고함 따라서 현재 이벤트를 중지시키고 그 이벤트가 부모 태그에 전달되지 않도록 중지하기 위해서 return false를 사용함.
            // 단 return false를 사용하면 자바스크립트를 해석기가 이구문을 만나는 즉시 코드 실행을 중지하기 때문에 return false다음에 다른문장을 쓰지 않도록 주의
        })
    })


    

    //레이어 팝업창
    $(".notice li:first").click(function(){
        $("#layer").addClass("active");
    });
    $(".btn").click(function(){
        $("#layer").removeClass("active");
    });





})

