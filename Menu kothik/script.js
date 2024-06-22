var arr1=[
    {image:"https://images.unsplash.com/photo-1521305916504-4a1121188589?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",name:"Triple tuffle cheese",content:"Flame grilled beef patty with brie, parmesan and blue cheese, 3 kinds of fried mushrooms (seasoned), topped with trufflemayo."},
    {image:"https://images.unsplash.com/photo-1674207166519-917608fb1303?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=940&q=80",name:"Paneer",content:"Flame grilled beef patty with brie, parmesan and blue cheese, 3 kinds of fried mushrooms (seasoned), topped with trufflemayo."},
    {image:"https://images.unsplash.com/photo-1550950158-d0d960dff51b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",name:"Burger",content:"Flame grilled beef patty with brie, parmesan and blue cheese, 3 kinds of fried mushrooms (seasoned), topped with trufflemayo."},
    {image:"https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=992&q=80",name:"Noodles",content:"Flame grilled beef patty with brie, parmesan and blue cheese, 3 kinds of fried mushrooms (seasoned), topped with trufflemayo."},
    {image:"https://images.unsplash.com/photo-1592663527359-cf6642f54cff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=419&q=80",name:"Cold Coffee",content:"Flame grilled beef patty with brie, parmesan and blue cheese, 3 kinds of fried mushrooms (seasoned), topped with trufflemayo."},
    {image:"https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",name:"Oreo Shake",content:"Flame grilled beef patty with brie, parmesan and blue cheese, 3 kinds of fried mushrooms (seasoned), topped with trufflemayo."}

]

function menu1(){
    var clutter1="";
    for(var i=0;i<3;i++)
    {
        clutter1 += `<div id="s1p1">
        <img src="${arr1[i].image}" alt="">
        <div id="line"></div>
        <h3>${arr1[i].name}</h3>
        <p>${arr1[i].content}</p>
    </div>`
    }
    document.querySelector("#s1").innerHTML=clutter1;
};
menu1();






function menu2(){
    var clutter2="";
    for(var i=3;i<6;i++)
    {
        clutter2+=`<div id="s2p1">
            <img src="${arr1[i].image}" alt="">
            <div id="line"></div>
            <h3>${arr1[i].name}</h3>
            <p>${arr1[i].content}</p>
        </div>`
    }
    document.querySelector("#s2").innerHTML=clutter2;
};
menu2();


// --------------------------------------------------------------------------------------------------------------------------------

  gsap.from("#onemenuimage",{
    scrollTrigger:{
        trigger:"#onemenuimage",
        start:"top 80%",
        // markers:true
    },
    height:0,
    opacity:0,
    ease:TimelineLite.to,
    duration:1.5,
  })

  gsap.from("#onemenucontent",{
    scrollTrigger:{
      trigger:"#onemenucontent",
      start:"top 80%",
    //   markers:true
    },
  
    y:30,
    opacity:0,
    // ease:Expo.easeInOut,
    ease:TimelineLite.to,
    delay:.5,
    duration:2,
  })

  gsap.from("#twomenuimage",{
    scrollTrigger:{
        trigger:"#twomenuimage",
        start:"top 80%",
        // markers:true
    },
    height:0,
    opacity:0,
    ease:TimelineLite.to,
    duration:1.5,
  })

  gsap.from("#twomenucontent",{
    scrollTrigger:{
      trigger:"#twomenucontent",
      start:"top 80%",
    //   markers:true
    },
  
    y:30,
    opacity:0,
    // ease:Expo.easeInOut,
    ease:TimelineLite.to,
    delay:.5,
    duration:2,
  })

  gsap.from("#threemenuimage",{
    scrollTrigger:{
        trigger:"#threemenuimage",
        start:"top 80%",
        // markers:true
    },
    height:0,
    opacity:0,
    ease:TimelineLite.to,
    duration:1.5,
  })

  gsap.from("#threemenucontent",{
    scrollTrigger:{
      trigger:"#threemenucontent",
      start:"top 80%",
    //   markers:true
    },
  
    y:30,
    opacity:0,
    // ease:Expo.easeInOut,
    ease:TimelineLite.to,
    delay:.5,
    duration:2,
  })

  gsap.from("#fourmenuimage",{
    scrollTrigger:{
        trigger:"#fourmenuimage",
        start:"top 80%",
        // markers:true
    },
    height:0,
    opacity:0,
    ease:TimelineLite.to,
    duration:1.5,
  })

  gsap.from("#fourmenucontent",{
    scrollTrigger:{
      trigger:"#fourmenucontent",
      start:"top 80%",
    //   markers:true
    },
  
    y:30,
    opacity:0,
    // ease:Expo.easeInOut,
    ease:TimelineLite.to,
    delay:.5,
    duration:2,
  })

  gsap.from("#fivemenuimage",{
    scrollTrigger:{
        trigger:"#fivemenuimage",
        start:"top 80%",
        // markers:true
    },
    height:0,
    opacity:0,
    ease:TimelineLite.to,
    duration:1.5,
  })

  gsap.from("#fivemenucontent",{
    scrollTrigger:{
      trigger:"#fivemenucontent",
      start:"top 80%",
    //   markers:true
    },
  
    y:30,
    opacity:0,
    // ease:Expo.easeInOut,
    ease:TimelineLite.to,
    delay:.5,
    duration:2,
  })

  gsap.from("#sixmenuimage",{
    scrollTrigger:{
        trigger:"#sixmenuimage",
        start:"top 80%",
        // markers:true
    },
    height:0,
    opacity:0,
    ease:TimelineLite.to,
    duration:1.5,
  })

  gsap.from("#sixmenucontent",{
    scrollTrigger:{
      trigger:"#sixmenucontent",
      start:"top 80%",
    //   markers:true
    },
  
    y:30,
    opacity:0,
    // ease:Expo.easeInOut,
    ease:TimelineLite.to,
    delay:.5,
    duration:2,
  })

  gsap.from("#sevenmenuimage",{
    scrollTrigger:{
        trigger:"#sevenmenuimage",
        start:"top 80%",
        // markers:true
    },
    height:0,
    opacity:0,
    ease:TimelineLite.to,
    duration:1.5,
  })

  gsap.from("#sevenmenucontent",{
    scrollTrigger:{
      trigger:"#sevenmenucontent",
      start:"top 80%",
    //   markers:true
    },
  
    y:30,
    opacity:0,
    // ease:Expo.easeInOut,
    ease:TimelineLite.to,
    delay:.5,
    duration:2,
  })

  gsap.from("#eightmenuimage",{
    scrollTrigger:{
        trigger:"#eightmenuimage",
        start:"top 80%",
        // markers:true
    },
    height:0,
    opacity:0,
    ease:TimelineLite.to,
    duration:1.5,
  })

  gsap.from("#eightmenucontent",{
    scrollTrigger:{
      trigger:"#eightmenucontent",
      start:"top 80%",
    //   markers:true
    },
  
    y:30,
    opacity:0,
    // ease:Expo.easeInOut,
    ease:TimelineLite.to,
    delay:.5,
    duration:2,
  })


  // -------------odering part----------

gsap.from("#menu5 img",{
  scrollTrigger:{
    trigger:"#menu5",
    start:"top 20%",
    // markers:true
  },
  x:500,
  duration:3
})
gsap.from("#menu5 #toplayer",{
  scrollTrigger:{
    trigger:"#menu5",
    start:"top 10%",
    // markers:true
  },
  opacity:0,
  duration:1
})
gsap.from("#menu5 h3",{
  scrollTrigger:{
    trigger:"#menu5",
    start:"top 10%",
    // markers:true
  },
  opacity:0,
  duration:1,
  delay:.3
})
gsap.from("#menu5 form h2",{
  scrollTrigger:{
    trigger:"#menu5",
    start:"top 10%",
    // markers:true
  },
  y:10,
  stagger:.2,
  opacity:0,
  duration:.5,
  delay:.3
})
gsap.from("#menu5 form input",{
  scrollTrigger:{
    trigger:"#menu5",
    start:"top 10%",
    // markers:true
  },
  x:60,
  stagger:.2,
  opacity:0,
  duration:.5,
  delay:.3
})