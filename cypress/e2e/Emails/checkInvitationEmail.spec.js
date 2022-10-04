/// <reference types ="Cypress"/>
import SettingsPage from "../../Page-Objects/settings.po";
import MenuComponent from "../../Page-Objects/menucomponent.po";
const uniqueId = Date.now().toString();
const fullname = `Evie ${uniqueId}`;
const uname = `${uniqueId}`;

const settingspage = new SettingsPage();
const menucomp = new MenuComponent();


describe("Verify Team Invitation Email is receiving", () => {
    const serverId = 'psofzpws'
    const serverDomain = 'psofzpws.mailosaur.net'
    const emailid = `anizam${uniqueId}@` + serverDomain
    beforeEach(() => {
        cy.Superlogin("Blendjet");
        menucomp.openSettings.click({ force: true });
        cy.clearCookies();
        cy.visit("https://platform.disconetwork-staging.com/settings/team");
    });


    it('Get Team Invitation Email from Mailosaur', () => {
        let acceptInvitationLink;
        settingspage.sendInvitation(emailid);

        cy.mailosaurGetMessage(serverId, {
            sentTo: emailid
        }).then(email => {
            expect(email.subject).to.contain('Team Invitation');
            expect(email.text.body, 'have expected text').to.contain('as a team member');


        })
    })



});