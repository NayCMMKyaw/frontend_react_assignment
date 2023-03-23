import '../styles/Card.css'

const Card = props =>{
    const name = props.user.name
    const job = props.user.job
    const hobby =  props.user.hobby
    return(
        <div>
            <p>Name: {name}</p>
            <p>Job: {job}</p>
            <p>Hobby: {hobby}</p>
        </div>
    )
}
export default Card;