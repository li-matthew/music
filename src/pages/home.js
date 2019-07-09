import React from 'react'
import {Component} from 'react'
import AudioSpectrum from 'react-audio-spectrum'
import ProductList from '../productlist/item'
import data from '../data/products.json'
import song from '../media/loop_02.mp3'

var CSS_COLOR_NAMES = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];

// window.onload = function() {
// 	var canvas = document.getElementById('audio-canvas');
// 	var div = document.getElementById('canvas');
// 	div.height = window.innerHeight;
//     canvas.width = window.innerWidth;
// }

// window.onload = window.onresize = function() {
//     var canvas = document.getElementById('audio-canvas');
//     canvas.width = window.innerWidth;
// }


export default function Home(props) {
	return (
		<div>
			<div className='title'>
				<h2>Home</h2>
			</div>
			<audio id='audio' controls src={song}></audio>
			<div id="canvas">
				<AudioSpectrum
				  id="audio-canvas"
				  height={200}
				  width={window.innerWidth}
				  audioId={'audio'}
				  capColor={CSS_COLOR_NAMES[Math.floor(Math.random() * 141)]}
				  capHeight={1}
				  meterWidth={33}
				  meterCount={256}
				  meterColor={[
				    {stop: 0, color: CSS_COLOR_NAMES[Math.floor(Math.random() * 141)]},
				    {stop: 0.5, color: CSS_COLOR_NAMES[Math.floor(Math.random() * 141)]},
				    {stop: 1, color: CSS_COLOR_NAMES[Math.floor(Math.random() * 141)]}
				  ]}
				  gap={2}
				/>
				</div>
			</div>
		)
}