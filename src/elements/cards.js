import React from 'react'
import '../App.css'
function cards({text1,text2,title,chapter1,chapter2}) {
    let colors={}
    if(text1!==text2)
    text1.split(' ').forEach(element => {
        if(text2.split(' ').includes(element)){
          colors[element] =colors.element?colors.element:"rgba("+Math.floor(Math.random() * 256)+","+Math.floor(Math.random() * 256)+","+Math.floor(Math.random() * 256)+","+.7+")";
        }
      });
                      
    return (
        <div className='cards' >
            <div style={{fontWeight:'bold',fontSize:'large',color:'#f39d12'}} >
              {title}
            </div><br/>
            <div style={{color:'#f39d12'}} >{chapter1} </div>
            {
                text1.split(' ').map(
                  val=>(
                    <p style={{display:'inline'}}>
                      <p style={{display:'inline',backgroundColor:colors[val]?colors[val]:'transparent',borderRadius:8,paddingLeft:4,paddingRight:4}} >{val}</p>
                      <p style={{display:'inline'}} > </p>
                    </p>
                    
                  )
                )
              }
              <br/><br/>
              
           {text1!==text2&&<div> <div style={{color:'#f39d12'}} >{chapter2} </div>
              {
                text2.split(' ').map(
                  val=>(
                    <p style={{display:'inline'}}>
                      <p style={{display:'inline',backgroundColor:colors[val]?colors[val]:'transparent',borderRadius:8,paddingLeft:4,paddingRight:4}} >{val}</p>
                      <p style={{display:'inline'}} > </p>
                    </p>
                  )
                )
              }   
              <br/><br/>
        </div>}</div>
    )
}
export default React.memo(cards);