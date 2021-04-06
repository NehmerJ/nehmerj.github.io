particlesJS.load('particles-js', '/JS/particles.json', function() {
	console.log('callback - particles.js config loaded');
  });
  
  $(document).ready(function(){
	
	var $randomnbr = $('.nbr');
	var $timer= 10;
	var $it;
	var $data = 0;
	var index;
	var change;
	var letters = ["R", "e", "d", "K", "a", "n", "g", "a", "r", "o", "o"];
	
	$randomnbr.each(function(){
		
	  change = Math.round(Math.random()*100);
	  $(this).attr('data-change', change);
	  
	});
	
	function random(){
	  return Math.round(Math.random()*9);
	};
	
	function select(){
	  return Math.round(Math.random()*$randomnbr.length+1);
	};
	
	function value(){
	  $('.nbr:nth-child('+select()+')').html(''+random()+'');
	  $('.nbr:nth-child('+select()+')').attr('data-number', $data);
	  $data++;
	  
	  $randomnbr.each(function(){
		  if(parseInt($(this).attr('data-number')) > parseInt($(this).attr('data-change'))){
			index = $('.ltr').index(this);
			$(this).html(letters[index]);
			$(this).removeClass('nbr');
		  }
  
	  });
	  
	};
	
	$it = setInterval(value, $timer);
	  
  });
  
  
  // navbar toggle script
  
  document.addEventListener('DOMContentLoaded', () => {
  
	// Get all "navbar-burger" elements
	const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
	// Check if there are any navbar burgers
	if ($navbarBurgers.length > 0) {
  
	  // Add a click event on each of them
	  $navbarBurgers.forEach( el => {
		el.addEventListener('click', () => {
  
		  // Get the target from the "data-target" attribute
		  const target = el.dataset.target;
		  const $target = document.getElementById(target);
  
		  // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
		  el.classList.toggle('is-active');
		  $target.classList.toggle('is-active');
  
		});
	  });
	}
  
  });