// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";

const { kakao } = window;

/* 나중에 혹시 쓸 수도 있을 가게 위치들 */
class store extends React.Component {
  constructor(props) {
    super(props);
  }
}

function MakeMap(Lat, Lng, level) {
  const container = document.getElementById('map');
  const options = {
    center: new kakao.maps.LatLng(Lat, Lng),
    level: level,
  };
  const map = new kakao.maps.Map(container, options);
}

/* 지도 표시 컴포넌트 */
function Map() {
  useEffect(() => {
    MakeMap(36.3504119, 127.3845475, 3);
  }, [])

  return (
    <div id="map">
    </div>
  )
}

/* 최상위 컴포넌트 */
function App() {
  const [addWait, setaddWait] = useState(false);

  const addClick = () => {
    console.log('add is clicked!');
    setaddWait(prevState => !prevState)
  }

  const posClick = () => {
    console.log('pos is clicked!');
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(function(position) {
        var lat = position.coords.latitude, // 위도
            lon = position.coords.longitude; // 경도
        console.log(lat, lon);
        MakeMap(lat, lon, 3);
        }, function(error) {
          alert("위치를 확인할 수 없습니다. GPS가 켜져 있는지 확인해 주세요.");
        });
      
    } else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
      console.log("can't find locate!");
      alert("위치를 확인할 수 없습니다. Geolocation을 지원하지 않습니다.");
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <Map />
        <button className="Button-add" onClick={addClick}> + </button>
        <button className="Button-pos" onClick={posClick}> pos </button>
        {addWait? <div className="Add-wait"></div> : null}
      </header>
    </div>
  );
}

export default App;