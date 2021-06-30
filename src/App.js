import React,{useState,useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import 'bootstrap'

function Home() {
    
    
    let state = useSelector(state => state);
    let dispatch = useDispatch();
    const [data,setData]=useState([]);
    useEffect(()=>{
        axios.get('https://api.covidtracking.com/v1/states/current.json')
    .then(res=>{
        dispatch({type: "UPDATEDATA",covid: (res.data)})
        console.log(state.covid);
    })
    },[])
    
    
    const [s,setS]=useState(0)
    const handleChange=(e)=>{
        setS(e.target.value)
        console.log(state.covid);
    }
    return (
        <div>
            <h1>Covid Tracker</h1>
            <select className='form-select form-select-lg mb-3'onChange={handleChange}>                
                {state.covid.map((e,i)=>{
                    return   <option value={i}>{e.state}</option>
                })
                }
            </select>
            <div className="card" width='100px'>
                <div className="card-body">
                    {(state.covid[s]) ? <h5 className="card-title">{state.covid[s].state}</h5> : 'undefined'}
                    {(state.covid[s]) ? <h6 className="card-subtitle mb-2 text-muted">Positive: {state.covid[s].positive}</h6> : 'undefined'}
                    {(state.covid[s]) ? <h6 className="card-subtitle mb-2 text-muted">Total Results: {state.covid[s].totalTestResults}</h6> : 'undefined'}
                    {(state.covid[s]) ? <h6 className="card-subtitle mb-2 text-muted">Currently Hospitalized: {data[s].hospitalizedCurrently}</h6> : 'undefined'}
                    {(state.covid[s]) ? <h6 className="card-subtitle mb-2 text-muted">Date: {state.covid[s].date}</h6> : 'undefined'}
                    {(state.covid[s]) ? <h6 className="card-subtitle mb-2 text-muted">Deaths: {state.covid[s].death}</h6> : 'undefined'}
                </div>
            </div>
            
        </div>
    );
}

export default Home;
<div>
  <div>
    <div>{
  
{(state.covid[s]) ? <h6 className="card-subtitle mb-2 text-muted">Currently Hospitalized: {state.covid[s].hospitalizedCurrently}</h6> : 'undefined'}
                    {(state.covid[s]) ? <h6 className="card-subtitle mb-2 text-muted">Date: {state.covid[s].date}</h6> : 'undefined'}
                    {(state.covid[s]) ? <h6 className="card-subtitle mb-2 text-muted">Deaths: {state.covid[s].death}</h6> : 'undefined'}
                </div>
            </div>
            
        </div>
    ();
{}

export default Home;
