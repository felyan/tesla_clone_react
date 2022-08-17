import React from 'react';
import styled from "styled-components";
import Section from './Section';

const Home = () => {
  return (
    <Container>
      <Section
        title="Tincidunt praesent"
        description="Aenean sed adipiscing diam donec adipiscing"
        backgroundImg="https://images.unsplash.com/photo-1656480993144-3d735f3a12ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        leftBtnText="Left Button"
        rightBtnText="Right Button"
      />
      <Section
        title="Vestibulum lectus"
        description="Varius sit amet mattis vulputate enim"
        backgroundImg="https://images.unsplash.com/photo-1657382451966-3448f72ea564?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80"
        leftBtnText="Left Button"
        rightBtnText="Right Button"
      />
      <Section
        title="Habitasse platea"
        description="Vestibulum lectus mauris ultrices eros in cursus"
        backgroundImg="https://images.unsplash.com/photo-1654474910190-1f921519f9c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        leftBtnText="Left Button"
        rightBtnText="Right Button"
      />
      <Section
        title="Ultricies mi eget"
        description="Praesent tristique magna sit amet purus gravida quis"
        backgroundImg="https://images.unsplash.com/photo-1657194724857-117a10f56baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        leftBtnText="Left Button"
        rightBtnText="Right Button"
      />
      <Section
        title="Quisque non tellus"
        description="Cras semper auctor neque vitae tempus quam"
        backgroundImg="https://images.unsplash.com/photo-1638633898609-07028cc6d756?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        leftBtnText="Left Button"
        rightBtnText="Right Button"
      />
      <Section title="Accessories" description="" backgroundImg="images/accessories.jpg" leftBtnText="Center Button" />
    </Container>
  )
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;