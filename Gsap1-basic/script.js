var t1 = gsap.timeline();

t1.to("#box1", {
  x: 400,
  rotate: 360,
  backgroundColor: "blue",
  scale: 0.5,
  duration: 2,
});
t1.to("#box2", {
  x: 400,
  rotate: 360,
  backgroundColor: "blue",
  scale: 0.5,
  duration: 2,
});

t1.to("#box3", {
  x: 400,
  rotate: 360,
  backgroundColor: "blue",
  scale: 0.5,
  duration: 2,
});

// gsap.from("#box",{
//     x:400,
//     rotate:360,
//     backgroundColor:"blue",
//     duration:2,
//     delay:1
// })
