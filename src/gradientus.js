"use strict";

const themes = {
  'morning': {
    images: {
      headerURL: 'images/empty.png',
      additional_backgrounds: ['images/morning-right.png', 'images/morning-left.png','images/morning.png']
    },
    properties: {
      additional_backgrounds_alignment: [ 'right top' , 'left top', 'center top' ],
      additional_backgrounds_tiling: [ 'no-repeat', 'no-repeat', 'repeat'  ]
    },
    colors: {
      frame: 'rgba(249,212,35,1)',
      frame_inactive: 'rgba(217,121,70,1)',
      tab_text: 'rgba(255,255,255,1)',
      tab_background_text: 'rgba(255,255,255,1)',
      bookmark_text: 'rgba(255,255,255,1)',
      toolbar: 'rgba(0,0,0,0.25)',
      toolbar_field: 'rgba(255,255,255,1)',
      toolbar_field_text: '#0c0c0d',
      toolbar_top_separator: 'rgba(0,0,0,0)',
      toolbar_bottom_separator: 'rgba(0,0,0,0.25)',
      toolbar_vertical_separator: 'rgba(255,255,255,0.25)'
    }
  },

  'afternoon': {
    images: {
      headerURL: 'images/empty.png',
      additional_backgrounds: ['images/afternoon-right.png', 'images/afternoon-left.png', 'images/afternoon.png']
    },
    properties: {
      additional_backgrounds_alignment: [ 'right top' , 'left top', 'center top' ],
      additional_backgrounds_tiling: [ 'no-repeat', 'no-repeat', 'repeat'  ]
    },
    colors: {
      frame: 'rgba(217,121,70,1)',
      frame_inactive: 'rgba(96,24,220,1)',
      tab_text: 'rgba(255,255,255,1)',
      tab_background_text: 'rgba(255,255,255,1)',
      bookmark_text: 'rgba(255,255,255,1)',
      toolbar: 'rgba(0,0,0,0.25)',
      toolbar_field: 'rgba(255,255,255,1)',
      toolbar_field_text: '#0c0c0d',
      toolbar_top_separator: 'rgba(0,0,0,0)',
      toolbar_bottom_separator: 'rgba(0,0,0,0.25)',
      toolbar_vertical_separator: 'rgba(255,255,255,0.25)'
    }
  },

  'night': {
    images: {
      headerURL: 'images/empty.png',
      additional_backgrounds: ['images/night-right.png', 'images/night-left.png', 'images/night.png']
    },
    properties: {
      additional_backgrounds_alignment: [ 'right top' , 'left top', 'center top' ],
      additional_backgrounds_tiling: [ 'no-repeat', 'no-repeat', 'repeat'  ]
    },
    colors: {
      frame: 'rgba(96,24,220,1)',
      frame_inactive: 'rgba(67,203,255,1)',
      tab_text: 'rgba(255,255,255,1)',
      tab_background_text: 'rgba(255,255,255,1)',
      bookmark_text: 'rgba(255,255,255,1)',
      toolbar: 'rgba(0,0,0,0.25)',
      toolbar_field: 'rgba(255,255,255,1)',
      toolbar_field_text: '#0c0c0d',
      toolbar_top_separator: 'rgba(0,0,0,0)',
      toolbar_bottom_separator: 'rgba(0,0,0,0.25)',
      toolbar_vertical_separator: 'rgba(255,255,255,0.25)'
    }
  },

  'dawn': {
    images: {
      headerURL: 'images/empty.png',
      additional_backgrounds: ['images/dawn-right.png', 'images/dawn-left.png', 'images/dawn.png']
    },
    properties: {
      additional_backgrounds_alignment: [ 'right top' , 'left top', 'center top' ],
      additional_backgrounds_tiling: [ 'no-repeat', 'no-repeat', 'repeat'  ]
    },
    colors: {
      frame: 'rgba(67,203,255,1)',
      frame_inactive: 'rgba(249,212,35,1)',
      tab_text: 'rgba(255,255,255,1)',
      tab_background_text: 'rgba(255,255,255,1)',
      bookmark_text: 'rgba(255,255,255,1)',
      toolbar: 'rgba(0,0,0,0.25)',
      toolbar_field: 'rgba(255,255,255,1)',
      toolbar_field_text: '#0c0c0d',
      toolbar_top_separator: 'rgba(0,0,0,0)',
      toolbar_bottom_separator: 'rgba(0,0,0,0.25)',
      toolbar_vertical_separator: 'rgba(255,255,255,0.25)'
    }
  },

  'privatebrowsing': {
    images: {
      headerURL: 'images/empty.png',
      additional_backgrounds: ['images/private-right.png', 'images/private-left.png','images/private.png']
    },
    properties: {
      additional_backgrounds_alignment: [ 'right top' , 'left top', 'center top' ],
      additional_backgrounds_tiling: [ 'no-repeat', 'no-repeat', 'repeat'  ]
    },
    colors: {
      frame: 'rgba(34,31,71,1)',
      frame_inactive: 'rgba(86,0,131,1)',
      tab_text: 'rgba(255,255,255,1)',
      tab_background_text: 'rgba(255,255,255,1)',
      bookmark_text: 'rgba(255,255,255,1)',
      toolbar: 'rgba(0,0,0,0.25)',
      toolbar_field: 'rgba(255,255,255,1)',
      toolbar_field_text: 'rgba(54,57,89,1)',
      toolbar_field_text_focus: 'rgba(52,0,88,1)',
      toolbar_field_border_focus: 'rgba(148,0,255,1)',
      toolbar_top_separator: 'rgba(0,0,0,0)',
      toolbar_bottom_separator: 'rgba(0,0,0,0.25)',
      toolbar_vertical_separator: 'rgba(255,255,255,0.25)',
      ntp_background: 'rgba(37,0,62,1)',
      ntp_text: 'rgba(255,255,255,1)',
      popup: 'rgba(52,0,88,1)',
      popup_text: 'rgba(249,249,250,1)',
      popup_border: 'rgba(22,0,37,1)',
      sidebar: 'rgba(52,0,88,1)',
      sidebar_text: "rgba(249,249,250,1)",
      sidebar_border: "rgba(255,255,255,0.1)"
    }
  }
};

// Morning, Afternoon, Night or Dawn
var currentTheme = '';
async function setTheme(theme) {
  if (currentTheme === theme) {
    // No point in changing the theme if it has already been set.
    return;
  }
  currentTheme = theme;
  // Theme each window with the appropriate theme (morning/afternoon/night/dawn/private)
  browser.windows.getAll().then(wins => wins.forEach(themeWindow));
}

browser.windows.onCreated.addListener(themeWindow);

function themeWindow(window) {
  // Check if the window is in private browsing
  if (window.incognito) {
    browser.theme.update(window.id, themes['privatebrowsing']);
  } else {
    browser.theme.update(window.id, themes[currentTheme]);
  }
}

function checkTime() {
  let date = new Date();
  let hours = date.getHours();
  // zomg change
  if ((hours >= 6) && (hours <= 12)) {
    setTheme('morning');
  }
  else if ((hours >= 13) && (hours <= 18)) {
    setTheme('afternoon');
  }
  else if ((hours >= 19) || (hours <= 4)) {
    setTheme('night');
  }
  else {
    setTheme('dawn');
  }
}

// On start up, check the time to see what theme to show.
checkTime();

// Set up an alarm to check this regularly.
browser.alarms.onAlarm.addListener(checkTime);
browser.alarms.create('checkTime', {periodInMinutes: 5});
