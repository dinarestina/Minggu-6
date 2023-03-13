import Page from "./page.js";

class InteractionPage extends Page {

    get menuDropable(){
        return $(`.show li:nth-of-type(4)`)
    }

    get dragItem(){
        return $(`#draggable`)
        //a[text()='el
    }

    get dropItem(){
       // return $(`div()=['.drop-box ui-droppable ui-state-highlight']`)
       return $(`#droppable`)
    }

    async clickMenuDropable(){
        await this.menuDropable.click()
        await browser.pause(3000)
    }

    async doDragAndDrop(){
        const elem = await this.dragItem
        const target = await this.dropItem
        await elem.dragAndDrop(target)
        await browser.pause(3000)
    }
    
}

export default new InteractionPage();
