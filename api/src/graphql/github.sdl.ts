export const schema = gql`
  type GithubProject {
    name: String!
    description: String!
    image: String!
  }

  input GithubProjectInput {
    user: String!
    projectName: String!
  }

  type Query {
    githubProject(input: GithubProjectInput!): GithubProject @skipAuth
  }
`
