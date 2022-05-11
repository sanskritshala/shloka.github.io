import { useState} from 'react';
import './App.css';
import {FaArrowLeft, FaArrowRight, FaFacebookMessenger, FaSearch,} from 'react-icons/fa'
import Cards from './elements/cards';
import Graphs from './elements/graphs';
import data from './data/data.json'
import Chatbox from './elements/chatbox';
import {useCookies} from 'react-cookie'
function App() {
  const [suggestion,setsuggestion]=useState([]);
  const [cookie,setcookie]=useCookies(['visited']);
  const [suggestionactive,setsuggestionactive]=useState();
  const [cbox,setcbox]=useState(false);
  const [openPanelLeft, setOpenPanelLeft] = useState(true)
  const [openPanelRight, setOpenPanelRight] = useState(true);
  const [display,setdisplay]=useState({})
  const [value,setvalue]=useState("")
  const [listrecommendations,setlistrecommendations]=useState([]);
  const [search,setsearch]=useState({});
  var [cc,setcc]=useState([{
    bot:'Hi! I\'m a Bot. Let me know if you have any questions regarding our tool!',
},
{bot:'Select the topic or write your question below.'
},
]);
var instructions=['You can search for Shlokas Here','Recommended Shlokas similar to the searched shlokas are shown as cards in orange','The similarity between the shlokas are shown here','The contents of the selected shloka is shown here','This is the chatbot']
setcookie('visited',cookie.visited)
  const [toggle,settoggle]=useState('left');
  const [width,setwidth]=useState(window.innerWidth);
  window.addEventListener('resize',()=>{
    setwidth(window.innerWidth)
  })
  function websitenameclick(){
  }
  function searchinput(){
    var input=document.getElementById('searchinput').value.toString();
    let suggestionfill=[]
    if(input.length)
    {
    for(let j=0;j<data.length;j++){
      if((data[j].shloka).toString().startsWith(input)){
        suggestionfill.push(data[j]);
      }
    }}
    else
    suggestionfill=[]
    setsuggestion(suggestionfill)
  }
  function recommendations(search){
    let recommendationfill=[]
    for(let j=0;j<data.length;j++){
      if(search.includes(data[j].chapter)&&search!==data[j].recommendations){
        if(recommendationfill.length<11)
        recommendationfill.push(data[j])
      }
    }
    setlistrecommendations(recommendationfill)
    
  }
  return (
    <div className="App"> 
    {cookie.visited==-1&&<div style={{
      width:'100%',
      height:'100vh',
      position:'absolute',
      zIndex:1,
      backgroundColor:'black',
      opacity:.8,
      display:'flex',
      flexDirection:'column',
      justifyContent:'center'

      
    }} >
<div>
      <button style={{alignSelf:'center',
      backgroundColor:'transparent',
      borderStyle:'solid',
      borderRadius:12,
      color:'orange',
      borderWidth:2,
      margin:4,
      borderColor:'orange',
      cursor:'pointer'
    }}
    onClick={()=>{
      setcookie('visited',1);
    }}
    >
        <p>Take Tour </p>
        </button>
        <button style={{alignSelf:'center',
      backgroundColor:'transparent',
      borderStyle:'solid',
      borderRadius:12,
      color:'gray',
      borderWidth:2,
      margin:4,
      cursor:'pointer'
    }}
    onClick={()=>{
      setcookie('visited',11);
    }}
    >
        <p>Close</p>
        </button>
</div>
    </div> }
    <div className="title" style={{justifyContent:width<600?'space-around':''}} >
        <p className="websitename" onClick={websitenameclick}>Sanskrit Shlokas</p>
        <div className='titleinput' style={{boxShadow:cookie.visited==1?'0px 0px 4px 4px orange ':'' }} onClick={()=>{
          setsuggestionactive(true);
          }} >
          <FaSearch color='grey' className='inputimage' />
          <input id="searchinput" onChange={searchinput} placeholder='Search...' type="text" style={{border:'none',outline:'none',paddingLeft:'5px',borderRadius:'40px',flex:'1'}} />
        </div>
        {width>600&& <div className="flexdiv" >
          <div style={{display:'flex'}} >
            <p className="sharetext" >Share</p>
            <p className="feedbacktext" >Feedback</p>
          </div>
        </div>}
      </div>
      {suggestionactive&&<div className='suggestionbox' onClick={()=>{setsuggestionactive(false)}} style={{ maxHeight:'240px', width:'100%',overflow:'auto',display:'flex',flexDirection:'row',flex:1,justifyContent:'space-around',marginTop:-12,height:240}} >
      {width<600&&<div style={{color:'transparent'}} >Sanskrit Shlokas </div>}
      <div style={{width:'50%',backgroundColor:'tranparent',borderRadius:12,justifyContent:'center' }} >
        {suggestion.map(suggestion=>(
          <div className='suggestion' onClick={()=>{
            document.getElementById('searchinput').value=suggestion.shloka;
            
            setdisplay(suggestion)
            setsearch(suggestion)
            setcookie('visited',parseInt(cookie.visited) +1)
            recommendations(suggestion.recommendations)
          }} >
            {suggestion.shloka}
          </div>
        ))}
        </div>
      </div>}
      <div className='background' onClick={()=>{setsuggestionactive(false)}}  style={{height:'90vh',display:'flex',position:'relative',marginTop:suggestionactive>0?-228:0  }}>
        <div className='search' style={{width:width<600?width<400?'100%':'40%' :''}} >
          {<div className='slider' style={{width:openPanelLeft?' ':0,
          paddingLeft:openPanelLeft?10:0,
        }}>
            <div className='list'   >
              {listrecommendations.map(data=>(
                <div  style={{boxShadow:cookie.visited==2?'0px 0px 4px 4px blue ':'' }} 
                
                onMouseEnter={()=>{setdisplay(data);
                }}  className='listitem'
                
                >
                  <p className='listshloka' >{data.shloka} </p>
                  <div className='container'>
                    <p className='listchapter' >{  data.chapter
              }</p>
                    <p className='listrating'>{data.rating} </p>
                  </div>
                </div>
              ))}
            </div>
            </div>}
          {width>600&& <button style={{marginTop:10, backgroundColor:'khaki',height:'10%',width:'5%',border:'none',position:'relative'}} onClick={()=>{setOpenPanelLeft(!openPanelLeft)}} >{openPanelLeft?<FaArrowLeft className='icon'  />:<FaArrowRight className='icon'    /> } </button>
}
        </div>
        {width>600&& <div className='graph'style={{boxShadow:cookie.visited==3?'0px 0px 4px 4px orange ':'' }}  >
          <div style={{height:'10%',width:'100%'}}>
            <div style={{paddingTop:10,display:'flex',justifyContent:'flex-end',paddingRight:10}} >
              <button className='togglebuttonleft' onClick={()=>{
                settoggle('left');
              }} style={{backgroundColor:toggle=='left'?'purple':'whitesmoke',color:toggle=='left'?'white':'black'}} >
                Text
              </button>
              <button className='togglebuttonright' onClick={()=>{
                settoggle('right')
              }} style={{backgroundColor:toggle=='right'?'purple':'whitesmoke',color:toggle=='right'?'white':'black'}} >Graph</button>
              </div>
          </div>
          {toggle=='left'? display.chapter? <div>
            <Cards text1={search.shloka} chapter1={search.chapter} text2={display.shloka} chapter2={display.chapter} title="Shloka" /><br/>
            <Cards text1={search.purport} chapter1={search.chapter} text2={display.purport} chapter2={display.chapter} title="Purport" /><br/>
            <Cards text1={search.tranlation} chapter1={search.chapter} text2={display.tranlation} chapter2={display.chapter} title="Translation" />
            </div>:<div></div> :<Graphs input={listrecommendations} searchinput={search} setdisplay={setdisplay} />
            }
            
        </div>}
        {width>400&&<div className='display' style={{width:width<600? '60%':''}} >

          {<div className='slider' style={{overflow:'auto',
          width:openPanelRight?' ':0,
          paddingTop:10,paddingRight:openPanelRight?10:0,boxShadow:cookie.visited==4?'0px 0px 4px 4px orange ':'' }}>
            {display.chapter&& <div> 
              <div className='displaytitle' >{
                display.chapter
              } </div><br/>
              <div style={{fontStyle:'italic'}}>
              {display.shloka}
              </div><br/>
            <div style={{fontWeight:'bold',fontSize:'large'}} >
              Synonyms
            </div><br/>
            <div>
              {display.meaning.split(";").map(val=>(
                (val+";").split('—').map(value=>(
                <p style={{display:'inline', color:value.includes(';')?'rgba(5, 8, 0, 0.733)':'#F39C12'}} >{value.includes(';')?('—'+value).includes('.')?('—'+value).substr(0,value.indexOf('.')+2):('—'+value):value} </p>
                ))
              ))}
            </div><br/>
            
            <div style={{fontWeight:'bold',fontSize:'large'}} >
              Translation
            </div><br/>
            <div>
              {display.tranlation}
            </div><br/>
            <div style={{fontWeight:'bold',fontSize:'large'}} >
              Purport
            </div><br/>
            <div>
              {display.purport}
            </div><br/>
            </div>
            }
            </div>}
         {width>600&& <button style={{marginTop:10,backgroundColor:'khaki',height:'10%',width:'5%',border:'none',position:'relative'}} onClick={()=>{setOpenPanelRight(!openPanelRight)}} >{openPanelRight?<FaArrowRight className='icon'    />:<FaArrowLeft className='icon'    /> } </button>
         } 
        </div>
      }
      </div>
      {!cbox&&
        <div style={{boxShadow:cookie.visited==5?'0px 0px 4px 4px brown ':'' }}  className='chatbot' onClick={()=>{
        setcbox(true)
      }} >
        <FaFacebookMessenger style={{alignSelf:'center'}} />
      </div>}
      {cbox&&
      <Chatbox setval={setcbox} val={cbox} data={data[1].purport     
      } cc={cc} setcc={setcc} value={value} setvalue={setvalue} />}
      {cookie.visited<6&& <button className='chatbot' style={{backgroundColor:'blue',
      borderStyle:'solid',right:80

      }}
      onClick={()=>{
        setcookie('visited',parseInt(cookie.visited)+1)
      }}
      ><FaArrowRight color='white' style={{alignSelf:'center'}} /> </button>}
      {cookie.visited<6&&
        <div style={{position:'absolute',
        bottom:70,
        right:80,
        backgroundColor:'white',
        borderRadius:12,
        paddingLeft:12,
        paddingRight:12,
        fontSize:12,
      }}
        >
          <p>{instructions[cookie.visited-1]} </p>
        </div>
      }
    </div>
  );
}
export default App;