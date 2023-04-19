import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'
import { AnyNaptrRecord } from 'dns'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {

  const [audioFile1, setAudioFile1] = useState<File | null>(null); // for the audio file
  const [audioFile2, setAudioFile2] = useState<File | null>(null); // for the audio file
  const [audioFile3, setAudioFile3] = useState<File | null>(null); // for the audio file
  const [audioFile4, setAudioFile4] = useState<File | null>(null); // for the audio file
  const [audioFile5, setAudioFile5] = useState<File | null>(null); // for the audio file
  const [query, setQuery] = useState(''); // for the prompt
  const [response, setResponse] = useState('');

  const handleUpload = async (event: any) => {
    event.preventDefault()

    const formData = new FormData();
    if (audioFile1 !== null) {
      formData.append('audiofile1', audioFile1);
    }
    if (audioFile2 !== null) {
      formData.append('audiofile2', audioFile2);
    }
    if (audioFile3 !== null) {
      formData.append('audiofile3', audioFile3);
    }
    if (audioFile4 !== null) {
      formData.append('audiofile4', audioFile4);
    }
    if (audioFile5 !== null) {
      formData.append('audiofile5', audioFile5);
    }

    const response = await fetch('https://amulet-server.patrick-finley.repl.co/upload', {
      method: 'POST',
      body: formData,
    });

    const cnfrm = await response.text();
    console.log(cnfrm);
  }
  
  const handleQuery = async (event: any) => {
    event.preventDefault()

    const formData = new FormData();
    formData.append('query', query);

    const response = await fetch('https://amulet-server.patrick-finley.repl.co/question', {
      method: 'POST',
      body: formData,
    });

    const ans = await response.text();
    setResponse(ans);
  }

  return (
    <>
      
      <Head>
        <title>Amulet</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
        
{/* Audio input form */}
        <form>
          <label>
            Only mp3 files please!
            <br />
            Audio file 1:
            <input type="file" accept=".mp3" onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                setAudioFile1(file);
              }
            }} />
            <br />
            Audio file 2:
            <input type="file" accept=".mp3" onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                setAudioFile2(file);
              }
            }} />
            <br />
            Audio file 3:
            <input type="file" accept=".mp3" onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                setAudioFile3(file);
              }
            }} />
            <br />
            Audio file 4:
            <input type="file" accept=".mp3" onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                setAudioFile4(file);
              }
            }} />
            <br />
            Audio file 5:
            <input type="file" accept=".mp3" onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                setAudioFile5(file);
              }
            }} />
            
          </label>
          <button onClick={handleUpload}>Upload Files</button>
        </form>

{/* Query input form */}
        <form>
          <label>
            What is your query?
            <br />
            <textarea onChange={(e) => {
              setQuery(e.target.value)
            }} />
          </label>
          <button onClick={handleQuery}>Submit Query</button>
        </form>

        <div>
          <p>{response}</p>
        </div>

      </main>
    </>
  )
}
