import { Component, Injectable } from '@angular/core';


@Component({
    selector: 'app-language',
    standalone: true,
    imports: [],
    template: '',
    styles: ''
})

@Injectable({
    providedIn: 'root'
})


export class LanguagesComponent {

    constructor() {
    }

    loadEnglish: any;
    loadGerman: any;

    headerFooterToEnglish() {
        let aboutMe = document.getElementById('about_me') as HTMLElement; aboutMe.innerHTML = 'About me';
        let skillSet = document.getElementById('skill_set') as HTMLElement; skillSet.innerHTML = 'Skill set';
        let myWork = document.getElementById('my_work') as HTMLElement; myWork.innerHTML = 'My work';
        let respAboutMe = document.getElementById('respAboutMe') as HTMLLinkElement; respAboutMe.innerHTML = 'About me';
        let respSkills = document.getElementById('respSkillSet') as HTMLLinkElement; respSkills.innerHTML = 'Skill set';
        let respProjects = document.getElementById('respMyWork') as HTMLLinkElement; respProjects.innerHTML = 'My Work';
        let imprint = document.getElementById('imprint') as HTMLLinkElement; imprint.innerHTML = 'Imprint';
        let angular = document.getElementById('angular') as HTMLElement; angular.innerHTML = 'This site was created with Angular.';
    }



    aboutMeToEnglish() {
        let workTogether = document.getElementById('work_together') as HTMLElement; workTogether.innerHTML = `Let's work together`;
        let iAm = document.getElementById('i_am') as HTMLElement; iAm.innerHTML = 'I am';
        let locatedIn = document.getElementById('locatedIn') as HTMLElement; locatedIn.innerHTML = `located in <br> Stuttgart`;
        let remoteWork = document.getElementById('remoteWork') as HTMLElement; remoteWork.innerHTML = `open to work <br> remote`;
        let about_me_main = document.getElementById('about_me_main') as HTMLElement; about_me_main.innerHTML =
            `I am a Front-end developer based in Stuttgart,<br>
            Germany. I am able to realize the ideas of designers <br>
            and companies in real projects.<br>
            Therefore I would like to start a position as junior web developer. <br>
            My abilities to solve complex problems as well as <br>
            my coding skills would make me a valuable member of your team.`;
        let contact_if_match = document.getElementById('contact_if_match') as HTMLElement; contact_if_match.innerHTML = `
            Contact me for a personal talk.`;
        let sendMessageButton = document.getElementById('sendMessage') as HTMLElement; sendMessageButton.innerHTML = `Send a message`;
    }

    myWorkToEnglish() {
        let myWorkTitle = document.getElementById('my_work_Title') as HTMLElement; myWorkTitle.innerHTML = `My work`;
        let my_work_description = document.getElementById('my_work_description') as HTMLElement; my_work_description.innerHTML = `
            Explore some of my projects live to experience my skills. <br>
            Also visit the GitHub pages of my projects to see the codes.`;
        let join = document.getElementById('join') as HTMLElement; join.innerHTML = `
            Task manager inspired by the Kanban System. Create and<br>organize tasks using drag and drop functions. Create users and<br>
            log-in and out any time.`;
        let sharkie = document.getElementById('sharkie') as HTMLElement; sharkie.innerHTML = `
            2D game based on object-oriented approach.<br> Help Sharkie to catch coins and poison bottles to fight <br> the endboss.`;
        let pokedex = document.getElementById('pokedex') as HTMLElement; pokedex.innerHTML = `
            Based on the PokéAPI this is a simple library that provides <br> informations on pokemons.`;
    }

    colleguesToEnglish() {
        let teamplayer = document.getElementById('teamplayerNeeded') as HTMLElement; teamplayer.innerHTML = 'Need a teamplayer?';
        let whatColleguesSaid = document.getElementById('whatColleguesSaid') as HTMLElement; whatColleguesSaid.innerHTML = 'Here what my colleagues said about me';
        let project_join = document.getElementById('project_join') as HTMLElement; project_join.innerHTML = 'Project Join';
        let project_join2 = document.getElementById('project_join2') as HTMLElement; project_join2.innerHTML = 'Project Join';
        let thomas_opinion = document.getElementById('sydney_oppinion') as HTMLElement; thomas_opinion.innerHTML = `
        ‘‘The collaboration with Sangeethan was great from the start and
        very educational until the end. Through his ability to work in a team
        and his solution-oriented thinking, we were able to find suitable
        solutions for every problem. His positive nature always encouraged
        our group in a positive way, which ultimately led to a great project result.
        Thanks for the collaboration Sangee!’’`
        let julia_opinion = document.getElementById('julia_oppinion') as HTMLElement; julia_opinion.innerHTML = `
        ‘‘Sangeethan has written a clean code
        which made it possible, that the project
        is working very well. He was responsible
        for the board and also that the project is operating correctly.’’`;
    }

    contactToEnglish() {
        let contact = document.getElementById('contact') as HTMLElement; contact.innerHTML = `Contact`;
        let gotAProblem = document.getElementById('gotAProblem') as HTMLElement; gotAProblem.innerHTML = `Are you interested?`;
        let contactMeText = document.getElementById('contactMeText') as HTMLElement; contactMeText.innerHTML = `Don't wait to contact me. <br> 
        I am motivated to take part in realising your projects.`;
        let needADeveloper = document.getElementById('needADeveloper') as HTMLElement; needADeveloper.innerHTML = `We can talk about your questions and ideas. <br>
        <b>I am looking forward hearing from you!</b>`;
        let inputMessage = document.getElementById('clientMessage') as HTMLTextAreaElement; inputMessage.placeholder = 'Message';
        let messageSuccessfullySent = document.getElementById('mailSuccess') as HTMLElement; messageSuccessfullySent.innerHTML = `
        Your message was sent successfully`;
        let sayHello = document.getElementById('sayHello') as HTMLElement; sayHello.innerHTML = 'Say hello ;)';
    }

    imprintToEnglish() {
        let imprintTitle = document.getElementById('imprintTitle') as HTMLTitleElement; imprintTitle.innerHTML = 'Imprint';
        let informationAccordingTo = document.getElementById('informationAccording') as HTMLParagraphElement; informationAccordingTo.innerHTML = 'Information according to § 5 DDG';
        let representedBy = document.getElementById('representedBy') as HTMLSpanElement; representedBy.innerHTML = 'Represented by:';
        let contactImprint = document.getElementById('contactImprint') as HTMLSpanElement; contactImprint.innerHTML = 'Contact:';
        let telephone = document.getElementById('telephone') as HTMLSpanElement; telephone.innerHTML = 'Telephone:';
    }

    english() {
        this.loadEnglish = true;
        this.loadGerman = false;
        this.headerFooterToEnglish();
        if (/*window.location.pathname.endsWith('imprint') ||*/ window.location.href.endsWith('imprint')) {
            this.imprintToEnglish();
        }
        if (!window.location.href.endsWith('imprint') || !window.location.href.includes('privacyPolicy')) {
            if (window.screen.width > 1440) {
                let namePresentation = document.getElementById('namePresentation') as HTMLElement; namePresentation.innerHTML = 'Hello! I am Sangeethan';
            } else {
                let namePresentationResp = document.getElementById('namePresentationResp') as HTMLElement; namePresentationResp.innerHTML = 'Hello! I am Sangeethan';
            }
            this.aboutMeToEnglish();
            let skills = document.getElementById('skills') as HTMLElement; skills.innerHTML = `Skill set`;
            this.myWorkToEnglish();
            this.colleguesToEnglish();
            this.contactToEnglish();
        }
        localStorage.setItem("english", 'true');
        localStorage.setItem("german", 'false');
    }










    headerFooterToGerman() {
        let aboutMe = document.getElementById('about_me') as HTMLElement; aboutMe.innerHTML = 'Über mich';
        let skillSet = document.getElementById('skill_set') as HTMLElement; skillSet.innerHTML = 'Skills';
        let myWork = document.getElementById('my_work') as HTMLElement; myWork.innerHTML = 'Projekte';
        let respAboutMe = document.getElementById('respAboutMe') as HTMLLinkElement; respAboutMe.innerHTML = 'Über mich';
        let respSkills = document.getElementById('respSkillSet') as HTMLLinkElement; respSkills.innerHTML = 'Skills set';
        let respProjects = document.getElementById('respMyWork') as HTMLLinkElement; respProjects.innerHTML = 'Projekte';
        let imprint = document.getElementById('imprint') as HTMLElement; imprint.innerHTML = `Impressum`;
        let angular = document.getElementById('angular') as HTMLElement; angular.innerHTML = 'Diese Seite wurde mit Angular erstellt.';
    }

    aboutMeToGerman() {
        let workTogether = document.getElementById('work_together') as HTMLElement; workTogether.innerHTML = 'Lasst uns gemeinsam arbeiten';
        let iAm = document.getElementById('i_am') as HTMLElement; iAm.innerHTML = 'Ich bin';
        let locatedIn = document.getElementById('locatedIn') as HTMLElement; locatedIn.innerHTML = `wohnhaft in <br> Stuttgart`;
        let remoteWork = document.getElementById('remoteWork') as HTMLElement; remoteWork.innerHTML = `bereit remote <br> zu arbeiten`;
        let about_me_main = document.getElementById('about_me_main') as HTMLElement; about_me_main.innerHTML = `
        Ich bin Frontend Developer und wohnhaft in Stuttgart. <br>
        Mit meinen Kenntnissen bin ich in der Lage, Ideen von Designern und Unternehmen in echte Projekte umzusetzen. <br>
        Daher würde ich gerne eine Stelle als Junior Web Developer aufnehmen. <br>
        Meine Fähigkeiten komplexe Probleme zu lösen <br>
        als auch meine Leidenschaft für das Programmieren <br>
        würden mich zu einem wertvollen Mitglied in Ihrem Team machen.`;
        let contact_if_match = document.getElementById('contact_if_match') as HTMLElement; contact_if_match.innerHTML = `Kontaktieren Sie mich, für ein persönliches Gespräch.`;
        let sendMessageButton = document.getElementById('sendMessage') as HTMLElement; sendMessageButton.innerHTML = `Kontaktieren`;
    }

    myWorkToGerman() {
        let myWorkTitle = document.getElementById('my_work_Title') as HTMLElement; myWorkTitle.innerHTML = `Projekte`;
        let my_work_description = document.getElementById('my_work_description') as HTMLElement; my_work_description.innerHTML = `
        Erleben Sie einige meiner Projekte live um meine Skills näher kennenzulernen. <br> 
        Besuchen Sie außerdem die GitHub Seiten der Projekte um die Codes einzusehen.`;
        let join = document.getElementById('join') as HTMLElement; join.innerHTML = `
        Task-Manager inspiriert vom Kanban System. Erstellen und <br>
        organisieren Sie Tasks per Drag und Drop Funktion. Fügen Sie <br> User hinzu und loggen Sie sich beliebig ein- und aus.`;
        let sharkie = document.getElementById('sharkie') as HTMLElement; sharkie.innerHTML = `
        2D-Spiel basierend auf einem objektorientierten Ansatz.<br> Helfen Sie Sharkie Münzen und Gift Flaschen zu sammeln um gegen den Endboss zu kämpfen.`;
        let pokedex = document.getElementById('pokedex') as HTMLElement; pokedex.innerHTML = `
        Basierend auf die PokéAPI ist dies eine simpele library <br>die Informationen zu Pokemons liefert.`;
    }

    colleguesToGerman() {
        let teamplayer = document.getElementById('teamplayerNeeded') as HTMLElement; teamplayer.innerHTML = 'Teamplayer gesucht?';
        let whatColleguesSaid = document.getElementById('whatColleguesSaid') as HTMLElement; whatColleguesSaid.innerHTML = 'Das sagen meine Kollegen über mich';
        let project_join = document.getElementById('project_join') as HTMLElement; project_join.innerHTML = 'Projekt Join';
        let project_join2 = document.getElementById('project_join2') as HTMLElement; project_join2.innerHTML = 'Projekt Join';
        let thomas_opinion = document.getElementById('sydney_oppinion') as HTMLElement; thomas_opinion.innerHTML = `
        ‘‘Die Zusammenarbeit mit Sangeethan gestaltete sich von Anfang
        bis Ende sehr lehrreich. Durch seine Teamfähigkeit
        und lösungsorientiertes Denken, konnten wir in der Gruppe
        zu jedem Problem, gemeinsam eine passende Lösung erarbeiten.
        Seine positive Art ermutigte unsere Gruppe stets positiv,
        was am Ende zu einem tollen Projektergebnis führte.
        Danke für die Zusammenarbeit Sangee!’’`;
        let julia_opinion = document.getElementById('julia_oppinion') as HTMLElement; julia_opinion.innerHTML = `
        ‘‘Sangeethan hat einen sauberen Code
        geschrieben, welches ermöglicht,
        dass das Projekt funktioniert. Er war
        für das Board und für die Funktionsweise des Projekts zuständig.’’`;
    }

    contactToGerman() {
        let contact = document.getElementById('contact') as HTMLElement; contact.innerHTML = `Kontakt`;
        let gotAProblem = document.getElementById('gotAProblem') as HTMLElement; gotAProblem.innerHTML = `Sie sind Interessiert?`;
        let contactMeText = document.getElementById('contactMeText') as HTMLElement; contactMeText.innerHTML = `Dann kontaktieren Sie mich. <br> 
            Ich bin motiviert bei der Umsetzung Ihrer Projekte mitzuwirken.`;
        let needADeveloper = document.getElementById('needADeveloper') as HTMLElement; needADeveloper.innerHTML = `
            Wir können alle Anregungen und offenen Fragen klären. <br> <b>Ich freue mich auf Sie!</b>`;
        let inputMessage = document.getElementById('clientMessage') as HTMLTextAreaElement; inputMessage.placeholder = 'Nachricht';
        let messageSuccessfullySent = document.getElementById('mailSuccess') as HTMLElement; messageSuccessfullySent.innerHTML = `
        Die Nachricht wurde erfolgreich abgesendet`;
        let sayHello = document.getElementById('sayHello') as HTMLElement; sayHello.innerHTML = `Sag Hallo ;)`;
    }

    imprintToGerman() {
        let imprintTitle = document.getElementById('imprintTitle') as HTMLTitleElement; imprintTitle.innerHTML = 'Impressum';
        let informationAccordingTo = document.getElementById('informationAccording') as HTMLParagraphElement; informationAccordingTo.innerHTML = 'Angaben gemäß § 5 DDG';
        let representedBy = document.getElementById('representedBy') as HTMLSpanElement; representedBy.innerHTML = 'Vertreten durch:';
        let contactImprint = document.getElementById('contactImprint') as HTMLSpanElement; contactImprint.innerHTML = 'Kontakt:';
        let telephone = document.getElementById('telephone') as HTMLSpanElement; telephone.innerHTML = 'Telefon:';
    }

    german() {
            this.loadGerman = true;
            this.loadEnglish = false;
            this.headerFooterToGerman();
            if (/*window.location.pathname.endsWith('imprint') ||*/ window.location.href.endsWith('imprint')) {
                this.imprintToGerman();
            }
            if (!window.location.href.endsWith('imprint') || !window.location.href.includes('privacyPolicy')) {
                if (window.screen.width > 1440) {
                    let namePresentation = document.getElementById('namePresentation') as HTMLElement; namePresentation.innerHTML = 'Hallo! Ich bin Sangeethan';
                } else {
                    let namePresentationResp = document.getElementById('namePresentationResp') as HTMLElement; namePresentationResp.innerHTML = 'Hallo! Ich bin Sangeethan';
                }
                this.aboutMeToGerman();
                let skills = document.getElementById('skills') as HTMLElement; skills.innerHTML = `Skills`;
                this.myWorkToGerman();
                this.colleguesToGerman();
                this.contactToGerman();
            }
            localStorage.setItem("english", 'false');
            localStorage.setItem("german", 'true');
        }



        loadLanguage() {
            let getEnglish = localStorage.getItem('english');
            if (getEnglish) {
                this.loadEnglish = JSON.parse(getEnglish);
            }
            let getGerman = localStorage.getItem('german');
            if (getGerman) {
                this.loadGerman = JSON.parse(getGerman);
            }
            if (this.loadEnglish == true) {
                this.english();
            } else if (this.loadGerman == true) {
                this.german();
            }
            else {
                this.german();
            }
        }

    }