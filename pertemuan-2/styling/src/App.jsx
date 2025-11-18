import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
import Button from '../components/Button.jsx';
import Badge from '../components/Badge.jsx';
import StyledCard from '../components/StyleCard.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className='container'>
        <h1>Latihan 3: Styling with CSS in React</h1>
        <section>
          <div className="section-title">Button Component</div>
          <div className='demo-group'>
            <h3>Variants</h3>
            
            <Button
            children="Button 1"
            variant="primary"
            size="md"
            fullWidth={false}
            onClick
           / >
            
            <Button
            children="Button 2"
            variant="secondary"
            size="md"
            fullWidth={false}
            onClick
           / >

            <Button
            children="Button 3"
            variant="warning"
            size="md"
            fullWidth={false}
            onClick
           / >

            <Button
            children="Button 4"
            variant="danger"
            size="md"
            fullWidth={false}
            onClick
           / >

            </div>
            </section>

       <section>
          <div className="section-title">Badge Component</div>
          <div className='demo-group'>
            <h3>Variants</h3>
            
            <Badge
            text="Primary Badge"
            variant="primary"
            size="md"
            rounded={true}
           / >
            
             <Badge
            text="Succes Badge"
            variant="success"
            size="md"
            rounded={true}
           / >

             <Badge
            text="Danger Badge"
            variant="danger"
            size="md"
            rounded={true}
           / >


            </div>
            </section>
<section>
          <div className="section-title">Style Card Component</div>
          <div className='demo-group'>
            <h3>Variants</h3>
            
            <StyledCard
            title="Card !"
            description="this is description"
            gradient="blue"
           / >
            
             <StyledCard
            text="Succes Badge"
            variant="success"
            size="md"
            rounded={true}
           / >

             <StyledCard
            text="Danger Badge"
            variant="danger"
           
           / >

            </div>
            </section>
          
      </div>
    </div>
  );
}

export default App;