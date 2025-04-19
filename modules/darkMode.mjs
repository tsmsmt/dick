const darkModeControl = () => {
  const darkCheck = document.getElementById('night-light-checkbox');

  darkCheck.addEventListener('click', () => {
    if (darkCheck.checked) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('animate-css', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.removeItem('animate-css');
    }
  });

  if (localStorage.getItem('animate-css')) {
    document.documentElement.classList.add('dark');
    darkCheck.checked = true;
  }
};

export default darkModeControl;