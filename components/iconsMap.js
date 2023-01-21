import svgIcons from '../svgIcons';

const iconsMap = {
  '01d': 'clear-day',
  '02d': 'partly-cloudy-day',
  '03d': 'cloudy',
  '04d': 'cloudy',
  '09d': 'thunder-rain',
  '10d': 'rain',
  '11d': 'thunder',
  '13d': 'snow',
  '50d': 'fog',
  '01n': 'clear-day',
  '02n': 'cloudy',
  '03n': 'cloudy',
  '04n': 'cloudy',
  '09n': 'showers-day',
  '10n': 'rain',
  '11n': 'thunder',
  '13n': 'snow',
  '50n': 'fog',
};

function getObjKey(obj, value) {
  return Object.keys(obj).find(key => obj[key] === value);
}

export const getIcon = name => {
  console.log(name);
  if (Object.values(iconsMap).indexOf(name) > -1) {
    console.log(getObjKey(iconsMap, name));
    return getObjKey(iconsMap, name);
  }
  return getObjKey(iconsMap, 'partly-cloudy-day');
};
