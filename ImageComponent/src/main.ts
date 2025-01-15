import { circleImageRoler } from './circleImage/src/CircleImage';


const img = document.createElement('img');
img.src = 'src/circleImage/images/monkyMonk.jpg';

const circleImage = circleImageRoler(img);
document.body.appendChild(circleImage);