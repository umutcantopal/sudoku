window.addEventListener('load', function (){
	document.addEventListener('keydown', keydownfonk);
	
	function keydownfonk(e){
		// left = 37
		// up = 38
		// right = 39
		// down = 40

		if(e.keyCode == "37" || e.keyCode == "38" || e.keyCode == "39" || e.keyCode == "40")
		{
			var seciliElemen = document.activeElement;
			
			if(seciliElemen.tagName == "INPUT")
			{
				var seciliElemenSatirNo = parseInt(seciliElemen.parentElement.classList[1].split("satir")[1]);
				var seciliElemenSutunNo = parseInt(seciliElemen.parentElement.classList[2].split("sutun")[1]);
				
				switch (e.keyCode)
				{
					case 37:
						if(seciliElemenSutunNo - 1 != 0)
						{
							var focusOlunacakSutunNo = "sutun" + (seciliElemenSutunNo - 1);
							var focusOlunacakEleman = document.querySelector(".satir" + seciliElemenSatirNo + "." + focusOlunacakSutunNo);
							
							focusOlunacakEleman.children[0].focus();
						}
					break;
						
					case 38:
						if(seciliElemenSatirNo - 1 != 0)
						{
							var focusOlunacakSatirNo = "satir" + (seciliElemenSatirNo - 1);
							var focusOlunacakEleman = document.querySelector("." + focusOlunacakSatirNo + ".sutun" + seciliElemenSutunNo);
							
							focusOlunacakEleman.children[0].focus();
						}
					break;
						
					case 39:
						if(!(seciliElemenSutunNo + 1 > 9))
						{
							var focusOlunacakSutunNo = "sutun" + (seciliElemenSutunNo + 1);
							var focusOlunacakEleman = document.querySelector(".satir" + seciliElemenSatirNo + "." + focusOlunacakSutunNo);
							
							focusOlunacakEleman.children[0].focus();
						}
					break;
						
					case 40:
						if(!(seciliElemenSatirNo + 1 > 9))
						{
							var focusOlunacakSatirNo = "satir" + (seciliElemenSatirNo + 1);
							var focusOlunacakEleman = document.querySelector("." + focusOlunacakSatirNo + ".sutun" + seciliElemenSutunNo);
							
							focusOlunacakEleman.children[0].focus();
						}
					break;
				}
			}
			else
			{
				switch(e.keyCode)
				{
					case 37:
					var focusOlunacakEleman = document.querySelector(".kutu.satir5.sutun9 > input");
					focusOlunacakEleman.focus();
					break;
					
					case 38:
					var focusOlunacakEleman = document.querySelector(".kutu.satir9.sutun5 > input");
					focusOlunacakEleman.focus();
					break;
					
					case 39:
					var focusOlunacakEleman = document.querySelector(".kutu.satir5.sutun1 > input");
					focusOlunacakEleman.focus();
					break;
					
					case 40:
					var focusOlunacakEleman = document.querySelector(".kutu.satir1.sutun5 > input");
					focusOlunacakEleman.focus();
					break;
				}
			}
		}
	}
})