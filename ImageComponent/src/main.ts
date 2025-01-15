import { circleImageRoler } from './circleImage/CircleImage';

const image = 'monkyMonk.jpg';
const imageSource = 'src/circleImage/images/';

const img = document.createElement('img');
img.src = imageSource + image;

const circleImage = circleImageRoler(img);
document.body.appendChild(circleImage);