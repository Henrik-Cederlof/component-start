To use just: 
import { circleImageRoler } from './circleImage/src/CircleImage';

const image = 'monkyMonk.jpg';
const imageSource = 'src/circleImage/images/';

const img = document.createElement('img');
img.src = 'src/circleImage/images/monkyMonk.jpg';

const circleImage = circleImageRoler(img);
document.body.appendChild(circleImage);

And put your  desired image in the images folder then change the variable "const image = 'monkyMonk.jpg';
" to your own image.jpg
