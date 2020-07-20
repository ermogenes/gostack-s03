import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="GitHub Explorer Logo" />
      <Title>GitHub Repository Explorer</Title>
      <Form>
        <input placeholder="Enter repo name" />
        <button type="submit">Search</button>
      </Form>
      <Repositories>
        <a href="todo">
          <img
            src="https://avatars2.githubusercontent.com/u/14313064?s=60&v=4"
            alt="Ermogenes Palacio (@ermogenes)"
          />
          <div>
            <strong>ermogenes/aulas-programacao-csharp</strong>
            <p>Materiais de Aula - Programação de Computadores com C#</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="todo">
          <img
            src="https://avatars2.githubusercontent.com/u/14313064?s=60&v=4"
            alt="Ermogenes Palacio (@ermogenes)"
          />
          <div>
            <strong>ermogenes/aulas-programacao-csharp</strong>
            <p>Materiais de Aula - Programação de Computadores com C#</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="todo">
          <img
            src="https://avatars2.githubusercontent.com/u/14313064?s=60&v=4"
            alt="Ermogenes Palacio (@ermogenes)"
          />
          <div>
            <strong>ermogenes/aulas-programacao-csharp</strong>
            <p>Materiais de Aula - Programação de Computadores com C#</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
