let express = require('express')
let graphqlHttp = require('express-graphql')
let { GraphQLObjectType, GraphQLSchema, GraphQLString } = require('graphql')

let schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "HelloQuery",
        fields: {
            hello: {
                type: GraphQLString,
                resolve: (root, args, context, info) => {
                    return "Hello, world!!!"
                }
            }
        }
    })
})

let root = {
    
}

let app = express()

app.use('/graphql', graphqlHttp({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen(4000, () => console.log("Server is running at localhost:4000/graphql"))