// import logo from './logo.svg';
import './App.css';
import React, { useEffect } from "react";

const { kakao } = window;

class store extends React.Component {
  constructor(props) {
    super(props);
  }
}

function addClick() {
  console.log('add is clicked!');
}

function posClick() {
  console.log('pos is clicked!');
  if (navigator.geolocation) {
    // GeoLocation을 이용해서 접속 위치를 얻어옵니다
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude, // 위도
          lon = position.coords.longitude; // 경도
      console.log(lat, lon);
      // const map = new kakao.maps.Map(container, options);
      // map.setCenter(new kakao.maps.LatLng(lat, lon))
      });
    
  } else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
    alert("위치를 확인할 수 없습니다. GPS가 켜져 있는지 확인해 주세요.");
  }
}

function Map() {
  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(36.3504119, 127.3845475),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

  }, [])

  return (
    <div id="map"></div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Map />
        <button className="Button-add" onClick={addClick}> + </button>
        <button className="Button-pos" onClick={posClick}> pos </button>
      </header>
    </div>
  );
}

export default App;