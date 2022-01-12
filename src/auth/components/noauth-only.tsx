import React, { useEffect, useMemo } from 'react';
import { useUser } from '../hooks/use-user';
import { useNavigate } from 'react-router-dom';

type TProps = {
  component: React.FC;
};

export const NotAuthOnly: React.FC<TProps> = ({ component, ...args }: TProps) => {
  const user = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (user.data) {
      navigate('/');
    }
  }, [user.data]);

  const Protected = useMemo(
    () => (props: any) => {
      return React.createElement(component, {});
    },
    [args]
  );

  return <Protected />;
};
