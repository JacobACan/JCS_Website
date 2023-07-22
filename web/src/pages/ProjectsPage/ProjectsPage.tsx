import { useState } from 'react'

import { BounceLoader } from 'react-spinners'

import { MetaTags, useQuery } from '@redwoodjs/web'

import { Responsitivity } from 'src/services/responsitivity'
// import Arrow, { ArrowType } from 'src/components/Arrow/Arrow'

const ProjectsPage = () => {
  const r = new Responsitivity(useState())

  const GITHUB_PROJECT_QUERY = gql`
    query GithubProject($input: GithubProjectInput!) {
      githubProject(input: $input) {
        name
        user
        description
        image
      }
    }
  `

  const { data: projectData, loading } = useQuery(GITHUB_PROJECT_QUERY, {
    variables: { input: { user: 'JacobACan', projectName: 'RGBA-Synth' } },
    onCompleted: (data) => console.log(data),
    onError: (data) => console.error(data),
  })

  return (
    <section className="page-section">
      <MetaTags title="Projects" description="Projects page" />

      <div id="projects-page-position"></div>
      <div className={`theme-background${r.responsitivity()}`}>
        <img
          src={projectData ? projectData.githubProject.image : <></>}
          className={`background-image${r.responsitivity()} blurdark`}
          id="songs-page-background"
          alt=""
        />
        <section className="margin-box mt-[10vh] h-[90vh]">
          <h1 id="projects-page-title">Digital Audio Projects</h1>

          {projectData ? (
            <>
              <h1
                id="project-title"
                className={`project-title${r.responsitivity()}`}
              >
                {projectData.githubProject.name}
              </h1>
              <img
                src={projectData ? projectData.githubProject.image : ''}
                alt={`${projectData ? projectData.githubProject.name : ''}`}
                className={`song-cover song-cover${r.responsitivity()}`}
                onClickCapture={() =>
                  window.open(
                    `https://github.com/${projectData.githubProject.user}/${projectData.githubProject.name}`,
                    '_blank'
                  )
                }
                id="songs-page-song-cover"
              />
              {loading ? (
                <div className={`song-cover-loader${r.responsitivity()}`}>
                  <BounceLoader size={100} />
                </div>
              ) : (
                <></>
              )}

              <p className={`project-description${r.responsitivity()}`}>
                {projectData.githubProject.description}
              </p>

              {/* <div className={`right-arrow-song-placement${responsitivity()}`}>
                <Arrow
                  type={ArrowType.Right}
                  handleClick={() => {
                    songRecency < 5
                      ? setSongRecency(songRecency + 1)
                      : setSongRecency(1)
                    refetch()
                  }}
                />
              </div>
              <div className={`left-arrow-song-placement${responsitivity()}`}>
                <Arrow
                  type={ArrowType.Left}
                  handleClick={() => {
                    songRecency > 0
                      ? setSongRecency(songRecency - 1)
                      : setSongRecency(5)
                    refetch()
                  }}
                />
              </div> */}
            </>
          ) : (
            <div className={`song-cover-loader${r.responsitivity()}`}>
              <BounceLoader size={100} />
            </div>
          )}
        </section>
      </div>
    </section>
  )
}

export default ProjectsPage
