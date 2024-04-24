import React from 'react';
import { useNavigate } from 'react-router-dom';
import DecisionPage from '../components/DecisionPage';

const Logout = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/menu');
  };

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <DecisionPage 
      title="Tem certeza que deseja sair?" 
      buttonText1="Voltar" 
      buttonAction1={handleBack}
      buttonText2="Sair" 
      buttonAction2={handleLogout}
      imageSrc="/img-happy-pencil.png"
    />
  );
};

export default Logout;