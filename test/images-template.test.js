import makeImagesTemplate from '../src/makeImageTemplate.js';
const test = QUnit.test;

QUnit.module('template creation test');


test('create a template to pull img data from dom', function(assert) {
    // arrange
    const result = makeImagesTemplate ({
        url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
        title: 'UniWhal'
    });

    // act


    // assert
    assert.htmlEqual(result, /*html*/`
        <li>
            <h1>UniWhal</h1>
            <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg">
        </li>
    `);
});