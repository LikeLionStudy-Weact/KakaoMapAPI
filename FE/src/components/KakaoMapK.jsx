import styled from "styled-components";
import React from "react";
const { kakao } = window;

const KakaoMapK = () => {
  React.useEffect(() => {
    const container = document.getElementById("map");

    const options = {
      center: new kakao.maps.LatLng(37.550966, 126.941048),
      level: 3,
    };

    const map = new kakao.maps.Map(container, options);
  }, []);

  return <MapContainer id="map"></MapContainer>;
};

const MapContainer = styled.div`
  width: 700px;
  height: 500px;
`;

export default KakaoMapK;
