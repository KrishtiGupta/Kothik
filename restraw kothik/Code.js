gsap.from(".edit",{
    y: 200,
    opacity: 0,
    duration: 1.5,
    stagger:1
    // ease: "Expo.easeInOut"    
})
gsap.from(".btn2",{
    y: 100,
    stagger: 1,
    opacity: 0,
    duration: 1,
    // ease: "Expo.easeInOut"
})
gsap.from(".btn",{
    y: 300,
    opacity:0,
    delay:.5,
    duration: 1.5,
    // ease: "Expo.easeInOut"
})
gsap.from("#smalldiv",{
  opacity:0,
  duration:1,
  delay:2
})

var  arr =[
    {content: "Grand Hotel INN", image:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80", location:"Bhopal",  price: "$76.05",p:"Book your stay with us, and you'll be happy to come back" },
    {content: "CARIBBEAN RESORT", image:"https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80", location:"Bhopal",  price: "$60.00",p:"Experience the difference and make your stay memorable" },
    {content: "Athens Hotel & Suits", image:"https://images.unsplash.com/photo-1594560913095-8cf34bab82ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80", location:"Bhopal",  price: "$85.98",p:"Life is better at kothik" },
    {content: "The Spring Motel", image:"https://images.unsplash.com/photo-1631049035182-249067d7618e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80", location:"Bhopal",  price: "$67.99",p:"When you're here, experience what life is all about"}
]   

function cardmaker(){
    var clutter="";
  
  for(var i=0;i<4;i++)
  {
    clutter += `<div class="card">
    <div class="image">
     <img src="${arr[i].image}" alt="">
    </div>
    <div class="content">
      <h2 class="title">${arr[i].content}</h2>
      <p class="location">${arr[i].location}</p>
      <p class="description">${arr[i].p}</p>
      <div class="booking">
        <p class="price">${arr[i].price}</p>
        <a href="#" class="book">Book Now</a>
      </div>
    </div>
</div>`
  }
  document.querySelector("#section1").innerHTML=clutter;
  };
  cardmaker();
 
