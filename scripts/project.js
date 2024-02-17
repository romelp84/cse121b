document.addEventListener('DOMContentLoaded', () => {
// Axios request headers
  const axiosOptions = {
    headers: {
      'X-RapidAPI-Key': 'dda34d9fb1msh6455b960ff8e5d0p1c2f22jsn8a4f9dbb0aea',
      'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
    }
  };

  // Function to fetch data from the Numbers API
  const fetchData = async (type, userInput) => {
    const options = {
      method: 'GET',
      url: `https://numbersapi.p.rapidapi.com/${userInput}/${type}`,
      params: {
        fragment: 'true',
        json: 'true'
      },
      headers: axiosOptions.headers
    };

    try {
      const response = await axios.request(options);
      const factText = response.data.text;
      document.getElementById('fact').textContent = factText;
    } catch (error) {
      console.error(error);
    }
  };

// Function to update input placeholder based on selected radio button
  const updatePlaceholder = () => {
    const dateInput = document.getElementById('userInput');
    const dateRadio = document.getElementById('date');
    const yearRadio = document.getElementById('year');

    if (dateRadio.checked) {
      dateInput.placeholder = 'Enter a date (mm/dd ex: 04/28)';
    } else if (yearRadio.checked) {
      dateInput.placeholder = 'Enter a year';
    } else {
      dateInput.placeholder = 'Enter a number';
    }
  };

// Function to handle the "Get Fact" button click
  const getFact = () => {
    const userInput = document.getElementById('userInput').value;
    const selectedType = document.querySelector('input[name="factType"]:checked').value;

    if (selectedType === 'date' || selectedType === 'year') {
      updatePlaceholder();
    }

    if (userInput) {
      fetchData(selectedType, userInput);
    } else {
      alert('Please enter a number, date, or year.');
    }
  };

// Event listeners for the "Get Fact" button and radio buttons
  document.getElementById('getFact').addEventListener('click', getFact);

  const radioButtons = document.querySelectorAll('input[name="factType"]');
  radioButtons.forEach((radio) => {
    radio.addEventListener('change', updatePlaceholder);
  });
});
