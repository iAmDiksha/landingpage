let t1 = gsap.timeline()

t1.from('.logo',{
    y:200,
    opacity:0,
    duration:1
})

t1.from('.anime',{
    y:500,
    stagger:.2,
    opacity: 0,
    duration:1
})

t1.from('.img1 img',1,{
    y:500,
    scale:1.4,
    stagger:0.2,
    opacity:0,
    duration:2
})
