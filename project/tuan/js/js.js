$(function(){
	//顶部收藏区域点击关闭效果
	$('#top_bg #top_box #no_remind_a').add('#top_bg #top_box #close').click(function(){
		$('#top_bg').hide();
	})


	//logo+搜索框区域隐藏菜单显示效果
	$('#logo_search_box #u_center').hover(function(){//个人中心
		$(this).addClass('hover');
		$(this).siblings('.hide_box').slideDown(100);
	},function(){
		$(this).removeClass('hover');
		$(this).siblings('.hide_box').hide();
	})
	$('#logo_search_box #ucenter_hide').hover(function(){
		$(this).show();
		$('#logo_search_box #u_center').addClass('hover');
	},function(){
		$('#logo_search_box #u_center').removeClass('hover');
		$(this).hide();
	})


	$('#logo_search_box #history').click(function(){//浏览历史
		if($(this).siblings('.hide_box').is(':hidden')){
			$(this).addClass('hover');
			$(this).siblings('.hide_box').slideDown(200);
		}else{
			$(this).removeClass('hover');
			$(this).siblings('.hide_box').slideUp(200);
		}
	})

	$('#logo_search_box #guanzhutuan800').hover(function(){//关注团800
		$(this).addClass('hover');
		$(this).css('background-position','-5px -566px');
		$(this).siblings('.hide_box').slideDown(200);
	},function(){
		$(this).removeClass('hover');
		$(this).css('background-position','-5px -548px')
		$(this).siblings('.hide_box').hide();
	})

	$('#logo_search_box #weibo_hide').hover(function(){
		$(this).show();
		$(this).siblings('#guanzhutuan800').addClass('hover');
		$(this).siblings('#guanzhutuan800').css('background-position','-5px -566px');
	},function(){
		$(this).hide();
		$(this).siblings('#guanzhutuan800').removeClass('hover');
		$(this).siblings('#guanzhutuan800').css('background-position','-5px -548px')
	})


	//搜索按钮效果
	$('#logo_search_box #search_box #btn').hover(function(){
		$(this).css('background','url(images/bg_content.png) no-repeat -353px -51px');
	},function(){
		$(this).css('background','none');
	})

	// 搜索框获得焦点默认文字消失的效果
	$('#logo_search_box #search_con').focus(function(){
		$(this).val('');
	})
	$('#logo_search_box #search_con').blur(function(){
		$(this).val('滑雪');
	})


	 // 每日新鲜优惠包邮送到家效果
	 $('#menu_box #menu li #everyday').hover(function(){
	 	$(this).find('#cover').css('background','none');
	 },function(){
	 	$(this).find('#cover').css('background','#FEFBEA');
	 })

	 $('#menu_box #menu li #everyday #cover').click(function(){
	 	$('#menu_box #menu li #everyday').hide();
	 })


	 // 左侧菜单鼠标滑过效果
	 $('#main #left_menu_flash #left_menu #left_ul li').hover(function(){
	 	$('#main #left_menu_flash #left_menu #left_ul li').removeClass('li_hover');//把所有的li取消hover样式
	 	$('#main #left_menu_flash #left_menu .hide_box').hide();//让所有的hide_box隐藏
	 	$(this).addClass('li_hover');
	 	var index = $(this).index();//获得鼠标移入了第几个li
	 	$('#main #left_menu_flash #left_menu .hide_box').eq(index).show();//让对应的hide_box显示出来
	 },function(){
	 	$(this).removeClass('li_hover');
	 	var index = $(this).index();//获得鼠标移入了第几个li
	 	$('#main #left_menu_flash #left_menu .hide_box').eq(index).hide();//让对应的hide_box显示出来
	 })
	 $('#main #left_menu_flash #left_menu .hide_box').hover(function(){
	 	$(this).show();
	 	$('#main #left_menu_flash #left_menu #left_ul li').eq($(this).index('#main #left_menu_flash #left_menu .hide_box')).addClass('li_hover');
	 },function(){
	 	$(this).hide();
	 	$('#main #left_menu_flash #left_menu #left_ul li').eq($(this).index('#main #left_menu_flash #left_menu .hide_box')).removeClass('li_hover');
	 })



	 // 图片轮换板效果
	 var timer = setInterval(autoRun,5000);
	 var sta = 0;//记录当前展示到哪张图片了
	 function autoRun(){
	 	sta++;//sta自增
	 	sta = (sta == 7)?0:sta;//判断是不是到最后一张了，如果是，就切换到第一张
	 	change(sta);//切换效果
	 }

	 $('#main #left_menu_flash #flash_box ul li').hover(function(){
	 	clearInterval(timer);//清理定时器
	 	sta = $(this).index();//获得鼠标移入到第几个li上了
	 	change(sta);//切换效果
	 },function(){
	 	timer = setInterval(autoRun,5000);//恢复定时器
	 })

	 function change(num){//用来控制切换图片和下标样式的函数
	 	$('#main #left_menu_flash #flash_box img').hide();//先把所有的图片隐藏
	 	$('#main #left_menu_flash #flash_box img').eq(num).fadeIn(200);//让对应的图片显示出来
	 	$('#main #left_menu_flash #flash_box ul li').removeClass('hover');//移除掉所有li上面的hover样式
	 	$('#main #left_menu_flash #flash_box ul li').eq(num).addClass('hover');//给对应的li加上hover样式
	 }
 
	 // 小图片轮换的效果
	 setInterval(lit_autoRun,3000);//设立定时器
	 var lit_sta = 0;
	 function lit_autoRun(){//自动切换小图片
	 	lit_sta++;//自增1
	 	lit_sta = (lit_sta == 5)?0:lit_sta;//判断是否到最后一张
	 	var new_left = -lit_sta*230;//计算pic_box的新left值
	 	$('#main #left_menu_flash #litter_pic #pic_box').animate({'left':new_left+'px'},100);
	 }

	 $('#main #left_menu_flash #litter_pic p a').click(function(){
	 	if($(this).index() == 0){
	 		if(lit_sta != 0){
	 			lit_sta--;
	 		}
	 		
	 	}else{
	 		if(lit_sta != 4){
	 			lit_sta++;
	 		}
	 	}

	 	var new_left = -lit_sta*230;//计算pic_box的新left值
	 	$('#main #left_menu_flash #litter_pic #pic_box').animate({'left':new_left+'px'},100);
	 })


	 //团购网+商城名站区域效果
	 $('#main #tgw_box ul li').hover(function(){
	 	var num = $(this).find('.hide_box').attr('num');//获得评级
	 	var width = 6*num;//通过评级计算宽度
	 	$(this).find('.orange_star').css('width',width+'px');//应用宽度
	 	$(this).addClass('zindex');//给当前的li加一个zindex样式
	 	$(this).find('.hide_box').show();//让当前li中的hide_box显示

	 },function(){
	 	$(this).removeClass('zindex');//取消当前的li的zindex样式
	 	$(this).find('.hide_box').hide();//让当前li中的hide_box隐藏
	 })


	 //商品区块鼠标移入移出效果
	 $('#main .l_list_box .shop_list .shop').hover(function(){
	 	// 倒计时效果
	 	setInterval(daojishi,1000);//定义倒计时的定时器
	 	var shopObj = $(this);
	 	daojishi();
	 	function daojishi(){
	 		var end_time = shopObj.attr('time');
		 	var timeObj = new Date();
		 	var now_time = timeObj.getTime();
		 	var differ_time = end_time - now_time;//计算结束时间和现在时间的差距
		 	var day = Math.floor(differ_time/(24*60*60*1000));//计算还剩多少天
		 	differ_time = differ_time%(24*60*60*1000);//获得计算天数之后还剩多少毫秒
		 	var hour = Math.floor(differ_time/(60*60*1000));//计算还剩多少小时
		 	differ_time = differ_time%(60*60*1000);//获得计算小时数之后还剩多少毫秒
		 	var min = Math.floor(differ_time/(60*1000));//计算还剩多少分钟
		 	differ_time = differ_time%(60*1000);//获得计算分钟数之后还剩多少毫秒
		 	var sec = Math.floor(differ_time/(1000));//计算还剩多少秒
		 	shopObj.find('.day').html(day);
		 	shopObj.find('.hour').html(hour);
		 	shopObj.find('.min').html(min);
		 	shopObj.find('.sec').html(sec);
	 	}
	 	
	 	//倒计时效果结束
	 	$(this).addClass('bg_color');
	 	$(this).find('.place').addClass('place_hover');
	 	$(this).find('.cover').add($(this).find('.shop_name')).add($(this).find('.count_down')).add($(this).find('.shop_hide_box')).show();
	 },function(){
	 	$(this).removeClass('bg_color');
	 	$(this).find('.place').removeClass('place_hover');
	 	$(this).find('.cover').add($(this).find('.shop_name')).add($(this).find('.count_down')).add($(this).find('.shop_hide_box')).hide();
	 })


	//查看更多鼠标悬停效果
	$('#main .look_more').hover(function(){
		$(this).addClass('more_hover');
	},function(){
		$(this).removeClass('more_hover');
	})

	//左侧跳转区域效果
	function window_change(){//用来计算top和left值的函数
		var jump_box_top = parseInt(($(window).height()-$('#jump_box').height())/2);//计算top值
		var jump_box_left = parseInt(($(window).width()-$('#main').width())/2 - $('#jump_box').width() - 10);//计算left值
	 	$('#jump_box').css({'top':jump_box_top+'px','left':jump_box_left + 'px'})
	}
	window_change();
	$(window).resize(window_change)
	

})


