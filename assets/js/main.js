$(function(){
   setTimeout(function() {
      $('#splash').fadeOut(500);
   }, 1000);
});

    var cont = $('#container');
    
    $('#categorias').on('change', function() {
    	var selection = $('#categorias').val();
      //cont.text(selection);
      if( selection === "Mexicana") {
      cont.html('<img src="assets/img/mexi-1.jpg"><img src="assets/img/mexi-2.jpg"><img src="assets/img/mexi-3.jpg"><img src="assets/img/mexi-4.jpg"><img src="assets/img/mexi-5.jpg"><img src="assets/img/mexi-6.jpg">');
      }
      if( selection === "Venezolana") {
      cont.html('<img src="assets/img/vene-1.jpg"><img src="assets/img/vene-2.jpg"><img src="assets/img/vene-3.jpg"><img src="assets/img/vene-4.jpg"><img src="assets/img/vene-5.jpg"><img src="assets/img/vene-6.jpg">');
      }
      if( selection === "Chilena") {
      cont.html('<img src="assets/img/chil-1.jpg"><img src="assets/img/chil-2.jpg"><img src="assets/img/chil-3.jpg"><img src="assets/img/chil-4.jpg"><img src="assets/img/chil-5.jpg"><img src="assets/img/chil-6.jpg">');
      }
      if( selection === "Peruana") {
      cont.html('<p>Hola esto es un append Peruano</p> <img />');
      }
})


    //('<img src="assets/img/thai/1.png" class="thai_one">')