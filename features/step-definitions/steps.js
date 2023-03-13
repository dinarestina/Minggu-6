import { Given, When, Then } from '@wdio/cucumber-framework';

import frontPage from '../pageobjects/front.page.js';
// import homePage from '../pageobjects/home.page.js';
import elementPage from '../pageobjects/element.page.js';
import interactionPage from '../pageobjects/interaction.page.js';

Given(/^I am on the front page$/, async() => {
    await frontPage.open()
})

When(/^I click the module elements$/, async() => {
  await frontPage.scrollDown()
  await frontPage.clickBtnElement()
  await browser.pause(2000)
    // await browser.execute(browser.scrollIntoView({ block: "end" }))
})

Then('Accordion Element Modul is Displayed and I clik button menu', async() => {
  // Write code here that turns the phrase above into concrete actions
  await frontPage.scrollDown()
  await elementPage.clickBtnMenu()
})

When('I Click ClickMe Button and the message show up', async() => {
  // Write code here that turns the phrase above into concrete actions
  await frontPage.scrollDown()
  await elementPage.onClickBtn()
})


When('I click Right Click Me Button and Message -You have done a right click- show up', async() => {
  await frontPage.scrollDown()
  await elementPage.onClickRightBtn()
})

When('I click Doble Click Me Button and Message -You have done a double click- successfully show up', async() => {
    await elementPage.onClickDobleClickBtn()
    await browser.pause(3000)
})

When('I click the module Interaction', async() => {
    await frontPage.scrollDown()
    await frontPage.clickBtnInteractions()
    await browser.pause(2000)
})

Then('I click menu dropable', async() => {
  await frontPage.scrollDown()
  await interactionPage.clickMenuDropable()
})

When('I do drag and drop', async() => {
  await interactionPage.doDragAndDrop()
})



