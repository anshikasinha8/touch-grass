import React from "react";
import { MapContainer, TileLayer, Marker, Popup, Polygon } from 'react-leaflet';
import Dropdown from '../Dropdown';

export const Map = () => {
  const sstTreePoly = [
    [34.725967, -86.640218],
    [34.726026, -86.639985],
    [34.725781, -86.639979],
    [34.725781, -86.640044]
  ];

  const greenHouse = [
    [34.725875, -86.641028],
    [34.725983, -86.640863],
    [34.725838, -86.640715],
    [34.725723, -86.640886]
  ];

  const bbTheatre = [
    [34.727071, -86.639532],
    [34.727025, -86.639390],
    [34.726903, -86.639397],
    [34.726913, -86.639546]
  ];

  const sstBalcony = [
    [34.725958, -86.641453],
    [34.725920, -86.641658],
    [34.725836, -86.641836],
    [34.725556, -86.641671],
    [34.725613, -86.641394],
    [34.725798, -86.641282],
  ];

  const mortonCourt = [
    [34.732583, -86.641278],
    [34.732407, -86.640949],
    [34.732156, -86.641308],
    [34.732025, -86.641508],
    [34.732241, -86.641677],
    [34.732380, -86.641635]
  ];

  const mortonBench = [
    [34.733048, -86.641690],
    [34.733158, -86.641528],
    [34.733038, -86.641264],
    [34.732782, -86.641000],
    [34.732589, -86.641226]
  ];

  const cuLawn = [
    [34.727331, -86.640132],
    [34.727500, -86.640235],
    [34.727590, -86.639939],
    [34.727622, -86.639539],
    [34.727458, -86.639539],
    [34.727203, -86.639578],
    [34.727256, -86.639642],
    [34.727373, -86.639655]
  ];

  const salmonForest = [
    [34.728374, -86.640442],
    [34.728374, -86.640158],
    [34.728363, -86.639900],
    [34.728289, -86.639642],
    [34.728030, -86.639526],
    [34.728088, -86.640532],
    [34.728406, -86.640532]
  ];

  const salmonSlab = [
    [34.728808, -86.640068],
    [34.728660, -86.639733],
    [34.728549, -86.639694],
    [34.728538, -86.640345],
    [34.728692, -86.640351]
  ];

  const nursingBench = [
    [34.729048, -86.639358],
    [34.729048, -86.639120],
    [34.729127, -86.639030],
    [34.729175, -86.639036],
    [34.729397, -86.638682],
    [34.729503, -86.638727],
    [34.729598, -86.638830],
    [34.729561, -86.639010]
  ];

  const salmonBench1 = [
    [34.729460, -86.639705],
    [34.729454, -86.639899],
    [34.729640, -86.639892],
    [34.729619, -86.639692]
  ];

  const salmonBench2 = [
    [34.729756, -86.639725],
    [34.729762, -86.639950],
    [34.729931, -86.639950],
    [34.729931, -86.639705],
    [34.729841, -86.639731]
  ];

  const artStructures = [
    [34.730984, -86.639831],
    [34.731298, -86.640305],
    [34.731654, -86.639800],
    [34.731598, -86.639602]
  ];

  const bigTree = [
    [34.731286, -86.640322],
    [34.730913, -86.639909],
    [34.730846, -86.640311],
    [34.731064, -86.640441],
    [34.731230, -86.640448]
  ];

  const franzBench = [
    [34.733385, -86.641010],
    [34.733067, -86.640680],
    [34.732974, -86.640843],
    [34.733280, -86.641180]
  ];

  const mortonSlab = [
    [34.732327, -86.641605],
    [34.732214, -86.641612],
    [34.732018, -86.641768],
    [34.732083, -86.642066],
    [34.732205, -86.642296],
    [34.732464, -86.642077],
    [34.732560, -86.641818]
  ];

  const oldPlayground = [
    [34.731756, -86.642227],
    [34.731744, -86.641965],
    [34.731622, -86.641844],
    [34.731467, -86.641926],
    [34.731529, -86.642206]
  ];

    return(
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'right', height: '100vh' }}>
    <MapContainer center={[34.727, -86.639]} zoom={15} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[34.722222, -86.637655]}>
        <Popup>
          Marker test
        </Popup>
      </Marker>
      {/*Polygons*/}
      {/* Hammock near SST Polygon */}
      <Polygon color="green" positions={sstTreePoly}>
        <Popup>
          Test
        </Popup>
        </Polygon>
      {/* Greenhouse in SST*/}
      <Polygon color="green" positions={greenHouse} />
      {/*Tables near blackbox theatre*/}
      <Polygon color="green" positions={bbTheatre} />
      {/* Balcony on SST*/}
      <Polygon color="green" positions={sstBalcony} />
      {/* Morton Courtyard */}
      <Polygon color="green" positions={mortonCourt} />
      {/*Morton benches */}
      <Polygon color="green" positions={mortonBench} />
      {/*CU Lawn*/}
      <Polygon color="green" positions={cuLawn} />
      {/*Salmon Forest Hammock*/}
      <Polygon color="green" positions={salmonForest} />
      {/*Salmon Slab*/}
      <Polygon color="green" positions={salmonSlab} />
      {/*Nursing Benches*/}
      <Polygon color="green" positions={nursingBench} />
      {/*Salmon Bench 1*/}
      <Polygon color="green" positions={salmonBench1} />
      {/*Salmon Bench 2*/}
      <Polygon color="green" positions={salmonBench2} />
      {/*Art Structures metal*/}
      <Polygon color="green" positions={artStructures} />
      {/*Big tree behind the structures*/}
      <Polygon color="green" positions={bigTree} />
      {/*Frank Franz bench*/}
      <Polygon color="green" positions={franzBench} />
      {/*Slab in between Morton and CTC*/}
      <Polygon color="green" positions={mortonSlab} />
      {/*Old playground but now is only small gazebo and tables*/}
      <Polygon color="green" positions={oldPlayground} />



    </MapContainer>

    <Dropdown></Dropdown>
        </div>
    )
};