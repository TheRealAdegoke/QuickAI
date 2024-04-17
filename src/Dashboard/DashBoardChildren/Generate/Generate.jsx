import React, { useContext } from 'react'
import Dashboard from '../../Dashboard'
import { DashContext } from '../../DashboardChecker/DashboardContext';

const Generate = () => {
  const { setCloseSideNav } = useContext(DashContext);
  return (
    <Dashboard>
      <div>Generate</div>
    </Dashboard>
  );
};

export default Generate