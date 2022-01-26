function navigateToAbout() {
  document.getElementById("main").innerHTML = `
    <section id="intro">
        <div class="container-lg">
            <div class="row justify-content-center align-items-lg-center">
                <div class="col-md-5 text-center text-md-start intro-text">
                    <h1>
                        <div class="display-3" style="color: rgb(159, 139, 212);">Viktor Rådberg</div>
                        <h3 class="text-muted ms-4">.NET-utvecklare</h3>
                        <h5 class="text-muted ms-4 pb-3">IT-Högskolan</h5>
                    </h1>
                    <!-- <p class="lead my-4 text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p> -->
                    <!-- <a href="#button" class="btn btn-secondary btn-lg">button</a> -->
                </div>
                <div class="col-md-5 text-center d-none d-md-block">
                    <img class="img-fluid" src="headshot.png" alt="headshot" id="headshot">
                </div>
            </div>
        </div>
    </section>

    <section>
        <div class="container-lg">
            <div class="row justify-content-center align-items-lg-start">
                <div class="col-md-10 text-start text-md-start content-text">
                    <h1>
                        <div class="display-6 text-muted">Arbetserfarenhet</div>
                    </h1>
                    <p class="lead my-3 text-muted">
                        Oj här har jag inte skrivit in något än, men jag har
                        <a href="https://www.linkedin.com/in/viktor-r%C3%A5dberg-09221b80/"> LinkedIn</a>!
                    </p>
                    <h1>
                        <div class="display-6 text-muted">Utbildning och kompetenser</div>
                    </h1>
                    <p class="lead mt-3 text-muted">
                        <b>Univseritetsstudier</b>
                    </p>
                    <p class="my-3 text-muted">
                        Göteborgs Universitet: Kandidatexamen i Japansk kultur och språk (2021).
                        <br>
                        <a href="https://gupea.ub.gu.se/handle/2077/69415">KANJILÄROMATERIAL SETT FRÅN ETT
                            SJÄLVSTUDIEPERSPEKTIV</a>
                    </p>
                    <p class="lead mt-3 text-muted">
                        <b>Övrigt</b>
                    </p>
                    <p class="my-3 text-muted">
                        Osaka University (Japan): Ett års utbytesstudier inom deras Maple-program (2020)
                    </p>
                    <p class="lead mt-3 text-muted">
                        <b>Språk</b>
                    </p>
                    <ul class="my-3 text-muted">
                        <li>Svenska: Flytande i tal och skrift (Modersmål) </li>
                        <li>Engelska: Bra i tal, flytande i skrift. </li>
                        <li>Japanska: Avancerad nivå. (Mellan JLPT N1 och N2.)</li>
                    </ul>
                    <p class="lead mt-3 text-muted">
                        <b>Körkort</b>
                    </p>
                    <p class="my-3 text-muted">
                        B - Dock ej tillgång till bil
                    </p>
                </div>
            </div>
        </div>
    </section>
  `;
}

function navigateToIndex() {
  document.getElementById("main").innerHTML = `
    <section id="intro">
            <div class="container-lg">
                <div class="row justify-content-center align-items-lg-center">
                    <div class="col-md-5 text-center text-md-start intro-text">
                        <h1>
                            <div class="display-3" style="color: rgb(159, 139, 212);">Viktor Rådberg</div>
                            <h3 class="text-muted ms-4">.NET-utvecklare</h3>
                            <h5 class="text-muted ms-4 pb-3">IT-Högskolan</h5>
                        </h1>
                        <!-- <p class="lead my-4 text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p> -->
                        <!-- <a href="#button" class="btn btn-secondary btn-lg">button</a> -->
                    </div>
                    <div class="col-md-5 text-center d-none d-md-block">
                        <img class="img-fluid" src="headshot.png" alt="headshot" id="headshot">
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="container-lg">
                <div class="row justify-content-center align-items-lg-start">
                    <div class="col-md-10 text-start text-md-start content-text">
                        <h1>
                            <div class="display-6 text-muted">Välkommen!</div>
                        </h1>
                        <p class="lead my-3 text-muted">
                            Här händer inte så mycket än, men du kan kolla runt så länge om du vill!
                        </p>
                    </div>
                </div>
            </div>
        </section>
  `;
}

function navigateToAchievements() {
  document.getElementById("main").innerHTML = `
<section>
  <div class="container-lg">
    <div class="row justify-content-center align-items-lg-start">
      <div class="col-md-10 text-start text-md-start content-text">
        <h1>
          <div class="display-6 text-muted">Framgångar</div>
        </h1>
        <p class="lead my-3 text-muted">
          Här händer inte så mycket än, men du kan kolla runt så länge om du
          vill!
        </p>
      </div>
    </div>
  </div>
</section>;
  `;
}
