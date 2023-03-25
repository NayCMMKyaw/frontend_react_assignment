import '../styles/Card.css'


function Card ({user}){
    // const name = user.name
    // const job = user.job
    // const hobby = user.hobby
    
    return(
        <div className="card-container">
            <p>Name: {user.name}</p>
            <p>Job: {user.job}</p>
            <p>Hobby: {user.hobby}</p>
        </div>

    )
}
export default Card;