import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
import { useState } from 'react'
import { AnyNaptrRecord } from 'dns'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {

  const [audioFile1, setAudioFile1] = useState<File | null>(null); // for the audio file
  const [audioFile2, setAudioFile2] = useState<File | null>(null); // for the audio file
  const [audioFile3, setAudioFile3] = useState<File | null>(null); // for the audio file
  const [audioFile4, setAudioFile4] = useState<File | null>(null); // for the audio file
  const [audioFile5, setAudioFile5] = useState<File | null>(null); // for the audio file
  const [selectedFiles, setSelectedFiles] = useState<File | null>(null);
  const [query, setQuery] = useState(''); // for the prompt
  const [response, setResponse] = useState('');

  const handleUpload = async (event: any) => {
    event.preventDefault()

    const formData = new FormData();

    if (!selectedFiles || selectedFiles.length < 1) {
      alert("no selected files idiot");
      return;
    }

    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      const name = 'audiofile${i+1}';
      formData.append(name, file);
    }
    
    // if (audioFile1 !== null) {
    //   formData.append('audiofile1', audioFile1);
    // }
    // if (audioFile2 !== null) {
    //   formData.append('audiofile2', audioFile2);
    // }
    // if (audioFile3 !== null) {
    //   formData.append('audiofile3', audioFile3);
    // }
    // if (audioFile4 !== null) {
    //   formData.append('audiofile4', audioFile4);
    // }
    // if (audioFile5 !== null) {
    //   formData.append('audiofile5', audioFile5);
    // }

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
  
  const handleFileSelect = async (event: any) => {
    event.preventDefault()
    
    const files = event.target.files;
    if (files.length > 5) {
      alert("you can only upload up to 5 files idiot");
      return;
    }
    setSelectedFiles([...selectedFiles, ...files]);
  };
  
  return (
    <>

      <Head>
        <title>Amulet</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
{/*         <link href="/dist/output.css" rel="stylesheet" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-gray-900 via-[#300171] to-slate-900">

        
        
        
        
        <div className="py-12 sm:py-8 md:py-12 lg:py-14 xl:py-12 2xl:py-28">
  <div className="mx-auto max-w-[800px] xl:max-w-7xl">
    <div className="lg:px-8">
      <div className="flex flex-col items-center">
        <div
          className="max-w-md px-4 sm:max-w-2xl sm:px-6 md:max-w-3xl lg:max-w-4xl lg:px-0 xl:max-w-5xl 2xl:max-w-6xl"
        >
          <div className="flex w-full flex-col items-center gap-4">
            <div className="flex flex-col items-start justify-between">
              <h1 className="text-center mx-auto text-4xl font-bold tracking-tight text-[hsl(200,100%,60%)] sm:text-6xl sm:tracking-tight lg:text-[4rem] xl:text-[6rem] xl:tracking-tight 2xl:text-[6.5rem]">Amulet<span className="text-white"> app</span>
              </h1>


              <form className="mt-4 flex flex-col w-4/5 mx-auto items-center justify-center gap-4 xl:mt-8">
                <label className="text-center text-lg font-bold text-white">
                    Upload up to 5 mp3 (only) files
                </label>
                <input className="text-white relative flex cursor-pointer flex-row items-center gap-2 rounded-md border border-t3-purple-200/20 bg-t3-purple-100/10 px-2 py-2 text-sm transition-colors duration-300 hover:border-t3-purple-300/50 hover:bg-t3-purple-100/20 md:px-3 md:py-3 md:text-lg lg:px-5 lg:py-4 lg:text-xl" type="file" accept=".mp3" multiple onChange={handleFileSelect}/>
                
                
                <button className="text-white relative flex cursor-pointer flex-row items-center gap-2 rounded-md border border-t3-purple-200/20 bg-t3-purple-100/10 px-2 py-2 text-sm transition-colors duration-300 hover:border-t3-purple-300/50 hover:bg-t3-purple-100/20 md:px-3 md:py-3 md:text-lg lg:px-5 lg:py-4 lg:text-xl" onClick={handleUpload}>Upload Audio Files</button>
              </form>

            
                <form className="mt-4 flex flex-col w-2/3 mx-auto items-center justify-center gap-4 xl:mt-8">
                  <label className="text-center text-lg font-bold text-white">
                    What is your query?
                  </label>
                  <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="What did Will tell me earlier?" onChange={(e) => {setQuery(e.target.value)}} />

                  <button className="text-white relative flex cursor-pointer flex-row items-center gap-2 rounded-md border border-t3-purple-200/20 bg-t3-purple-100/10 px-2 py-2 text-sm transition-colors duration-300 hover:border-t3-purple-300/50 hover:bg-t3-purple-100/20 md:px-3 md:py-3 md:text-lg lg:px-5 lg:py-4 lg:text-xl" onClick={handleQuery}>Submit Query</button>
                </form>
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
          </div>
        
        
        
        
        
        
        {/* Audio input form */}
{/*         <form>
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
        </form> */}

        <div>
          <p>{response}</p>
        </div>

      </main>
    </>
  )
}
