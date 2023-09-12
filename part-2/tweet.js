function Tweet(props){
    return (
        <div>
            <h1>{props.username}</h1>
            <p>{props.name}</p>
            <p>{new Date(props.date).toLocaleDateString("en-US")}</p>
            <p>{props.text}</p>
        </div>
    )
}