import { Component, Injectable, input } from '@angular/core';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [],
    template: '',
    styles: ''
})

@Injectable({
    providedIn: 'root'
})

export class FunctionsComponent {

    english() {
        let aboutMe = document.getElementById('about_me') as HTMLElement; aboutMe.innerHTML = 'About me';
        let skillSet = document.getElementById('skill_set') as HTMLElement; skillSet.innerHTML = 'Skill set';
        let myWork = document.getElementById('my_work') as HTMLElement; myWork.innerHTML = 'My work';
        
        let namePresentation = document.getElementById('namePresentation') as HTMLElement; namePresentation.innerHTML = 'Hello! I am Sangeethan';
        let namePresentationResp = document.getElementById('namePresentationResp') as HTMLElement; namePresentationResp.innerHTML = 'Hello! I am Sangeethan';
        let workTogether = document.getElementById('work_together') as HTMLElement; workTogether.innerHTML = `Let's work together`;
        let iAm = document.getElementById('i_am') as HTMLElement; iAm.innerHTML = 'I am';
        let locatedIn = document.getElementById('locatedIn') as HTMLElement; locatedIn.innerHTML = `located in <br> Stuttgart`;
        let remoteWork = document.getElementById('remoteWork') as HTMLElement; remoteWork.innerHTML = `open to work <br> remote`;
        let about_me_main = document.getElementById('about_me_main') as HTMLElement; about_me_main.innerHTML = `
        I am a Front-end developer based in Stuttgart,<br>
        Germany. I enjoy helping designers and<br>
        companies bring their ideas into real life. I am<br>
        looking forward to continuing my developer<br>
        career with a job in a junior web developer<br>
        position. My ability to solve complex problems<br>
        and my passion for programming make me a<br>
        valuable member for your team.`;
        let contact_if_match = document.getElementById('contact_if_match') as HTMLElement; contact_if_match.innerHTML = `
        If you think I’d be a good match for your projects,<br>
        contact me!`;
        let sendMessageButton = document.getElementById('sendMessage') as HTMLElement; sendMessageButton.innerHTML = `Send a message`;
        let skills = document.getElementById('skills') as HTMLElement; skills.innerHTML = `Skill set`;
        let myWorkTitle = document.getElementById('my_work_Title') as HTMLElement; myWorkTitle.innerHTML = `My work`;
        let my_work_description = document.getElementById('my_work_description') as HTMLElement; my_work_description.innerHTML = `
        Explore a selection of my work here - Interact with <br> projects to see my skills in action.`;
        let join = document.getElementById('join') as HTMLElement; join.innerHTML = `
        Task manager inspired by the Kanban System. Create and<br>organize tasks using drag and drop functions, assign users and<br>
        categories.`;
        let sharkie = document.getElementById('sharkie') as HTMLElement; sharkie.innerHTML = `
        2D game based on object-oriented approach.<br> Help Sharkie to catch coins and poison bottles to fight against the<br>endboss.`;
        let pokedex = document.getElementById('pokedex') as HTMLElement; pokedex.innerHTML = `
        Based on the PokéAPI a simple library that provides and <br>catalogues pokemon information.`;
        let contact = document.getElementById('contact') as HTMLElement; contact.innerHTML = `Contact`;
        let gotAProblem = document.getElementById('gotAProblem') as HTMLElement; gotAProblem.innerHTML = `Got a problem to solve?`;
        let contactMeText = document.getElementById('contactMeText') as HTMLElement; contactMeText.innerHTML = `Contact me through this form, 
        I am interested in hearing<br>from you, knowing your ideas and contributing to your<br>projects with my work`;
        let needADeveloper = document.getElementById('needADeveloper') as HTMLElement; needADeveloper.innerHTML = `Need a Frontend developer? <b>Contact me!</b>`;
        let readPrivacyPolicy = document.getElementById('read_privacy_policy') as HTMLElement; readPrivacyPolicy.innerHTML = `
        I've read the privacy policy and agree to the processing of my data as outlined.`;
        let sayHello = document.getElementById('sayHello') as HTMLElement; sayHello.innerHTML = 'Say hello ;)';
        let imprint= document.getElementById('imprint') as HTMLElement; imprint.innerHTML = 'Imprint';
        let angular= document.getElementById('angular') as HTMLElement; angular.innerHTML = 'This site was created with Angular.';
        let inputMessage = document.getElementById('clientMessage') as HTMLTextAreaElement; inputMessage.placeholder = 'Message';

        let respAboutMe= document.getElementById('respAboutMe') as HTMLLinkElement; respAboutMe.innerHTML = 'About me';
        let respProjects = document.getElementById('respProjects') as HTMLLinkElement; respProjects.innerHTML = 'Projects';
    }

    german() {
        let aboutMe = document.getElementById('about_me') as HTMLElement; aboutMe.innerHTML = 'Über mich';
        let skillSet = document.getElementById('skill_set') as HTMLElement; skillSet.innerHTML = 'Skills';
        let myWork = document.getElementById('my_work') as HTMLElement; myWork.innerHTML = 'Projekte';
        let namePresentation = document.getElementById('namePresentation') as HTMLElement; namePresentation.innerHTML = 'Hallo! Ich bin Sangeethan';
        let namePresentationResp = document.getElementById('namePresentationResp') as HTMLElement; namePresentationResp.innerHTML = 'Hallo! Ich bin Sangeethan';
        let workTogether = document.getElementById('work_together') as HTMLElement; workTogether.innerHTML = 'Lasst uns zusammen arbeiten';
        let iAm = document.getElementById('i_am') as HTMLElement; iAm.innerHTML = 'Ich bin';
        let locatedIn = document.getElementById('locatedIn') as HTMLElement; locatedIn.innerHTML = `wohnhaft in <br> Stuttgart`;
        let remoteWork = document.getElementById('remoteWork') as HTMLElement; remoteWork.innerHTML = `bereit remote <br> zu arbeiten`;
        let about_me_main = document.getElementById('about_me_main') as HTMLElement; about_me_main.innerHTML = `
        Ich bin ein Frontend Developer aus Stuttgart.<br>
        Ich setze gerne die Ideen von Designern <br>
        und Unternehmen in echte Projekte um. <br>
        Ich bin würde deshalb gerne eine Stelle <br>
        als junior web developer aufnehmen.<br>
        Meine Fähigkeiten komplexe Probleme zu lösen <br> 
        und meine Leidenschaft für das Programmieren <br>
        machen mich zu einem wertvollen Mitglied für Ihr Team.`;
        let contact_if_match = document.getElementById('contact_if_match') as HTMLElement; contact_if_match.innerHTML = `Kontaktieren Sie mich, wenn Sie denken,<br>
        dass ich in Ihr Team passe.`;
        let sendMessageButton = document.getElementById('sendMessage') as HTMLElement; sendMessageButton.innerHTML = `Kontaktiere mich`;
        let skills = document.getElementById('skills') as HTMLElement; skills.innerHTML = `Skills`;
        let myWorkTitle = document.getElementById('my_work_Title') as HTMLElement; myWorkTitle.innerHTML = `Projekte`;
        let my_work_description = document.getElementById('my_work_description') as HTMLElement; my_work_description.innerHTML = `
        Hier sind einige meiner Projekte - Erkunden Sie <br> meine Projekte um meine Skills zu sehen.`;
        let join = document.getElementById('join') as HTMLElement; join.innerHTML = `
        Task manager inspiriert vom Kanban System. Erstellen und<br>organisieren Sie Tasks per Drag und Drop Funktion, fügen Sie <br>
        User hinzu sowie Kategorien.`;
        let sharkie = document.getElementById('sharkie') as HTMLElement; sharkie.innerHTML = `
        2D-Spiel basierend auf einem objektorientierten Ansatz.<br> Helfe Sharkie Münzen und Gift Flaschen zu sammeln um gegen den <br> Endboss zu kämpfen.`;
        let pokedex = document.getElementById('pokedex') as HTMLElement; pokedex.innerHTML = `
        Basierend auf die PokéAPI ist dies eine simple library <br>die Informationen zu Pokemons liefert.`;
        let contact = document.getElementById('contact') as HTMLElement; contact.innerHTML = `Kontakt`;
        let gotAProblem = document.getElementById('gotAProblem') as HTMLElement; gotAProblem.innerHTML = `Sie haben ein Problem?`;
        let contactMeText = document.getElementById('contactMeText') as HTMLElement; contactMeText.innerHTML = `Kontaktieren Sie mich. 
        Zusammen finden wir eine Lösung, <br>wie ich mit meiner Arbeit eine Lösung für Ihre Ideen finde.`;
        let needADeveloper = document.getElementById('needADeveloper') as HTMLElement; needADeveloper.innerHTML = `
        Sie brauchen einen Frontend Developer? <b>Kontaktieren Sie mich!</b>`;
        let readPrivacyPolicy = document.getElementById('read_privacy_policy') as HTMLElement; readPrivacyPolicy.innerHTML = `
        Ich habe die Datenschutzerklärung gelesen und bin mit der beschriebenen Verarbeitung meiner Daten einverstanden.`;
        let sayHello = document.getElementById('sayHello') as HTMLElement; sayHello.innerHTML = `Sag Hallo ;)`;
        let imprint= document.getElementById('imprint') as HTMLElement; imprint.innerHTML = `Impressum`;
        let angular= document.getElementById('angular') as HTMLElement; angular.innerHTML = 'Diese Seite wurde mit Angular erstellt.';
        let inputMessage = document.getElementById('clientMessage') as HTMLTextAreaElement; inputMessage.placeholder = 'Nachricht';

        let respAboutMe= document.getElementById('respAboutMe') as HTMLLinkElement; respAboutMe.innerHTML = 'Über mich';
        let respProjects = document.getElementById('respProjects') as HTMLLinkElement; respProjects.innerHTML = 'Projekte';
    }

}