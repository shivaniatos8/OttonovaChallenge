document.addEventListener('DOMContentLoaded', () => {
    fetch('/cities')
      .then(response => response.json())
      .then(data =>{

        const citiesData = data.cities; // Extract city data from the response
        displayCities(citiesData); // Render city cards initially
        
        document.getElementById('searchBtn').addEventListener('click', function() {
          const searchInput = document.getElementById('searchInput').value.toLowerCase();
          console.log('Search Input:', searchInput);

          const foundCity =citiesData
          .find(city => city.name.toLowerCase() === searchInput);
          console.log('Found Input:', foundCity);
          if (foundCity) {
            displayCity(foundCity);
          } else {
              alert('City not found.');
          }
      });
        
      })
      .catch(error => console.error('Error:', error));
   
  });
  
  // Display all cities data
  function displayCities(cities) {
    const cityInfoContainer = document.getElementById('city-info');
    
    cities.forEach(city => {
      const imageUrl = `https://source.unsplash.com/400x300/?${city.name}`;
      const cityDiv = document.createElement('div');
      cityDiv.setAttribute("class","city-card)");

      
      cityDiv.innerHTML = `
       
        <img class="city-image" src="${imageUrl}" alt="${city.name}">
        <div class="flag-container">
        <span><h2>${city.name}
        <img class="country-flag" src="${city.countryFlag}" alt="${city.country} Flag">
        </h2></span>
        </div>
        <p><strong>Country:</strong> ${city.country}</p>
        <p><strong>Native Name:</strong> ${city.name_native}</p>
        <p><strong>Founded:</strong> ${city.founded}</p>
        <p><strong>Population:</strong> ${city.population}</p>
        <p><strong>Landmarks:</strong> ${city.landmarks.join(', ')}</p>
        <hr>
      `;
      cityDiv.classList.add("city-card");
      cityInfoContainer.appendChild(cityDiv);
      
    });

  }

  // Display the searched city data
  function displayCity(city){
    const citiesContainer = document.getElementById('city-info');
    citiesContainer.innerHTML = '';
    const imageUrl = `https://source.unsplash.com/400x300/?${city.name}`;

    const landmarks = city.landmarks.map(landmark => `<li>${landmark}</li>`).join('');
    const cityCardHTML = `
        <div class="card mb-7" >
            <div class="card-body">
                <img class="city-image" src="${imageUrl}" alt="${city.name}">
                <div class="flag-container">
                   <span><h2>${city.name}
                     <img class="country-flag" src="${city.countryFlag}" alt="${city.country} Flag">
                  </h2></span>
                </div>
                <ul class="list-unstyled">
                    <li><strong>Country:</strong> ${city.country}</li>
                    <li><strong>Native Name:</strong> ${city.name_native}</li>
                    <li><strong>Founded:</strong> ${city.founded}</li>
                    <li><strong>Continent:</strong> ${city.continent}</li>
                    <li><strong>Latitude:</strong> ${city.latitude}</li>
                    <li><strong>Longitude:</strong> ${city.longitude}</li>
                    <li><strong>Population:</strong> ${city.population}</li>
                    <li><strong>Founded:</strong> ${city.founded}</li>
                    <li><strong>Landmarks:</strong> <ul>${landmarks}</ul></li>
                    <li><a href="https://en.wikipedia.org/wiki/${city.name}">Read More..</a></li>
                </ul>
            </div>
        </div>
    `;
  
    citiesContainer.innerHTML = cityCardHTML;
}

document.addEventListener('DOMContentLoaded', () => {
  const signInBtn = document.getElementById('signInBtn');
  const loginFormContainer = document.getElementById('loginFormContainer');
  const closeBtn = document.getElementById('closeBtn');
  
   // Sign in button click event listener
  signInBtn.addEventListener('click', () => {
      // Toggle the visibility of the login form container
      loginFormContainer.classList.toggle('d-none');
      
  });

  // Close login form when close button is clicked
  closeBtn.addEventListener('click', () => {
    loginFormContainer.style.display = 'none';
});
});



  
  