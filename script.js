// responsive nav functions
function showNav() {
  gsap.to("#hiddenNav", {
    x: 0,
    opacity: 1,
    duration: 0.8,
  });
  gsap.from("#hiddenNav>ul>li", {
    x: 50,
    opacity: 0,
    duration: 0.7,
    stagger: 0.5,
  });
}

function hideNav() {
  gsap.to("#hiddenNav", {
    x: "100vw",
    opacity: 1,
    duration: 0.6,
  });
}

// animation functions

function section1Animation() {
  let headerAnimation = gsap.timeline();

  headerAnimation.from("header>h1", {
    y: -30,
    duration: 0.5,
    opacity: 0,
  });
  headerAnimation.from("#showNav", {
    y: -30,
    duration: 0.3,
    opacity: 0,
  });
  headerAnimation.from("header>#nav1>ul>li", {
    y: -30,
    duration: 0.7,
    opacity: 0,
    stagger: 0.2,
  });

  headerAnimation.from("#fxdElement", {
    opacity: 0,
    duration: 1,
  });

  let section1Animation = gsap.timeline();

  section1Animation.from(
    "#section1>.left>h4, #section1>.left>h2,#section1>.left>p",
    {
      x: -60,
      duration: 1,
      opacity: 0,
      stagger: 0.3,
    }
  );
  section1Animation.from("#section1>.left>div>button,#section1>.left>div>i ", {
    opacity: 0,
    duration: 1,
  });

  let section1Animation2 = gsap.timeline();

  section1Animation2.from("#section1>.right>img", {
    x: 200,
    duration: 1,
    opacity: 0,
  });
}
section1Animation();
function section2Animation() {
  let section2Animation = gsap.timeline({
    scrollTrigger: {
      trigger: "#section2",
      scroller: "body",
      // markers: true,
      start: "top 70%",
      end: "top 20%",
      scrub: 5,
    },
  });

  section2Animation.from("#section2>.left>img", {
    x: -60,
    opacity: 0,
  });
  section2Animation.from("#section2>.right>h2", {
    opacity: 0,
    y: 50,
  });
  section2Animation.from(".card", {
    x: 200,
    opacity: 0,
    stagger: 0.1,
  });
}
section2Animation();

function section3Animation() {
  let section3Animation = gsap.timeline({
    scrollTrigger: {
      trigger: "#section3",
      scroller: "body",
      scrub: 5,
      // markers: true,
      start: "top 70%",
      end: "top 20%",
    },
  });

  section3Animation.from("#section3>.top>h2", {
    y: -50,
    opacity: 0,
  });
  section3Animation.from("#section3>.bottom>.bigcard", {
    y: -60,
    opacity: 0,
    stagger: 0.3,
  });
}
section3Animation();
function section4Animation() {
  let section4Animation = gsap.timeline({
    scrollTrigger: {
      trigger: "#section4",
      scroller: "body",
      scrub: 3,
      // markers: true,
      start: "top 60%",
      end: "top 40%",
    },
  });

  section4Animation.from("#section4>.top>h2", {
    y: -50,
    opacity: 0,
  });

  section4Animation.from("#section4>.cards", {
    opacity: 0,
    x: -50,
  });
}
footerAnimation();
section4Animation();
function footerAnimation() {
  let footerAnimation = gsap.timeline({
    scrollTrigger: {
      trigger: "footer",
      scroller: "body",
      scrub: 3,
      // markers: true,
      start: "top 80%",
      end: "top 60%",
    },
  });
  footerAnimation.from("footer>.row>div", {
    opacity: 0,
    x: -50,
    duration: 0.7,
    stagger: 0.3,
  });
}
