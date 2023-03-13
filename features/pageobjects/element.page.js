import Page from "./page.js";

class ElementPage extends Page {
    
    get btnMenu(){
        return $(`.show li:nth-of-type(5)`)
    }

    get btnClickMe(){
        return $(`//button[text()='Click Me']`)
    }

    get btnRightClick(){
        return $(`//button[text()='Right Click Me']`)
    }

    get btnDoubleClick(){
        return $(`//button[text()='Double Click Me']`)
    }

    async clickBtnMenu(){
        // await browser.scrollIntoView({ block: "end" })
       
        await browser.pause(2000)
        await this.btnMenu.click()
        await browser.pause(3000)
        
    }

    async onClickBtn(){
        await this.btnClickMe.click()
        await browser.pause(3000)
       // await browser.scrollIntoView({ block: "end" })
    }

    async onClickRightBtn(){
        await this.btnRightClick.click({ button: 2})
        await browser.pause(3000)
      //  await browser.scrollIntoView({ block: "end" })
    }

    async onClickDobleClickBtn(){
        await browser.pause(1000)
        await this.btnDoubleClick.doubleClick()
        await browser.pause(3000)
    }
    
    
}

export default new ElementPage();
