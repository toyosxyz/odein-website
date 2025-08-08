const contentful = require('contentful')

export const contentfulClient = contentful.createClient({
    space: 'r0waqbhpvpi1',
    environment: 'master', // defaults to 'master' if not set
    accessToken: "Il_wE1Aedk4UEAgq6e9t58MjU4zawTkehi5yGv-1Wmc"
  })
  