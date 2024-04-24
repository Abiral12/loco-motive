function loading() {
    var tl = gsap.timeline()

    tl.to(".yellow1", {
        top: "-100%",
        delay: 0.5,
        duration: 1,
        ease: "expo.out",
    })

    tl.from(".yellow2", {
        top: "100%",
        delay: 0.5,
        duration: 0.5,
        ease: "expo.out",
    }, "anim")

    tl.to(".loader h1", {
        color: "black",
        delay: 0.6,
        duration: 0.5,
    }, "anim")

    tl.to(".loader", {
        opacity: 0,
        onComplete: () => {
            // Init Locomotive Scroll after animation completes
            const scroll = new LocomotiveScroll({
                el: document.querySelector('.main'),
                smooth: true
            });

            document.querySelector(".footer h2").addEventListener("click", () => {
                scroll.scrollTo(0)
            })

        }
    })
}

loading()


var elems = document.querySelectorAll(".elem");
var page2 = document.querySelector(".page2");
elems.forEach(function (ele) {
    ele.addEventListener("mouseenter", function () {
        var bgimg = ele.getAttribute("data-img")
        page2.style.backgroundImage = `url(${bgimg})`

    })
})