// $('.page-scroll').on('click', function (e) {

//     //ambil isi href
//     var tujuan = $(this).attr('href');
//     // console.log(tujuan);    

//     //tangkap elemen ybs
//     var elemenTujuan = $(tujuan);
//     // console.log(elemenTujuan);    

//     $('body').scrollTop(elemenTujuan.offset().top);

//     // e.preventDefault();
// });

$('.page-scroll').on('click', function (e) {

    var tujuan = $(this).attr('href');

    var elemenTujuan = $(tujuan);

    $('html , body').animate({
        scrollTop: elemenTujuan.offset().top - 55
    },1000, 'easeInOutExpo');

    e.preventDefault();
});