import styled from "styled-components";
import React from "react";
const { kakao } = window;

const KakaoMapL = () => {
  const mapRef = React.useRef(null);

  React.useEffect(() => {
    const container = mapRef.current;

    const options = {
      center: new kakao.maps.LatLng(37.550966, 126.941048),
      level: 3,
    };

    const map = new kakao.maps.Map(container, options);

    // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
    var mapTypeControl = new kakao.maps.MapTypeControl();

    // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
    // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

    // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
    var zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    // 마커가 표시될 위치입니다
    var markerPosition = new kakao.maps.LatLng(37.550966, 126.941048);

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

    // 마커가 드래그 가능하도록 설정합니다
    marker.setDraggable(true);

    // 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성합니다
    var iwContent = '<div style="padding:5px;">Hello World!</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
      iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

    // 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
      content: iwContent,
      removable: iwRemoveable,
    });

    // 마커에 클릭이벤트를 등록합니다
    kakao.maps.event.addListener(marker, "click", function () {
      // 마커 위에 인포윈도우를 표시합니다
      infowindow.open(map, marker);
    });
  }, []);

  return <MapContainer ref={mapRef} />;
};

const MapContainer = styled.div`
  width: 700px;
  height: 500px;
`;

export default KakaoMapL;
