const fs = require('fs');

let users = [];

// Load existing users from a file
const loadUsers = () => {
    try {
        const dataBuffer = fs.readFileSync('users.json');
        users = JSON.parse(dataBuffer);
    } catch (e) {
        users = [];
    }
};

// Save users to a file
const saveUsers = () => {
    const dataJSON = JSON.stringify(users);
    fs.writeFileSync('users.json', dataJSON);
};

// Add a new user
const addUser   = (name) => {
    users.push({ name });
    saveUsers();
    console.log(`User   ${name} added.`);
};

// View all users
const viewUsers = () => {
    console.log('Current Users:');
    users.forEach((user, index) => {
        console.log(`${index + 1}: ${user.name}`);
    });
};

// Delete a user
const deleteUser   = (name) => {
    users = users.filter(user => user.name !== name);
    saveUsers();
    console.log(`User   ${name} deleted.`);
};

// Command line arguments
const command = process.argv[2];
const name = process.argv[3];

loadUsers();

if (command === 'add') {
    addUser  (name);
} else if (command === 'view') {
    viewUsers();
} else if (command === 'delete') {
    deleteUser  (name);
} else {
    console.log('Command not recognized. Use add, view, or delete.');
}
