document.addEventListener(
  'DOMContentLoaded',
  () => {
    const scroller = new SweetScroll({
          trigger: 'a[href^="#top"]',       // Selector for trigger (must be a valid css selector)
          duration: 1000,                 // Specifies animation duration in integer
          easing: 'easeInOutExpo',         // Specifies the pattern of easing
          
    });
  },
  false,
);

//scrol and hide header  functions
  const body = document.body;
  const header = document.querySelector("header");
  const main = document.querySelector("main");
  const headerHeight = document.querySelector("header").offsetHeight;
  
  main.style.top = headerHeight + "px";
  
  let lastScroll = 0;
  
  window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset;
  
    // console.log("current: ", currentScroll);
    // console.log("last: ", lastScroll);
  
    if (currentScroll - lastScroll > 0) {
        // scrolled down -- header hide
        header.classList.add("scroll-down");
        header.classList.remove("scroll-up");
    } else {
        // scrolled up -- header show
        header.classList.add("scroll-up");
        header.classList.remove("scroll-down");
    }
  
    lastScroll = currentScroll;
    // console.log("last: ", lastScroll);
  });

