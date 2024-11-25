// change navbar styles on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})




// show/hide faq answer

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        // change icon
        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'uil uil-plus'){
            icon.className = "uil uil-minus";
        } else {
            icon.className = "uil uil-plus";
        }
    })
})

//video1
resetVid1 = function() {
    //get the Video div and replace with the original video source code
    var videoPanel = document.getElementById('vid1');
    videoPanel.innerHTML = '<iframe width="236" height="105" src="//www.youtube.com/embed/OYND3dqP6-0?autoplay=1" frameborder="0" allowfullscreen></iframe>';    
}

PlayVid1 = function() {
    //get the Video div and play new video on button click
    var videoPanel = document.getElementById('vid1');
    videoPanel.innerHTML = '<iframe width="280" height="157" src="//www.youtube.com/embed/OYND3dqP6-0?autoplay=1&start=17" frameborder="0" allowfullscreen></iframe>';

    //replace video after 8.5 seconds
    setTimeout(resetVid, 8500);
}

//video2
resetVid2 = function() {
    //get the Video div and replace with the original video source code
    var videoPanel = document.getElementById('vid2');
    videoPanel.innerHTML = '<iframe width="236" height="105" src="//www.youtube.com/embed/XJC_Kzy89iY?autoplay=1" frameborder="0" allowfullscreen></iframe>';    
}

PlayVid2 = function() {
    //get the Video div and play new video on button click
    var videoPanel = document.getElementById('vid2');
    videoPanel.innerHTML = '<iframe width="280" height="157" src="//www.youtube.com/embed/XJC_Kzy89iY?autoplay=1&start=17" frameborder="0" allowfullscreen></iframe>';

    //replace video after 8.5 seconds
    setTimeout(resetVid, 8500);
}

//video3
resetVid3 = function() {
    //get the Video div and replace with the original video source code
    var videoPanel = document.getElementById('vid3');
    videoPanel.innerHTML = '<iframe width="236" height="105" src="//www.youtube.com/embed/BOF79TAIkYQ?autoplay=1" frameborder="0" allowfullscreen></iframe>';    
}

PlayVid3 = function() {
    //get the Video div and play new video on button click
    var videoPanel = document.getElementById('vid3');
    videoPanel.innerHTML = '<iframe width="280" height="157" src="//www.youtube.com/embed/BOF79TAIkYQ?autoplay=1&start=17" frameborder="0" allowfullscreen></iframe>';

    //replace video after 8.5 seconds
    setTimeout(resetVid, 8500);
}

//video4
resetVid4 = function() {
    //get the Video div and replace with the original video source code
    var videoPanel = document.getElementById('vid4');
    videoPanel.innerHTML = '<iframe width="236" height="105" src="//www.youtube.com/embed/WlqoPe8-Wi0?autoplay=1" frameborder="0" allowfullscreen></iframe>';    
}

PlayVid4 = function() {
    //get the Video div and play new video on button click
    var videoPanel = document.getElementById('vid4');
    videoPanel.innerHTML = '<iframe width="280" height="157" src="//www.youtube.com/embed/WlqoPe8-Wi0?autoplay=1&start=17" frameborder="0" allowfullscreen></iframe>';

    //replace video after 8.5 seconds
    setTimeout(resetVid, 8500);
}

//video5
resetVid5 = function() {
    //get the Video div and replace with the original video source code
    var videoPanel = document.getElementById('vid5');
    videoPanel.innerHTML = '<iframe width="236" height="105" src="//www.youtube.com/embed/4EaYeZyzIB0?autoplay=1" frameborder="0" allowfullscreen></iframe>';    
}

PlayVid5 = function() {
    //get the Video div and play new video on button click
    var videoPanel = document.getElementById('vid5');
    videoPanel.innerHTML = '<iframe width="280" height="157" src="//www.youtube.com/embed/4EaYeZyzIB0?autoplay=1&start=17" frameborder="0" allowfullscreen></iframe>';

    //replace video after 8.5 seconds
    setTimeout(resetVid, 8500);
}

//video6
resetVid6 = function() {
    //get the Video div and replace with the original video source code
    var videoPanel = document.getElementById('vid6');
    videoPanel.innerHTML = '<iframe width="236" height="105" src="//www.youtube.com/embed/BrdUzEFT1XQ?autoplay=1" frameborder="0" allowfullscreen></iframe>';    
}

PlayVid6 = function() {
    //get the Video div and play new video on button click
    var videoPanel = document.getElementById('vid6');
    videoPanel.innerHTML = '<iframe width="280" height="157" src="//www.youtube.com/embed/BrdUzEFT1XQ?autoplay=1&start=17" frameborder="0" allowfullscreen></iframe>';

    //replace video after 8.5 seconds
    setTimeout(resetVid, 8500);
}

//video7
resetVid7 = function() {
    //get the Video div and replace with the original video source code
    var videoPanel = document.getElementById('vid7');
    videoPanel.innerHTML = '<iframe width="236" height="105" src="//www.youtube.com/embed/SUrXsAhGu98?autoplay=1" frameborder="0" allowfullscreen></iframe>';    
}

PlayVid7 = function() {
    //get the Video div and play new video on button click
    var videoPanel = document.getElementById('vid7');
    videoPanel.innerHTML = '<iframe width="280" height="157" src="//www.youtube.com/embed/SUrXsAhGu98?autoplay=1&start=17" frameborder="0" allowfullscreen></iframe>';

    //replace video after 8.5 seconds
    setTimeout(resetVid, 8500);
}

//video8
resetVid8 = function() {
    //get the Video div and replace with the original video source code
    var videoPanel = document.getElementById('vid8');
    videoPanel.innerHTML = '<iframe width="236" height="105" src="//www.youtube.com/embed/GneIpdOirZY?autoplay=1" frameborder="0" allowfullscreen></iframe>';    
}

PlayVid8 = function() {
    //get the Video div and play new video on button click
    var videoPanel = document.getElementById('vid8');
    videoPanel.innerHTML = '<iframe width="280" height="157" src="//www.youtube.com/embed/GneIpdOirZY?autoplay=1&start=17" frameborder="0" allowfullscreen></iframe>';

    //replace video after 8.5 seconds
    setTimeout(resetVid, 8500);
}

//video9
resetVid9 = function() {
    //get the Video div and replace with the original video source code
    var videoPanel = document.getElementById('vid9');
    videoPanel.innerHTML = '<iframe width="236" height="105" src="C:\Users\yash\IP Project\images1\course-vid-4.mp4 autoplay=1" frameborder="0" allowfullscreen></iframe>';    
}

PlayVid9 = function() {
    //get the Video div and play new video on button click
    var videoPanel = document.getElementById('vid9');
    videoPanel.innerHTML = '<iframe width="280" height="157" src="/C:\Users\yash\IP Project\images1\course-vid-4.mp4 autoplay=1&start=17" frameborder="0" allowfullscreen></iframe>';

    //replace video after 8.5 seconds
    setTimeout(resetVid, 8500);
}


// show/hide nav menu

const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

// close nav menu

const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)