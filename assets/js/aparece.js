function apareceScroll(){
	var html = document.getElementsByTagName("html")[0];
	var elementoAparece = document.getElementsByClassName("aparece");
	
	document.addEventListener("scroll", function(){
		var topVent = html.scrollTop;
		for(i=0; i < elementoAparece.length; i++){
			var topelemAparece = $($(elementoAparece[i])).offset().top;
			if(topVent > topelemAparece - 500){
				elementoAparece[i].style.opacity = 1;
			}
		}
	})
}

apareceScroll();