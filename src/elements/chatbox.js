import React from 'react'
import '../App.css'
import $ from 'jquery';
import { FaFacebookMessenger } from 'react-icons/fa';
import chatbot from '../images/chatbot.png'
import TypeAnimation from 'react-type-animation'
function chatbox({setval,val,cc,setcc}) {
    $('.chatboxchatarea').css({'height':val?'90%':''})
    var count=0;
    var jj=[]
    var responses={
        "Select the topic or write your question below.":['Search','Shlokas','Chatbot','Graph','Text','Recommendations'],
        "reply forSearch":['How to search','What type of search query','Search Data','Search Help']
    }
    cc.map(values=>(
        jj.push(values)
    ))
    // $('.chatinput').on('keyup', (key)=>{
    //     if(key.which==13){
    //         var input=document.getElementsByClassName('chatinput')[0].value ;
    //         console.log(input)
    //         jj.reverse()
    //         jj.push({user:input})
    //         setcc(jj)
    //     }
    // })
    jj.reverse();
    return (
        <div className='chatbox' >
            <div className='chatboxchatarea'>
                <div className='chatarea' >
                {responses[jj[0].bot]&& <div style={{
                backgroundColor:'whitesmoke',
                }} >
                    {
                         responses[jj[0].bot].map(values=>(
                            <div className='chatresponses'
                            onClick={()=>{
                                jj.reverse();
                                jj.push({user:values})
                                jj.push({bot:'reply for'+values})
                                setcc(jj)
                            }}
                            >
                                {values}
                                </div>
                        ))
                    }
                </div>}
                    {
                        
                        jj.map(values=>(
                            <div style={{ backgroundColor:'whitesmoke',display:'flex',justifyContent:'space-between',
                            paddingTop:10,
                            }} >

                                {values.bot&&<div style={{width:'100%',display:'flex',justifyContent:'left'}} >
                                    <p style={{
                                marginLeft:4,
                                backgroundColor:'orange',
                                paddingLeft:12,
                                paddingRight:12,
                                borderTopRightRadius:12,
                                borderBottomRightRadius:12,
                                borderTopLeftRadius:4,
                                borderBottomLeftRadius:4,
                                maxWidth:'75%',
                                color:'white',
                                fontSize:12,
                                textAlign:'left'
                            
                            }} >{values.bot===jj[0].bot? <TypeAnimation sequence={[values.bot,1000]} />:<p>{values.bot} </p> } </p> 
                            </div>
                            }
                                {values.user&&
                                <div style={{width:'100%',display:'flex',justifyContent:'right'}} >
                                <div style={{
                                    marginRight:4,
                                    backgroundColor:'rgba(5, 8, 0, 0.733)',
                                    paddingRight:12,
                                    paddingLeft:12,
                                    borderTopLeftRadius:12,
                                    borderBottomLeftRadius:12,
                                    borderTopRightRadius:4,
                                    borderBottomRightRadius:4,
                                    maxWidth:'75%',
                                    color:'white',
                                    textAlign:'left',
                                    fontSize:12,
                                
                                
                            
                            }} ><p>{values.user} </p> </div>
                            </div>
                            }
                            </div>
                        ))
                    }
                    
                </div>
                <div style={{
                backgroundColor:'whitesmoke',
                maxWidth:'100%',
                paddingTop:'2.5%',
                height:'15%',
                display:'flex',
                flexDirection:'row',
                overflow:'auto',
                marginLeft:4,
                marginRight:4,
            }} >
                <input className='chatinput' style={{
                    height:'70%',
                    width:'100%',
                    borderRadius:40,
                    marginLeft:10,
                    marginRight:10,
                    paddingLeft:20,
                    backgroundColor:'khaki',
                    borderStyle:'solid',
                    
                    
                }}
                id="chatinput"
                onChange={()=>{
                    $('#chatinput').keypress((key)=>{
                        if(key.which===13&&document.getElementById('chatinput').value.toString()>""){
                            jj.reverse()
                            jj.push({'user':document.getElementById("chatinput").value.toString()})
                            setcc(jj)
        //                    document.getElementById("chatinput").value="";

                        }
                    })
                }}
                />
                </div>
            
        </div>
            {val&&
                <div className='titlechatbox' 
               onClick={()=>{
                   $('.chatboxchatarea').css({'height':++count&1?'0%':''})
                
            }}
            
            >

                <img src={chatbot} style={{borderRadius:'50%',marginTop:4,marginBottom:4,marginLeft:4}} />
                <p style={{color:'white',alignSelf:'center',paddingLeft:12}} >
                    Sanskrit Bot
                    </p>
                <FaFacebookMessenger color='white' className='titleicon' style={{alignSelf:'center',
            transition:'color .4s'    ,paddingRight:12
            }}
                onMouseEnter={()=>{
                    $('.titleicon').css({'color':'red'})
                }}
                onMouseLeave={()=>{
                    $('.titleicon').css({'color':'white'})
                }}
                onClick={()=>{
                    $('.chatbox').css({});
                    setval(false)
                }} />
            </div>}
            
        </div>
    )
}

export default React.memo(chatbox)