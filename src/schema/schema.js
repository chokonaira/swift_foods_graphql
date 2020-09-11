import axios from "axois";
import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLID,
  GraphQLNonNull,
  GraphQLList,
  GraphQLString,
  GraphQLSchema
} from "graphql";

const baseUrl = "https://choko-swift-foods-backend.herokuapp.com";


const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    first_name: { type: GraphQLString },
    last_name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
    image_url: { type: GraphQLString },
  }),
});

const Mutations = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    signup: {
      type: UserType,
      args: {
        first_name: { type: GraphQLNonNull(GraphQLString) },
        last_name: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        password: { type: GraphQLNonNull(GraphQLString) },
        phone: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args){
        return axios
        .post(`${baseUrl}/login`, args)
        .then(res => res.data)
      }
    },
  },
});

export default new GraphQLSchema({
  // query: RootQuery,
  mutation: Mutations
});
