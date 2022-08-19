import React,{useState,useEffect} from 'react'
import TextField from '@mui/material/TextField'; 
import Button from '@mui/material/Button'
import Acard from './Acard'
import './main.css' 
import axios from 'axios';



const Search = () => {
    
  const [query, setquery]=useState('');
  const [data, setdata]=useState([]);
  
  useEffect(()=>{

      axios.get(`http://localhost:4000?searchText=${query}`).then((response)=>{

     setdata(response.data) }).catch((error)=>{
              console.log(error);
      
          })


       
  },[])
  
  return (

  
    <>

{
    console.log(data)
   }
    <div className='maindiv'>
    <TextField fullWidth placeholder='Search Here' id="fullWidth" value={query} onChange={(e)=>setquery(e.target.value)} />
   <span></span> <Button className='btn' variant="contained" onClick={()=>{

   }}>Search</Button>
</div>
<div className='card'>
{data.map((val) => {
                  return (
                    
                    <Acard
                    key={val.companyId}
                      imageurl={val.imageUrl}
                      headline={val.headline}
                      primarytext={val.primaryText}
                     />
                  );
                })}
</div>

</>
    
  )
}

export default Search