import Book from "./Book"
import txt from '../data/Library.json'

const App =()=>{

    return(
        <div>
    {
      txt.map((frase, i) =><p><Book key={i} title={frase.title} author={frase.author}/></p>)
    }
    
    </div>

    );
};

export default App;