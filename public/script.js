console.log('Script file loaded.');

window.addEventListener('DOMContentLoaded', (event) => {
    const saveAllButton = document.getElementById('saveAllButton');
    const clearAllButton = document.getElementById('clearAllButton');
  
    saveAllButton.addEventListener('click', saveAll);
    clearAllButton.addEventListener('click', clearAll);
  });
  
  function saveAll() {
    const inputs = document.querySelectorAll('input[type="text"], input[type="date"]');
    inputs.forEach((input) => {
      console.log(`Saving: ${input.value}`);
      // Perform the save operation here
    });
  }
  
  function clearAll() {
    const inputs = document.querySelectorAll('input[type="text"], input[type="date"]');
    inputs.forEach((input) => {
      input.value = '';
    });
  }
  