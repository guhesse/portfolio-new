var banner = document.getElementById('banner');

var tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });
gsap.defaults({
	ease: Quad.easeInOut,
	force3D: false,
	duration: 0.3
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
		.from(".aw-logo, .funding-box-f1, .cta", { autoAlpha: 0 }, "frame1")
		.from(".title1", { autoAlpha: 0, stagger: 0.2, left: "-15%" }, "frame1+=.3")
		.to(" .title1", { autoAlpha: 0 }, "frame1+=2.5")
		.to(".life-imgf1, .aw-logo, .funding-box", { autoAlpha: 0 }, "frame1+=2.5")
		.to(".f1-bg,.f1-header", { autoAlpha: 0 }, "frame1+=2.7")

		/*frame two*/
		.add("frame2", "frame1+=3")
		.from(".f2-bg, .f2-header", { autoAlpha: 0 }, "frame2")
		.from(".f2-pro, .hud-conf2", .5, { autoAlpha: 0, top: "100%" }, "frame2")
		.from(".title2", { autoAlpha: 0, stagger: 0.2, right: "15%" }, "frame2+=.3")
		.from(".hud2-txt1", { autoAlpha: 0 }, "frame2+=.75")
		.from(".hud2-txt2", { autoAlpha: 0, ease: 'Sine.easeIn', stagger: 0.02 }, "frame2+=.75")
		.from(".hud2-txt3", { autoAlpha: 0, ease: 'Sine.easeIn', stagger: 0.02 }, "frame2+=.9")
		.to(" .title2", { autoAlpha: 0 }, "frame2+=2.5")
		.to(".hud-conf2, .f2-pro", { autoAlpha: 0 }, "frame2+=2.7")
		.to(".f2-header", { left: "-50%" }, "frame2+=2.7")



		/*frame three*/
		.add("frame3", "frame2+=3")
		.from(".f3-header", { left: "50%" }, "frame3")
		.from(".f3-pro, .hud-conf3", .5, { autoAlpha: 0, top: "100%" }, "frame3")
		.from(".title3", { autoAlpha: 0, stagger: 0.2, left: "-15%" }, "frame3+=.3")
		.from(".hud3-txt1", { autoAlpha: 0 }, "frame3+=.75")
		.from(".hud3-txt2 .letter", { autoAlpha: 0, ease: 'Sine.easeIn', stagger: 0.02 }, "frame3+=.75")
		.from(".hud3-txt3 .letter", { autoAlpha: 0, ease: 'Sine.easeIn', stagger: 0.02 }, "frame3+=.9")
		.to(" .title3", { autoAlpha: 0 }, "frame3+=2.5")
		.to(".f2-bg, .f3-header, .hud-conf3, .f3-pro", { autoAlpha: 0 }, "frame3+=2.7")

		/*frame four*/
		.add("frame4", "frame3+=3")
		.from(".f4-bg, .life-imgf4, .f4-header", { autoAlpha: 0 }, "frame4")
		.from(".title4", { autoAlpha: 0, stagger: 0.2, left: "-15%" }, "frame4+=.3")
		.from(".protxt-f4", { autoAlpha: 0, ease: 'Sine.easeIn', stagger: 0.02 }, "frame4+=.75")
		.to(" .title4, .protxt-f4", { autoAlpha: 0 }, "frame4+=2.5")
		.to(".f4-bg, .life-imgf4, .f4-header", { autoAlpha: 0 }, "frame4+=2.7")


		/*frame five*/
		.add("frame5", "frame4+=3")
		.to(".aw-logo, .funding-box", { autoAlpha: 1 }, "frame5")
		.from(".f5-bg, .f5-header", { autoAlpha: 0 }, "frame5")
		.from(".f5-pro", { autoAlpha: 0 }, "frame5")
		.from(".title5", { autoAlpha: 0, stagger: 0.2, left: "-15%" }, "frame5+=.3")
		.from(".protxt-f5", { autoAlpha: 0, ease: 'Sine.easeIn', stagger: 0.02 }, "frame5+=.75")

	/*roll over*/
	// 	.from("#roll-cta", { autoAlpha: 0, x: "100%" }, "frame5+=.5")
	// 	.from("#rolltext", { autoAlpha: 0 }, "frame5+=.5")
	// 	.from("#legal-text", { autoAlpha: 0 }, "frame5+=.5")

	// legal.addEventListener("mouseover", legalHover);
	// function legalHover() {
	// 	tl.pause();
	// 	gsap.to("#legal", .5, { top: 0, ease: Power1.easeOut })
	// }

	// legal.addEventListener("mouseout", legalOut);
	// function legalOut() {
	// 	tl.play();
	// 	gsap.to("#legal", .5, { top: "-120%", ease: Power1.easeIn })
	// }

	// ;

	//tl.pause(8)
	var currentDuration = tl.duration();
	var repeatDelay = tl.repeatDelay();

};

//. Remove warn messages from GSAP
console.warn = (function (oldFunction) {
	return function () {
		if (!/GSAP/.test(arguments[0])) {
			oldFunction.apply(this, arguments);
		}
	}
}(console.warn));