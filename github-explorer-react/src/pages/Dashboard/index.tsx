import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories, Error } from './styles';

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
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storedRepos = localStorage.getItem('@GitHubExplorer:repositories');
    return storedRepos ? JSON.parse(storedRepos) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@GitHubExplorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  async function handleRepositoryQuerySearch(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!repositoryQuery) {
      setInputError('Enter a valid "author/repository"');
      return;
    }

    try {
      const response = await api.get<Repository>(`/repos/${repositoryQuery}`);

      const repositoryFound = response.data;
      setRepositories([...repositories, repositoryFound]);

      setRepositoryQuery('');
      setInputError('');
    } catch (Err) {
      setInputError('Not found, or communication error.');
    }
  }

  return (
    <>
      <img src={logoImg} alt="GitHub Explorer Logo" />
      <Title>GitHub Repository Explorer</Title>
      <Form hasError={!!inputError} onSubmit={handleRepositoryQuerySearch}>
        <input
          value={repositoryQuery}
          onChange={e => setRepositoryQuery(e.target.value)}
          placeholder="Enter repo name"
        />
        <button type="submit">Search</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

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
