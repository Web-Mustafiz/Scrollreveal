ScrollReveal().reveal(".box", { delay: 250 });
ScrollReveal().reveal(".box", { duration: 500 });
ScrollReveal().reveal(".box", { delay: 375, reset: true });

// Is the same as...

ScrollReveal().reveal(".box", {
  delay: 0,
  distance: "10px",
  duration: 800,
  easing: "cubic-bezier(0.6, 0, 0, 1)",
  interval: 0,
  opacity: 0,
  origin: "bottom",
  rotate: {
    x: 0,
    y: 0,
    z: 0,
  },
  scale: 0.8,
  cleanup: false,
  container: document.documentElement,
  desktop: true,
  mobile: true,
  reset: false,
  useDelay: "always",
  viewFactor: 0.0,
  viewOffset: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  afterReset: function (el) {},
  afterReveal: function (el) {},
  beforeReset: function (el) {},
  beforeReveal: function (el) {},
});

ScrollReveal({ mobile: false });

if (ScrollReveal().noop) {
  console.log("ScrollReveal is non-operational!");
}
