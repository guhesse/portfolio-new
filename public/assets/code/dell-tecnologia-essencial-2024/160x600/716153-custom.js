var banner = document.getElementById('banner');
var legal = document.getElementById('roll-cta');

var tl = gsap.timeline({ repeat: 0, repeatDelay: 1.5 });
gsap.defaults({
	ease: Quad.easeInOut,
	force3D: false,
	duration: 0.5
});

window.onload = function () {
	const el = document.body.querySelectorAll('.js-split-text');
	el.forEach(function (el, index) {
		el.innerHTML = el.textContent.split("").map(letter =>
			`<span class=letter>${letter}</span>`
		).join("");
	});

	tl.set(banner, { visibility: "visible" })

		/*frame one*/
		.from(".dell-logo, .funding-box, .cta-1", .3, { autoAlpha: 0 }, "frame1")
		.from(".f1-pro", { autoAlpha: 0, x: "100%" }, "frame1")
		.from(".badge1 .letter", .3, { autoAlpha: 0, ease: 'Sine.easeIn', stagger: 0.02 }, "frame1+=.3")
		.from(".bundle-txt-1", { autoAlpha: 0 }, "frame1+=1")
		.from(".title1 .letter", .3, { autoAlpha: 0, ease: 'Sine.easeIn', stagger: 0.02 }, "frame1+=.5")
		.to(".badge1, .bundle-txt-1, .title1", { autoAlpha: 0 }, "frame1+=2.5")
		.to(".f1-pro, .cta-1, .dell-logo, .funding-box", { autoAlpha: 0 }, "frame1+=2.7")

		/*frame two*/
		.add("frame2", "frame1+=3")
		.from(".f2-bg", .3, { autoAlpha: 0 }, "frame2")
		.from(".bg-pattern1", { autoAlpha: 0, x: "20%" }, "frame2")
		.from(".f2-pro", { autoAlpha: 0, x: "100%" }, "frame2+=.3")
		.from(".cta-2", { autoAlpha: 0 }, "frame2+=.3")
		.from(".title2 .letter", .2, { autoAlpha: 0, ease: 'Sine.easeIn', stagger: 0.02 }, "frame2+=.3")
		.from(".bundle-txt-2", { autoAlpha: 0 }, "frame2+=1")
		.to(".title2", { autoAlpha: 0 }, "frame2+=2.5")
		.to(".f2-pro, .cta-2, .bg-pattern1, .bundle-txt-2", { autoAlpha: 0 }, "frame2+=2.7")


		/*frame three*/
		.add("frame3", "frame2+=3")
		.from(".f3-bgImg, .f3-bgUp", .3, { autoAlpha: 0 }, "frame3")
		.from(".cta-3", { autoAlpha: 0 }, "frame3")
		.from(".bundle-txt-3", { autoAlpha: 0 }, "frame3+=.3")
		.to(".f3-bgImg, .f3-bgUp, .bundle-txt-3, .cta-3", { autoAlpha: 0 }, "frame3+=2.7")

		/*frame four*/
		.add("frame4", "frame3+=3")
		.from(".bg-pattern4", { autoAlpha: 0, y: "-20%" }, "frame4")
		.from(".f4-pro", { autoAlpha: 0, y: "-100%" }, "frame4+=.3")
		.to(".cta-2", .3, { autoAlpha: 1 }, "frame4")
		.set(".dell-element-4", { autoAlpha: 1, top: "0.5%" }, "frame4+=.3")
		.to(".dell-element-4", .75, { top: "93.5%" }, "frame4+=.3")
		.from(".title4 .letter", .3, { autoAlpha: 0, ease: 'Sine.easeIn', stagger: 0.02 }, "frame4+=.5")
		.from(".proname-txt-4", { autoAlpha: 0 }, "frame4+=.5")
		.to(".dell-element-4, .title4", { autoAlpha: 0 }, "frame4+=2.5")
		.to(".f2-bg, .bg-pattern4, .f4-pro, .proname-txt-4, .cta-2", { autoAlpha: 0 }, "frame4+=2.7")

		/*frame five*/
		.add("frame5", "frame4+=3")
		.to(".funding-logo, .funding-copy, .dell-logo", .3, { autoAlpha: 1 }, "frame5")
		.from(".f5-bg, .cta-4, .bundle-txt-5", .3, { autoAlpha: 0 }, "frame5")
		.from(".badge5 .letter", .3, { autoAlpha: 0, ease: 'Sine.easeIn', stagger: 0.02 }, "frame5+=.3")
		.from(".title5 .letter", .3, { autoAlpha: 0, ease: 'Sine.easeIn', stagger: 0.02 }, "frame5+=.5")


	/*roll over*/
	// 	.from("#roll-cta", { autoAlpha: 0, x: "100%" }, "frame5+=1")
	// 	.from("#rolltext", { autoAlpha: 0 }, "frame5+=1")
	// 	.from("#legal-text", { autoAlpha: 0 }, "frame5+=1")

	// legal.addEventListener("mouseover", legalHover);
	// function legalHover() {
	// 	tl.pause();
	// 	gsap.to("#legal", .5, { top: 0, ease: Power1.easeOut })
	// }

	// legal.addEventListener("mouseout", legalOut);
	// function legalOut() {
	// 	tl.play();
	// 	gsap.to("#legal", .5, { top: "-120%", ease: Power1.easeIn });
	// }


	//tl.pause(14)
	var currentDuration = tl.duration();
	var repeatDelay = tl.repeatDelay();
	console.log(currentDuration + repeatDelay);

};