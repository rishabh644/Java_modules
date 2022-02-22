import {create,createReportList} from './modules/canvas.js';
import {name,draw,reportArea,reportPerimeter} from './modules/square.js';
import randomSquare from './modules/square.js';
//import { window } from 'rxjs/operator/window';
let myCanvas=create('myCanvas',document.body,window.outerWidth,window.outerHeight);
let reportList=createReportList(myCanvas.id);

let square1=draw(myCanvas.ctx,50,50,100,'blue');

//reportArea(square1.length,reportList);
//reportPerimeter(square1.length,reportList);

setInterval(randomSquare,100,myCanvas.ctx);

