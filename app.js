const motion = matchMedia('(prefers-reduced-motion: reduce)');
const revealItems = document.querySelectorAll('[data-reveal]');
if ('IntersectionObserver' in window && !motion.matches) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }
  }, { threshold: 0.08 });
  for (const item of revealItems) {
    if (item.getBoundingClientRect().top > innerHeight) item.classList.add('reveal-ready');
    observer.observe(item);
  }
}

const presets = {
  focus: { temperature: 5000, description: '让思路，清晰一点。', brightness: 90, filter: 'saturate(.58) hue-rotate(8deg)' },
  read: { temperature: 3500, description: '翻过一页，也慢下一点。', brightness: 75, filter: 'saturate(.86)' },
  relax: { temperature: 2700, description: '把忙碌，留给白天。', brightness: 40, filter: 'saturate(1.12) sepia(.15)' }
};
const experience = document.querySelector('.light-experience');
const room = document.querySelector('#room-photo');
const brightness = document.querySelector('#brightness');
const brightnessValue = document.querySelector('#brightness-value');
const modeButtons = document.querySelectorAll('[data-mode][aria-pressed]');
let mode = 'read';

function updateBrightness() {
  const value = Number(brightness.value);
  brightnessValue.value = `${value}%`;
  room.style.filter = `brightness(${0.4 + value * 0.0068}) ${presets[mode].filter}`;
}
brightness.addEventListener('input', updateBrightness);
for (const button of modeButtons) {
  button.addEventListener('click', () => {
    mode = button.dataset.mode;
    const preset = presets[mode];
    experience.dataset.mode = mode;
    for (const item of modeButtons) item.setAttribute('aria-pressed', String(item === button));
    document.querySelector('#temperature').textContent = `${preset.temperature.toLocaleString('en-US')} K`;
    document.querySelector('#mode-description').textContent = preset.description;
    document.querySelector('#light-status').textContent = `${button.textContent}模式，${preset.temperature} K`;
    brightness.value = preset.brightness;
    updateBrightness();
  });
}

const finishNames = { silver: '原色银', graphite: '石墨黑' };
let finish = 'silver';
for (const radio of document.querySelectorAll('input[name="finish"]')) {
  radio.addEventListener('change', () => {
    finish = radio.value;
    for (const color of Object.keys(finishNames)) {
      const image = document.querySelector(`#${color}-product`);
      image.hidden = color !== finish;
      image.classList.toggle('just-changed', color === finish);
    }
    document.querySelector('#selected-finish').textContent = finishNames[finish];
  });
}

const dialog = document.querySelector('#product-dialog');
const configure = document.querySelector('#configure');
configure.addEventListener('click', () => {
  if (typeof dialog.showModal === 'function') dialog.showModal();
  else alert(`你选择了${finishNames[finish]} AURA。这是概念产品，暂未发售，不会产生订单或费用。`);
});
for (const close of dialog.querySelectorAll('button')) close.addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
});
dialog.addEventListener('close', () => configure.focus());

motion.addEventListener('change', () => {
  if (motion.matches) for (const item of revealItems) item.classList.add('is-visible');
});
