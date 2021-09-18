// function Btn(props){
//     return (
//         <span onClick={props.performOp}>{props.sign}</span>
//     );
// }
// export default Btn;
import React from 'react'
class Btn extends React.Component{
    constructor(){
        super();
        this.state={
            'a': 1,
            'b':2
        }
        this.setState({'a': 3});
    }

    render(){
       
        return <span onClick={this.props.performOp}>{this.props.sign}</span>
    }
    componentDidMount(){
        alert('Btn component mounted')
    }
}
export default Btn;