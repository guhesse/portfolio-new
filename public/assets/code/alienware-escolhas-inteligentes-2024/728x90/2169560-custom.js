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
		.from(" .bundle-txt-1", { autoAlpha: 0 }, "frame1+=1")
		.from(".title1 .letter", .3, { autoAlpha: 0, ease: 'Sine.easeIn', stagger: 0.02 }, "frame1+=.5")
		.to(".badge1, .bundle-txt-1, .title1", { autoAlpha: 0 }, "frame1+=2.5")
		.to(".f1-pro, .cta-1, .dell-logo, .funding-box", { autoAlpha: 0 }, "frame1+=2.7")

		/*frame two*/
		.add("frame2", "frame1+=3")
		.from(".f2-bg", .3, { autoAlpha: 0 }, "frame2")
		.from(".bg-pattern1", { autoAlpha: 0, y: "-40%" }, "frame2")
		.from(".f2-pro", { autoAlpha: 0, y: "-100%" }, "frame2+=.3")
		.from(" .cta-2", { autoAlpha: 0 }, "frame2+=.3")
		.from(" .bundle-txt-2", { autoAlpha: 0 }, "frame2+=1")
		.from(".title2 .letter", .3, { autoAlpha: 0, ease: 'Sine.easeIn', stagger: 0.02 }, "frame2+=.3")
		.to(".title2", { autoAlpha: 0 }, "frame2+=2.5")
		.to(".f2-pro, .f2-bg, .cta-2, .bg-pattern1, .bundle-txt-2", { autoAlpha: 0 }, "frame2+=2.7")


		/*frame three*/
		.add("frame3", "frame2+=3")
		.from(".f3-bgImg, .bg-f3", .3, { autoAlpha: 0 }, "frame3")
		.from(".cta-4", { autoAlpha: 0 }, "frame3")
		.from(".bundle-txt-3", { autoAlpha: 0 }, "frame3+=.3")
		.to(".f3-bgImg, .f3-bgUp, .bundle-txt-3, .cta-4, .bg-f3", { autoAlpha: 0 }, "frame3+=2.7")

		/*frame four*/
		.add("frame4", "frame3+=3")
		.to(".f2-bg", .3, { autoAlpha: 1 }, "frame4")
		.from(".bg-pattern4", { autoAlpha: 0, y: "-40%" }, "frame4")
		.from(".f4-pro", { autoAlpha: 0, y: "-100%" }, "frame4+=.3")
		.from(".cta-3", .3, { autoAlpha: 0 }, "frame4")
		.from(".proname-txt-4", { autoAlpha: 0 }, "frame4+=.5")
		.from(".title4 .letter", .3, { autoAlpha: 0, ease: 'Sine.easeIn', stagger: 0.02 }, "frame4+=.5")
		.to(".f2-bg, .bg-pattern4, .f4-pro, .title4, .cta-3, .proname-txt-4", { autoAlpha: 0 }, "frame4+=2.7")

		/*frame five*/
		.add("frame5", "frame4+=3")
		.to(".dell-logo", .3, { autoAlpha: 1 }, "frame5")
		.from(".f5-bg, .cta-5", .3, { autoAlpha: 0 }, "frame5")
		.to(".funding-box", .3, { autoAlpha: 1 }, "frame5")
		.from(".badge5 .letter", .3, { autoAlpha: 0, ease: 'Sine.easeIn', stagger: 0.02 }, "frame5+=.3")
		.from(".title5 .letter", .3, { autoAlpha: 0, ease: 'Sine.easeIn', stagger: 0.02 }, "frame5+=.5")
		.from(".proname-txt-f5 .letter", .3, { autoAlpha: 0, ease: 'Sine.easeIn', stagger: 0.02 }, "frame5+=.7")


	// 	/*roll over*/
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
	// 	gsap.to("#legal", .5, { top: "-120%", ease: Power1.easeIn })
	// }
	// ;

	//tl.pause(14)
	var currentDuration = tl.duration();
	var repeatDelay = tl.repeatDelay();
	// console.log(currentDuration + repeatDelay);
	calculateLogoSizes();
	calculateCopySizes();
};



//-- Auto calculate vf logo size --//

function calculateLogoSizes() {
	try {
		//. Define as proporções
		var proportionF1 = 1;
		var proportionF5 = 1;

		//. Pega os elementos
		var fundingLogof1 = document.getElementsByClassName('funding-logo')[0];
		var fundingLogof5 = document.getElementsByClassName('funding-logo')[0];
		var dellLogof1 = document.getElementsByClassName('dell-logo')[0];
		var dellLogof5 = document.getElementsByClassName('dell-logof5')[0];

		//. Set de todas as proporções
		var fundingHeightf1 = fundingLogof1 ? fundingLogof1.clientHeight : 0;
		var fundingHeightf5 = fundingLogof5 ? fundingLogof5.clientHeight : 0;
		var dellHeightf1 = Math.round(fundingHeightf1 * proportionF1);
		var dellHeightf5 = Math.round(fundingHeightf5 * proportionF5);

		//. Define as alturas e mostra-as com a largura no console
		if (dellLogof1) {
			dellLogof1.style.height = `${dellHeightf1}px`
			console.log("Dell Logo f1: %c" + dellLogof1.offsetWidth + "x" + dellHeightf1 + "px", "color: #ad76fa");
		} else {
			console.log("Dell Logo f1: %c" + "Não existe", "color: #fb5f5f");
		}
		if (dellLogof5) {
			dellLogof5.style.height = `${dellHeightf5}px`
			console.log("Dell Logo f5: %c" + dellLogof5.offsetWidth + "x" + dellHeightf5 + "px", "color: #ad76fa");
		} else {
			console.log("Dell Logo f5: %c" + "Não existe", "color: #fb5f5f");
		}
		if (fundingLogof1) {
			console.log("Funding Logo f1: %c" + fundingLogof1.offsetWidth + "x" + fundingHeightf1 + "px", "color: #ad76fa");
		} else {
			console.log("Funding Logo f1: %c" + "Não existe", "color: #fb5f5f");
		}
		if (fundingLogof5) {
			console.log("Funding Logo f5: %c" + fundingLogof5.offsetWidth + "x" + fundingHeightf5 + "px", "color: #ad76fa");
		} else {
			console.log("Funding Logo f5: %c" + "Não existe", "color: #fb5f5f");
		}
	} catch (error) {
		console.error(error);
	}
}

//-- Auto calculate funding copy size --//

function calculateCopySizes() {
	// Get elements
	var fundingCopyf1 = document.getElementsByClassName('funding-copy')[0];
	var fundingCopyf5 = document.getElementsByClassName('funding-copy')[0];
	var ctaCopy = document.getElementsByClassName('cta-1')[0];

	// Set proportions
	var referenceSize = window.getComputedStyle(ctaCopy).fontSize;

	console.log("CTA Font Size: %c" + referenceSize, "color: #ff56b1");
	console.log("Funding Copy: %c" + referenceSize, "color: #ff56b1");

	// Set funding copy sizes
	fundingCopyf1.style.fontSize = referenceSize;
	fundingCopyf5.style.fontSize = referenceSize;

	window.getComputedStyle(fundingCopyf5).fontSize === referenceSize ? console.log("Does the font match sizes? %c" + "Yes", "color: #41d6c3") : console.log("Does the font match sizes? %c" + "No", "color: #fb5f5f");
}