var tl = new TimelineMax({ onUpdate: updatePercentage });
var tl2 = new TimelineMax({ onUpdate: updatePercentage });
var tl3 = new TimelineMax({ onUpdate: updatePercentage });

const controller = new ScrollMagic.Controller();

tl.from("blockquote", 0.5, { x: 200, opacity: 0 });
tl.from("span", 1, { width: 0 }, "=-.5");
tl.from("#office", 1, { x: -200, opacity: 0, ease: Power4.easeInOut }, "=-1");
tl.from("#building", 1, { x: 200, opacity: 0, ease: Power4.easeInOut }, "=-.7");

tl2.from("#box", 1, { opacity: 0, scale: 0 });
tl2.to("#box", 0.5, {
  left: "20%",
  scale: 1.3,
  borderColor: "white",
  borderWidth: 12,
  boxShadow: "1px 1px 0px 0px rgba(0,0,0,0.09)",
});
tl2.to("#box", 0.5, {
  right: "20%",
  scale: 1.3,
  borderColor: "black",
  borderWidth: 12,
  boxShadow: "1px 1px 0px 0px rgba(0,0,0,0.09)",
});

tl3.from(".scroll-up", 0.5, { x: 100, opacity: 0 }, "=-0.2");

const scene = new ScrollMagic.Scene({
  triggerElement: ".sticky",
  triggerHook: "onLeave",
  duration: "100%",
})
  .setPin(".sticky")
  .setTween(tl)
  .addTo(controller);

const scene2 = new ScrollMagic.Scene({
  triggerElement: ".sticky",
  triggerHook: "onLeave",
  duration: "80%",
})
  .setTween(tl2)
  .addTo(controller);

// const scene3 = new ScrollMagic.Scene({
//   triggerElement: ".sticky1",
//   triggerHook: "onLeave",
//   duration: "100%",
// })
//   .setPin(".sticky1")
//   .setTween(tl3)
//   .addTo(controller);

var tl4 = new TimelineMax({ onUpdate: updatePercentage });
tl4
  .to(".header2", 1, { x: -3000, opacity: 0 }, 0)
  .to(
    ".box-image, .box-image1, .box-image2, .box-image3, .box-image4, .box-image5, iphone",
    1,
    {
      right: "40%",
      top: "25%",
    },
    0.3
  )
  .from(
    ".iphone",
    1,
    {
      top: "100%",
    },
    0.3
  )
  .to(".text-desc", 1, { opacity: 0 }, 0.3)
  .to(
    ".box-1",
    1, //duration
    {
      bottom: "100%",
    },
    2 // delay
  );

const scene4 = new ScrollMagic.Scene({
  triggerElement: ".sticky1",
  triggerHook: "onLeave",
  duration: "200%",
})
  .setPin(".sticky1")
  .setTween(tl4)
  .addTo(controller);

function updatePercentage() {
  //percent.innerHTML = (tl.progress() *100 ).toFixed();
  tl.progress();
  tl2.progress();
  tl3.progress();
  tl4.progress();

  console.log(tl.progress());
  console.log("tl 2", tl4.progress());
}
