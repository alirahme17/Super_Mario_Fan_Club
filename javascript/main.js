$(function() {
  
  let $btns = $('.gallery .button-group button');

    $btns.on("click", function(e){

        $('.gallery .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.gallery .grid-container').isotope({
            filter : selector
        });

        return false;
    })

    $('.gallery .button-group #btn1').trigger('click');


    let $more = $('.gallery .grid-container .more');

    $more.on("click", (e)=> {
      
      

    

      $(".gallery .grid-container .de-active").removeClass('de-active');
      e.target.classList.add('de-active');
      // $(".gallery .grid-container .more").classList.add('de-active')

      $('.gallery .button-group #btn1').trigger('click');

      return false ;
    })


  

 
    $('.gallery .grid-container .test-popup-link').magnificPopup({
      type: 'image',
      

      gallery:{
        enabled: true,
        
        navigateByImgClick: true,

        arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',

        tPrev: 'Previous (Left arrow key)',

        tNext: 'Next (Right arrow key)',

        tCounter: '<span class="mfp-counter">%curr% of %total%</span>' ,

        closeMarkup: '<button title="tClose" type="button" class="mfp-close">&#215;</button>' ,
          

      },

       zoom:{
         enabled: true,
        
         duration: 300,

         easing: 'ease-in-out',

      
      },

      
    
    });

   

 

    

});


