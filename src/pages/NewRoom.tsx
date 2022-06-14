import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Button } from '../components/Button';
import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';

import '../styles/auth.scss';

export function NewRoom() {
  const { user } = useAuth();

    return(
      <div id="page-auth">
        <aside>
          <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
          <strong>Crie salas de Q&amp;A ao-vivo</strong>
          <p>Tire as dúvidas da sua audiência em tempo-real</p>
        </aside>
        <main>
          <div className="main-content">
            <img src={logoImg} alt="Letmeask" />
            <h1>{user?.name}</h1>
            <form>
              <input type="text" placeholder="Nome da sala" className='room-name'/>
              <Button type="submit">
                Criar sala
              </Button>
            </form>
            <p>
              Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link>
            </p>
          </div>
        </main>
      </div>
    )
}