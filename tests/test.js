var expect = require('chai').expect;

console.log('##teamcity[testSuiteStarted name=\'tests\']');
console.log('##teamcity[testStarted name=\'test1\']');
describe('Test1',function(){
   it('should add 2+2=4', function(){
       expect(2+2).to.be.equal(4);
   })
});
console.log('##teamcity[testFinished name=\'test1\']');
console.log("##teamcity[testSuiteFinished name='tests']");