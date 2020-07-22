import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import {
  FiGithub,
  FiGitBranch,
  FiGitPullRequest,
  FiStar,
  FiChevronLeft,
  FiChevronRight,
} from 'react-icons/fi';

import { Header, RepositoryInfo, OpenIssues } from './styles';

import logoImg from '../../assets/logo.svg';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <Header>
        <img src={logoImg} alt="GitHub Explorer Logo" />
        <Link to="/">
          <FiChevronLeft /> Voltar
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img
            src="https://avatars2.githubusercontent.com/u/14313064?s=460&u=76e15d6186ae6e35adcdc2933ffd3e89c2e6f410&v=4"
            alt="Repository owner"
          />
          <div>
            <strong>ermogenes/gostack-s03</strong>
            <p>Rocketseat&apos;s GoStack files, week/semana 3.</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>
              <FiStar />
              Stars
            </span>
          </li>
          <li>
            <strong>48</strong>
            <span>
              <FiGitBranch /> Forks
            </span>
          </li>
          <li>
            <strong>67</strong>
            <span>
              <FiGitPullRequest /> Open issues
            </span>
          </li>
        </ul>
        <FiGithub /> {params.repository}
      </RepositoryInfo>
      <OpenIssues>
        <Link to="xxxxxsxxxx">
          <div>
            <strong>xxxxxxxx</strong>
            <p>xxxxxxxxxxxxx</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </OpenIssues>
    </>
  );
};

export default Repository;
