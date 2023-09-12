const contentful = require('contentful')

const client = contentful.createClient({
    space: '<space_id>',
    accessToken: '<access_token>',
});

export async function getBlogs(){
    return await client.getEntries()

}

export async function getOneBlog(id){

    return await client.getEntry(id)

}