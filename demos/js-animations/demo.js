function calcCirclePoints({ radius, steps }) {
  const points = [];

  for (let i = 0; i < steps; i += 1) {
    const phase = 2 * Math.PI * i / steps; // eslint-disable-line

    points.push({
      x: radius * Math.cos(phase),
      y: radius * Math.sin(phase),
    });
  }

  return points;
}

function getKeyframes() {
  const center = {
    transform: 'translate3d(0, 0, 0)',
  };
  const points = calcCirclePoints({ radius: 8, steps: 16 }).map(point => ({
    transform: `translate3d(${point.x}px, ${point.y}px, 0)`,
  }));

  return [center, ...points, center];
}

document.addEventListener('DOMContentLoaded', () => {
  const box = document.querySelector('.js-box');
  const boxImage = box.querySelector('.js-boxImage');
  const animation = boxImage.animate(getKeyframes(), {
    duration: 1000,
    easing: 'cubic-bezier(0.42, 0, 0.58, 1)',
  });

  animation.pause();

  box.addEventListener('mouseenter', () => {
    animation.play();
  });
});
