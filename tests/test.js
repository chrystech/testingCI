var expect = require('chai').expect;

console.log('##teamcity[testSuiteStarted name=\'tests\']');
console.log('##teamcity[testStarted name=\'test1\']');
describe('Test1',function(){
   it('should add 2+2=4', function(){
       expect(2+2).to.be.equal(4);
   })
});
console.log('##teamcity[testFinished name=\'test1\']');
console.log('##teamcity[testStarted name=\'test2\']');
try {
    describe('Test1', function () {
        it('should add 2+2=4', function () {
            expect(2 + 5).to.be.equal(4);
        })
    });
} catch(e){
    console.log('##teamcity[testFailed name=\'System can send an email to postmark to be delivered to a user\' message=\'" + e.message + "\' details=\'" + e + "\']')
}

console.log('##teamcity[testFinished name=\'test2\']');
console.log("##teamcity[testSuiteFinished name='tests']");