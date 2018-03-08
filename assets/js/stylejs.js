// JavaScript Document
	$(document).ready(function(){
		 pagefull();
		 nav_li();
	});

	function pagefull(){
		var winheight = $(window).height();
		$(".layout").height(winheight);
		
		// 페이지에 따른 gnb 생성
		var pageindex = $("main > section").size();
		$("main").prepend("<div class='gnb'><ul>");
		for(var i=1;i<=pageindex;i++){
			$("main > .gnb > ul").append("<li><span>"+i+"</span></li>");
		}
		$("main .gnb li:first-child").addClass("on");

		// 마우스 휠 이벤트
		$(window).bind("mousewheel", function(event){
		var win_w = $(window).width();
	      if(win_w > 1024){
			// var vvv= event.originalEvent.wheelDelta; // wheelDelta 값은 늘 업과 다운에 따라서 120 or -120을 가진다.   
			if($('main .gnb li:nth-child(2)').hasClass('on')){
				$('.gnb').css('display','block');
			} 
			if($('main .gnb li:first-child').hasClass('on')){
				$('.gnb').css('display','none');
				$('.scroll').css('display','inline-block');
			}
			if($('main .gnb li:nth-child(2)').hasClass('on')){
				$('.scroll').css('display','inline-block');
			}
			if($('main .gnb li:nth-child(3)').hasClass('on')){
				$('.scroll').css('display','none');
			}
			var gnb = $(".gnb ul li.on");

			if($("body").find("main:animated").length >= 1) return false;
			if(event.originalEvent.wheelDelta >= 0) { // up
				if(gnb.index() >= 0) gnb.prev().addClass("on").siblings(".on").removeClass("on");

				if(gnb.index() > 0){
					gnb = gnb.index()-1;
					$("main").animate({"top": -winheight*gnb + "px"},900, "swing");
				};		
			}else{ // down
				if(gnb.index() <= $(".gnb ul li").size()-1) gnb.next().addClass("on").siblings(".on").removeClass("on");

				if(gnb.index() < 2){
					gnb = gnb.index() + 1;
					$("main").animate({"top": -winheight*gnb + "px"},900, "swing");
				};				
			}
			  
		  }
		});
	}

	// gnb 클릭시 페이지 이동
	function nav_li(){
		var winheight = $(window).height();

		$(".gnb li").click(function(){
			var gnbindex = $(this).index();
			if($("body").find("main:animated").length >= 1) return false;
			$(this).addClass("on").siblings("li").removeClass("on");
			$("main").animate({"top": -winheight*gnbindex + "px"},900, "swing");
			return false;
		});
	}



// 모바일 태블릿 스크롤이 길어질 시 

$(document).ready(function(){
  var win_w = $(window).width();
	  if(win_w < 900){
	      $(function () {
	        	$(window).scroll(function () {
		         	if ($(this).scrollTop() > 200) {
		        		$('.scroll').hide();
		        	} else {
			         	$('.scroll').show();
		        	}
		       });
	        });
     }

});


$(document).ready(function(){
    $(".btn_mobile_nav").click(function(){
        $(".mobile").show(50);
    });
    $(".btn_mobile_colse").click(function(){
        $(".mobile").hide(50);
    });
});


   /* $(".provisionOne").click(function(){
        $("provision_01").show(50);
    });
    $(".btn_provision_colse").click(function(){
        $(".provision_01").hide(50);
    });
    $(".provisionTwo").click(function(){
        $("provision_02").show(50);
    });
    $(".btn_provision_colse").click(function(){
        $(".provision_02").hide(50);
    });
    $(".contacUs").click(function(){
        $("provision_03").show(50);
    });
    $(".btn_provision_colse").click(function(){
        $(".provision_03").hide(50);
    });*/