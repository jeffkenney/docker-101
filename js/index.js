(() => {

  const slideshow = remark.create({
    ratio: '16:9',
    navigation: {
      scroll: false,
      touch: true,
      click: false
    }
  });

  window.setTimeout(() => {
    document.body.style.visibility = 'visible';
  });

})();
