import Page from './page.js';


class FrontPage extends Page {
    
    
    get btnElement() {
        return $(`.category-cards > div:nth-of-type(1) .card-up`)
        
    }

    get btnInteraction(){
        return $(`.category-cards > div:nth-of-type(5) .card-up`)
    }

    async clickBtnElement(){
        await this.btnElement.click()
        await browser.pause(3000)
        
    }   
    
    async clickBtnInteractions(){
        await this.btnInteraction.click()
        await browser.pause(3000)
       
    }   

    async scrollDown(){
        await browser.execute('window.scrollBy(0, 1000)')
    }

    open() {
        // return super.open('elements');
        return super.open();
    }
}

export default new FrontPage();
