import React from 'react';
import Mandalaa from '../assets/mandala.png';

const Mandala = () => {
  return (
    
 
    <div className="fixed top-0 left-0 w-full h-full opacity-10 pointer-events-none">
     
      <img  
        src={Mandalaa} 
        alt="Background Mandala"  
        className="absolute -top-20 -left-20 w-64 h-64 rotate-12" 
      /> 
      <img  
        src={Mandalaa} 
        alt="Background Mandala"  
        className="absolute top-1/3 -right-20 w-80 h-80 rotate-45" 
      /> 
      <img  
        src={Mandalaa} 
        alt="Background Mandala"  
        className="absolute -bottom-20 left-1/4 w-72 h-72 -rotate-12" 
      /> 
      <img  
        src={Mandalaa} 
        alt="Background Mandala"  
        className="absolute top-10 left-1/3 w-56 h-56 -rotate-45" 
      /> 
      </div>
    

  );
};

export default Mandala;