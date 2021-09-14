import { Ensure, includes } from '@serenity-js/assertions';
import { actorCalled } from '@serenity-js/core';
import { by, Click, Navigate, Target, Website, Enter } from '@serenity-js/webdriverio';
//WriteStream } from 'fs';
import { describe, it } from 'mocha';
import {Scroll, WebElementInteraction} from '@serenity-js/webdriverio/lib/screenplay/interactions';
import selectByVisibleText from 'webdriverio/build/commands/element/selectByVisibleText';
import selectByAttribute from 'webdriverio/build/commands/element/selectByAttribute';


describe('Task1', () => {

    const purpose = Target.the("Select purpose").located(by.css("input[value = 'Purpose']"));
    const location = Target.the("Type location").located(by.css("label[value = 'LOCATION']"));
    //const location2 = Target.the("location").located(by.tagName('LABEL'));
    
    //const find_button = Target.the("Find button").located(by.css("input[value='Find']"));

    it(`Verify results match the search criteria`, () =>
        actorCalled('Alice').attemptsTo(
            Navigate.to('https://bayut.com'),
            //Enter.theValue("Dubai Marina").into(location),
            //selectByVisibleText("Rent").from(purpose);
            //Click.on(find_button),
            // Ensure.that(**location from every house**, equals('Dubai Marina'));

        ));
});

describe('Task2', () => {

    const popularSearches = Target.the("Popular searches").located(by.id('Popular searches in the UAE'));
    const toRent = Target.the("toRent").located(by.css('.To Rent'));

    it(`VVerify Popular Searches links work correctly`, () =>
        actorCalled('Alice').attemptsTo(
            Navigate.to('https://bayut.com'),
            //Scroll.to(popularSearches),
            //Click.on(toRent),


        ));


});
