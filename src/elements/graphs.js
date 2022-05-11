import React from 'react'
import Graph from 'react-graph-vis'
import '../App.css'
function graphs({input,searchinput,setdisplay}) {
    let nodes=[],j,edges=[]
    for(j=1;j<=input.length;j++){
        nodes.push(input[j-1]);
        nodes[j-1]['id']=j+1;
        nodes[j-1]['shape']='dot'
        nodes[j-1]['size']=11+j
        nodes[j-1]['label']=input[j-1].chapter
        edges.push({'from':1,'to':j+1,'length':33+11*j});
    }
    nodes.push(searchinput);
    nodes[j-1]['id']=1;
    nodes[j-1]['color']='greenyellow'
    nodes[j-1]['size']=11
    const graph = {
        nodes:nodes,
        edges: edges
      };
      const options = {
        layout: {
          //  hierarchical: true
        },
        edges: {
            color:'orange',
            arrows:{to:{enabled:true,type:'circle'}},
            chosen:{edge:(nodes,id,selcted,hovering)=>{nodes.color='green' }}
        },
        height: "500px",
        interaction:{
            hover:true,
        },
        nodes:{
            font:{
                size:12
            },
            chosen:{
                node:(nodes,id,selected,hovering)=>{nodes.color="purple";if(id>1)setdisplay(input[id-2])}
            }
        }
      };
    
      const events = {
        select: function(event) {
          var { nodes, edges } = event;
        }
      };
    return (
        <div>
            <Graph
            key={Math.floor(Math.random()*111111111)}
      graph={graph}
      options={options}
      events={events}
      getNetwork={network => {
        //  if you want access to vis.js network api you can set the state in a parent component using this property
      }}
    />
        </div>
    )
}

export default React.memo(graphs)
