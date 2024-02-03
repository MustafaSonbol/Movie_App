/*======================Validations for Contact US=============================*/
function validations()
{
    $('#contact input').on("input",function(){
        $('#contact input').on("input",function(){
            if(checkClassError()) 
            {
                $('form button').addClass('animate__shakeX bg-danger buttonFormActive');
                $(`form button`).mouseenter(formButtonValidation);
                $('form button').addClass('animate__shakeX bg-danger buttonFormActive');
                $('form button').css({'cursor':'default','userSelect':'none'});
            }
            else
            {
                $('form button').removeClass('animate__shakeX bg-danger buttonFormActive');
                $(`form button`).css({"marginLeft":"0px"});
                $('form button').off('mouseenter', formButtonValidation);
                $('form button').removeClass('animate__shakeX bg-danger buttonFormActive');
                $('form button').css('cursor','pointer');
            }
            })
        function checkClassError(){
            if($('#contact .error').hasClass('animate__flipInX'))
            {
               return true;
            }
            else
            {
              return false;
            }
        }
    })
    $('#contact #name').on("input",function(){
        const regex = /^[a-zA-z\s]{1,36}$/
        const $error =  $('#name').next();
        const $this = $(this);
        if($(this).val() == "")
        {
          hideError($error,$this);
        }
        else if(regex.test($(this).val()))
        {
          hideError($error,$this);
        }
        else
        {
          $error.html("Invalid Name , only Characters allowed");
          ShowError($error,$this);
        }
    })
    $('#contact #email').on("input",function(){
        const regex = /^[a-zA-Z0-9]+@[a-z0-9]+\.[a-z]{3}$/;
        const $error =  $('#email').next();
        const $this = $(this);
        if($(this).val() == "")
        {
            hideError($error,$this);
        }
        else if(regex.test($(this).val()))
        {
            hideError($error,$this);
        }
        else
        {
          $error.html("Invalid Email");
          ShowError($error,$this);
        }
    })
    $('#contact #phone').on("input",function(){
        const regex = /^(02)?(01)[0125][0-9]{8}$/;
        const $error =  $('#phone').next();
        const $this = $(this);
        if($(this).val() == "")
        {
            hideError($error,$this);
        }
        else if(regex.test($(this).val()))
        {
            hideError($error,$this);
        }
        else
        {
          $error.html("Invalid Phone Number");
          ShowError($error,$this);
        }
    })
    $('#contact #age').on("input",function(){
        const regex = /^(1[6-9]|[2-9][0-9]|100)$/;
        const $error =  $('#age').next();
        const $this = $(this);
        if($(this).val() == "")
        {
            hideError($error,$this);
        }
        else if(regex.test($(this).val()))
        {
            hideError($error,$this);
        }
        else
        {
            $error.html("Your age must be over +18");
          ShowError($error,$this);
        }
    })
    $('#contact #password').on("input",function(){
        const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        const $error =  $('#password').next();
        const $this = $(this);
        if($(this).val() == "")
        {
            hideError($error,$this);
        }
        else if(regex.test($(this).val()))
        {
            hideError($error,$this);
        }
        else
        {
          $error.html("password must contain numbers & letters at least 8 character");
          ShowError($error,$this);
        }
    })
    $('#contact #repassword').on("input",function(){
        const $error =  $('#repassword').next();
        const $this = $(this);
        if($(this).val() == "")
        {
            hideError($error,$this);
        }
        else if($(this).val() == $('#password').val())
        {
            hideError($error,$this);
        }
        else
        {
          $error.html("Password not match");
          ShowError($error,$this);
        }
    })
    $('.showPass').click(function(){
        if ($('#password').attr('type') == "text") 
        {
            $('#password').attr('type','password');
            $('.showPass').html('<i data-show="show" class="fa-solid fa-eye-slash"></i>');
        } else {
            $('#password').attr('type','text');
            $('.showPass').html('<i data-show="show" class="fa-solid fa-eye"></i>');
        }
    })
    $('#password').focus(function(){
        $('.showPass').css("opacity",1);
        $('.showPass').css("bottom",10);
    })
    $(document).click(function(e){
        if($(e.target)[0] == $('#password')[0] || $(e.target).attr('data-show') == $('.showPass i').attr('data-show') )
        {
            $('.showPass').css("opacity",1);
            $('.showPass').css("bottom",10);
        }
        else
        {
            $('.showPass').css("opacity",0);
            $('.showPass').css("bottom",-20);
        }
    })
    function hideError($error,$this)
    {
        $this.css("border-bottom-color", "#CED4DA");
        $error.html(null);
        $error.removeClass('animate__animated animate__flipInX');
        $error.addClass('animate__animated animate__fadeOutUp');
    }
    function ShowError($error,$this)
    {
        $this.css("border-bottom-color", "rgb(214, 46, 51)");
        $error.removeClass('animate__animated animate__fadeOutUp');
        $error.addClass('animate__animated animate__flipInX');
    }
    function formButtonValidation(){
        let buttonLocation =  $(`form button`).css("marginLeft")
            if(buttonLocation == "250px")
            {
               $(`form button`).css({"marginLeft":"0px"});
            }
            else
            {
               $(`form button`).css({"marginLeft":"250px"});
            }
           $(`form button`).keydown(function(e){
               if(e.key == "Enter")
               {
                   event.preventDefault();
               }
           })
    }
}
//export{validations}



/*===============Card Hover====================*/
let results,movies,movieImage,movieTitle,movieOverView,movieRelease,stars;

function cardHoverIn()
    {
      $(this).find($('.overlay')).css({"opacity":"1","visibility":"visible"});
      $(this).find($('.overlay .title')).removeClass('animate__slideOutLeft');
      $(this).find($('.overlay .title')).addClass('animate__fadeInDown animate__delay-0s');
      $(this).find($('.overlay .desc')).removeClass('animate__slideOutLeft');
      $(this).find($('.overlay .desc')).addClass('animate__flipInX animate__delay-0s');
      $(this).find($('.overlay .date')).removeClass('animate__slideOutLeft');
      $(this).find($('.overlay .date')).addClass('animate__fadeInUp animate__delay-0s');
      $(this).find($('.overlay .rate')).removeClass('animate__slideOutLeft');
      $(this).find($('.overlay .rate')).addClass('animate__fadeInUp animate__delay-0s');
      $(this).find($('.cardImage img')).addClass("animate");
  }


function cardHoverOut()
  {
    $(this).find($('.overlay')).css({"opacity":"0","visibility":"hidden"});
    $(this).find($('.overlay .title')).removeClass('animate__fadeInDown animate__delay-0s');
    $(this).find($('.overlay .title')).addClass('animate__slideOutLeft');
    $(this).find($('.overlay .desc')).removeClass('animate__flipInX animate__delay-0s');
    $(this).find($('.overlay .desc')).addClass('animate__slideOutLeft');
    $(this).find($('.overlay .date')).removeClass('animate__fadeInUp animate__delay-0s');
    $(this).find($('.overlay .date')).addClass('animate__slideOutLeft');
    $(this).find($('.overlay .rate')).removeClass('animate__fadeInUp animate__delay-0s');
    $(this).find($('.overlay .rate')).addClass('animate__slideOutLeft');
    $('.cardImage img').removeClass("animate");
}  



/*======================Display The Databases=============================*/

function display()
{
let imgPath = 'https://image.tmdb.org/t/p/w500';
let term = '';
    for(let [key,value] of movies)
    {
         conditions(value,imgPath);
         term += `
         <div class="col-lg-4 col-md-6 col-sm-12 animate__animated">
         <div class="item overflow-hidden position-relative">
             <div class="cardImage">
                 <img src="${movieImage}" class="img-fluid">
             </div>
             <div class="overlay overflow-hidden">
                 <h1 class="animate__animated title">${value[movieTitle]}</h1>    
                 <p class="animate__animated desc">${movieOverView}</p>
                 <p class="animate__animated date"><span class="fst-normal">Release Date<span> : ${movieRelease}</p>
                 <h3 class="rate animate__animated">${stars}</h3>
                 <h3 class="rate animate__animated vote">${value.vote_average.toFixed(1)}</h3>
             </div>
         </div>
     </div>
    `
         $('#hero .row').html(term);
         $('#hero .row div').addClass("animate__fadeIn");
         $('#hero .item ').mouseenter(cardHoverIn);
        $('#hero .item').mouseleave(cardHoverOut);
    }
}



/*======================Search Input=============================*/

async function searchMovie(term) {
    let movie = `https://api.themoviedb.org/3/search/movie?query=${term}&api_key=e454e47710ccca6355cb771c48eba8c7&language=en-US&include_adult=false`;
    let myHttp = await fetch(`${movie}`);
    if (myHttp.ok && 400 != myHttp.status) {
        let Data = await myHttp.json();
        results = Data.results;
        movies = new Map(Object.entries(results));
        display();
    }
}





/*======================get the Movies=============================*/

async function getMovie(term) {
    let movie = `https://api.themoviedb.org/3/${term}?api_key=e454e47710ccca6355cb771c48eba8c7&language=en-US&include_adult=false`;
    let myHttp = await fetch(`${movie}`);
    if (myHttp.ok && 400 != myHttp.status) {
        let Data = await myHttp.json();
         results = Data.results;
        movies = new Map(Object.entries(results));
        display();
    }
}


/*======================Scroll Button=============================*/

$(document).ready(function() {
    function scroll() {
        $(window).scroll(backToTop);

        function backToTop() {
            if ($(window).scrollTop() > 100) {
                $('#back-to-top').addClass("active");
            } else {
                $('#back-to-top').removeClass("active");   
            }
        }
    }

    scroll();
});
/*======================Close The NavBar=============================*/


function closeNav() 
{
    $('.menu ul li').animate({"paddingTop":"250px","opacity":"0"},1000);
    $(".side-nav").css("margin-left","-250px");
    $("nav").css("margin-left", "0px");
    $('.nav-menu').html('<i class="fa-solid fa-align-justify"></i>');
}

getMovie("movie/now_playing");

/*======================Open The NavBar=============================*/

$('.nav-menu').on('click', function(){
    if ($("nav").css("margin-left") == "250px") {
        closeNav();
    } else {
        $(".side-nav").css("margin-left","0px");
        $("nav").css("margin-left", "250px");
        $('.menu ul li').animate({"paddingTop":"25px","opacity":"1"},1000);
        $('.nav-menu').html('<i class="fa-solid fa-xmark"></i>');
    }
});

/*======================Movies Attributes Getter=============================*/

$('.menu a').on('click',function(){
    if($(this).attr("attr") == "nowPlaying")
    {
        getMovie("movie/now_playing");
        topZero();
    }
    else if($(this).attr("attr") == "popular")
    {
        getMovie("movie/popular");
        topZero();
    }
    else if($(this).attr("attr") == "topRated")
    {
        getMovie("movie/top_rated");
        topZero();
    }
    else if($(this).attr("attr") == "trending")
    {
    getMovie("trending/movie/day");
    topZero();
    }
    else if($(this).attr("attr") == "upcoming")
    {
        getMovie("movie/upcoming");
        topZero();
    }
});

/*======================NavBar Section Getter=============================*/

$('.menu li a').on('click',function(){
    if($(this).attr("section"))
    {
    let sectionLocation = $($(this).attr("section")).offset().top;
    $('html, body').animate({scrollTop:sectionLocation}, 2000);
    }
});

/*======================Scroll to top=============================*/



function topZero()
{
    $('html, body').animate({scrollTop:0}, 1500);
}


$("#back-to-top").on('click',topZero());

$('#search').on("input", e => {
    searchMovie(e.target.value);
    if(e.target.value == "")
    {
        getMovie("movie/now_playing");
    }
});

$(document).ready(function(){
    $('.loading').fadeOut(2000)
})

/*======================Movies Votes Checking=============================*/

function checkMovieVote(value)
{
    if(value.vote_average < 1)
    {
        stars = `<i class="fa-solid fa-star text-muted fs-6"></i>`;
    }
    else if(value.vote_average < 2)
    {
        let term = '';
        stars = term + `<i class="fa-regular fa-star-half-stroke text-warning fs-6"></i>`;
    }
    else if(value.vote_average < 3)
    {
        stars =  `<i class="fa-solid fa-star text-warning fs-6"></i>`;
    }
    else if(value.vote_average <4)
    {
        let term = '';
        for (let i = 0; i < 1; i++) {
        term += `<i class="fa-solid fa-star text-warning fs-6"></i>`;
        }
        stars = term + `<i class="fa-regular fa-star-half-stroke text-warning fs-6"></i>`;
    }
    else if(value.vote_average <5)
    {
        let term = '';
        for (let i = 0; i < 2; i++) {
        term += `<i class="fa-solid fa-star text-warning fs-6"></i>`;
        }
        stars = term;
    }
    else if(value.vote_average <6)
    {
        let term = '';
        for (let i = 0; i < 2; i++) {
        term += `<i class="fa-solid fa-star text-warning fs-6"></i>`;
        }
        stars = term + `<i class="fa-regular fa-star-half-stroke text-warning fs-6"></i>`;
    }
    else if(value.vote_average < 7)
    {
        let term = '';
        for (let i = 0; i < 3; i++) {
        term += `<i class="fa-solid fa-star text-warning fs-6"></i>`;
        }
        stars = term;
    }
    else if(value.vote_average < 8)
    {
        let term = '';
        for (let i = 0; i < 3; i++) {
        term += `<i class="fa-solid fa-star text-warning fs-6"></i>`;
        }
        stars = term + `<i class="fa-regular fa-star-half-stroke text-warning fs-6"></i>`;
    }
    else if(value.vote_average < 9)
    {
        let term = '';
        for (let i = 0; i < 4; i++) {
        term += `<i class="fa-solid fa-star text-warning fs-6"></i>`;
        }
        stars = term;
    }
    else if(value.vote_average < 10)
    {
        let term = '';
        for (let i = 0; i < 4; i++) {
        term += `<i class="fa-solid fa-star text-warning fs-6"></i>`;
        }
        stars = term + `<i class="fa-regular fa-star-half-stroke text-warning fs-6"></i>`;
    }
    else
    {
        let term = '';
        for (let i = 0; i < 5; i++) {
            term += `<i class="fa-solid fa-star text-warning fs-6"></i>`;
        }
        stars = term;
    }
}
/*======================Movies Date Checking=============================*/

function checkMovieDate(value)
{
    if(value.hasOwnProperty('release_date'))
    {
        movieRelease = `${value.release_date}`;
    }
    else if(value.hasOwnProperty('first_air_date'))
    {
        movieRelease = `${value.first_air_date}`;
    }
    else
    {
        movieRelease = "Release Date UnKnown";
    }
}

/*======================Movies Description Checking=============================*/

function checkMovieDesc(value)
{
    if(value.overview.length > 300)
    {
        movieOverView = `${value.overview.slice(0,300)}...`;
    }
    else
    {
        movieOverView = `${value.overview}`;
    }
}

/*======================Movies Title Checking=============================*/

function checkMovieTItle(value)
{
    if(value.hasOwnProperty('title'))
    {
        movieTitle = `title`;
    }
    else if(value.hasOwnProperty('name'))
    {
            movieTitle = `name`;
    }
}

/*======================Movies Images Checking=============================*/

function checkMovieImage(value,imgPath)
{
    if(value.poster_path == null && value.backdrop_path == null)
    {
        movieImage = `images/default-movie.jpg`;
    }
    else if(value.poster_path == null)
    {
        movieImage = `${imgPath+value.backdrop_path}`;
    }
    else if(value.hasOwnProperty('poster_path'))
    {
        movieImage = `${imgPath+value.poster_path}`;
    }
}



function conditions(value,imgPath)
{
    checkMovieImage(value,imgPath);
    checkMovieTItle(value);
    checkMovieDesc(value);
    checkMovieDate(value);
    checkMovieVote(value);
}
