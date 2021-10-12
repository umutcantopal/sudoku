var HataliElemanlar = [];
window.addEventListener('load', function (){
	var kutu = document.getElementsByClassName("kutu");
	// var HataliElemanlar = [];
	for(var i = 0;i < kutu.length;i++)
	{
		kutu[i].children[0].addEventListener('input', inputFonksiyon);
	}
	
	function oyunSonuKutulariDisableEt(limit){
		var i = 0;
		var ref = setInterval(() => {
			kutu[i++].children[0].disabled = true;
			if (i == limit) clearInterval(ref);
		}, 10);
	}
	
	function inputKontrolFonk(satirNo, sutunNo, blokNo){
		var kontrolEdilenEleman = sonDegerGirilenElemanKontrol(satirNo, sutunNo, blokNo);
		
		if(kontrolEdilenEleman != true)
		{
			HataliElemanlar.push(kontrolEdilenEleman);
			for(var i = 0;i < HataliElemanlar.length - 1;i++)
			{
				if(HataliElemanlar[i] == kontrolEdilenEleman)
				{
					HataliElemanlar.splice(i, 1);
				}
			}
		}
		console.log(HataliElemanlar);
		if(HataliElemanlar.length > 0)
		{
			HataliElemanlar = hataliElemanlarKontrol(HataliElemanlar);
		}
		
		//cookie atama
		var secilenEleman = document.querySelector("."+satirNo+"."+sutunNo);
		secilenElemanId = secilenEleman.id;
		
		var deger = secilenEleman.children[0].value;
		
		for(var i = 0; i < HataliElemanlar.length; i++)
		{
			if(secilenEleman.children[0] == HataliElemanlar[i])
			{
				var hataDurumu = "b";
			}
			else
			{
				var hataDurumu = "a";
			}
		}
		
		if(secilenEleman.children[0].disabled)
		{
			var disableDurumu = "b";
		}
		else
		{
			var disableDurumu = "a";
		}
		
		var cookieValue = deger + disableDurumu + hataDurumu;
		setCookie(secilenElemanId, cookieValue, 360);
		//cookie atama
		
		//oyun sonu kontrol
		var bosKutu = 0;
		for(var i = 0;i < kutu.length;i++){
			if(kutu[i].children[0].value == ""){
				bosKutu += 1;
			}
		}
		console.log("boş kutu: "+bosKutu);
		console.log("HataliElemanlar: "+HataliElemanlar.length);
		if(bosKutu == 0 && HataliElemanlar.length == 0)
		{
			// console.log("tebrikler oyun bitti");
			document.getElementsByClassName("oyun-sonu-mesaj")[0].style.display = "block";
			oyunSonuKutulariDisableEt(81);
		}
		else
		{
			// console.log("oyun bitmedi");
		}
		//oyun sonu kontrol
	}
	
	function inputFonksiyon(e){
		var deger = e.target.value;
		var satirNo = e.target.parentElement.classList[1];
		var sutunNo = e.target.parentElement.classList[2];
		var blokNo = e.target.parentElement.parentElement.classList[1];
		
		var blok = document.getElementsByClassName(blokNo);
		
		if(e.target.value.length > 1)
		{
			var degerDizi = e.target.value.split("");
			
			if(degerSayimi(degerDizi[1]) == true)
			{
				e.target.value = degerDizi[1];
				
				inputKontrolFonk(satirNo, sutunNo, blokNo);
			}
			else
			{
				e.target.value = degerDizi[0];
			}
		}
		else
		{
			if(degerSayimi(e.target.value) == false)
			{
				e.target.value = "";
			}
			else
			{
				inputKontrolFonk(satirNo, sutunNo, blokNo);
			}
		}
		console.log(HataliElemanlar);
	}
	
	
	function degerSayimi(x){
		var sonuc = false;
		for(var i = 1;i <= 9;i++)
		{
			if(x == i || x == "")
			{
				sonuc = true;
				break;
			}
		}
		return sonuc;
	}
	
	function kontrol(sonDegerGirilenEleman,blokAltElemanlar,satirAltElemanlar,sutunAltElemanlar){
		var blokSonuc = true;
		var satirSonuc = true;
		var sutunSonuc = true;
		
		for(var i = 0;i < 9;i++){
			if(blokAltElemanlar[i] === sonDegerGirilenEleman){
				continue;
			}
			if(blokAltElemanlar[i].value == ""){
				continue;
			}
			if(blokAltElemanlar[i].value == sonDegerGirilenEleman.value){
				blokSonuc = false;
			}
		}
		
		for(var i = 0;i < 9;i++){
			if(satirAltElemanlar[i] === sonDegerGirilenEleman){
				continue;
			}
			if(satirAltElemanlar[i].value == ""){
				continue;
			}
			if(satirAltElemanlar[i].value == sonDegerGirilenEleman.value){
				satirSonuc = false;
			}
		}
		
		for(var i = 0;i < 9;i++){
			if(sutunAltElemanlar[i] === sonDegerGirilenEleman){
				continue;
			}
			if(sutunAltElemanlar[i].value == ""){
				continue;
			}
			if(sutunAltElemanlar[i].value == sonDegerGirilenEleman.value){
				sutunSonuc = false;
			}
		}
		
		return [blokSonuc, satirSonuc, sutunSonuc];
	}
	
	function sonDegerGirilenElemanKontrol(satirNo, sutunNo, blokNo){
		var blokAltElemanlar = document.querySelectorAll("."+blokNo+" > div > input");
		var satirAltElemanlar = document.querySelectorAll("."+satirNo+" > input");
		var sutunAltElemanlar = document.querySelectorAll("."+sutunNo+" > input");
		var sonDegerGirilenEleman = document.querySelector("."+blokNo+" > ." +satirNo+ "."+sutunNo+" > input");
		
		var sonuclar = kontrol(sonDegerGirilenEleman,blokAltElemanlar,satirAltElemanlar,sutunAltElemanlar);
		
		if(sonuclar[0] == false || sonuclar[1] == false || sonuclar[2] == false){
			sonDegerGirilenEleman.style.color = "#f47373";
			return sonDegerGirilenEleman;
		}
		else{
			sonDegerGirilenEleman.style.color = "#cccccc";
			return true;
		}
	}
	
	function hataliElemanlarKontrol(HataliElemanlar){
		for(var i = 0;i < HataliElemanlar.length;i++)
		{
			var HataliEleman = HataliElemanlar[i];
			var blokNo = HataliEleman.parentElement.parentElement.classList[1];
			var blokAltElemanlar = document.querySelectorAll("."+blokNo+" > div > input");
			
			var satirNo = HataliEleman.parentElement.classList[1];
			var satirAltElemanlar = document.querySelectorAll("."+satirNo+" > input");
			
			var sutunNo = HataliEleman.parentElement.classList[2];
			var sutunAltElemanlar = document.querySelectorAll("."+sutunNo+" > input");
			
			var sonuclar = kontrol(HataliEleman,blokAltElemanlar, satirAltElemanlar, sutunAltElemanlar);
			
			if(sonuclar[0] == false || sonuclar[1] == false || sonuclar[2] == false){
				HataliEleman.style.color = "#f47373";
			}
			else{
				HataliEleman.style.color = "#cccccc";
				HataliElemanlar.splice(i, 1);
			}
		}
		return HataliElemanlar;
	}
})