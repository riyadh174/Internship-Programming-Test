// Sample user data
const users = [
    {
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
  const userContainer = document.querySelector('.grid');

  // Loop through the user data and create user cards
  users.forEach(user => {
    const userCard = document.createElement('div');
    userCard.classList.add('bg-white', 'p-6', 'rounded-md', 'shadow-md');

    userCard.innerHTML = `
      <img src="${user.avatar}" alt="User Avatar" class="w-16 h-16 rounded-full mx-auto mb-4">
      <p class="text-xl font-semibold mb-2">${user.firstName}</p>
      <p class="text-xl font-semibold mb-2">${user.lastName}</p>
      <p class="text-gray-600 mb-2">${user.email}</p>
      <p class="text-gray-600 mb-2">${user.address}</p>
      <p class="text-gray-600">${user.companyName}</p>
    `;

    userContainer.appendChild(userCard);
  });