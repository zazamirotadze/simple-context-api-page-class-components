import React from 'react'
const myContext = React.createContext()

class CentralData extends React.Component {
    state = {
        VillageArray :
            [
                {id:1, name:"mgvimevi"},
                {id:2, name:"khalifauri"},
                {id:3,  name:"tsirkvali"},
                {id:4 , name:"chalovani"}
            ],
        blueColor: false
    }
    chengeColor = () =>{
        this.setState({blueColor: !this.state.blueColor})
    }
    render(){
        
        return (
            <myContext.Provider value={
                        {
                            VillageArray:this.state.VillageArray, 
                            blueColor: this.state.blueColor, 
                            chengeColor:this.chengeColor
                        }
                }>
                {this.props.children}
            </myContext.Provider>
          )
    }

}

export {CentralData, myContext}