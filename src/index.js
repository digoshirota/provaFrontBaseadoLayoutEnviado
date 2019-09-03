import './main.scss'
import 'animate.css/animate.css'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel';


$(document).ready(function(){

    //slider
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        items: 1
    })

   
        const element =  document.querySelector('.topHeader');
        element.classList.add('animated', 'fadeInDown'); 
        
        const element2 =  document.querySelector('.owl-carousel');
        element2.classList.add('animated', 'fadeIn');  
    


    //mobile
    $('.menu-mobile').click(function(){
        $('.navMobile').show();
        $(".navMobile").animate({width: 40+"%"});
        $('.background-menu').show()
    })
    $('.close').click(function(){
        $(".navMobile").animate({width: 0+"%"});
        
        setTimeout(function(){
            $('.navMobile').hide();
            $('.background-menu').hide()
        },400)
    })

    $(window).scroll(function(){
        if($(window).scrollTop() > 40){
            $('.header').addClass('headerFixed')
            $('main').addClass('hackTop')
            $('.header .topHeader').css('padding','6px 0 0 0')
            $('.menu-mobile').css('top', '14px')
            $('.background-menu').css('top', '0px')
        }
        else{
            $('.header').removeClass('headerFixed')
            $('main').removeClass('hackTop')
            $('.header .topHeader').css('padding','14px 0 0 0')
            $('.menu-mobile').css('top', 'inherit')
            $('.background-menu').css('top', 'inherit')
        }
    });

    //scroll top
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("myBtn").style.display = "block";
        } else {
            document.getElementById("myBtn").style.display = "none";
        }
    }
      
    $("#myBtn").click(function(){
        var body = $("html, body");
        body.stop().animate({scrollTop:0}, 500, 'swing', function() { 
        });
    });
    

    
});