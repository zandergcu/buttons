// $(function() {
//   $( "#button" ).click(function() {
//     $( "#button" ).addClass( "onclic", 250, validate);
//   });
//
//   function validate() {
//     setTimeout(function() {
//       $( "#button" ).removeClass( "onclic" );
//       $( "#button" ).addClass( "validate", 450, callback );
//     }, 1125 );
//   }
//     function callback() {
//       setTimeout(function() {
//         $( "#button" ).removeClass( "validate" );
//       }, 625 );
//     }
//   });
//
//
//
//   var loading = function(e) {
//     e.preventDefault();
//     e.stopPropagation();
//     e.target.classList.add('loading');
//     e.target.setAttribute('disabled','disabled');
//     setTimeout(function(){
//       e.target.classList.remove('loading');
//       e.target.removeAttribute('disabled');
//     },1500);
//   };
//
//   var btns = document.querySelectorAll('button');
//   for (var i=btns.length-1;i>=0;i--) {
//     btns[i].addEventListener('click',loading);
//   }




  $(function(){
    $(".fancy-button").mousedown(function(){
      $(this).bind('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function(){
          $(this).removeClass('active');
      })
       $(this).addClass("active");
    });
  });
