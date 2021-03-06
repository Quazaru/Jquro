import $ from '../core';
import displayTypes from '../types/displayTypes';

$.prototype.d = function (type) {
  const searchElement = type.toLowerCase().replace(' ', '');
  for (let i = 0; i < this.length; i += 1) {
    if (displayTypes.indexOf(searchElement) !== -1) {
      if (this[i].style) {
        this[i].style.display = type;
      }
    } else {
      throw new Error('incorrect data property');
    }
  }
  return this;
};

$.prototype.dToggle = function () {
  for (let i = 0; i < this.length; i += 1) {
    if (!this[i].style.display) {
      continue;
    }

    if (this[i].style.display === 'none') {
      this[i].style.display = ''; // reboot display
      console.log(this[i].style.display);
      if (window.getComputedStyle(this[i]).display === 'none') {
        this[i].style.display = 'block'; // if display was none toggle it to block
      }
    } else {
      this[i].style.display = 'none';
    }
  }

  return this;
};
