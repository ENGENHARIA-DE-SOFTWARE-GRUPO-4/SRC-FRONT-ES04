import React, { useState } from 'react';
import '../styles/MySubjectsPage.css';

const MySubjectsPage = () => {
  const [subjects, setSubjects] = useState([
    { name: 'Programação 1', grade1: '', grade2: '', grade3: '', average: '' },
    { name: 'Fundamentos da Computação 1', grade1: '', grade2: '', grade3: '', average: '' },
    { name: 'Introdução a Computação', grade1: '', grade2: '', grade3: '', average: '' },
    { name: 'Economia', grade1: '', grade2: '', grade3: '', average: '' },
    { name: 'Fundamentos da Computação 2', grade1: '', grade2: '', grade3: '', average: '' }
  ]);

  const handleGradeChange = (index, gradeNumber, value) => {
    const newSubjects = [...subjects];
    newSubjects[index][`grade${gradeNumber}`] = value;
    newSubjects[index].average = calculateAverage(newSubjects[index]);
    setSubjects(newSubjects);
  };

  const calculateAverage = (subject) => {
    const total = Number(subject.grade1) + Number(subject.grade2) + Number(subject.grade3);
    return (total / 3).toFixed(2);
  };

  const [progress, setProgress] = useState(59);

  return (
    <div className="mySubjectsPage">
      <div className="header">
        <img src="/icon-booksAndApple.svg" alt="Icon" className="headerImage" />
        <h1 className="title">MINHAS DISCIPLINAS </h1>
      </div>
      <div className="tableContainer">
        <table>
          <thead>
            <tr>
              <th className="columnName">Disciplina</th>
              <th className="columnName">Nota 1</th>
              <th className="columnName">Nota 2</th>
              <th className="columnName">Nota 3</th>
              <th className="columnName">Média</th>
              <th className="columnName"></th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((subject, index) => (
              <tr key={index} className="tableRow">
                <td className="subjectName">{subject.name}</td>
                <td><input type="number" onChange={(e) => handleGradeChange(index, 1, e.target.value)} /></td>
                <td><input type="number" onChange={(e) => handleGradeChange(index, 2, e.target.value)} /></td>
                <td><input type="number" onChange={(e) => handleGradeChange(index, 3, e.target.value)} /></td>
                <td>{subject.average}</td>
                <td>4 Créditos</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      <div className="progressContainer">
        <h2 className="progressTitle">Meu Progresso em Disciplinas</h2>
        <progress className="progressBar" value={progress} max="100"></progress>
        <p className="progressPercent">{progress}% / 100%</p>
      </div>


    </div>
  );
};

export default MySubjectsPage;