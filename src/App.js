import React from 'react';
import styled from 'styled-components';
import Header from './Layout/Header';
import Navigation from './Layout/Navigation';


function App() {
  return (
   
  <Layout>
        <Header />
        <Navigation />
    </Layout>
   
     
  );
}

const Layout = styled.div`
  margin: 0 auto;
  display: flex;
  width: 100%;
  flex-flow: row wrap;
  `
export default App;
