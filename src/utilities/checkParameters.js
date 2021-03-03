import { parameters } from '../constants/constants';

export function checkParameters() {
  parameters.width = document.querySelector('#gameWrapper')
    ? document.querySelector('#gameWrapper').offsetWidth
    : 900;
  parameters.height = document.querySelector('#gameWrapper')
    ? document.querySelector('#gameWrapper').offsetHeight
    : 600;
}
