import React from "react";
import ReactDOM from "react-dom";
import Card from "./Cards";
import "./index.css";



ReactDOM.render(
  <>
  <h1 className="heading_style">List of Netflix Top Series </h1>
     <Card 
      imgsrc="https://w0.peakpx.com/wallpaper/182/605/HD-wallpaper-the-society-tv-series-netflix-netflix-tv-series-thumbnail.jpg"
      title="A Netflix Orignal Series"
      sname="The Socity"
      link="https://www.netflix.com/in/title/80197989"
     />
     <Card
      imgsrc="https://wallpapercave.com/wp/wp4056410.jpg" 
      title="A Netflix Orignal Series"
      sname="Dark"
      link="https://www.netflix.com/in/title/80100172"
     />
     <Card
      imgsrc="https://wallpapercave.com/wp/wp1917154.jpg" 
      title="A Netflix Orignal Series"
      sname="Stranger Things"
      link="https://www.netflix.com/in/title/80057281"
     />
     <Card
      imgsrc="https://w0.peakpx.com/wallpaper/177/720/HD-wallpaper-the-witcher-henry-cavill-thumbnail.jpg" 
      title="A Netflix Orignal Series"
      sname="The Witcher"
      link="https://www.netflix.com/in/title/80189685"
     />
     <Card
      imgsrc="https://w0.peakpx.com/wallpaper/324/774/HD-wallpaper-friends-tv-series-joey-tribbiani-friends-tv-series-rachel-green-ross-geller-chandler-bing-monica-geller-thumbnail.jpg" 
      title="A Netflix Orignal Series"
      sname="F R I E N D S"
      link="https://www.netflix.com/in/title/70153404"
     />
     <Card
      imgsrc="https://w0.peakpx.com/wallpaper/615/720/HD-wallpaper-thomas-shelby-blinders-netflix-peaky-peaky-blinders.jpg" 
      title="A Netflix Orignal Series"
      sname="Peaky Blinders"
      link="https://www.netflix.com/in/title/80002479"
     />
     </>,
     
  document.getElementById("root")

);