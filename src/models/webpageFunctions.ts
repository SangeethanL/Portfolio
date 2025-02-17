import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class WebpageFunctions {
    skillsTop: any;
    skillsOffset: any;

    joinImgTop: any;
    joinImgHeight: any;
    joinImgOffset: any;

    sharkieImgTop: any;
    sharkieImgHeight: any;
    sharkieImgOffset: any;

    pokeImgTop: any;
    pokeImgHeight: any;
    pokeImgOffset: any;

    nameTop: any;
    nameOffset: any;
    emailTop: any;
    emailOffset: any;
    messageTop: any;
    messageOffset: any;

    footerTop: any;
    footerOffset: any;

    pathIsWebpageComponent() {
        return window.location.href.endsWith('') || window.location.href.endsWith('home')
    }

    init() {
            this.skillsTop = document.getElementById('skills')?.getBoundingClientRect().bottom;
            this.skillsOffset = this.skillsTop + window.pageYOffset;

            this.joinImgTop = document.getElementById('joinImg')?.getBoundingClientRect().top
            this.joinImgOffset = this.joinImgTop + window.pageYOffset;
            this.joinImgHeight = document.getElementById('joinImg')?.getBoundingClientRect().height;

            this.sharkieImgTop = document.getElementById('sharkieImg')?.getBoundingClientRect().top;
            this.sharkieImgOffset = this.sharkieImgTop + window.pageYOffset;
            this.sharkieImgHeight = document.getElementById('sharkieImg')?.getBoundingClientRect().height;

            this.pokeImgTop = document.getElementById('pokedexImg')?.getBoundingClientRect().top;
            this.pokeImgOffset = this.pokeImgTop + window.pageYOffset;
            this.pokeImgHeight = document.getElementById('pokedexImg')?.getBoundingClientRect().height;

            this.nameTop = document.getElementById('clientName')?.getBoundingClientRect().top;
            this.nameOffset = this.nameTop + window.pageYOffset;
            this.emailTop = document.getElementById('clientEmail')?.getBoundingClientRect().top;
            this.emailOffset = this.emailTop + window.pageYOffset;
            this.messageTop = document.getElementById('clientMessage')?.getBoundingClientRect().top;
            this.messageOffset = this.messageTop + window.pageYOffset;

            this.footerTop = document.getElementById('frontend_logo')?.getBoundingClientRect().top;
            this.footerOffset = this.footerTop + window.pageYOffset;
    }



    fadeProject(imgOffset: any, imgHeight: any, imgId: string) {
        if (window.pageYOffset + window.innerHeight > (imgOffset + (imgHeight / 2))) {
            document.getElementById(imgId)?.setAttribute("style", "opacity: 1 !important;scale: 1; transition: all 125ms ease-in-out;");
        }
    }

    fadeContactField(fieldOffset: any, plusOffset: number, fieldId: string) {
        if (window.pageYOffset + window.innerHeight > fieldOffset + plusOffset) {
            document.getElementById(fieldId)?.setAttribute("style", "opacity: 1 !important; transition: all 125ms ease-in-out;");
        }
        else {
            document.getElementById(fieldId)?.setAttribute("style", "opacity: 0 !important; transition: all 125ms ease-in-out;");
        }
    }

    fadeItems() {
        this.fadeProject(this.joinImgOffset, this.joinImgHeight, 'joinImg');
        this.fadeProject(this.sharkieImgOffset, this.sharkieImgHeight, 'sharkieImg');
        this.fadeProject(this.pokeImgOffset, this.pokeImgHeight, 'pokedexImg');
        this.fadeContactField(this.nameOffset, 170, 'clientName');
        this.fadeContactField(this.emailOffset, 170, 'clientEmail');
        this.fadeContactField(this.messageOffset, 140, 'clientMessage');
    }

    fadeSkillsIcons() {
        let milliseconds = 100;
        for (let i = 1; i < 12; i++) {
            if (i >= 2) {
                let addToMs = milliseconds / i;
                milliseconds = addToMs + milliseconds;
            }
            if (window.pageYOffset + window.innerHeight > (this.skillsOffset + 225)) {
                document.getElementById(`${i}`)?.setAttribute("style", `opacity: 1 !important; transition-delay: ${milliseconds}ms;`);
            }
        }
    }

    reduceHeaderLogoBrightness() {
        if (window.pageYOffset + window.innerHeight > this.footerOffset) {
            document.getElementById('logo')?.setAttribute("style", `opacity: 0.5; transition: all 105ms ease-in-out;`);
            document.getElementById('logo_responsive')?.setAttribute("style", `opacity: 0.5; transition: all 105ms ease-in-out;`);
        } else {
            document.getElementById('logo')?.setAttribute("style", `opacity: 1; transition: all 105ms ease-in-out;`);
            document.getElementById('logo_responsive')?.setAttribute("style", `opacity: 1; transition: all 105ms ease-in-out;`);
        }
    }

    scroll() {
        let navBar = document.getElementById('navigation') as HTMLElement;
        if (window.pageYOffset >= (navBar.offsetTop + 40)) {
            this.fixHeader();
        } else {
            this.defixHeader();
        }
        this.fadeItems();
        this.fadeSkillsIcons();
        this.responsiveArrowAnimation();
        this.reduceHeaderLogoBrightness();
    }

    fixHeader() {
        document.getElementById('navigation_background')?.classList.add('navigation_background');
        document.getElementById('nav_links')?.classList.add('scroll-font-color');
        document.getElementById('englishMaxWidth')?.classList.add('language_img_onScroll');
        document.getElementById('germanMaxWidth')?.classList.add('language_img_onScroll');
        if (this.pathIsWebpageComponent()) {
            this.fullLoadScrollInformation();
        }
    }

    defixHeader() {
        document.getElementById('navigation_background')?.classList.remove('navigation_background');
        document.getElementById('nav_links')?.classList.remove('scroll-font-color');
        document.getElementById('englishMaxWidth')?.classList.remove('language_img_onScroll');
        document.getElementById('germanMaxWidth')?.classList.remove('language_img_onScroll');
        if (this.pathIsWebpageComponent()) {
            this.resetScrollInformation();
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
        if (this.pathIsWebpageComponent()) {
            if (window.pageYOffset >= 160) {
                document.getElementById('scroll_info_responsive')?.classList.add('fadeOutArrowAnimation');
            } else {
                document.getElementById('scroll_info_responsive')?.classList.remove('fadeOutArrowAnimation');
                document.getElementById('arrow')?.classList.add('arrowAnimation');
            }
        }
    }
}
