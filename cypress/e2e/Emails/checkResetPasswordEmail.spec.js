/// <reference types ="Cypress"/>
import ForgotPasswordPage from "../../Page-Objects/forgotpassword.po";
const forgotpswdpage = new ForgotPasswordPage();

describe("Verify Reset Password Email is receiving", () => {
    const serverId = 'psofzpws'
    const serverDomain = 'psofzpws.mailosaur.net'
    const emailid = `anizam1000@` + serverDomain
    beforeEach(() => {
        cy.visit("https://platform.disconetwork-staging.com/reset");
        cy.clearCookies();
    });


    it('Get Reset Password Email from Mailosaur', () => {

        forgotpswdpage.emailFound(emailid);
        cy.mailosaurGetMessage(serverId, {
            sentTo: emailid
        }).then(email => {
            expect(email.subject).to.contain('Reset your password');
            expect(email.text.body, 'have expected text').to.contain('Looks like you need to reset your password');


        })
    })



});