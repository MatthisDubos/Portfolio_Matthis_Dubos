const sections = document.querySelectorAll("section");
const videos = document.querySelectorAll("video");
const navLi = document.querySelectorAll("nav ul li a");

const percentageScrollTrigger = 60;

const isInViewport = (element) => {
  const elementTop = element.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) * (percentageScrollTrigger / 100)
  );
};

window.addEventListener("scroll", () => {
  let current = "";

  // Ton code existant pour la gestion du fade-in et des vidéos
  sections.forEach((section) => {
    if (isInViewport(section)) {
      section.classList.add("fade-in");
    }
  });
  videos.forEach((video) => {
    if (isInViewport(video)) {
      video.play();
    }
  });

  // Nouveau code pour la gestion du surlignage du menu
  sections.forEach((section) => {
    const sectionTop = section.offsetTop; 
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.getAttribute("href").substring(1) === current) {
      li.classList.add("active");
    }
  });
});

function submitForm() {
  var message = document.getElementById("message").value;
  window.location.href = "mailto:dubos.matthis@gmail.com?subject=Message&body=" + message;
}


/*Gestion de la langue*/
const fr = {
  "a1": "A propos de moi",
  "a2": "Compétences",
  "a3": "Conception 3D",
  "a4": "Systèmes acoustiques",
  "a5": "Jeux vidéos",
  "a6": "Musique",
  "a7": "Animation 3D",
  "a8": "Contact",
  "a9": "À propos de moi",
  "a10": "Je m'appelle Matthis, étudiant en électronique et en informatique passionné par la création et la résolution de problèmes. Je suis actuellement en 4eme année d'école d'ingénieur. Sur mon temps personnel j'explore divers domaines allant de la modélisation 3D à la production musicale.",
  "a11": "Compétences",
  "a12": "Électronique",
  "a13": "Informatique",
  "a14": "Connaissance des microcontrôleurs (Arduino, ESP32...)",
  "a15": "C / C++ / C#",
  "a16": "Utilisation d'outils de simulation (SPICE)",
  "a17": "Javascript / Html / Css",
  "a18": "Conception de circuits électroniques (CAD)",
  "a19": "VHDL",
  "a20": "Protocoles de communication (I2C, SPI, UART...)",
  "a21": "VBA / SQL / Python",
  "a22": "Conception 3D",
  "a23": "Dans ce domaine, j'ai développé des compétences en modélisation 3D et en impression 3D pour créer des petits robots et des systèmes innovants. Je maîtrise divers outils et langages, ce qui me permet de concevoir des petits projets de A à Z.",
  "a24": "Systèmes acoustiques",
  "a25": "Ayant un intérêt marqué pour l'audio, j'ai conçu et réalisé des enceintes Bluetooth. Je suis capable de travailler sur la conception électronique et le design.",
  "a26": "Jeux vidéos",
  "a27": "Passionné par le monde du jeu vidéo, j'ai développé des compétences sur Unity 3D. J'ai réalisé plusieurs petits jeux pour mettre en pratique mes connaissances en programmation.",
  "a28": "Musique",
  "a29": "En tant que musicien amateur, j'utilise FL Studio pour composer et produire des morceaux originaux. Je suis constamment à la recherche de nouvelles techniques et inspirations pour enrichir mes compositions et productions.",
  "a30": "Animation 3D",
  "a31": "J'ai également des bases dans le domaine de l'animation et du rendu 3D. J'ai travaillé sur divers projets, du développement de modèles 3D à leur animation, pour créer des petits rendus visuels.",
  "a32": "Contact",
  "a33": "Des questions ? Je peux y répondre avec plaisir :",
  "a34": "Envoyer",
  "a35": "Autres moyens de me contacter :",
  "a36": "Nom : ",
};

const en = {
  "a1": "About Me",
  "a2": "Skills",
  "a3": "3D Design",
  "a4": "Acoustic Systems",
  "a5": "Video Games",
  "a6": "Music",
  "a7": "3D Animation",
  "a8": "Contact",
  "a9": "About Me",
  "a10": "My name is Matthis, a student in electronics and computer science passionate about creating and solving problems. I am currently in my 4th year of engineering school. In my personal time, I explore various fields ranging from 3D modeling to music production.",
  "a11": "Skills",
  "a12": "Electronics",
  "a13": "Computer Science",
  "a14": "Knowledge of microcontrollers (Arduino, ESP32...)",
  "a15": "C / C++ / C#",
  "a16": "Use of simulation tools (SPICE)",
  "a17": "Javascript / Html / Css",
  "a18": "Electronic circuit design (CAD)",
  "a19": "VHDL",
  "a20": "Communication protocols (I2C, SPI, UART...)",
  "a21": "VBA / SQL / Python",
  "a22": "3D Design",
  "a23": "In this field, I have developed skills in 3D modeling and 3D printing to create small robots and innovative systems. I master various tools and languages, allowing me to design small projects from A to Z.",
  "a24": "Acoustic Systems",
  "a25": "Having a strong interest in audio, I have designed and built Bluetooth speakers. I am capable of working on both the electronic design and the aesthetics.",
  "a26": "Video Games",
  "a27": "Passionate about the world of video gaming, I have developed skills in Unity 3D. I have made several small games to put into practice my programming knowledge.",
  "a28": "Music",
  "a29": "As an amateur musician, I use FL Studio to compose and produce original tracks. I am constantly looking for new techniques and inspirations to enrich my compositions and productions.",
  "a30": "3D Animation",
  "a31": "I also have some basics in the field of animation and 3D rendering. I have worked on various projects, from the development of 3D models to their animation, to create small visual renders.",
  "a32": "Contact",
  "a33": "Questions? I'd be happy to answer them:",
  "a34": "Send",
  "a35": "Other ways to contact me:",
  "a36": "Name : ",
};


function changeLanguage(lang) {
  for (let key in lang) {
    const elem = document.getElementById(key);
    if (elem) {
      // Si l'élément est une liste, alors nous voulons changer le texte du lien à l'intérieur
      if (elem.tagName === "LI") {
        const link = elem.querySelector("a");
        if (link) {
          link.textContent = lang[key];
        }
      } else {
        elem.innerHTML = lang[key];
      }
    }
  }
}


document.getElementById('langSwitch').addEventListener('change', function() {
  if (this.checked) {
    changeLanguage(en);
  } else {
    changeLanguage(fr);
  }
});

