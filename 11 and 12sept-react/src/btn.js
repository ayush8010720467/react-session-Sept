function Btn(props){
    return (
        <span onClick={props.performOp}>{props.sign}</span>
    );
}
export default Btn;