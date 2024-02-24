// user-details.js
document.addEventListener('DOMContentLoaded', function () {
    // Get user id from query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const userId = parseInt(urlParams.get('id'));
  
    // Sample user data
    const user = {
      id: 1,
      avatar: 'user1_avatar.jpg',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      address: '123 Street, Apt 45, City',
      companyName: 'ABC Company',
    };
  
    // Populate user details on the page
    document.getElementById('userName').innerText = `${user.firstName} ${user.lastName}`;
    document.getElementById('userAvatar').src = user.avatar;
    document.getElementById('userFirstName').innerText = user.firstName;
    document.getElementById('userLastName').innerText = user.lastName;
    document.getElementById('userEmail').innerText = user.email;
    document.getElementById('userAddress').innerText = user.address;
    document.getElementById('userCompanyName').innerText = user.companyName;
  });
  