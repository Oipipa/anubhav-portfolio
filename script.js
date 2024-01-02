document.addEventListener("DOMContentLoaded", function () {
  const letters = document.querySelectorAll(".letter");
  const pixelArt = document.querySelector(".pixel-art");
  const expandingBox = document.querySelector(".expanding-box");
  const boxContainer = document.querySelector(".box-container");

  function animateWelcome() {
      letters.forEach((letter, index) => {
          setTimeout(() => {
              letter.classList.add("active");
          }, index * 200);
      });

      const animationDuration = letters.length * 200;

      setTimeout(() => {
          pixelArt.style.top = "-35vh";
          expandingBox.classList.add("expanded");
      }, animationDuration);

      setTimeout(() => {
          createNavbar();
          changeContent("initial"); // Initialize with the initial content
      }, animationDuration + 500);
  }

  function createNavbar() {
      const body = document.body;
      const navbar = document.createElement("div");
      navbar.className = "navbar";
      navbar.innerHTML = `
          <div class="nav-item" data-type="text">About</div>
          <div class="nav-item" data-type="image">Art Gallery</div>
          <div class="nav-item" data-type="other">Game Gallery</div>
      `;
      body.appendChild(navbar);

      document.querySelectorAll('.nav-item').forEach(item => {
          item.addEventListener('click', function () {
              const type = this.getAttribute('data-type');
              changeContent(type);
          });
      });
  }

  function changeContent(type) {
    if (type === "initial") {
        boxContainer.innerHTML = ""; // Clear existing content

        const initialImage = document.createElement("img");
        initialImage.src = "inv.png"; // Set the correct image path
        initialImage.alt = "Initial Content";
        initialImage.onload = () => {
            boxContainer.appendChild(initialImage);
            boxContainer.classList.remove("fade-out");
        };
    } else {
        boxContainer.classList.add("fade-out");
        
        
        setTimeout(() => {
            boxContainer.innerHTML = ""; // Clear existing content

            let heading = document.createElement("h2"); // Create a heading element
            heading.classList.add('content-heading'); 

            let paragraph = document.createElement("p"); 
            paragraph.classList.add('content-writing'); 

            let reference = document.createElement("a"); 
            reference.classList.add('resource'); 
            
            let reference1 = document.createElement("a"); 
            reference1.classList.add('resource');
            
            let reference2 = document.createElement("a"); 
            reference2.classList.add('resource');

            let art1 = document.createElement("img"); 
            art1.classList.add("pixel-border");

            let art2 = document.createElement("img"); 
            art2.classList.add("pixel-border");

            let art3 = document.createElement("img"); 
            art3.classList.add('pixel-border');

            let art4 = document.createElement("img"); 
            art4.classList.add('pixel-border');

            let art5 = document.createElement("img"); 
            art5.classList.add('pixel-border');

            let art6 = document.createElement("img"); 
            art6.classList.add('pixel-border');

            let art7 = document.createElement("img"); 
            art7.classList.add('pixel-border');

            let art8 = document.createElement("img"); 
            art8.classList.add('pixel-border');

            let art9 = document.createElement("img"); 
            art9.classList.add('pixel-border');

            let art10 = document.createElement("img"); 
            art10.classList.add('pixel-border');

            switch (type) {
                case "text":
                    heading.innerHTML = "<h2>About</h2>";
                    paragraph.innerHTML = "<p>My name is Anubhav Lamsal. I am a computer science student and a pixel art hobbyist. This is my website. Here are some of my socials if you want to get into contact or see what I am up to!</p>"
                    reference.href = "mailto:333anubhav@gmail.com" 
                    reference.textContent = "My email, " 
                    reference1.href = "https://www.linkedin.com/in/anubhav-lamsal-a32805296/"
                    reference1.textContent = "My linkedin, " 
                    reference2.href = "https://github.com/Oipipa" 
                    reference2.innerText = "My github"
                    boxContainer.appendChild(heading);
                    boxContainer.appendChild(paragraph);
                    boxContainer.appendChild(reference);
                    boxContainer.appendChild(reference1);
                    boxContainer.appendChild(reference2);
                    break;
                case "image":
                    heading.innerHTML = "<h2>Art Gallery</h2>";
                    art1.src = "artwork/01-export.png"
                    art2.src = "artwork/03-export.png"
                    art3.src = "artwork/02-export.png"
                    art4.src = "artwork/04-export.png"
                    art5.src = "artwork/05-export.png"
                    art6.src = "artwork/07-export.png"
                    art7.src = "artwork/08-export.png"
                    art8.src = "artwork/09-export.png"
                    art9.src = "artwork/10-export1.png"
                    art10.src = "artwork/10-export2.png"
                    boxContainer.appendChild(heading);
                    boxContainer.appendChild(art1);
                    boxContainer.appendChild(art2);
                    boxContainer.appendChild(art3);
                    boxContainer.appendChild(art4);
                    boxContainer.appendChild(art5);
                    boxContainer.appendChild(art6);
                    boxContainer.appendChild(art7);
                    boxContainer.appendChild(art8);
                    boxContainer.appendChild(art9);
                    boxContainer.appendChild(art10);
                    break;
                case "other":
                    heading.innerHTML = "<h2>Game Gallery</h2>";
                    boxContainer.appendChild(heading)
                    break;
            }

            
            boxContainer.classList.remove("fade-out");
        }, 500); // This timeout should match your CSS transition duration
    }
}

  animateWelcome();
});

// Include the Snake game logic here or in a separate file
