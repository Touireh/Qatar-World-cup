import React from 'react'
import "./oddstable.scss"

const OddsTable = () => {

    return (
        <div className='oddstable'
        style={{textAlign:'center'}}
        >
        <h4> All Markets </h4>
      
  <div className="centralizar" style={{ marginLeft:150}}>
    <div className="card" style={{ width: "30rem"}}>
      <img
        src="https://pbs.twimg.com/media/Ec-2ym7WoAYbMJ_?format=jpg&name=4096x4096"
        alt=""
        style={{width: "29rem"}}
      />
      <div className="card-body">
        <h1>974, Doha</h1>
      </div>
    </div>
  </div>
  <br />
  <div className="centralizar">
    <img
      style={{ marginRight: 20 }}
      height="20px"
      src="../../imgs/Icons SVG/1.svg"
      alt=""
    />
    <div>
      <h1 style={{ marginTop: 1 }}>Informações</h1>
    </div>
  </div>
  <h3>Capacidade: 40 mil</h3>
  <h3>Cidade: Doha</h3>
  <h3>Inaugurado em: 2021</h3>
</div>
    );
  }

export default OddsTable


