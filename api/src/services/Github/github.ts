import { GithubProject, QueryResolvers } from 'types/graphql'

import { logger } from 'src/lib/logger'

export const githubProject: QueryResolvers['githubProject'] = async ({
  input,
}) => {
  logger.debug({}, `Name : ${input.projectName}  User : ${input.user}`)
  const query = `
      query {
        repository(
          name: "${input.projectName}",
          owner: "${input.user}")
        {
          name
          url
          description
          object(expression : "HEAD:") {
            ... on Tree {
              entries {
                object {
                  ... on Blob {
                    text
                  }
                }
              }
            }
          }
        }
      }
      `
  const githubUrl = 'https://api.github.com/graphql'
  const res = await fetch(githubUrl, {
    method: 'POST',
    body: JSON.stringify({ query }),
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_SECRET}`,
    },
  })

  const jsonRes = await res.json()
  logger.debug({}, `Github Json Respinse : ${JSON.stringify(jsonRes)}`)
  const projectInfo: GithubProject = {
    name: jsonRes['data']['repository']['name'] ?? '',
    description: jsonRes['data']['repository']['description'] ?? '',
    image: (await getProjectReadMeImage(jsonRes)) ?? '',
  }
  logger.debug({}, `Github Project Info : ${JSON.stringify(projectInfo)}`)
  return projectInfo
}

const getProjectReadMeImage = (jsonRes): Promise<string> => {
  const projectReadMeText =
    jsonRes['data']['repository']['object']['entries'][1]['object']['text']

  try {
    return projectReadMeText.split('[image]')[1].split('(')[1].split(')')[0]
  } catch {
    return null
  }
}
