function yeniOyunOlustur(){
	var tanimliEleman = 0;
	//oyun alanı temizle
	var kutular = document.getElementsByClassName("kutu");
	for(var i = 0; i < kutular.length; i++){
		kutular[i].children[0].value = "";
		kutular[i].children[0].disabled = false;
		kutular[i].children[0].style.color = "#cccccc";
		kutularId = kutular[i].id;
		
		setCookie(kutularId, "", 360);
	}
	
	//oyun alanı temizle
	
	function randomInt(min, max) {
	  return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	
	do{
		var blokNo = randomInt(1,9);
		var kutuNo = randomInt(0,8);
		var deger = randomInt(1,9);
		
		var kutu = document.querySelectorAll(".blok"+blokNo+" > div > input");
		// kutu[kutuNo].value = deger;
		// kutu[kutuNo].disabled = true;
		
		if(kutu[kutuNo].value == ""){
			var blok = "blok"+blokNo;
			var satir = kutu[kutuNo].parentElement.classList[1];
			var sutun = kutu[kutuNo].parentElement.classList[2];
			
			var blokSonuc = true;
			var satirSonuc = true;
			var sutunSonuc = true;
			
			var ayniBlokElemanlar = document.querySelectorAll("."+blok+" > div > input");
			var ayniSatirElemanlar = document.querySelectorAll("."+satir+" > input");
			var ayniSutunElemanlar = document.querySelectorAll("."+sutun+" > input");
			
			for(var i = 0;i < 9;i++){
				var str = ayniBlokElemanlar[i].parentElement.classList[1];
				var stn = ayniBlokElemanlar[i].parentElement.classList[2];
				if(str == satir && stn == sutun){
					continue;
				}
				else{
					if(ayniBlokElemanlar[i].value == deger){
						blokSonuc = false;
					}
				}
			}
			
			for(var i = 0;i < 9;i++){
				var str = ayniSatirElemanlar[i].parentElement.classList[1];
				var stn = ayniSatirElemanlar[i].parentElement.classList[2];
				if(str == satir && stn == sutun){
					continue;
				}
				else{
					if(ayniSatirElemanlar[i].value == deger){
						blokSonuc = false;
					}
				}
			}
			
			for(var i = 0;i < 9;i++){
				var str = ayniSutunElemanlar[i].parentElement.classList[1];
				var stn = ayniSutunElemanlar[i].parentElement.classList[2];
				if(str == satir && stn == sutun){
					continue;
				}
				else{
					if(ayniSutunElemanlar[i].value == deger){
						blokSonuc = false;
					}
				}
			}
			
			if(blokSonuc == true && satirSonuc == true && sutunSonuc == true){
				kutu[kutuNo].value = deger;
				
				var cookieValue = deger+"ba";
				kutuId = kutu[kutuNo].parentElement.id;
				setCookie(kutuId, cookieValue, 360);
				kutu[kutuNo].disabled = true;
				tanimliEleman += 1;
			}
			else{
				tanimliEleman = tanimliEleman;
				continue;
			}
		}
		else{
			continue;
		}
	}while(tanimliEleman != 20);
	var sudokuKapsayici = document.getElementsByClassName("kapsayici");
	sudokuKapsayici[0].style.display = "block";
	document.getElementsByClassName("baslangic-arayuz")[0].style.display = "none";
	document.getElementsByClassName("oyun-sonu-mesaj")[0].style.display = "none";
}