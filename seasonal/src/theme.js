// export const menuTheme =
export function menuTheme(season) {
  if (season === 'spring') {
    return {
      primaryDark: '#F4F3ED',
      primaryLight: '#435E3E',
      primaryHover: '#ACF39D',
      mobile: '576px',
      laptop: '580px',
    };
  } else if (season === 'winter') {
    return {
      primaryDark: '#F4F3ED',
      primaryLight: '#3A5683',
      primaryHover: '#D2E2EE',
      mobile: '576px',
      laptop: '580px',
    };
  } else if (season === 'autumn') {
    return {
      primaryDark: '#F4F3ED',
      primaryLight: '#B7410E',
      primaryHover: '#D48D6E',
      mobile: '576px',
      laptop: '580px',
    };
  } else if (season === 'summer') {
    return {
      primaryDark: '#F4F3ED',
      primaryLight: '#F05E23',
      primaryHover: '#F7ECA1',
      mobile: '576px',
      laptop: '580px',
    };
  }
}
