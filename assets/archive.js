const filters = document.querySelector('.filters');
const buttons = Array.from(filters.querySelectorAll('button'));
const entries = Array.from(document.querySelectorAll('.entries li'));
const status = document.querySelector('#filter-status');

filters.hidden = false;

for (const button of buttons) {
  button.addEventListener('click', () => {
    const category = button.dataset.filter;

    for (const filter of buttons) {
      filter.setAttribute('aria-pressed', String(filter === button));
    }

    let visibleCount = 0;
    for (const entry of entries) {
      entry.hidden = category !== 'all' && entry.dataset.category !== category;
      if (!entry.hidden) visibleCount++;
    }

    const label = category === 'all' ? '' : button.textContent;
    status.textContent = `已显示 ${visibleCount} 篇${label}文章`;
  });
}
