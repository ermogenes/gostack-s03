import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

interface Repository {
  // eslint-disable-next-line camelcase
  full_name: string;
  description: string;
  owner: {
    login: string;
    // eslint-disable-next-line camelcase
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [repositoryQuery, setRepositoryQuery] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function handleRepositoryQuerySearch(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    const response = await api.get<Repository>(`/repos/${repositoryQuery}`);

    const repositoryFound = response.data;
    setRepositories([...repositories, repositoryFound]);

    setRepositoryQuery('');
  }

  return (
    <>
      <img src={logoImg} alt="GitHub Explorer Logo" />
      <Title>GitHub Repository Explorer</Title>
      <Form onSubmit={handleRepositoryQuerySearch}>
        <input
          value={repositoryQuery}
          onChange={e => setRepositoryQuery(e.target.value)}
          placeholder="Enter repo name"
        />
        <button type="submit">Search</button>
      </Form>
      <Repositories>
        {repositories.map(repository => (
          <a key={repository.full_name} href="todo">
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
