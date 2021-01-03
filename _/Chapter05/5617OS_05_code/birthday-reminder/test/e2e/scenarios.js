'use strict';


describe('Enter Facebook credentials', function() {
    var ptor = protractor.getInstance();
    it('should log in & put User and Pass', function() {
        browser.get('http://localhost:8000/app/index.html');

        var currentWindowHandle = ptor.getWindowHandle();
        var angularElement = element(by.className('btn-primary'));

        angularElement.click();

        ptor.sleep(5000);
        var handlesPromise = ptor.getAllWindowHandles();




        handlesPromise
            .then(function(handles) {

                return ptor.switchTo().window(handles[1]);
            }).then(function(handle) {

                browser.driver.findElement(by.id("email")).sendKeys("<email@domain.com>");
                browser.driver.findElement(by.id("pass")).sendKeys("<password>");
                browser.driver.findElement(by.name("login")).click();
                ptor.switchTo().window(currentWindowHandle);
                ptor.sleep(2000);
                browser.refresh();
                ptor.sleep(2000);
                //browser.waitForAngular();
                var msg = element(by.id('welcome')).getText();
                // var msg = ptor.byId('welcome').getText()
                expect(msg).toContain("Welcome <Your Name>");

            });
    });
});
