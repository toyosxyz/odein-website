import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export const scrollingAnimations = ()=>{   
      const loader = document.querySelector('.loader')
      //Check for font loaded and remove loader
      document.fonts.ready.then(function () {
        setTimeout(()=>{
          document.querySelector('#root').classList.remove('no-scroll')
        }, 1500)
      })

      const cursor = document.querySelector('.cursor');
      if (!cursor) return;


    // Track cursor position
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    });

    //Lazyloading videos
    document.addEventListener("DOMContentLoaded", function() {
      var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));
    
      if ("IntersectionObserver" in window) {
        var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
          entries.forEach(function(video) {
            if (video.isIntersecting) {
              for (var source in video.target.children) {
                var videoSource = video.target.children[source];
                if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
                  videoSource.src = videoSource.dataset.src;
                }
              }
    
              video.target.load();
              video.target.classList.remove("lazy");
              lazyVideoObserver.unobserve(video.target);
            }
          });
        });
    
        lazyVideos.forEach(function(lazyVideo) {
          lazyVideoObserver.observe(lazyVideo);
        });
      }
    });
}