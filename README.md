To use just: 

import { circleImageRoler } from './circleImage/CircleImage';

const image = 'monkyMonk.jpg';
const imageSource = 'src/circleImage/images/';

const img = document.createElement('img');
img.src = imageSource + image;

const circleImage = circleImageRoler(img);
document.body.appendChild(circleImage);

And put your  desired image in the images folder then change the variable "const image = 'monkyMonk.jpg';
" to your own image.jpg


***YOU WILL MOST LIKELY NEED TO "cd to this folder before npm install & npm run dev".***
