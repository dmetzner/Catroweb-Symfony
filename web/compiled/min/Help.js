var Help=function(){this.setImageModal=function(path){var container=$("#outer-container div"),overlay=$("#image-overlay"),popup=$("#image-popup"),large_popups=[21];overlay.click(function(){overlay.fadeToggle(300),popup.fadeToggle(300)}),popup.click(function(){overlay.fadeToggle(300),popup.fadeToggle(300)}),$(".image-detail").find("img").click(function(){var id=$(this).data("img-id"),index=$(this).data("img-index"),type=$(this).data("img-type");id>0?(1==type?$(container).html('<img src="'+path+id+"_"+index+'.jpg" alt="" title="" />'):3==type?$(container).html('<img src="'+path+index+'.png" alt="" title="" />'):index?$(container).html('<img src="'+path+id+"_right_"+index+'.png" alt="" title="" />'):$(container).html('<img src="'+path+id+'_left.png" alt="" title="" />'),-1!=large_popups.indexOf(id)?popup.addClass("large"):$(container).find("img").height($(window).height()-108),overlay.fadeIn(300),popup.fadeIn(300),3!=type&&window.scrollTo(0,0),overlay.width($(document).width()-1),overlay.height($(document).height()),$(document).keyup(function(e){27==e.keyCode&&(overlay.fadeOut(300,function(){}),popup.fadeOut(300,function(){}))})):$(this).hasClass("gif")?($(this).attr("src",path+"thumbs/"+id+"_"+index+".jpg"),$(this).removeClass("gif")):($(this).attr("src",path+id+"_"+index+".gif"),$(this).addClass("gif"))})}};