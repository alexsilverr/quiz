import  { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../card/Card';



export default function BoxCard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://quiz-7.com/categories.json');
        const pokemons = response.data;
      
        setData(pokemons);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
   
    fetchData();
  }, []);

  return (
    <div className='box'>
       <h2 className='box_h2'>Let`s Play</h2>
    <div className='box_card'>
      {data.map((e) => (
        <Card key={e.id} tittle={e.title} img={e.icon}  text={e.questions} id={e.id} />
      ))}
    </div>
  </div>
  );
}
