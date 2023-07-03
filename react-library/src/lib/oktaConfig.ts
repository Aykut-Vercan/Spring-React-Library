

export const oktaConfig = {
    clientId: "0oaa4mvl1q6kGpX8N5d7",
    issuer: 'https://dev-88237734.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
};
