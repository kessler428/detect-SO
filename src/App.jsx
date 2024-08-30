import { useEffect } from 'react';
import './App.css'

function App() {

  const getMobileOS = () => {
    const userAgent = navigator.userAgent;

    if (/android/i.test(userAgent)) {
      return 'Android';
    }

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return 'iOS';
    }

    return 'No se pudo detectar el sistema operativo';
  }

  useEffect(() => {
    const mobileOS = getMobileOS();
    console.log(mobileOS);
  }, []);
  

  return (
    <div className="app">
      <div>

        <h1 className='title'>¡Hola Compa!</h1>

        <h2 className='subtitle'>Bienvenido a Escot App</h2>

      </div>
    </div>
  )
}

export default App
