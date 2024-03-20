import React, { useContext } from 'react'
import Dashboard from '../../Dashboard'
import { AuthContext } from '../../../Pages/AuthPages/AuthChecker/AuthContext';

const Generate = () => {
  const { setCloseSideNav } = useContext(AuthContext);
  return (
    <Dashboard>
      <div>Generate</div>
    </Dashboard>
  );
};

export default Generate