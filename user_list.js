// user-list.js
document.addEventListener('DOMContentLoaded', function () {
    // Sample user data
    let users = [
      {
        id: 1,
        avatar: 'user1_avatar.jpg',
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        address: '123 Street, Apt 45, City',
        companyName: 'ABC Company',
      },
      // Add more user objects as needed
    ];
  
    // Get the container where the user cards will be added
    const userContainer = document.getElementById('userContainer');
    const searchInput = document.getElementById('searchInput');
    const sortSelect = document.getElementById('sortSelect');
    const addUserForm = document.getElementById('addUserForm');
  
    // Function to filter and sort users based on search input and sort option
    const updateUsers = () => {
      const searchTerm = searchInput.value.toLowerCase();
      const sortOption = sortSelect.value;
  
      // Clear existing user cards
      userContainer.innerHTML = '';
  
      // Filter users based on the search term
      const filteredUsers = users.filter(user => {
        const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
        return fullName.includes(searchTerm);
      });
  
      // Sort users based on the selected option
      const sortedUsers = filteredUsers.sort((a, b) => {
        if (sortOption === 'name') {
          return (a.firstName + ' ' + a.lastName).localeCompare(b.firstName + ' ' + b.lastName);
        } else if (sortOption === 'email') {
          return a.email.localeCompare(b.email);
        } else if (sortOption === 'company') {
          return a.companyName.localeCompare(b.companyName);
        }
      });
  
      // Create user cards for filtered and sorted users
      sortedUsers.forEach(user => {
        const userCard = document.createElement('div');
        userCard.classList.add('bg-white', 'p-6', 'rounded-md', 'shadow-md', 'cursor-pointer');
  
        userCard.innerHTML = `
          <img src="${user.avatar}" alt="User Avatar" class="w-16 h-16 rounded-full mx-auto mb-4">
          <p class="text-xl font-semibold mb-2">${user.firstName} ${user.lastName}</p>
          <p class="text-gray-600 mb-2">${user.email}</p>
          <p class="text-gray-600 mb-2">${user.address}</p>
          <p class="text-gray-600">${user.companyName}</p>
        `;
  
        // Attach a click event listener to each user card
        userCard.addEventListener('click', () => {
          // Redirect to user details page with the user id as a query parameter
          window.location.href = `user-details.html?id=${user.id}`;
        });
  
        userContainer.appendChild(userCard);
      });
    };
  
    // Function to handle form submission and add a new user
    const handleFormSubmit = (event) => {
      event.preventDefault();
  
      const newUser = {
        id: users.length + 1, // Replace with a more robust method in a real application
        firstName: addUserForm.firstName.value,
        lastName: addUserForm.lastName.value,
        email: addUserForm.email.value,
        address: addUserForm.address.value,
        companyName: addUserForm.companyName.value,
        avatar: addUserForm.avatar.value,
      };
  
      // Add the new user to the users array
      users.push(newUser);
  
      // Update the user list
      updateUsers();
  
      // Reset the form
      addUserForm.reset();
    };
  
    // Attach input event listeners to the search input and sort select
    searchInput.addEventListener('input', updateUsers);
    sortSelect.addEventListener('change', updateUsers);
  
    // Attach form submission event listener
    addUserForm.addEventListener('submit', handleFormSubmit);
  
    // Initial population of user cards
    updateUsers();
  });
  