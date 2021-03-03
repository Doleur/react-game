import { saveItem } from '../constants/constants';

export function saveGame() {
  localStorage.setItem('saveItem', JSON.stringify(saveItem));
}
