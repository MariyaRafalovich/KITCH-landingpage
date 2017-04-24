				
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
