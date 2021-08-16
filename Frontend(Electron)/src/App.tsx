import './App.css';

function App() {

  const MAIN_SITE_LINK= 'http://127.0.0.1:3600/';

  function MainPageViewer(){
    if(navigator.onLine){
      return window.location.href = MAIN_SITE_LINK;
    }
  }

  return (
    <div>
      {window.location.href = MAIN_SITE_LINK}
    </div>
  );
}

export default App;
