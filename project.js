const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: false,
});

function firstPageAnimation(){
    var tl = gsap.timeline();

    tl.from("#nav", {
        y: '-10',
        opacity:0,
        duration: 1.5,
        ease: Expo.easeInOut
    })

        .to(".boundingelem",{
            y: 0,
            ease: Expo.easeInOut,
            duration:2,
            delay:-1,
            stagger: .2 
        })

        .from("#herofooter", {
            y: '-10',
            opacity:0,
            duration: 1.5,
            delay:-1,
            ease: Expo.easeInOut
        })

};

var timeout;

function circlesizer() {
    const minicircle = document.querySelector("#minicircle");
    let mouseX = 0;
    let mouseY = 0;

    // Track mouse movement
    window.addEventListener("mousemove", (event) => {
        mouseX = event.clientX - 4; // Adjust for cursor size
        mouseY = event.clientY - 5; // Adjust for cursor size

        const scrollY = window.scrollY || document.documentElement.scrollTop;
        minicircle.style.transform = `translate(${mouseX}px, ${mouseY + scrollY}px) scale(1)`;
    });

    // Adjust position on scroll
    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        minicircle.style.transform = `translate(${mouseX}px, ${mouseY + scrollY}px) scale(1)`;
    });
}

function circleMouseFollower(xscale, yscale){
    window.addEventListener("mousemove", function(dets){
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX-4}px, ${dets.clientY-5}px) scale(${xscale}, ${yscale})`;
    })
};


 
document.querySelectorAll(".elem").forEach(function (elem){
    var rotate = 0;
    var diffrot = 0;


    elem.addEventListener("mouseleave", function(dets){
        gsap.to(elem.querySelector("img"),{
            opacity: 0,
            ease: Power3,
            
        });
    });
 
    elem.addEventListener("mousemove" , function(dets){
        let diff = dets.clientY - elem.getBoundingClientRect().top ;
        diffrot = dets.clientX - rotate;
        let left=dets.clientX ;
        rotate = dets.clientX ;

        
        gsap.to(elem.querySelector("img"),{
            opacity: 1,
            ease: Power3,
            top:diff,
            left: left,
            rotate: gsap.utils.clamp(-20, 20, diffrot * 0.8),
        });

        setTimeout(function(){
            gsap.to(elem.querySelector("img"),{
                rotate:0,
            });
        },100);

    });
   
});

document.querySelectorAll(".elem").forEach(function (elem){


elem.addEventListener("mouseover", function(dets){

    let diff = dets.clientY - elem.getBoundingClientRect().top ;
    rotate = dets.clientX ;

    diffrot = dets.clientX - rotate;
    let left=dets.clientX ;
    // rotate = dets.clientX ;
    gsap.to(elem.querySelector("img"),{
        opacity: 1,
        ease: Power3,
        top:diff,
        left: left,
        
    });
});
})

circlesizer();
circleMouseFollower();
firstPageAnimation();