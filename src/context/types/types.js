export const types = {

    authStartRegister: '[auth] Start register',
    authStartLogin: '[auth] Start login',
    authLogin: '[auth] Login',
    authGetUserData: '[auth] get user data',
    authStartTokenRenew: '[auth] Start token renew',
    authCheckingFinish: '[auth] finish checking login state',
    authLogout: '[auth] Logout',
    authUpdate: '[auth] Update',
    authDeleteUserData: '[auth] Delete data',
    getTemplates: '[templates] get templates',
    registerResumeUrl: '[templates] register resume url',
    setActiveTemplate: '[templates] set active template',
    saveBase64Pdf: '[templates] save base 64 pdf to preview'
}


/**Funtions to templating
 * 
 * Accent color
 * it needs a list of colors available for the actual template and one selector to active
 * 
 * Template variation
 * Order some sections in the dom, left to right or top to bottom, handle it with classes
 * 
 * Fonts
 * A link with the font or fontpair to use, it should be added with inline styles
 * 
 * Pattern **** can be added later
 * a list with patterns to apply as bs in accent section --
 */