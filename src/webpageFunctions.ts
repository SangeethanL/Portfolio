import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class WebpageFunctions {
    test123() {
        console.log('JAAAAAAA')
    }
    /*
    skillsOffset: any;

    joinImgOffset: any;
    joinImgHeight: any;

    sharkieImgOffset: any;
    sharkieImgHeight: any;

    pokeImgOffset: any;
    pokeImgHeight: any;

    nameOffset: any;
    emailOffset: any;
    messageOffset: any;

    pathIsWebpage() {
        return window.location.href.endsWith('') || window.location.href.endsWith('#startScreen_link') ||
            window.location.href.endsWith('#aboutMe_link') || window.location.href.endsWith('#skillSet_link') ||
            window.location.href.endsWith('#myWork_link')
    }

    init() {
        if (this.pathIsWebpage()) {
            skillsOffset = document.getElementById('skills')?.getBoundingClientRect().bottom;

            joinImgOffset = document.getElementById('joinImg')?.getBoundingClientRect().top;
            joinImgHeight = document.getElementById('joinImg')?.getBoundingClientRect().height;

            sharkieImgOffset = document.getElementById('sharkieImg')?.getBoundingClientRect().top;
            sharkieImgHeight = document.getElementById('sharkieImg')?.getBoundingClientRect().height;

            pokeImgOffset = document.getElementById('pokedexImg')?.getBoundingClientRect().top;
            pokeImgHeight = document.getElementById('pokedexImg')?.getBoundingClientRect().height;

            nameOffset = document.getElementById('clientName')?.getBoundingClientRect().top;
            emailOffset = document.getElementById('clientEmail')?.getBoundingClientRect().top;
            messageOffset = document.getElementById('clientMessage')?.getBoundingClientRect().top;
        }
    }

    fadeJoin() {
        if (window.scrollY + window.innerHeight > (this.joinImgOffset + (this.joinImgHeight / 2))) {
            document.getElementById('joinImg')?.style = "opacity: 1 !important;scale: 1; transition: all 125ms ease-in-out;";
        }
        else {
            document.getElementById('joinImg')?.style = "opacity: 0 !important;scale: 0.9; transition: all 125ms ease-in-out;";
        }
    }

    fadeSharkie() {
        if (window.scrollY + window.innerHeight > (this.sharkieImgOffset + (this.sharkieImgHeight / 2))) {
            document.getElementById('sharkieImg')?.style = "opacity: 1 !important;scale: 1; transition: all 125ms ease-in-out;";
        }
        else {
            document.getElementById('sharkieImg')?.style = "opacity: 0 !important;scale: 0.9; transition: all 125ms ease-in-out;";
        }
    }

    fadePokedex() {
        if (window.scrollY + window.innerHeight > (this.pokeImgOffset + (this.pokeImgHeight / 2))) {
            document.getElementById('pokedexImg')?.style = "opacity: 1 !important; scale: 1;transition: all 125ms ease-in-out;";
        }
        else {
            document.getElementById('pokedexImg')?.style = "opacity: 0 !important;scale: 0.9; transition: all 125ms ease-in-out;";
        }
    }

    fadeName() {
        if (window.scrollY + window.innerHeight > this.nameOffset + 170) {
            document.getElementById('clientName')?.style = "opacity: 1 !important; transition: all 125ms ease-in-out;";
        }
        else {
            document.getElementById('clientName')?.style = "opacity: 0 !important; transition: all 125ms ease-in-out;";
        }
    }

    fadeEmail() {
        if (window.scrollY + window.innerHeight > this.emailOffset + 170) {
            document.getElementById('clientEmail')?.style = "opacity: 1 !important; transition: all 125ms ease-in-out;";
        }
        else {
            document.getElementById('clientEmail')?.style = "opacity: 0 !important; transition: all 125ms ease-in-out;";
        }
    }

    fadeMessage() {
        if (window.scrollY + window.innerHeight > this.messageOffset + 140) {
            document.getElementById('clientMessage')?.style = "opacity: 1 !important; transition: all 125ms ease-in-out;";
        }
        else {
            document.getElementById('clientMessage')?.style = "opacity: 0 !important; transition: all 125ms ease-in-out;";
        }
    }

    fadeItems() {
        fadeJoin();
        fadeSharkie();
        fadePokedex();
        fadeName();
        fadeEmail();
        fadeMessage();
    }

    fadeSkillsIcons() {
        let milliseconds = 100;
        for (let i = 1; i < 12; i++) {
            if (i >= 2) {
                let addToMs = milliseconds / i;
                milliseconds = addToMs + milliseconds;
            }
            if (window.scrollY + window.innerHeight > (this.skillsOffset + 225)) {
                //document.getElementById(`${i}`).style = `opacity: 1 !important; transition-delay: ${milliseconds}ms;`;
            } else {
                //document.getElementById(`${i}`).style = 'opacity: 0;';
            }
        }
    }

    scroll() {
        var navBar = document.getElementById('navigation');
        if (window.pageYOffset >= (navBar.offsetTop + 40)) {
            fixHeader();
        } else {
            defixHeader();
        }
        responsiveArrowAnimation();
    }

    fixHeader() {
        document.getElementById('navigation_background')?.classList.add('navigation_background');
        document.getElementById('nav_links')?.classList.add('scroll-font-color');
        //document.getElementById('english')?.style = "width: 21px; height: 21px;";
        //document.getElementById('german')?.style = "width: 21px; height: 21px;";
        if (pathIsWebpage()) {
            fullLoadScrollInformation();
        }
    }

    defixHeader() {
        document.getElementById('navigation_background')?.classList.remove('navigation_background');
        document.getElementById('nav_links')?.classList.remove('scroll-font-color');
        //document.getElementById('english')?.style = "";
        //document.getElementById('german')?.style = "";
        if (pathIsWebpage()) {
            resetScrollInformation();
        }
    }

    fullLoadScrollInformation() {
        document.getElementById('scrollText')?.classList.remove('animate-scrollText');
        document.getElementById('scrollText')?.classList.add('display-scrollText');
        document.getElementById('scrollBar')?.classList.remove('animate-scrollBar');
        document.getElementById('scrollBar')?.classList.add('display-scrollBar');
    }

    resetScrollInformation() {
        document.getElementById('scrollText')?.classList.add('animate-scrollText');
        document.getElementById('scrollText')?.classList.remove('display-scrollText');
        document.getElementById('scrollBar')?.classList.add('animate-scrollBar');
        document.getElementById('scrollBar')?.classList.remove('display-scrollBar');
    }

    responsiveArrowAnimation() {
        if (this.pathIsWebpage()) {
            if (window.pageYOffset >= 160) {
                document.getElementById('arrow')?.classList.remove('arrowAnimation');
            } else {
                document.getElementById('arrow')?.classList.add('arrowAnimation');
            }
        }
    }

window.onscroll = function () {
        scroll();
        if (pathIsWebpage()) {
            fadeItems();
            fadeSkillsIcons();
        }
    };*/

}
