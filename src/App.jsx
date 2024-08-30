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

    if (mobileOS === 'iOS') {
      window.location.href = 'https://apps.apple.com/us/app/escot-app/id6480478411';
    } else if (mobileOS === 'Android') {
      window.location.href = 'https://play.google.com/store/apps/details?id=com.escotapp.app';
    }

  }, []);
  

  return (
    <div className="app">
      <div>

        <h1 className='title'>¡Hola Compa!</h1>

        <h2 className='subtitle'>Bienvenido a Escot App</h2>

        <button
          className='download'
          onClick={() => {
            const mobileOS = getMobileOS();

            if (mobileOS === 'iOS') {
              window.location.href = 'https://apps.apple.com/us/app/escot-app/id6480478411';
            } else if (mobileOS === 'Android') {
              window.location.href = 'https://play.google.com/store/apps/details?id=com.escotapp.app';
            }
          }}
        >
          Descargar App
        </button>

      </div>
    </div>
  )
}

export default App
