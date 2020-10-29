import React,{ useState , useEffect} from 'react'
const author_url = `https://quote-garden.herokuapp.com/api/v2/authors/:authorName?page=1&limit=10`;

function Detail() {
    
    const [ randomAouthor, setRandomAuthor] = useState({})

    async function GetAuthor() {
        const res2 = await fetch(author_url);
        const authorResponse = await res2.json()
        setRandomAuthor(authorResponse)
        console.log("author",authorResponse)
    }
    useEffect(() => {
        
        GetAuthor();
    },[])
    console.log("rdmauthor",randomAouthor)
}

export default Detail