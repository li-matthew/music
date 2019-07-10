import React from 'react'
import AudioSpectrum from 'react-audio-spectrum'
import one from '../media/01.mp3'
import two from '../media/02.mp3'
import three from '../media/03.mp3'
import four from '../media/04.mp3'
import five from '../media/05.mp3'
import six from '../media/06.mp3'
import seven from '../media/07.mp3'
import eight from '../media/08.mp3'
import nine from '../media/09.mp3'
import ten from '../media/10.mp3'
import eleven from '../media/11.mp3'
import twelve from '../media/12.mp3'
import thirteen from '../media/13.mp3'
import fourteen from '../media/14.mp3'
import fifteen from '../media/15.mp3'
import beat_1 from '../media/beat_1.mp3'
import beat_2 from '../media/beat_2.mp3'
import beat_3 from '../media/beat_3.mp3'
import loop_01 from '../media/loop_01.mp3'
import loop_02 from '../media/loop_02.mp3'
import fl_1 from '../media/fl_1.mp3'
import fl_2 from '../media/fl_2.mp3'
import beat_01 from '../media/beat_01.mp3'
import beat_02 from '../media/beat_02.mp3'
import beat_03 from '../media/beat_03.mp3'
import beat_04 from '../media/beat_04.mp3'
import beat_05 from '../media/beat_05.mp3'
import beat_06 from '../media/beat_06.mp3'
import beat_07 from '../media/beat_07.mp3'
import beat_08 from '../media/beat_08.mp3'
import beat_09 from '../media/beat_09.mp3'
import beat_010 from '../media/beat_010.mp3'
import beat_011 from '../media/beat_011.mp3'
import beat_012 from '../media/beat_012.mp3'
import beat_013 from '../media/beat_013.mp3'
import beat_014 from '../media/beat_014.mp3'
import beat_015 from '../media/beat_015.mp3'
import beat_016 from '../media/beat_016.mp3'
import beat_017 from '../media/beat_017.mp3'
import beat_018 from '../media/beat_018.mp3'
import beat_019 from '../media/beat_019.mp3'
import beat_020 from '../media/beat_020.mp3'
import beat_021 from '../media/beat_021.mp3'
import beat_022 from '../media/beat_022.mp3'
import beat_023 from '../media/beat_023.mp3'
import beat_024 from '../media/beat_024.mp3'
import beat_025 from '../media/beat_025.mp3'
import beat_026 from '../media/beat_026.mp3'
import beat_027 from '../media/beat_027.mp3'
import beat_028 from '../media/beat_028.mp3'
import beat_029 from '../media/beat_029.mp3'
import beat_030 from '../media/beat_030.mp3'

var CSS_COLOR_NAMES = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];



const data = [
{
	id: '01',
	canvas: 'canvas01',
	src: one,
},
{
	id: '02',
	canvas: 'canvas02',
	src: two,
},
{
	id: '03',
	canvas: 'canvas03',
	src: three,
},
{
	id: '04',
	canvas: 'canvas04',
	src: four,
},
{
	id: '05',
	canvas: 'canvas05',
	src: five,
},
{
	id: '06',
	canvas: 'canvas06',
	src: six,
},
{
	id: '07',
	canvas: 'canvas07',
	src: seven,
},
{
	id: '08',
	canvas: 'canvas08',
	src: eight,
},
{
	id: '09',
	canvas: 'canvas09',
	src: nine,
},
{
	id: '10',
	canvas: 'canvas10',
	src: ten,
},
{
	id: '11',
	canvas: 'canvas11',
	src: eleven,
},
{
	id: '12',
	canvas: 'canvas12',
	src: twelve,
},
{
	id: '13',
	canvas: 'canvas13',
	src: thirteen,
},
{
	id: '14',
	canvas: 'canvas14',
	src: fourteen,
},
{
	id: '15',
	canvas: 'canvas15',
	src: fifteen,
},
{
	id: 'beat_1',
	canvas: 'canvasbeat_1',
	src: beat_1,
},
{
	id: 'beat_2',
	canvas: 'canvasbeat_2',
	src: beat_2,
},
{
	id: 'beat_3',
	canvas: 'canvasbeat_3',
	src: beat_3,
},
{
	id: 'loop_01',
	canvas: 'canvasloop_01',
	src: loop_01,
},
{
	id: 'loop_02',
	canvas: 'canvasloop_02',
	src: loop_02,
},
{
	id: 'fl_1',
	canvas: 'canvasfl_1',
	src: fl_1,
},
{
	id: 'fl_2',
	canvas: 'canvasfl_2',
	src: fl_2,
},
{
	id: 'beat_01',
	canvas: 'canvasbeat_01',
	src: beat_01,
},
{
	id: 'beat_02',
	canvas: 'canvasbeat_02',
	src: beat_02,
},
{
	id: 'beat_03',
	canvas: 'canvasbeat_03',
	src: beat_03,
},
{
	id: 'beat_04',
	canvas: 'canvasbeat_04',
	src: beat_04,
},
{
	id: 'beat_05',
	canvas: 'canvasbeat_05',
	src: beat_05,
},
{
	id: 'beat_06',
	canvas: 'canvasbeat_06',
	src: beat_06,
},
{
	id: 'beat_07',
	canvas: 'canvasbeat_07',
	src: beat_07,
},
{
	id: 'beat_08',
	canvas: 'canvasbeat_08',
	src: beat_08,
},
{
	id: 'beat_09',
	canvas: 'canvasbeat_09',
	src: beat_09,
},
{
	id: 'beat_010',
	canvas: 'canvasbeat_010',
	src: beat_010,
},
{
	id: 'beat_011',
	canvas: 'canvasbeat_011',
	src: beat_011,
},
{
	id: 'beat_012',
	canvas: 'canvasbeat_012',
	src: beat_012,
},
{
	id: 'beat_013',
	canvas: 'canvasbeat_013',
	src: beat_013,
},
{
	id: 'beat_014',
	canvas: 'canvasbeat_014',
	src: beat_014,
},
{
	id: 'beat_015',
	canvas: 'canvasbeat_015',
	src: beat_015,
},
{
	id: 'beat_016',
	canvas: 'canvasbeat_016',
	src: beat_016,
},
{
	id: 'beat_017',
	canvas: 'canvasbeat_017',
	src: beat_017,
},
{
	id: 'beat_018',
	canvas: 'canvasbeat_018',
	src: beat_018,
},
{
	id: 'beat_019',
	canvas: 'canvasbeat_019',
	src: beat_019,
},
{
	id: 'beat_020',
	canvas: 'canvasbeat_020',
	src: beat_020,
},
{
	id: 'beat_021',
	canvas: 'canvasbeat_021',
	src: beat_021,
},
{
	id: 'beat_022',
	canvas: 'canvasbeat_022',
	src: beat_022,
},
{
	id: 'beat_023',
	canvas: 'canvasbeat_023',
	src: beat_023,
},
{
	id: 'beat_024',
	canvas: 'canvasbeat_024',
	src: beat_024,
},
{
	id: 'beat_025',
	canvas: 'canvasbeat_025',
	src: beat_025,
},
{
	id: 'beat_026',
	canvas: 'canvasbeat_026',
	src: beat_026,
},
{
	id: 'beat_027',
	canvas: 'canvasbeat_027',
	src: beat_027,
},
{
	id: 'beat_028',
	canvas: 'canvasbeat_028',
	src: beat_028,
},
{
	id: 'beat_029',
	canvas: 'canvasbeat_029',
	src: beat_029,
},
{
	id: 'beat_030',
	canvas: 'canvasbeat_030',
	src: beat_030,
},];

// window.onload = function() {
// 	var i;
// 	for (i = 0; i < data.length; i++) {	
// 		var canvas = document.getElementById(data[i].canvas);
// 		var div = document.getElementById('canvas-small');
// 		div.height = window.innerHeight;
// 	    canvas.width = window.innerWidth;
// 	}
// }

// window.onload = window.onresize = function() {
// 	var i;
// 	for (i = 0; i < data.length; i++) {	
// 	    var canvas = document.getElementById(data[i].canvas);
// 	    canvas.width = window.innerWidth;
// }
// }


const List = () => (
  <ul>
    {data.map(item => (
      <div key={item.id} id='songs'>
        <div class='songtitle'>{item.id}</div>
        <audio id={item.id} class="tracks" controls src={item.src}></audio>
        <div id="canvas-small">
				<AudioSpectrum
				  id={item.canvas}
				  height={100}
				  width={window.innerWidth * 0.35}
				  audioId={item.id}
				  capColor={CSS_COLOR_NAMES[Math.floor(Math.random() * 141)]}
				  capHeight={1}
				  meterWidth={1}
				  meterCount={512}
				  meterColor={[
				    {stop: 0, color: CSS_COLOR_NAMES[Math.floor(Math.random() * 141)]},
				    {stop: 0.5, color: CSS_COLOR_NAMES[Math.floor(Math.random() * 141)]},
				    {stop: 1, color: CSS_COLOR_NAMES[Math.floor(Math.random() * 141)]}
				  ]}
				  gap={4}
				/>
				</div>
      </div>
    ))}
  </ul>
);


export default function Tracks(props) {
	return (
		<div>
			<div className='title'>
				<h2>Tracks</h2>
			</div>
			<List />
		</div>
		)
}