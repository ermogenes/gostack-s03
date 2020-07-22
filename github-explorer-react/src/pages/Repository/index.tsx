/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import {
  FiGitBranch,
  FiGitPullRequest,
  FiStar,
  FiChevronLeft,
  FiChevronRight,
} from 'react-icons/fi';
import api from '../../services/api';

import { Header, RepositoryInfo, OpenIssues } from './styles';

import logoImg from '../../assets/logo.svg';

interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface OpenIssue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}
interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const [repository, setRepository] = useState<Repository | null>(null);
  const [openIssues, setOpenIssues] = useState<OpenIssue[]>([]);

  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    api.get(`repos/${params.repository}`).then(response => {
      setRepository(response.data);
    });

    api.get(`repos/${params.repository}/issues`).then(response => {
      setOpenIssues(response.data);
    });
  }, [params.repository]);

  return (
    <>
      <Header>
        <img src={logoImg} alt="GitHub Explorer Logo" />
        <Link to="/">
          <FiChevronLeft /> Voltar
        </Link>
      </Header>

      {repository ? (
        <RepositoryInfo>
          <header>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>
                <FiStar />
                Stars
              </span>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <span>
                <FiGitBranch /> Forks
              </span>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>
                <FiGitPullRequest /> Open issues
              </span>
            </li>
          </ul>
        </RepositoryInfo>
      ) : (
        <p>Loading...</p>
      )}

      <OpenIssues>
        {openIssues.map(issue => (
          <a key={issue.id} href={issue.html_url}>
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </OpenIssues>
    </>
  );
};

export default Repository;
