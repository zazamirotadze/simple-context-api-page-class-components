import React from 'react'
import { myContext } from './CentralData'


class RenderVillages extends React.Component {
    static contextType = myContext
    render(){
        return (
            <>
                <myContext.Consumer>
                    
                    {context => context.VillageArray.map(element => 
                    <h3 key={element.id} style={{ color: context.blueColor?"blue":"black"}}>{element.name}</h3>)}
                    
                    
                </myContext.Consumer>
                <button onClick={this.context.chengeColor}>Change  Color</button>
            </>
        
        )
    }

}

export default RenderVillages