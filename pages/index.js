import Head from 'next/head';
import Game from '../components/Game';

export default function Home() {
  return (
    <div>
        <Game />
        <style jsx global>{`
            body {
                font: 14px "Century Gothic", Futura, sans-serif;
                margin: 20px;
            }
            
            ol, ul {
                padding-left: 30px;
            }
        `}</style>
    </div>
  )
}