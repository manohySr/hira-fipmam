// import { useParams } from "react-router";
import { ArrowLeft } from "lucide-react";
import { NavLink } from "react-router";

interface Song {
  id: number;
  title: string;
  author: string;
  lyrics: string[];
}

const song: Song = {
  id: 1,
  title: "Twinkle Twinkle Little Star",
  author: "Jane Taylor",
  lyrics: [
    `
I'm tired of being what you want me to be
Feeling so faithless, lost under the surface
Don't know what you're expecting of me
Put under the pressure of walking in your shoes
Every step that I take is another mistake to you
(Caught in the undertow, just caught in the undertow)
I've become so numb, I can't feel you there
Become so tired, so much more aware
I'm becoming this, all I want to do
Is be more like me and be less like you
Can't you see that you're smothering me?
Holding too tightly, afraid to lose control
'Cause everything that you thought I would be
Has fallen apart right in front of you
Every step that I take is another mistake to you
(Caught in the undertow, just caught in the undertow)
And every second I waste is more than I can take
I've become so numb, I can't feel you there
Become so tired, so much more aware
I'm becoming this, all I want to do
Is be more like me and be less like you
And I know
I may end up failing too
But I know
You were just like me, with someone disappointed in you
I've become so numb, I can't feel you there
Become so tired, so much more aware
I'm becoming this, all I want to do
Is be more like me and be less like you
I've become so numb, I can't feel you there
I'm tired of being what you want me to be
I've become so numb, I can't feel you there
I'm tired of being what you want me to be

    `,
  ],
};
export default function Lyrics() {
  // const { id } = useParams<{ id: string }>();
  return (
    <div className="p-6 max-w-xl mx-auto">
      <NavLink to="/" className="inline-flex items-center text-blue-500 mb-4">
        <ArrowLeft className="mr-1" /> Miverina
      </NavLink>
      <div className="bg-white shadow-md rounded p-6">
        <h1 className="text-2xl font-bold mb-2">{song.title}</h1>
        <h3 className="text-gray-500 mb-4">By {song.author}</h3>
        <div className="space-y-2 text-gray-700">{song.lyrics}</div>
      </div>
    </div>
  );
}
