import './section.css'
function Section(props){
    return (<>
    <section className='text-white'>
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
    </section>
    </>)
}
export default Section;