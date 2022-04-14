import Post from "./components/Post"


const AppPost =()=> {

    return(
    <div>
        <div>
        {<Post postTitle="Viaje a la luna" author="Julio Verne">Texto 1</Post>}</div>
        <div>{<Post postTitle="Viaje a Marte" author="Pablo Mon">Texto 2</Post>}</div>
    </div>
    )
}

export default AppPost