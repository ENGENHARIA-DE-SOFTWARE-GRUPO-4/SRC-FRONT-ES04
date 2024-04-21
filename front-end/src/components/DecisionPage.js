import React from 'react';
import '../styles/DecisionPage.css';

const DecisionPage = ({ title, buttonText1, buttonAction1, buttonText2, buttonAction2, imageSrc }) => {
  return (
    <div className="container">
      <h1 className="title">{title}</h1>
      <div className="button-group">
        <button className="button" onClick={buttonAction1}>{buttonText1}</button>
        <button className="button" onClick={buttonAction2}>{buttonText2}</button>
      </div>
      <img className="image" src={imageSrc} alt="Descrição da imagem" />
    </div>
  );
};

export default DecisionPage;