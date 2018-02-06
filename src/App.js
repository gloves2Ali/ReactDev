import React from 'react'
import {Button,List} from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'

class App extends React.Component{
  render(){
    const boss = '李云龙'
    return(
      <div>
        <h2>独立团,团长{boss}</h2>
        <Yying laoda='张大彪'></Yying>
        <Qbl laoda='孙德胜'></Qbl>
      </div>
    ) 
  }
}

function Qbl(props){
  return <h2>骑兵连连长{props.laoda}</h2>
}

class Yying extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      solders:['虎子','柱子','王根生']
    }
  }
  componentWillMount(){
    console.log('组件马上就要加载了')
  }
  componentDidMount(){
    console.log('组件加载了')
  }
  addSolder(){
    console.log('hello add solder')
    this.setState({
      solders:[...this.state.solders,'新兵蛋子'+Math.random()]
    })
  }
  render(){
    return (
      <div>
        <h4>一营营长,{this.props.laoda}</h4>
        <Button type="primary" onClick={()=>this.addSolder()}>新兵入伍</Button>
        <List
          renderHeader = {()=>'士兵列表'}
        >
          {this.state.solders.map(v=>{
            return(
              <List.Item key={v}>
                {v}
              </List.Item>
            ) 
          })}
        </List>
      </div>
    )
  }
}

export default App