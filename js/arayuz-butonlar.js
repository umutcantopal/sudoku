window.addEventListener('load', function (){
	var yeniOyunButon = document.getElementsByClassName("yeni-oyun-buton");
	var oyunaDevamButon = document.getElementById("oyuna-devam-et-buton");
	
	for(var i = 0;i < yeniOyunButon.length;i++)
	{
		yeniOyunButon[i].addEventListener("click", yeniOyunOlustur);
	}
	
	oyunaDevamButon.addEventListener("click", oyunaDevamEt);
	
	//devam et butonu aktif pasif etme
	var a = 0;
	
	for(var i = 1; i <= 81; i++){
		cname = "kutu"+i;
		var kutuCookie = getCookie(cname);
		if(kutuCookie != "")
		{
			a += 1;
		}
	}
	
	if(a == 0)
	{
		oyunaDevamButon.disabled = true;
		oyunaDevamButon.classList.add("disabled");
	}
	else
	{
		oyunaDevamButon.classList.remove("disabled");
	}
	//devam et butonu aktif pasif etme
	
	function oyunaDevamEt(){
		var sudokuKapsayici = document.getElementsByClassName("kapsayici");
		sudokuKapsayici[0].style.display = "block";
		document.getElementsByClassName("baslangic-arayuz")[0].style.display = "none";
		
		for(var i = 1; i <= 81; i++){
			var kutuId = "kutu"+i;
			var cookieValue = getCookie(kutuId);
			
			if(cookieValue != "")
			{
				var split = cookieValue.split("");
			
				var deger = split[0];
				var disableDeger = split[1];
				var hataDeger = split[2];
				// console.log(kutuId,deger,disableDeger,hataDeger);
				var kutu = document.getElementById(kutuId);
				
				kutu.children[0].value = deger;	
				
				if(disableDeger == "b")
				{
					kutu.children[0].disabled = true;
				}
				
				if(hataDeger == "b")
				{
					kutu.children[0].style.color = "#f47373";
					HataliElemanlar.push(kutu.children[0]);
				}
			}
		}
	}
})