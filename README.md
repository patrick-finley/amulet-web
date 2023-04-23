## Amulet App

Takes in up to 5 mp3 audio files at a time, POSTs them to a flask backend that processes them (remove silence, break up into chunks), transcribes (OpenAI Whisper) them, creates embeddings (OpenAI Ada), then uploads them to a vector database (Pinecone).

Then, you can submit a query that gets POSTed to [the backend](https://github.com/patrick-finley/amulet-server), turned into a vector embedding (OpenAI Ada), searched against the vector database (Pinecone) to return similar results (like memories), which are then fed as context with the original query into GPT 3.5, and a response returned to the webpage.

File processing is super slow, especially with mp3 files >20MB. Generally runs out of RAM in Replit (I think) with files >100MB.
