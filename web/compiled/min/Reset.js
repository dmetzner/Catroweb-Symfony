$(document).ready(function(){$("#reset_pw").click(function(){var $ajaxUrl=Routing.generate("catrobat_is_oauth_user",{flavor:"pocketcode"});$.post($ajaxUrl,{username_email:$("#username").val()},function(data){1==data.is_oauth_user?$("#error_user_oauth").css("display","block"):$("#_submit").click()}),$("#username").on("input",function(e){$("#error_user_oauth").css("display","none")})})});