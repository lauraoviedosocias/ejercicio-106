import "./Card.css"

const Card = ({img, name, status}) => {

    return (

    <div className="card">
        <div className="container-img">
            <img src={img}/>
        </div>
        <h1>{name}</h1>
        <p>Satus:{status}</p>

    </div>
    )
}

export default Card;