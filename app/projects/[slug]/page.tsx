import { ProjectDetails } from '@/app/components/pages/project/project-details'
import { ProjectSections } from '@/app/components/pages/project/project-sections'
import { ProjectPageData, ProjectsPageStaticData } from '@/app/types/page-info'
import { fetchHygraphQuery } from '@/app/utils/fetch-hygraph-query'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

type ProjectProps = {
  params: {
    slug: string
  }
}

const getProjectDetails = async (slug: string): Promise<ProjectPageData> => {
  const query = `
    query ProjectQuery($slug: String!) {
      project(where: { slug: $slug }) {
        pageThumbnail { url }
        thumbnail { url }
        sections {
          title
          image { url }
        }
        title
        shortDescription
        description {
          raw
          text
        }
        technologies { name }
        liveProjectUrl
        githubUrl
      }
    }
  `

  const data = await fetchHygraphQuery<ProjectPageData>(
    query,
    { slug },  // variáveis GraphQL
    10         // tempo de revalidação (ISR)
  )

  return data
}

export default async function Project(props: ProjectProps) {
  const { slug } = props.params
  const { project } = await getProjectDetails(slug)

  if (!project?.title) return notFound()

  return (
    <>
      <ProjectDetails project={project} />
      <ProjectSections sections={project.sections} />
    </>
  )
}

export async function generateStaticParams() {
  const query = `
    query ProjectsSlugsQuery {
      projects(first: 100) {
        slug
      }
    }
  `
  const { projects } = await fetchHygraphQuery<ProjectsPageStaticData>(query)

  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata(props: ProjectProps): Promise<Metadata> {
  const { slug } = props.params
  const data = await getProjectDetails(slug)
  const project = data.project

  return {
    title: project.title,
    description: project.description.text,
    openGraph: {
      images: [
        {
          url: project.thumbnail.url,
          width: 1200,
          height: 630,
        },
      ],
    },
  }
}

