const { Given, When, Then } = require('cucumber');
//const Selector = require('testcafe').Selector;

const tottusPage = require('../support/pages/tottus-page');

Given('I am open Google\'s search page', async function () {
    await testController.navigateTo(tottusPage.tottus.url());
});

When('I am typing my search request {string} on Google', async function (text) {
    console.log('sjdhfskdjhf' + tottusPage.tottus.searchWord())
    await this.addScreenshotToReport();
    await testController.typeText(tottusPage.tottus.searchWord(), text);

});

When('I press the {string} key on Google', async function (text) {
    await testController.pressKey(text);
});

When('I select first options {string}', async function (text) {
    await testController.click(tottusPage.tottus.searchSitio().withText(text).nth(10));
});

When('I should see that the result is {string}', async function (text) {
    await testController.click(tottusPage.tottus.recetas().withText(text).nth(3));
});

When('I return to {string} to find the main menu', async function (text) {
    await testController.click(tottusPage.tottus.goHome().withText(text));
});

When('I select option {string}', async function (text) {
    await testController.click(tottusPage.tottus.complexity().withText(text));
});

When('I search {string}', async function (text) {
    await testController.click(tottusPage.tottus.rollitos().withText(text));
});
/*
Then('I should see that a result is {string}', async function (text) {
    await testController.click(tottusPage.tottus
});

When('I should see that a result is {string}', async function (text) {

}); */