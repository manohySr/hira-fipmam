// import { useParams } from "react-router";
import { ArrowLeft } from "lucide-react";
import React from "react";
import { NavLink } from "react-router";

interface Song {
  id: number;
  title: string;
  author: string;
  lyrics: string;
}

const song: Song = {
  id: 1,
  title: "In the end",
  author: "Linkin Park",
  lyrics: `
It starts with one

One thing, I don't know why
It doesn't even matter how hard you try
Keep that in mind, I designed this rhyme to explain in due time
All I know time is a valuable thing
Watch it fly by as the pendulum swings
Watch it count down to the end of the day, the clock ticks life away

It's so unreal, didn't look out below
Watch the time go right out the window
Tryna hold on, d-didn't even know
I wasted it all just to watch you go

I kept everything inside
And even though I tried, it all fell apart
What it meant to me will eventually be a memory of a time when
I tried so hard and got so far
But in the end, it doesn't even matter
I had to fall to lose it all
But in the end, it doesn't even matter
One thing, I don't know why
It doesn't even matter how hard you try
Keep that in mind, I designed this rhyme to remind myself how I tried so hard
In spite of the way you were mockin' me
Actin' like I was part of your property
Rememberin' all the times you fought with me
I'm surprised it got so far
Things aren't the way they were before
You wouldn't even recognize me anymore
Not that you knew me back then, but it all comes back to me in the end
You kept everything inside
And even though I tried, it all fell apart
What it meant to me will eventually be a memory of a time when
I tried so hard and got so far
But in the end, it doesn't even matter
I had to fall to lose it all
But in the end, it doesn't even matter
I've put my trust in you
Pushed as far as I can go
For all this, there's only one thing you should know
I've put my trust in you
Pushed as far as I can go
For all this, there's only one thing you should know
I tried so hard and got so far
But in the end, it doesn't even matter
I had to fall to lose it all
But in the end, it doesn't even matter
    `,
};
export default function Lyrics() {
  // const { id } = useParams<{ id: string }>();
  const formattedLyrics = song.lyrics
    .trim()
    .split(/\n{2,}/) // split by two or more newlines
    .map((paragraph) => paragraph.split("\n")); // keep single newlines as line breaks

  console.log(formattedLyrics);
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <NavLink to="/" className="inline-flex items-center text-blue-500 mb-4">
        <ArrowLeft className="mr-1" /> Miverina
      </NavLink>
      <div className="bg-white shadow-md rounded p-6">
        <h1 className="text-2xl font-bold mb-2">{song.title}</h1>
        <h3 className="text-gray-500 mb-4">By {song.author}</h3>
        <div className="space-y-2 text-gray-700">
          {formattedLyrics.map((paragraph, i) => (
            <p key={i} style={{ marginBottom: "1em" }}>
              {paragraph.map((line, j) => (
                <React.Fragment key={j}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
