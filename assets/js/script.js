console.log("ciao");

const team = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        image: "wayne-barnett-founder-ceo.jpg",
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        image: "angela-caroll-chief-editor.jpg",
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        image: "walter-gordon-office-manager.jpg",
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        image: "angela-lopez-social-media-manager.jpg",
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        image: "scott-estrada-developer.jpg",
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        image: "barbara-ramos-graphic-designer.jpg",
    },
];
const rowElement = document.querySelector(".row");
console.log(rowElement);

for (const key in team) {
    const member = team[key];
    const name = member.name;
    const role = member.role;
    const image = member.image;
    console.log(member);
    const markup = `
  <div class="col-4">
    <div class="card rounded-0">
      <img src="./assets/img/${image}" class="card-img-top rounded-0" alt="...">
      <div class="card-body">
        <h1 class="card-title text-center">${name}</h1>
        <h3 class="card-subtitle mb-2 text-muted text-center">${role}</h3>
      </div>
    </div>
  </div>
  `;
  rowElement.innerHTML += markup
}
