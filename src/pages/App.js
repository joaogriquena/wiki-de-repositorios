import { useState } from 'react';
import gitlogo from '../assets/github.png';
import Input from '../components/Input';
import ItemRepo from '../components/ItemRepo';
import Button from '../components/Button';
import { api } from '../services/api.js';

import { Container } from './styles'


function App() {

  const [currentRepo, setCurrentRepo] = useState('')
  const [repos, setRepos] = useState([]);


  const handleSearchRepo = async () => {
    const { data } = await api.get(`repos/${currentRepo}`)

    if (data.id) {

      const isExist = repos.find(repo => repo.id === data.id)

      if (!isExist) {
        setRepos(prev => [...prev, data])
        setCurrentRepo('')
        return
      }
    }
    alert('Repository not found')
  }

  const handleRemoveRepo = (id) => {
    const itemRemove = repos.filter(item => item.id === id)
    setRepos(itemRemove.splice(itemRemove.length, 1))

  }

  return (
    <Container>
      <img src={gitlogo} width={72} height={72} alt="Logo GitHub" />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo} />
      {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo} />)}

    </Container>
  );
}

export default App;
