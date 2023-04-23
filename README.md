## Amulet App

Takes in up to 5 mp3 audio files at a time, POSTs them to a Flask backend that processes them (remove silence, break up into chunks), transcribes (OpenAI Whisper) them, creates embeddings (OpenAI Ada), then uploads them to a vector database (Pinecone).

Then, you can submit a query that gets POSTed to [the backend](https://github.com/patrick-finley/amulet-server), turned into a vector embedding (OpenAI Ada), searched against the vector database (Pinecone) to return similar results (like memories), which are then fed as context with the original query into GPT 3.5, and a response returned to the webpage.

<img width="1176" alt="Screenshot 2023-04-23 at 7 02 50 PM" src="https://user-images.githubusercontent.com/74550705/233870856-66e13c44-cb1b-4b78-928b-cc1ac579080c.png">

<img width="1176" alt="Screenshot 2023-04-23 at 7 06 10 PM" src="https://user-images.githubusercontent.com/74550705/233870962-c5f5e341-5ada-4273-83b0-51149dd91e20.png">

[Will](https://github.com/0hq) & I thought it would be cool to build a wearable device that records audio 24/7 that you could then use to have perfect memory-- recall details from conversations, summarize your week, etc. Could be really interesting for people with memory problems, anyone who takes meetings that needs perfect detail recall (similar to [Otter.ai](https://otter.ai) or [Rewind.ai](https://www.rewind.ai)), or even a sort of psychological tracking-- "how often was I irritable or sad this week?". Obvious privacy concerns exist, but there's maybe tractable ways around that like using an "XBOX record that" type feature so you can only save retro-actively, having a recording light, and doing all storage on-device so your transcripts aren't sent around.

We thought about building a device, and bought an ESP32, but then realized [you can buy a device like what we were thinking on amazon](https://www.amazon.com/dp/B07F29M5TJ?psc=1&ref=ppx_yo2ov_dt_b_product_details) for testing purposes, so I bought one and recorded everything for about a week (with others' permission!) and tested this out.

![IMG_1894](https://user-images.githubusercontent.com/74550705/233870257-69468f3b-1561-468b-84a6-9cbd100e81b6.jpg)

I'd share more screenshots, but given all the text data is transcripts from private conversations, you'll have to try it out yourself, sorry!

File processing is super slow, especially with mp3 files >20MB. Generally runs out of RAM in Replit (I think) with files >100MB. The quality of answer you can get is pretty impressive though; once you've got some files uploaded it searches & returns extremely effectively.

## Thoughts on building further

You could make a high-quality device that records only when voices are detected, runs whisper & everything else on your mobile phone, and takes into account your calendar, time/date etc as metadata to give really great responses. Seems like a really good step on the road to actually having a real-life Jarvis -- you could add a little camera and sync with something like Rewind.ai and a text-to-speech interface, and basically have Jarvis V1.0! 


Important note: this was pretty much my first software project-- I had no idea how to do any of this, so this was a lot of fun and I learned a lot. I didn't really know how to work github, what next.js or flask were, and definately had no clue how vector embeddings actually worked in practice. The only time I ever used CSS was some high-school class I think, so it was great to just learn how to do basic stuff with Tailwind.
