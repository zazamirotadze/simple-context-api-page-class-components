import React from 'react'
import { CentralData } from './CentralData'
import RenderVillages from './RenderVillages'


class App extends React.Component {

  render(){
    return (
      <CentralData>
        <RenderVillages/>
      </CentralData>
    )
  }

}

export default App