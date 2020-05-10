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
    }, 1000, 'easeInOutExpo');

    e.preventDefault();
});

//parallax

//about
$(window).on('load',function(){
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
});

$(window).scroll(function () {
    var wScroll = $(this).scrollTop();
    //    console.log(wScroll);    untuk memeriksa nilai scroll
    
    //jumbotron
    $('.jumbotron img').css({
        'transform': 'translate(0px, ' + wScroll / 4 + '%)'
    });
    $('.jumbotron h1').css({
        'transform': 'translate(0px, ' + wScroll / 2 + '%)'
    });
    $('.jumbotron p').css({
        'transform': 'translate(0px, ' + wScroll / 1.2 + '%)'
    });

    //portfolio
    if(wScroll > $('.portfolio').offset().top -250){
        $('.portfolio .img-thumbnail').each(function(i){
            setTimeout(function(){
                $('.portfolio .img-thumbnail').eq(i).addClass('muncul');
            },300 * (i+1));
        });
    }
});