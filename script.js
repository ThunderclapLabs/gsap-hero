gsap.config({ nullTargetWarn: false });
function createHomeHero() {
  const DOM = {
    heading1: document.querySelector(".hero__animate"),
    heading2: document.querySelector(".hero__anything"),
    button: document.querySelector(".hero__button"),
    squiggle: document.querySelector("#hero-squiggle"),
  };

  const selector = {
    animate: gsap.utils.selector(DOM.heading1),
    anything: gsap.utils.selector(DOM.heading2),
  };

  const defaults = {
    ease: "power3.out",
    duration: 0.8,
  };

  function wormMouseMovement() {
    let windowWidth;
    let windowHeight;

    const setWindowSize = () => {
      windowWidth = window.innerWidth;
      windowHeight = window.innerHeight;
    };

    setWindowSize();

    const xTo = gsap.quickTo(DOM.squiggle, "xPercent", {
      duration: 1,
      ease: "power3",
    });
    const yTo = gsap.quickTo(DOM.squiggle, "yPercent", {
      duration: 1,
      ease: "power3",
    });
    const rotateTo = gsap.quickTo(DOM.squiggle, "rotation", {
      duration: 1,
      ease: "power3",
    });

    window.addEventListener("resize", () => {
      setWindowSize();
    });

    window.addEventListener("mousemove", (e) => {
      const xPercent = gsap.utils.mapRange(0, windowWidth, -20, 20, e.x);
      const yPercent = gsap.utils.mapRange(0, windowHeight, -20, 20, e.y);
      const rotateRange = gsap.utils.clamp(
        -1,
        1,
        gsap.utils.mapRange(windowWidth * 0.25, windowWidth * 0.75, 1, -1, e.x)
      );

      rotateTo(yPercent * 1 * rotateRange);
      xTo(xPercent);
      yTo(yPercent);
    });
  }

  function letter1() {
    const tl = gsap.timeline({ defaults: defaults });
    const wrap = selector.animate(".a > div");
    const char = selector.animate(".a > div > div");

    tl.set(wrap, { transformOrigin: "50% 100%" });
    tl.from(char, { yPercent: 100 });
    tl.from(
      wrap,
      { rotationX: -180, ease: "back.out(1.7)", duration: 1.2 },
      "-=.6"
    );

    return tl;
  }

  function letter2() {
    const tl = gsap.timeline({ defaults: defaults });
    const circles = selector.animate(".hero__flair--circles");
    const circlesSvg = selector.animate(".hero__flair--circles svg");
    const windmill = selector.animate(".hero__flair--windmill");
    const wrap = selector.animate(".n > .clip > div");
    const chars = selector.animate(".n > .clip > div > div");

    tl.set(chars[1], { autoAlpha: 1 });
    tl.set(circles, { autoAlpha: 1, yPercent: 100 });
    tl.from(circlesSvg, { scale: 0, ease: "back.out(1.5)" });
    tl.to(circles, {
      yPercent: -200,
      autoAlpha: 0,
      duration: 1.7,
      ease: "power4.out",
    });
    tl.from(wrap, { yPercent: 100, duration: 0.5 }, "<");
    tl.from(
      windmill,
      {
        x: () => {
          return window.innerWidth / -2;
        },
        rotationZ: -360,
        duration: 1.2,
      },
      "<"
    );

    tl.from(chars[0], { rotationY: -180, duration: 0.4 }, "+=.5");
    tl.to(chars[1], { rotationY: 180, duration: 0.4 }, "<");
    tl.to(
      windmill,
      {
        rotationZ: 90,
        duration: 0.4,
        repeat: -1,
        repeatDelay: 1,
      },
      "<"
    );

    return tl;
  }

  function letter3() {
    const char = selector.animate(".i > div");
    return gsap.from(char, {
      yPercent: -100,
      ease: "back.out(1.6)",
      duration: 1,
    });
  }

  function letter4() {
    const char = selector.animate(".m > div");
    return gsap.from(char, {
      xPercent: -100,
      ...defaults,
    });
  }

  function letter5() {
    const tl = gsap.timeline({ defaults: defaults });
    const wrap = selector.animate(".a2");
    const star = selector.animate(".hero__flair--star");
    const starSvgWrap = selector.animate(".a2 .a2__svg-circles");
    const starSvg = selector.animate(".hero__flair--star svg");
    const char = selector.animate(".a2 > div > div");

    tl.set(star, { xPercent: -150, yPercent: -120, autoAlpha: 1 });
    tl.set(starSvgWrap, { autoAlpha: 1 });
    tl.from(starSvg, { scale: 0, duration: 0.4 });
    tl.add(letter4(), "+=.6");
    tl.to(star, { xPercent: 0, y: 0 }, "<");
    tl.set(wrap, { overflow: "hidden" });
    tl.to(star, { yPercent: 130, ease: "power2.in" }, "+=.5");
    tl.from(char, { yPercent: 100 }, "-=.3");
    tl.to(starSvg, { rotationZ: 360, ease: "none", repeat: 2, duration: 2 }, 0);

    return tl;
  }

  function letter6() {
    const tl = gsap.timeline({ defaults: defaults });
    const char = selector.animate(".hero__animate .t > div > div")[0];
    const numbersWrap = selector.animate(".hero__animate .t > div > div");
    const numbers = selector.animate(".hero__animate .t .t_number >div");

    tl.set(numbersWrap, { autoAlpha: 1 });
    tl.from(numbers[0], { yPercent: 100, duration: 0.5 }, "<");
    tl.fromTo(
      [numbers[1], numbers[2]],
      { yPercent: 100 },
      {
        yPercent: -100,
        duration: 0.7,
        stagger: 0.1,
        ease: "power2.inOut",
      },
      "+=.2"
    );
    tl.to(numbers[0], { yPercent: -100 }, "-=.6");
    tl.from(char, { yPercent: 100, duration: 0.8 }, "<");
    tl.add(letter7(), "<");

    return tl;
  }

  function letter7() {
    const char = selector.animate(".e > div");
    return gsap.from(char, {
      yPercent: 100,
      duration: 0.9,
    });
  }

  function letter8_9() {
    const tl = gsap.timeline({ defaults: defaults });
    const topChars = selector.anything(
      ".a> div:first-of-type, .n> div:first-of-type"
    );
    const bottomChars = selector.anything(
      ".a> div:last-of-type, .n> div:last-of-type"
    );

    tl.fromTo(
      bottomChars,
      { yPercent: 100 },
      {
        keyframes: {
          yPercent: [100, 0, 100, 0],
          ease: "power1.out",
        },
        duration: 3,
        stagger: 0.4,
      }
    );

    tl.fromTo(
      topChars,
      {
        yPercent: -100,
      },
      {
        keyframes: {
          yPercent: [-100, -100, 20, -100],
          ease: "power1.out",
        },
        duration: 3,
        stagger: 0.4,
      },
      "<"
    );

    return tl;
  }

  function letter10() {
    const char = selector.anything(".y > div");
    return gsap.from(char, {
      rotationY: -180,
      duration: 1,
      scale: 0,
    });
  }

  function letter11() {
    const tl = gsap.timeline({ defaults: defaults });
    const bolt = selector.anything(".hero__flair--bolt");
    const path = selector.anything(".hero__flair--bolt #bolt-path");
    const rect = selector.anything(".hero__flair--bolt #bolt-rect");
    const char = selector.anything(".t .bolt_t");

    tl.set(bolt, { strokeDasharray: 600, autoAlpha: 1 });
    tl.fromTo(bolt, { strokeDashoffset: 600 }, { strokeDashoffset: 0 });
    tl.from(
      rect,
      {
        yPercent: 100,
        transformOrigin: "50% 100%",
        duration: 3.5,
        ease: "power4.out",
      },
      "<.5"
    );

    tl.from(
      bolt,
      {
        keyframes: {
          scale: [1, 1.2, 0.4, 0.7, 0.3, 0.5, 0],
          duration: 2,
        },
      },
      "-=2"
    );
    tl.from(char, { scale: 0, ease: "back.out(1.4)" }, "<.5");

    return tl;
  }

  function letter12() {
    const tl = gsap.timeline({ defaults: defaults });
    const worm = selector.anything(".hero__flair--worm img");
    const char = selector.anything(".h .clip> div");

    tl.from(worm, {
      autoAlpha: 0,
      duration: 1.5,
      yPercent: 100,
      rotationZ: 180,
      ease: "back.out(1.6)",
    });
    tl.from(char, { yPercent: -100 }, "<.2");

    return tl;
  }

  function letter13() {
    const tl = gsap.timeline({ defaults: defaults });
    const char = selector.anything(".i > div");

    tl.from(char, { autoAlpha: 0, duration: 0.1 }, "<");
    tl.from(char, { rotationX: -450, duration: 1.3 }, "<.14");
    tl.add(letter14(), "<+=.5");
    tl.to(
      char,
      {
        rotationX: 540,
        duration: 1.5,
        repeat: -1,
        repeatDelay: 3,
        yoyo: true,
        yoyoEase: "power2.out",
      },
      "+=2"
    );

    return tl;
  }

  function letter14() {
    const tl = gsap.timeline({ defaults: defaults });
    const char = selector.anything(".n2 div");

    tl.from(char, { xPercent: -100 });

    return tl;
  }

  function letter15() {
    const tl = gsap.timeline({ defaults: defaults });
    const char = selector.anything(".g div");

    tl.from(
      char,
      {
        autoAlpha: 0,
        rotationZ: -120,
        duration: 2,
        ease: "elastic.out(1, 0.4)",
      },
      "<.6"
    );

    return tl;
  }

  function buttonIn() {
    gsap.set(DOM.button, { yPercent: 30 });
    return gsap.to(DOM.button, {
      autoAlpha: 1,
      yPercent: 0,
      ...defaults,
    });
  }

  function createTimeline() {
    const tl = gsap.timeline({
      id: "hero",
      defaults: defaults,
    });

    tl.set([DOM.heading1, DOM.heading2], { autoAlpha: 1 });

    tl.add(letter1());
    tl.add(letter2(), 0.3);
    tl.add(letter3(), 1.1);
    tl.add(letter5(), 0.9);
    tl.add(letter6(), 1.2);
    tl.add(letter8_9(), 1.6);
    tl.add(letter10(), 1.8);
    tl.add(letter11(), 2.2);
    tl.add(letter12(), 1.9);
    tl.add(letter13(), 2.4);
    tl.add(letter15(), 2.4);
    tl.add(buttonIn(), 1.5);
  }

  return {
    wormMouseMovement,
    createTimeline,
  };
}

function createGetGsapBtn() {
  const selector = (element) => document.querySelector(element);

  const DOM = {
    block: null,
    get: null,
    gsap: null,
    icons: [],
    circles: null,
    windmill: null,
    square: null,
    star: null,
  };

  DOM.block = selector(".gsapbtn__button");
  DOM.get = selector(".gsapbtn__word:first-child");
  DOM.gsap = selector(".gsapbtn__word:last-child");
  DOM.icons = Array.from(selector(".gsapbtn__button svg"));
  DOM.circles = selector("#btn-circles");
  DOM.windmill = selector("#btn-windmill");
  DOM.square = selector("#btn-square");
  DOM.star = selector("#btn-star");

  let playing = false;
  let tl = createTimeline();

  function createTimeline() {
    const tl = gsap.timeline({
      defaults: {
        duration: 1,
      },
      paused: true,
      onStart: () => {
        playing = true;
      },
      onComplete: () => {
        playing = false;
      },
    });

    gsap.set([DOM.circles, DOM.windmill, DOM.square, DOM.star], { scale: 0 });

    tl.set([DOM.circles, DOM.windmill, DOM.square, DOM.star], {
      scale: 0,
      x: 0,
      y: 10,
      rotateZ: 0,
      opacity: 1,
    })
      .set(DOM.icons[0], { yPercent: -140 })
      .set(DOM.icons[1], { yPercent: 0 })
      .to(DOM.get, {
        keyframes: [
          { x: -30, ease: "power4.out" },
          { x: 0, ease: "power4.in" },
        ],
      })
      .to(
        DOM.gsap,
        {
          keyframes: [
            { x: 30, ease: "power4.out" },
            { x: 0, ease: "power4.in" },
          ],
        },
        "<"
      )
      .to(
        DOM.icons[0],
        {
          yPercent: 0,
          duration: 0.6,
          ease: "power3.in",
        },
        "<.3"
      )
      .to(
        DOM.icons[1],
        {
          yPercent: 140,
          duration: 0.6,
          ease: "power3.out",
        },
        "<"
      )
      .to(
        [DOM.circles, DOM.windmill, DOM.square, DOM.star],
        {
          keyframes: [
            { scale: 0, zIndex: 2, duration: 0 },
            {
              y: () => {
                return gsap.utils.random(-80, -120);
              },
              scale: 1,
            },
            { zIndex: -1, duration: 0.05 },
            {
              y: 0,
              scale: 0.3,
              opacity: 0,
            },
          ],
          ease: Power4.out,
          stagger: 0.15,
        },
        "<"
      )
      .to(
        [DOM.circles, DOM.windmill, DOM.square, DOM.star],
        {
          x: () => {
            return gsap.utils.random(-50, 100);
          },
          rotateZ: () => -360,
          ease: Power4.out,
          stagger: 0.15,
        },
        "<"
      );

    return tl;
  }

  function playTimeline() {
    if (playing) return;

    tl.invalidate().play(0);
  }

  function initEvents() {
    DOM.block.addEventListener("mouseenter", playTimeline);
  }

  initEvents();
}
function createSubtitle(block) {
  const DOM = {
    wrap: block,
    braces: block.querySelectorAll(".subtitle__brace"),
    label: block.querySelectorAll(".subtitle__label"),
  };

  function buildOn() {
    gsap.set(DOM.wrap, { autoAlpha: 1, delay: 1.8 });

    gsap.from(DOM.label, {
      opacity: 0,
      duration: 0.7,
      delay: 2,
    });
    gsap.from(
      DOM.braces[0],
      {
        opacity: 0,
        xPercent: 100,
      },
      "<0.1"
    );
    gsap.from(
      DOM.braces[1],
      {
        opacity: 0,
        xPercent: -100,
      },
      "<"
    );
  }

  buildOn();
}

document.addEventListener("DOMContentLoaded", () => {
  const homeHero = createHomeHero();
  homeHero.wormMouseMovement();
  homeHero.createTimeline();

  createGetGsapBtn();

  createSubtitle(document.querySelector(".subtitle"));
});
