import styled from "styled-components";
import React, { useEffect, useRef } from "react";
const { kakao } = window;

const KakaoMapL = () => {
  const mapRef = useRef(null);
  useEffect(() => {
    const container = mapRef.current;

    const options = {
      center: new kakao.maps.LatLng(37.550966, 126.941048),
      level: 3,
    };

    const map = new kakao.maps.Map(container, options);

    // 마커를 표시할 위치입니다
    const position = new kakao.maps.LatLng(37.550966, 126.941048);

    // 마커를 생성합니다
    const marker = new kakao.maps.Marker({
      position: position,
      clickable: true, // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
    });

    marker.setMap(map);
    // 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성합니다
    const iwContent = '<div style="padding:5px;">안녕!</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
      iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

    // 인포윈도우를 생성합니다
    const infowindow = new kakao.maps.InfoWindow({
      content: iwContent,
      removable: iwRemoveable,
    });

    // 마커에 클릭이벤트를 등록합니다
    kakao.maps.event.addListener(marker, "click", function () {
      // 마커 위에 인포윈도우를 표시합니다
      infowindow.open(map, marker);
    });
  }, []);

  return <MapContainer ref={mapRef}></MapContainer>;
};

const MapContainer = styled.div`
  width: 700px;
  height: 500px;
`;

export default KakaoMapL;
