import React from 'react'
import '../App.css'
import {FaSearch} from 'react-icons/fa'
function introscreen({cookie,setcookie}) {
    return (
        <div style={{
            backgroundColor:'black',
            width:'100%',
            height:'100vh',
            position:'absolute',
            zIndex:1,
            opacity:.7,
        }} >
            <button style={{
                color:'white',
                backgroundColor:'blue',
                opacity:1,
                cursor:'pointer',
                paddingLeft:12,
                paddingRight:12,
                paddingTop:4,
                paddingBottom:4,
                borderRadius:4,
                position:'absolute',
                bottom:12,
            }} 
            onClick={()=>{
                setcookie('visited',parseInt(cookie.visited) +1)
            }}
            >Next</button>
          <div style={{height:'10vh',display:'flex',
          flex:1,
          flexDirection:'column',
          justifyContent:'center',
          }}  >
              <div style={{color:cookie.visited%6==1?'white':'black'}} >You can search here</div>
          </div>
          <div style={{height:'90vh',display:'flex',flexDirection:'row',
          justifyContent:'space-between',
        
        }} >
              <div style={{color:cookie.visited%6==2?'white':'black',width:'30%',alignSelf:'center'}} >Suggestions are displayed here </div>
              <div style={{color:cookie.visited%6==3?'white':'black',width:'40%',alignSelf:'center'}} >Similarities and Graphs are displayed here </div>
              <div style={{color:cookie.visited%6==4?'white':'black',width:'30%',alignSelf:'center'}} >Content is displayed here </div>
              
          </div>
          {cookie.visited%6==5&& <div className='chatbot' ></div>}
        </div>
    )
}

export default introscreen
