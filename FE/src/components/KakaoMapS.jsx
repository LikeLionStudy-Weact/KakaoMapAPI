import styled from "styled-components";
import React from "react";
const { kakao } = window;

const KakaoMapS = () => {
  const $container = React.useRef(null);

  React.useEffect(() => {
    const options = {
      center: new kakao.maps.LatLng(37.550966, 126.941048),
      level: 3,
    };

    const map = new kakao.maps.Map($container.current, options);
  }, []);

  return <MapContainer ref={$container} id="map"></MapContainer>;
};

const MapContainer = styled.div`
  width: 700px;
  height: 500px;
`;

export default KakaoMapS;
