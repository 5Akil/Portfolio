
import { ThemeProvider } from 'styled-components';
import {theme} from './utils/Theme'
import Showcase from './Components/Showcash';
import MySkills from './Components/MySkills';
import MyProjects from './Components/MyProjects';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar.js';
import {  Container, MainBody } from './Components/Styled-Components/Global.styled';
function App() {
  return (
    <div className="App">
       <ThemeProvider theme={theme}>
        <MainBody>  
          <Container>
            <Navbar/>
            <Showcase /> 
            <MySkills /> 
            <MyProjects/> 
            <Footer/> 
          </Container>
        </MainBody>
       </ThemeProvider>
    </div>
  );
}

export default App;
