import "./oddstable.scss";
import React, { useState } from 'react';

const OddsTable = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    if (currentIndex === 4) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className='oddstable' style={{marginLeft: 210}}>
    <h4> Stadium </h4>
    <div>
      <div style={{ display: currentIndex === 0 ? 'block' : 'none' }}>
      <div className="centralizar">
<div className="card" style={{ width: 800}}>
<img src="https://static.dezeen.com/uploads/2020/12/ahmed-bin-ali-stadium-al-rayyan-2022-world-cup-qatar-pattern-design_dezeen_2364_hero_0-1024x576.jpg" alt="" />
<div className="card-body">
 <h1>Ahmad Bin Ali, Doha</h1>
</div>
</div>
</div>
<br />
<div className="centralizar">
<div className="Info">
<h1>Informations</h1>
<h2 style={{ textAlign: 'center'}}>Capacity: 40 thousand</h2>
<h2 style={{ textAlign: 'center'}}>City: Doha</h2>
<h2 style={{ textAlign: 'center'}}>Opened in : 2020</h2>
</div>
</div>
</div>


<div style={{ display: currentIndex === 1 ? 'block' : 'none' }}>
      <div className="centralizar">
<div className="card" style={{ width: 800}}>
<img src="https://pbs.twimg.com/media/Ec-tMb4X0AQDfRz?format=jpg&name=4096x4096" alt="" />
<div className="card-body">
 <h1>Al Bayt, Al Khor</h1>
</div>
</div>
</div>
<br />
<div className="centralizar">
<div className="Info">
<h1>Informations</h1>
<h2 style={{ textAlign: 'center'}}>Capacity 60 thousand</h2>
<h2 style={{ textAlign: 'center'}}>City: Al Khor</h2>
<h2 style={{ textAlign: 'center'}}>Opened: 2022</h2>
</div>
</div>
</div>


<div style={{ display: currentIndex === 2 ? 'block' : 'none' }}>
      <div className="centralizar">
<div className="card" style={{ width: 800}}>
<img src="https://pbs.twimg.com/media/Ec-4cmpX0AAQnAm.jpg:large" alt="" />
<div className="card-body">
 <h1>Al Janoub, Al Wakrah</h1>
</div>
</div>
</div>
<br />
<div className="centralizar">
<div className="Info">
<h1>Informations</h1>
<h2 style={{ textAlign: 'center'}}>Capacity: 40 thousand</h2>
<h2 style={{ textAlign: 'center'}}>Cidade: Al Wakrah</h2>
<h2 style={{ textAlign: 'center'}}>Opened in : 2019</h2>
</div>
</div>
</div>




<div style={{ display: currentIndex === 3 ? 'block' : 'none' }}>
      <div className="centralizar">
<div className="card" style={{ width: 800}}>
<img src="https://pbs.twimg.com/media/Ec-y_6yX0AMuP1M?format=jpg&name=4096x4096" alt="" />
<div className="card-body">
 <h1>Al Thumama, Doha</h1>
</div>
</div>
</div>
<br />
<div className="centralizar">
<div className="Info">
<h1>Informations</h1>
<h2 style={{ textAlign: 'center'}}>Capacity: 40 thousand</h2>
<h2 style={{ textAlign: 'center'}}>Cidade: Doha</h2>
<h2 style={{ textAlign: 'center'}}>Inaugurado em: 2020</h2>
</div>
</div>
</div>


<div style={{ display: currentIndex === 4 ? 'block' : 'none' }}>
      <div className="centralizar">
<div className="card" style={{ width: 800}}>
<img src="https://i.ytimg.com/vi/QnWp4GSMEOE/maxresdefault.jpg" alt="" />
<div className="card-body">
 <h1>Khalifa, Doha</h1>
</div>
</div>
</div>
<br />
<div className="centralizar">
<div className="Info">
<h1>Informations</h1>
<h2 style={{ textAlign: 'center'}}>Capacity: 45,5 thousand</h2>
<h2 style={{ textAlign: 'center'}}>City: Doha</h2>
<h2 style={{ textAlign: 'center'}}>Inaugurado em: 2017</h2>
</div>
</div>
</div>



      
      <button className='button' onClick={next}>Suivant</button>
    </div>
    </div>
  );
};

export default OddsTable;