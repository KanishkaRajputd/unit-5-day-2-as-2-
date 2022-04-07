import logo from './logo.svg';
import './App.css';

function App() {
  const opSystem=["Android","Blcberry","iPhone","Windows Phone"]
  const Mobile=["Samsung","HTC","Micromax","Apple"];
  return (
    <div className="App">
      <h3 className="heading">React Mobile Os</h3>
<div className='head'>
<div ><h1>
  Mobile Operating System</h1>
<ul>
  {opSystem.map((e)=>{
    return <li>{e}</li>
  })}
</ul>
</div>
<div>
  <h1>Mobile Manufactures</h1>
  <ul>
    {Mobile.map((e)=>{
      return <li>{e}</li>
    })}
  </ul>
</div>
</div>
</div>
  );
}

export default App;
