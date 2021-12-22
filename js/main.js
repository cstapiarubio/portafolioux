/* fx nav color scroll
$(document).ready(function() {
$(window).scroll(function() {
        $('#nav-trans').toggleClass('nav', $(this).scrollTop() > $('#nav-trans').height());
      });

 $(".button-collapse").sideNav({
  closeOnClick:true,
  menuWidth:100,
 });
});*/

const counters = document.querySelectorAll('.counter');
const speed = 900;
counters.forEach(counter=>{
	const updateCount= ()=>{
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;
		const inc = target/speed;

		if(count < target){
			counter.innerText = Math.ceil(count + inc);
			setTimeout(updateCount, 1);
		} else{
			count.innerText = target;
		}
	}
	updateCount();
});

function heart(){
	setTimeout(function(){
		$("#corazon").toggleClass('bi bi-suit-heart', 2000).toggleClass('bi bi-suit-heart-fill', 2000);
	}, 1000)
}
heart();
setInterval(heart, 2000);

/*function calendar(){
	let calend = document.getElementById("calendario");
	setTimeout(function(){
		$("calend").toggleClass('bi bi-calendar', 2000).toggleClass('bi bi-calendar-check', 2000);
	}, 1000)
}
calendar();
setInterval(calendar, 2000);*/



