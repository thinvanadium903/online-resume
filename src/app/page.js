import './styles/General.css'
import Header from './components/Header';
import Headshot from './components/Headshot';
import Textblock from './components/TextBlock';

function Home() {
  return (
    <body>
      <Header></Header>
      <Headshot></Headshot>
      <Textblock></Textblock>
    </body>
  );
}

export default Home;
