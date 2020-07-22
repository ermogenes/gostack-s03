import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { FiGithub } from 'react-icons/fi';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <h1>
      <FiGithub /> {params.repository}
    </h1>
  );
};

export default Repository;
