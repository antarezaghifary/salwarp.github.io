//event pada saat link di klik
$('.pagescroll').on('click', function(e){
		//ambil isi href
		var tujuan = $(this).attr('href');
		//tangkap elemen bersangkutan
		var elemenTujuan = $(tujuan);


		//pindah scroll
		$('html,body').animate({
			scrollTop: elemenTujuan.offset().top-50
		}, 1250, 'swing');
		e.preventDefault();
});
