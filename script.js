$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar 
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll button
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });
    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });
    // buat navigation bar
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    // buat typing
    var typed = new Typed(".typing", {
        strings: ["Student", "Gamer", "Weeb", "person who won't let you down ;)  "],
        typeSpeed: 100,
        backSpeed: 80,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["Student", "Gamer", "Weeb", "person who won't let you down ;)  "],
        typeSpeed: 100,
        backSpeed: 80,
        loop: true
    });
    
});