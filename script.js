var tl=gsap.timeline();

tl.from('h3',{
  y:-100,
  delay:1,
  duration:.6,
  color:'red',
  stagger:0.2
})

tl.from('img',{
  opacity:0,
  x:-100,
  duration:0.6,
  scale:0
})

tl.from('.name h1',{
  x:100,
  duration:.8,
  stagger:0.5,
  opacity:0,
  
})

