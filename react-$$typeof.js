

import React, { Component } from 'react'


const render1 = (props) =>{
    return <div>{props.children}</div>
}

  class App extends Component{
       constructor (props) {
            super(props)

            this.state = {
                element: null
            }

       }


       



       rendertest = (Component) =>{
           return <Component>
               dddd
           </Component>
       }



       renderElement = () => {
           let ele = <button className="btn">click it!</button>
           console.log(ele, 'before')
           ele = JSON.parse(JSON.stringify(ele))   //出现报错
           ele.$$typeof = Symbol.for('react.element');  //可以重新正确渲染
           // $$typeof 会被自动添加 为了防止xss攻击， 解决安全问题
           // 问题 1 ： 如果用户提供写入页面的不是一个字符串 而是一个json， react就会解析为一个component，注入攻击
           // 问题 2 ： 使用symbol 是因为JSON.stringify会忽略掉这些不能stringify的数据格式，包括Symbol,undefined,Function，避免一些伪装的component
           console.log(ele, 'after')
            this.setState({
                element : ele
            })
       }

       render () {
           return ( 
              <div>
                  <div>
                        <button onClick={this.renderElement}>render element</button>
                  </div>
                  <div>
                    render element : {this.state.element}
                  </div>

                  {this.rendertest(render1)}
                
              </div>
           )
        }

}

export default App