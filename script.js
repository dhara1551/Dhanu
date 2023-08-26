const shuffleButton = document.getElementById('shuffleButton');
const roomsContainer = document.querySelector('.rooms');

const studentNames = ["Siya", "Riya", "Jiya", "Piya", "Tiya", "Priya", "Seema", "Reema", "Sita", "Gita", "Rita", "Neeta", "Rinky", "Pinky", "Sinky", "Chinky", "Tara", "Sara", "Kaira", "Radha", "Bani", "Rani", "Abha", "Jaya", "Prita", "Geet", "Aashi", "Aara", "Anvi", "Bela"
];
shuffleButton.addEventListener('click', shuffleStudents);

function shuffleStudents() {
    const shuffledStudentNames = [...studentNames];
    for (let i = shuffledStudentNames.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledStudentNames[i], shuffledStudentNames[j]] = [shuffledStudentNames[j], shuffledStudentNames[i]];
    }

    displayRooms(shuffledStudentNames);
}
const roomNames = ["Nightingle's Nest", "Oriole's Pendant", "Pigeon's Loft", "Swan's Swannery", "Woodpecker's Cavity-nest", "Bee's Hive", "Eagle's Eyrie", "Sand Martin's Burrow", "Vulture's Scrape-nest", "Owl's Tree"];
function displayRooms(studentNames) {
    roomsContainer.innerHTML = '';
    for (let i = 0; i < studentNames.length; i += 3) {
        const room = document.createElement('div');
        room.className = 'room';

        const roomName = document.createElement('h2');
        roomName.textContent = roomNames[i / 3];

        const studentsList = document.createElement('ul');
        for (let j = i; j < i + 3 && j < studentNames.length; j++) {
            const studentItem = document.createElement('li');
            studentItem.textContent = studentNames[j];
            studentsList.appendChild(studentItem);
        }

        room.appendChild(roomName);
        room.appendChild(studentsList);
        roomsContainer.appendChild(room);
    }
}