describe('our homepage', function() {
  it('should say Allo', function() {
    browser.get('http://localhost:9000/#/');

    var heading=element(by.tagName('h1'))
    	expect(heading.getText()).toEqual("'Allo, 'Allo!")
    });

  it('should not be greater than 940px',function(){
  	browser.get('http://localhost:9000/#/')
  	element(by.className('container')).getSize().then(function(size){
  	expect(size.width).toBeLessThan(950)
  	});
  });
});