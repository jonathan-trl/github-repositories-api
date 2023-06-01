import { TfiGithub } from "react-icons/tfi"
import './App.css'
import { api } from './api';
import { useQuery } from 'react-query';
import 'react-loading-skeleton/dist/skeleton.css'
import LoadingRepo from './components/LoadingRepo';

type RepoTypes = {
  id: number,
  name: string,
  html_url: string,
}

function App() {

  const getRepositories = async () => {
    const response = await api.get<RepoTypes[]>("users/jonathan-trl/repos");

    return response.data
  }

  const { data, isLoading } = useQuery({
    queryKey: ['repositories'],
    queryFn: getRepositories
  })

  return (
    <>
      <div className='repos'>
        <div className='repos-header'>
          <a href="https://github.com/jonathan-trl" target='_blank'>
            <img className='github-avatar' src="https://avatars.githubusercontent.com/u/35279322?s=400&u=5efd7f9270fb8767114c991749760bc1d5ad54f5&v=4" alt="" />
          </a>
          <h1>Repositórios GitHub</h1>
        </div>
        {isLoading ? (
          <LoadingRepo />
        ) : data?.map((repo) => (
          <div key={repo.id} className="repo">
            <a href={repo.html_url} target='_blank'>{repo.name}</a>
          </div>
        ))}
        <div className='repos-footer'>
          <div className='icon-git-container'>
            <TfiGithub className="icon-git" size="30px" color="#9b59b6" />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
