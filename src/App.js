import logo from './logo.svg';
import './App.css';
import Barang from './Componen/Class/Barang';
import { useEffect, useState } from 'react';

import firebase from './firebase';
import { getDatabase, ref, onValue } from "firebase/database";

function App() {
  const [brgtoko, setBrgToko] = useState([]);
  const [datalain, setDataLain] = useState(null);

  useEffect(() => {

    const db = getDatabase(firebase);
    const starCountRef = ref(db, 'barang/');
    onValue(starCountRef, (snapshot) => {
      const data_ = snapshot.val();
      const dataBarang = [];
      for (const XC in data_) {
        if (Object.hasOwnProperty.call(data_, XC)) {
          const element = data_[XC];
          dataBarang.push({
            id: XC,
            nama_barang: element.nama_barang,
            harga: element.harga,
            stok: element.stok,
          })
        }
      }
      setBrgToko(dataBarang);
    });
    // console.log('data lain' +JSON.stringify(datalain));
  }, [])

  return (
    <div>
      <Barang dataBarang={brgtoko} />

    </div>
  );
}

export default App;
