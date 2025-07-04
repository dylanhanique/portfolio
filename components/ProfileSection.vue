<template>
  <header>
    <div class="left-section">
      <img src="https://briceclain.com/img/profile.png" alt="" />
      <h1>Dylan Hanique</h1>
      <p>
        A la recherche de mon <br />
        premier contrat en freelance
      </p>
      <div class="social-icons">
        <UIcon name="mdi-linkedin" />
        <UIcon name="mdi-github" />
      </div>
    </div>

    <div class="right-section">
      <h2><span class="first-word">Développeur</span> Full-Stack</h2>
      <p>
        Passionné d'informatique depuis mon enfance, j'ai eu l'opportunité de
        développer des applications dans des environnements très différents :
        d'une petite entreprise d'assurance au plus près des besoins métier, à
        un projet spatial d'envergure au sein d'une grande entreprise, où j'ai
        contribué à des systèmes complexes et innovants.
      </p>
      <span class="years-experience"
        ><span class="first-letter">3</span> Ans d'Expérience</span
      >
      <div class="profile-buttons">
        <UButton class="resume-button">Télécharger CV</UButton>
        <UButton class="contact-button">Contact</UButton>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
}

.left-section {
  grid-column: 1 / 5;
}

h1 {
  font-size: 2.8rem;
  line-height: 1.1;
  font-weight: 800;
  color: #000000;
  margin: 7.5% 0 5% 0;
  word-spacing: 100vw;
}

.left-section > p {
  line-height: 1;
  font-size: 1rem;
  margin-bottom: 10%;
  color: #6b6b6b;
}

.left-section > img {
  width: 70%;
  border-radius: 50%;
}

.social-icons span {
  margin-right: 2%;
  font-size: 1.8rem;
  color: #000000;
}

.right-section {
  margin-top: 5%;
  grid-column: 6 / -1;
}

.right-section > p {
  width: 85%;
  color: #6b6b6b;
  line-height: 1.1;
}

.years-experience {
  display: flex;
  align-items: center;
  word-spacing: 100vw;
  color: #000000;
  line-height: 1.1;
  font-weight: 500;
}

.first-letter {
  font-size: 2.8rem;
  font-weight: bold;
  margin-right: 1%;
}

.right-section > p {
  margin: 5% 0;
}

.profile-buttons {
  margin-top: 7%;
}

.profile-buttons button {
  border-radius: 50px;
  margin-right: 3%;
  background-color: #ffffff;
  color: #3B3B3B;
  padding: 2% 5%;
}

.resume-button {
  border: 2px solid #020173;
}

.contact-button {
  border: 2px solid #C3C3C3;
}
</style>
