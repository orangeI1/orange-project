document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.work-container_btn').forEach (function(tabsBtn) {
  tabsBtn.addEventListener('click', function(e) {
  const path = e.currentTarget.dataset.path;

  document.querySelectorAll('.work-container_btn').forEach(function(btn) {
      btn.classList.remove('work-container_btn--active')
  });
  e.currentTarget.classList.add('work-container_btn--active');
  document.querySelectorAll('.tabs-content').forEach(function(tabsBtn){
      tabsBtn.classList.remove('tabs-content--active')
  });
  document.querySelector(`[data-target="${path}"]`).classList.add('tabs-content--active');
  });
  });
});
