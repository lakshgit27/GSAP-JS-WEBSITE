var page1Content = document.querySelector("#page1-content")
var cursor = document.querySelector("#cursor")
page1Content.addEventListener("mousemove",function(dets){
    // dets - will be giving me an list of mouseevent in the console. Mousemove ko click se replace krunga toh pointer events milenge

    // console.log(dets.x)
    // below one is one of the simplest method to make a div move with the cursor. But, here for smoother transitions , we'll be using gsap

    // cursor.style.left = dets.x +"px";
    // cursor.style.top = dets.y +"px";
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y
    })
})

// Page1content se bahar niklte hi different behave krega so usse bachne ke liye, mouse ki entry and exit par event 
// listeners laga denge.
page1Content.addEventListener("mouseenter", function(){
    gsap.to(cursor,{
        scale:1,
        opacity:1
    })
})
page1Content.addEventListener("mouseleave", function(){
    gsap.to(cursor,{
        scale:0,
        opacity:0
    })
})