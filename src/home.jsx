import React from 'react';
import { useHistory } from 'react-router-dom';


const Home = (props) => {
  const history = useHistory();
  return(
    <>
      <h2>home</h2>
      <button onClick={() => history.push('/login')}>Go to lonin</button>
    </>
  );
};

export default Home;
