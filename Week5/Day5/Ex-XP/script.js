const robots = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    image: "https://robohash.org/1?200x200",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    image: "https://robohash.org/2?200x200",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    image: "https://robohash.org/3?200x200",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    image: "https://robohash.org/4?200x200",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    image: "https://robohash.org/5?200x200",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    image: "https://robohash.org/6?200x200",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    image: "https://robohash.org/7?200x200",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    image: "https://robohash.org/8?200x200",
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    image: "https://robohash.org/9?200x200",
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    image: "https://robohash.org/10?200x200",
  },
  {
    id: 11,
    name: "Samuel L. Jackson",
    username: "SamJ",
    email: "sam.jackson@movies.com",
    image: "https://robohash.org/11?200x200",
  },
  {
    id: 12,
    name: "Jessica Smith",
    username: "Jess_S",
    email: "jessica.smith@webmail.org",
    image: "https://robohash.org/12?200x200",
  },
  {
    id: 13,
    name: "Michael Brown",
    username: "MikeB",
    email: "michael.brown@domain.com",
    image: "https://robohash.org/13?200x200",
  },
  {
    id: 14,
    name: "Eyal Zeitoun",
    username: "EyalZ14",
    email: "eyalzeitoun55@gmail.tv",
    image: "https://robohash.org/14?200x200",
  },
  {
    id: 15,
    name: "James T. Kirk",
    username: "CaptainKirk",
    email: "james.kirk@enterprise.net",
    image: "https://robohash.org/15?200x200",
  },
  {
    id: 16,
    name: "Anna Williams",
    username: "AnnieW",
    email: "anna.williams@fashionmail.co",
    image: "https://robohash.org/16?200x200",
  },
  {
    id: 17,
    name: "Richard Roe",
    username: "RichR",
    email: "richard.roe@company.org",
    image: "https://robohash.org/17?200x200",
  },
  {
    id: 18,
    name: "Emma Stone",
    username: "EmmaS",
    email: "emma.stone@hollywood.com",
    image: "https://robohash.org/18?200x200",
  },
  {
    id: 19,
    name: "Daniel Craig",
    username: "DannyC",
    email: "daniel.craig@spymail.org",
    image: "https://robohash.org/19?200x200",
  },
  {
    id: 20,
    name: "Sophia Turner",
    username: "SophiaT",
    email: "sophia.turner@media.net",
    image: "https://robohash.org/20?200x200",
  },
];

const cardSection = document.querySelector(".cards-section");

const displayRobots = (robots) => {
  cardSection.innerHTML = "";

  if (robots.length === 1) {
    cardSection.classList.add("single-card");
  } else {
    cardSection.classList.remove("single-card");
  }
  robots.forEach(({ name, username, email, image }) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");

    const imgCard = document.createElement("img");
    imgCard.src = image;
    imgCard.alt = username;
    imgCard.classList.add("card-image");

    imageContainer.appendChild(imgCard);

    const divContent = document.createElement("div");
    divContent.classList.add("card-content");

    const robotName = document.createElement("div");
    robotName.classList.add("robot-name");
    robotName.textContent = name;

    const robotEmail = document.createElement("div");
    robotEmail.classList.add("robot-email");
    robotEmail.textContent = email;

    divContent.append(robotName, robotEmail);
    card.append(imageContainer, divContent);
    cardSection.appendChild(card);
  });
};

const searchRobots = () => {
  const query = document.getElementById("search");
  const input = query.value.toLowerCase();

  const filteredRobots = robots.filter(
    ({ name, username, email }) =>
      name.toLocaleLowerCase().includes(input) ||
      username.toLocaleLowerCase().includes(input) ||
      email.toLocaleLowerCase().includes(input)
  );
  displayRobots(filteredRobots);
};

document.getElementById("search").addEventListener("input", searchRobots);

displayRobots(robots);
