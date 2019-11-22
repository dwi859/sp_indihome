import React from 'react';
import Navbar from './state/State';
import Materi from './props/Prop';
import Materi2 from './props/Prop2';



function App() {
  return (
    <div>
      <Navbar/>
      <br/>
     
     <div className="containerr">
     <h1>NEWS</h1> 
      <Materi img={require('./props/pemenang.jpg')} tgl="10 November 2019" des1="Pengumuman Pemenang Undian IndiHome Miliarder Paket Semarak Kebahagiaan Tahap II" des2="IndiHome kembali mengapresiasi pelanggan dengan mengumumkan pemenang Undian IndiHome Paket Miliarder Semarak Kebahagiaan Tahap II periode 1 Agustus – 30 September 2019."/>
      <Materi img={require('./props/pemenang.jpg')} tgl="15 November 2019" des1="Pengumuman Pemenang Undian IndiHome Miliarder Paket Semarak Kebahagiaan Tahap II" des2="IndiHome kembali mengapresiasi pelanggan dengan mengumumkan pemenang Undian IndiHome Paket Miliarder Semarak Kebahagiaan Tahap II periode 1 Agustus – 30 September 2019."/>
      
      <Materi2 img2={require('./props/pemenang.jpg')} ctgl="10 November 2019" cdes1="Pengumuman Pemenang Undian IndiHome Miliarder Paket Semarak Kebahagiaan Tahap II" cdes2="IndiHome kembali mengapresiasi pelanggan dengan mengumumkan pemenang Undian IndiHome Paket Miliarder Semarak Kebahagiaan Tahap II periode 1 Agustus – 30 September 2019."/>
      <Materi2 img2={require('./props/pemenang.jpg')} ctgl="11 November 2019" cdes1="Pengumuman Pemenang Undian IndiHome Miliarder Paket Semarak Kebahagiaan Tahap II" cdes2="IndiHome kembali mengapresiasi pelanggan dengan mengumumkan pemenang Undian IndiHome Paket Miliarder Semarak Kebahagiaan Tahap II periode 1 Agustus – 30 September 2019."/>
      <Materi2 img2={require('./props/pemenang.jpg')} ctgl="12 November 2019" cdes1="Pengumuman Pemenang Undian IndiHome Miliarder Paket Semarak Kebahagiaan Tahap II" cdes2="IndiHome kembali mengapresiasi pelanggan dengan mengumumkan pemenang Undian IndiHome Paket Miliarder Semarak Kebahagiaan Tahap II periode 1 Agustus – 30 September 2019."/>
      <Materi2 img2={require('./props/pemenang.jpg')} ctgl="13 November 2019" cdes1="Pengumuman Pemenang Undian IndiHome Miliarder Paket Semarak Kebahagiaan Tahap II" cdes2="IndiHome kembali mengapresiasi pelanggan dengan mengumumkan pemenang Undian IndiHome Paket Miliarder Semarak Kebahagiaan Tahap II periode 1 Agustus – 30 September 2019."/>
      </div>
     
  </div>
  );
}

export default App;
