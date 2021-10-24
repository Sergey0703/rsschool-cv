import {getRandom,setBg} from './slider.js';
import {chooseLang,lang} from './tweak.js';
import {showTime} from './datetime.js';
import {showGreeting} from './greeting.js';

import getWeather from './weather.js';
import getQuotes from './quotes.js';
import {toggleBtn} from './player.js';
import playList from './playList.js';



setBg('slider');

showTime();
getWeather();
