import React from 'react';
import DecisionPage from '../components/DecisionPage';

const Progress = () => {
  return (
    <DecisionPage 
      title="Meu Progresso" 
      buttonText1="Minhas Diciplinas" 
      buttonText2="Minhas Horas" 
      imageSrc="/img-study-boy.png"
    />
  );
};

export default Progress;