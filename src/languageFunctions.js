function pathnameWebpage() {
    return window.location.href.endsWith('') || window.location.href.endsWith('#startScreen_link') ||
        window.location.href.endsWith('#aboutMe_link') || window.location.href.endsWith('#skillSet_link') ||
        window.location.href.endsWith('#myWork_link')
}

function headerFooterToEnglish() {
    document.getElementById('about_me').innerHTML = 'About me';
    document.getElementById('skill_set').innerHTML = 'Skill set';
    document.getElementById('my_work').innerHTML = 'My work';
    document.getElementById('respAboutMe').innerHTML = 'About me';
    document.getElementById('respSkillSet').innerHTML = 'Skill set';
    document.getElementById('respMyWork').innerHTML = 'My Work';
    document.getElementById('imprint').innerHTML = 'Imprint';
    document.getElementById('angular').innerHTML = 'This site was created with Angular.';
}



function aboutMeToEnglish() {
    document.getElementById('work_together').innerHTML = `Let's work together`;
    document.getElementById('i_am').innerHTML = 'I am';
    document.getElementById('locatedIn').innerHTML = `located in <br> Stuttgart`;
    document.getElementById('remoteWork').innerHTML = `open to work <br> remote`;
    document.getElementById('about_me_main').innerHTML = `
        I am a Front-end developer based in Stuttgart,<br>
        Germany. I enjoy helping designers and<br>
        companies bring their ideas into real life. I am<br>
        looking forward to continuing my developer<br>
        career with a job in a junior web developer<br>
        position. My ability to solve complex problems<br>
        and my passion for programming make me a<br>
        valuable member for your team.`;
    document.getElementById('contact_if_match').innerHTML = `
        If you think I’d be a good match for your projects,<br>
        contact me!`;
    document.getElementById('sendMessage').innerHTML = `Send a message`;
}

function myWorkToEnglish() {
    document.getElementById('my_work_Title').innerHTML = `My work`;
    document.getElementById('my_work_description').innerHTML = `
        Explore a selection of my work here - Interact with <br> projects to see my skills in action.`;
    document.getElementById('join').innerHTML = `
        Task manager inspired by the Kanban System. Create and<br>organize tasks using drag and drop functions, assign users and<br>
        categories.`;
    document.getElementById('sharkie').innerHTML = `
        2D game based on object-oriented approach.<br> Help Sharkie to catch coins and poison bottles to fight against the<br>endboss.`;
    document.getElementById('pokedex').innerHTML = `
        Based on the PokéAPI a simple library that provides and <br>catalogues pokemon information.`;
}

function contactToEnglish() {
    document.getElementById('contact').innerHTML = `Contact`;
    document.getElementById('gotAProblem').innerHTML = `Got a problem to solve?`;
    document.getElementById('contactMeText').innerHTML = `Contact me through this form, 
    I am interested in hearing<br>from you, knowing your ideas and contributing to your<br>projects with my work`;
    document.getElementById('needADeveloper').innerHTML = `Need a Frontend developer? <b>Contact me!</b>`;
    document.getElementById('clientMessage').placeholder = 'Message';
    document.getElementById('read_privacy_policy').innerHTML = `
    I've read the privacy policy and agree to the processing of my data as outlined.`;
    document.getElementById('sayHello').innerHTML = 'Say hello ;)';
}

function english() {
    if (window.location.pathname.endsWith('imprint') || !window.location.href.endsWith('imprint')) {
        headerFooterToEnglish();
    }
    if (!window.location.href.endsWith('imprint')) {
        document.getElementById('namePresentation').innerHTML = 'Hello! I am Sangeethan';
        document.getElementById('namePresentationResp').innerHTML = 'Hello! I am Sangeethan';
        aboutMeToEnglish();
        document.getElementById('skills').innerHTML = `Skill set`;
        myWorkToEnglish();
        contactToEnglish();
    }
    localStorage.setItem("english", 'true');
    localStorage.setItem("german", 'false');
}










function headerFooterToGerman() {
    document.getElementById('about_me').innerHTML = 'Über mich';
    document.getElementById('skill_set').innerHTML = 'Skills';
    document.getElementById('my_work').innerHTML = 'Projekte';
    document.getElementById('respAboutMe').innerHTML = 'Über mich';
    document.getElementById('respSkillSet').innerHTML = 'Skills set';
    document.getElementById('respMyWork').innerHTML = 'Projekte';
    document.getElementById('imprint').innerHTML = `Impressum`;
    document.getElementById('angular').innerHTML = 'Diese Seite wurde mit Angular erstellt.';
}

function aboutMeToGerman() {
    document.getElementById('work_together').innerHTML = 'Lasst uns zusammen arbeiten';
    document.getElementById('i_am').innerHTML = 'Ich bin';
    document.getElementById('locatedIn').innerHTML = `wohnhaft in <br> Stuttgart`;
    document.getElementById('remoteWork').innerHTML = `bereit remote <br> zu arbeiten`;
    document.getElementById('about_me_main').innerHTML = `
    Ich bin ein Frontend Developer aus Stuttgart.<br>
    Ich setze gerne die Ideen von Designern <br>
    und Unternehmen in echte Projekte um. <br>
    Ich bin würde deshalb gerne eine Stelle <br>
    als junior web developer aufnehmen.<br>
    Meine Fähigkeiten komplexe Probleme zu lösen <br> 
    und meine Leidenschaft für das Programmieren <br>
    machen mich zu einem wertvollen Mitglied für Ihr Team.`;
    document.getElementById('contact_if_match').innerHTML = `Kontaktieren Sie mich, wenn Sie denken,<br>
    dass ich in Ihr Team passe.`;
    document.getElementById('sendMessage').innerHTML = `Kontaktiere mich`;
}

function myWorkToGerman() {
    document.getElementById('my_work_Title').innerHTML = `Projekte`;
    document.getElementById('my_work_description').innerHTML = `
    Hier sind einige meiner Projekte - Erkunden Sie <br> meine Projekte um meine Skills zu sehen.`;
    document.getElementById('join').innerHTML = `
    Task manager inspiriert vom Kanban System. Erstellen und<br>organisieren Sie Tasks per Drag und Drop Funktion, fügen Sie <br>
    User hinzu sowie Kategorien.`;
    document.getElementById('sharkie').innerHTML = `
    2D-Spiel basierend auf einem objektorientierten Ansatz.<br> Helfe Sharkie Münzen und Gift Flaschen zu sammeln um gegen den <br> Endboss zu kämpfen.`;
    document.getElementById('pokedex').innerHTML = `
    Basierend auf die PokéAPI ist dies eine simple library <br>die Informationen zu Pokemons liefert.`;
}

function functioncontactToGerman() {
    let contact = document.getElementById('contact').innerHTML = `Kontakt`;
    document.getElementById('gotAProblem').innerHTML = `Sie haben ein Problem?`;
    document.getElementById('contactMeText').innerHTML = `Kontaktieren Sie mich. 
        Zusammen finden wir eine Lösung, <br>wie ich mit meiner Arbeit eine Lösung für Ihre Ideen finde.`;
    document.getElementById('needADeveloper').innerHTML = `
        Sie brauchen einen Frontend Developer? <b>Kontaktieren Sie mich!</b>`;
    document.getElementById('clientMessage').placeholder = 'Nachricht';
    let readPrivacyPolicy = document.getElementById('read_privacy_policy').innerHTML = `
        Ich habe die Datenschutzerklärung gelesen und bin mit der beschriebenen Verarbeitung meiner Daten einverstanden.`;
    document.getElementById('sayHello').innerHTML = `Sag Hallo ;)`;
}

function german() {
    if (window.location.pathname.endsWith('imprint') || !window.location.href.endsWith('imprint')) {
        headerFooterToGerman();
    }
    if (!window.location.href.endsWith('imprint')) {
        document.getElementById('namePresentation').innerHTML = 'Hallo! Ich bin Sangeethan';
        document.getElementById('namePresentationResp').innerHTML = 'Hallo! Ich bin Sangeethan';
        aboutMeToGerman();
        document.getElementById('skills').innerHTML = `Skills`;
        myWorkToGerman();
        contactToGerman();
    }
    localStorage.setItem("english", 'false');
    localStorage.setItem("german", 'true');
}





function loadLanguage() {
    let loadEnglish;
    let loadGerman;


    let getEnglish = localStorage.getItem('english');
    if (getEnglish) {
        loadEnglish = JSON.parse(getEnglish);
    }

    let getGerman = localStorage.getItem('german');
    if (getGerman) {
        loadGerman = JSON.parse(getGerman);
    }

    if (loadEnglish == true) {
        console.log('ENGLISH');
    } else if (loadGerman == true) {
        console.log('GERMAN');
    } else {
        console.log('NO LANGUAGE')
    }
}








module.exports = {
    languageJS
}



