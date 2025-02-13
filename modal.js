window.onload=function(){
	SiteMask=$("<div>")
		.attr({id:"SiteMask"})
		.css({position:"fixed", left:0, top:0, width:"100%", height:"100%", backgroundColor:"#000", display:"none", opacity:0, zIndex:100})
		.appendTo(document.body)[0];
	ModalPopupDisplay=$("<img>")
		.attr({id:"ModalPopupDisplay"})
		.css({display:"none", opacity:0, position:"fixed", maxWidth:"80%", maxHeight:"80%", zIndex:SiteMask.style.zIndex+1})
		.bind({
			load:function(){
				ModalPopupXeq();
			}
		})
		.appendTo(document.body)[0];
	$("#SiteMask, #ModalPopupDisplay").bind({
		click:function(){
			ModalPopupEnd();
		}
	});
	$("img.modal-pop-up")
		.css({cursor:"zoom-in"})
		.bind({
			click:function(){
				$(ModalPopupDisplay).attr({src:this.src});
			}
		});
}

function ModalPopupXeq(){
	$(SiteMask)
		.css({display:"block"})
		.animate({opacity:.85});
	$(ModalPopupDisplay)
		.css({display:"block"})
		.css({left:(window.innerWidth/2) - (ModalPopupDisplay.clientWidth/2), top:100})
		.animate({opacity:1});
}

function ModalPopupEnd(){
	$(ModalPopupDisplay).attr({src:""});
	$("#SiteMask, #ModalPopupDisplay").css({display:"none", opacity:0});
}