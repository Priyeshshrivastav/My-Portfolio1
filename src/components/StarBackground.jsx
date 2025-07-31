import React, { useEffect, useState } from 'react'




//id,size,x,y,opacity,animationduration

//id,size,x,y,delay,duration

const StarBackground = () => {

    const [stars,setstars]=useState([]);
    const [meteors,setmeteors]=useState([]);

    useEffect(()=>{
        generatestars();
        generatemeteors();


        const handleresize=()=>{
            generatestars();
            
        }

        window.addEventListener("resize",handleresize);






        return  ()=> window.removeEventListener("resize",handleresize);;

    },[])


    const generatestars=()=>{
        const numberofstars=Math.floor(window.innerWidth*window.innerHeight/10000);



        const newstars=[]



        for(let i=0;i<numberofstars;i++){
            newstars.push({
                id:i,
                size:Math.random()*3+1,
                x:Math.random()*100,
                y:Math.random()*100,
                opacity:Math.random()*0.5+0.5,
                animationduration:Math.random()*4+2,
            });
        }
        setstars(newstars);
    };





     const generatemeteors=()=>{
        const numberofmeteors=4;
        const newmeteors=[];



        const newstars=[]



        for(let i=0;i<numberofmeteors;i++){
            newmeteors.push({
                id:i,
                size:Math.random()*2+1,
                x:Math.random()*100,
                y:Math.random()*20,
                delay:Math.random()*15,
                animationduration:Math.random()*3+3,
            });
        }
        setmeteors(newmeteors);
    };





  return (
    <div className='fixed inset-0 overflow-hidden pointer-events-none z-0'>
        {
            stars.map((stars)=>(
                <div key={stars.id} className='star animate-pulse-subtle' style={{
                    width:stars.size+"px" ,
                    height:stars.size+"px",
                    left:stars.x+"%",
                    top:stars.y+"%",
                    opacity:stars.opacity,
                    animationDuration:stars.animationduration+"s",
                }}/>


            ))}


             {
            meteors.map((meteors)=>(
                <div key={meteors.id} className='meteor animate-meteor' style={{
                    width:meteors.size*50+"px" ,
                    height:meteors.size*2+"px",
                    left:meteors.x+"%",
                    top:meteors.y+"%",
                    animationDelay:meteors.opacity,
                    animationDuration:meteors.animationduration+"s",
                }}/>


            ))}
      
    </div>
  )
}

export default StarBackground
