import './App.css';
// import Header from './components/Header';
import {useEffect, useState} from 'react';
import axios from 'axios';
import Punklist from './components/Punklist';
import Main from './components/Main';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [punkListData, setPunkListData] = useState([])
  const [selectedPunk, setSelectedPunk] = useState(0)

  useEffect(() => {
    const getMyNfts = async()=> {
      const openseaData = await axios.get
      ('https://testnets-api.opensea.io/assets?asset_contract_address=0xb4ad07f6E4c0d0d7dE2e7F1d085Fcd76D6f2ee0a&order_direction=asc'
      ) 
      console.log(openseaData.data.assets);
      setPunkListData(openseaData.data.assets)
    }
    return getMyNfts();
  }, [])

  return (
    <div className="app">
        <Navbar/>
        {/* <Header/> */}
        {
          punkListData.length > 0 && (
            <>
              <Main punkListData={punkListData} selectedPunk={selectedPunk}/>
              <Punklist 
                punkListData={punkListData} 
                setSelectedPunk={setSelectedPunk}/>
            </>
          )
        }
    </div>
  );
}

export default App;
