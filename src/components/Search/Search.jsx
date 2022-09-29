import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Search.css';

const Search = () => {
    let {imgname} = useParams();
    const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get(`https://pixabay.com/api/?key=30223062-64fd0c2ec8e794448d4028c3c&q=${imgname}&image_type=photo`)
        .then(res => setData(res.data.hits))
    }, []);
    return (
        <div className='card-container'>
            {data && 
                data.map(imgObj => 
                    <div class="card text-dark">
                    <img src={imgObj.largeImageURL} className="card-img" alt="card-img-overlay" height= "300"/>
                    <div class="card-img-overlay">
                    <h5 class="card-title">
                        <span class="badge bg-dark">{imgObj.tags}</span>
                    </h5>
                    </div>
                    </div>
                )
            }
        </div>
    );
}

export default Search;