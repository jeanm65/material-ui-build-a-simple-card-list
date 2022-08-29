import Container from '@mui/material/Container';
import './App.css';
import TourCard from './components/TourCard';
import Grid from '@mui/material/Grid';

function App() {
  return (
    <div className='App'>
      <Container>
        <Grid container spacing={5}>
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
         </Grid>
         
      </Container>
      
    </div>
  );
}

export default App;
