import logo from './logo.svg';
import './App.css';
import Nav from './Screens/Nav';
import img from './Constants/img';
function App() {
  return (
    <div className="App">
    <Nav/>
    <div className='heading p-2'>
      <h1 >Photo Gallery</h1>
      <p className='about'>
      Galleries are a popular way of integrating images into a website, allowing users to see several images clearly at once. There are several diverse methods of generating slide shows such as these, including embedding a simple Lightbox gallery in your website with a source code and implementing the photo gallery via HTML.
      </p>
      
    </div>
    <p className='ps-3 fs-3 text-primary fw-bold'>Images for you</p>
    <div className=' gridwrap  p-4'>
    {
      img.img.map(item=>(
        <div >
        <img src={item.img[0]}/>
      </div>
      ))
    }

    </div>

    </div>
  );
}

export default App;
