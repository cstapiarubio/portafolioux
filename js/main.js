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
const speed = 200;
counters.forEach(counter=>{
	const updateCount= ()=>{
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;
		const inc = target/speed;

		console.log(count);

		if(count < target){
			counter.innerText = Math.ceil(count + inc);
			setTimeout(updateCount, 1);
		} else{
			count.innerText = target;
		}
	}
	updateCount();
});
	


