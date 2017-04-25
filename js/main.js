				
/* */		
		
		window.onload = function(){	
			lightgallery.init({
			});
		}
		
/* */	
	
		$(function() {
			$('.button').click(function(){
				$('#zb1').fadeIn(300);
				$('#wrapper').fadeIn(300);
			});
		});
		
		$(function() {
			$('#wrapper').click(function(){
				$('#zb1').fadeOut(300);
				$('#thnx').fadeOut(300);
				$('#wrapper').fadeOut(300);
			});
		});

		$(function() {
			$('.close, .close2').click(function(){
				$('#zb1').fadeOut(300);
				$('#thnx').fadeOut(300);
				$('#wrapper').fadeOut(300);
			});
		});					

/* forms */

		$(function() {
			$('#form').validate(
			{	
				rules:{
					"name":{
						required:true,
						maxlength:40
					},
					"number":{
						required:true
					}
				},
				messages:{
					"name":{
						required:""
					},
					"number":{
						required:""
					}
				},		
			})
		});

		$(function() {
			$('#form2').validate(
			{	
				rules:{
					"name":{
						required:true,
						maxlength:40
					},
					"number":{
						required:true
					}
				},
				messages:{
					"name":{
						required:""
					},
					"number":{
						required:""
					}
				},		
			})
		});

		$(function() {
			$('#form3').validate(
			{	
				rules:{
					"name":{
						required:true,
						maxlength:40
					},
					"number":{
						required:true
					}
				},
				messages:{
					"name":{
						required:""
					},
					"number":{
						required:""
					}
				},		
			})
		});

		$(function() {
			$('#form4').validate(
			{	
				rules:{
					"name":{
						required:true,
						maxlength:40
					},
					"number":{
						required:true
					}
				},
				messages:{
					"name":{
						required:""
					},
					"number":{
						required:""
					}
				},		
			})
		});

		$(function() {
			$('#form5').validate(
			{	
				rules:{
					"name":{
						required:true,
						maxlength:40
					},
					"number":{
						required:true
					}
				},
				messages:{
					"name":{
						required:""
					},
					"number":{
						required:""
					}
				},		
			})
		});

/* */

		$(function() {
            $('#form, #form2, #form3, #form4, #form5').ajaxForm(function() { 
				$('#wrapper, #thnx').fadeIn(300);
				$('#zb1').fadeOut(0);
				$('#form')[0].reset();
				$('#form2')[0].reset();
				$('#form3')[0].reset();
				$('#form4')[0].reset();
				$('#form5')[0].reset();
            }); 
        }); 



$(document).ready(function($) {

  var steps = $('.steps');
  
  // Timer for delay, must same as CSS!
  var stepsTimer = 200,
      stepsTimerL = 400;
  
  // remove mini between current
  steps.addClass('is-mini');
  steps.each(function(i) {
    var self = $(this);
    if (self.hasClass('is-current')) {
      self.removeClass('is-mini');
      self.prev().removeClass('is-mini');
      self.next().removeClass('is-mini');
    }
  });

  // Steps Animation
  steps.addClass('is-circle-entering');
  
  // Delay for BounceIn
  setTimeout(function() {
    steps.each(function(i) {
      var self = $(this),
          timer = (stepsTimer * 2) * i;
      setTimeout(function() {
        // Line Flow
        self.addClass('is-line-entering');
        if(self.hasClass('is-current')) {
          // Title FadeIn
          steps.addClass('is-title-entering');
        }
      }, timer);
    });
  }, stepsTimer);

});
