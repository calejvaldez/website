<!--
Credit

Author: Carlos Valdez
License: Creative Commons Attribution 4.0 International
Metadata: https://calejvaldez.com/content/metadata.json

-->
# You Are Typing: Self talk to improve mental health

In May 2023, I was in therapy. My grandma had passed away recently, and my
mental health wasn't in a great place. I had too many emotions, and although I
(eventually) relied on my friends more, I couldn't expect them to be there
*every time* I felt a little sad. My therapist helped me build a support system
so that, if I was struggling, I still had someone to talk to if something
happened. During this time, my therapist asked me:

> Is Carlos in that support system?

I still remember laughing when she had asked me that. Me being in my own support
system felt outlandish. But then I thought about it more, and realized that if
anything, I was my own biggest enemy. How was I supposed to integrate myself
into my own support system?

Just as fast as I laughed, I realized just how powerful the idea of Carlos being
in my support system could be. This article is going to be a combination of what
I learned in therapy, as well as how You Are Typing came to be and the benefits
and drawbacks that came with my program.

## Your new best friend is you

I basically grew up with Discord. I joined my first server in 2016 and have been
on and off the app since. As many people who grew up with Discord knows,
there's something about the app where people become really close with one
another, to the point where we start venting. It isn't a
necessarily bad thing, but tough conversations always felt like a regular on it.

As I was planning You Are Typing, I thought about how, as friends, we
wouldn't tell a struggling friend to kick rocks the same way some of us tell
ourselves. When I struggled with my mental health, often I'd beat myself
up over it. I'd blame myself, be angry at myself, and overall just add more
emotional turmoil. I'm sure this is an experience others have had at
one point in their lives. However, we wouldn't do this to a
struggling friend. We'd comfort them, try to ground their anxious thoughts, and
try to be overall helpful.

Essentially, this was the blueprint for You Are Typing. I wanted to find a way
to "trick" the brain into thinking you were comforting a friend when really you
were addressing your own issues. More on that later.

## Emotional thoughts vs. logical thoughts

One of the most important things I learned in therapy was the ability to
separate my thoughts into two categories. **Emotional thoughts** were the
thoughts that came immediately when something happened. It's our first instinct.
For me, that emotion was anxiety. I've struggled with anxiety for a long time,
and it was often the first emotion that comes up whenever something "bad"
happens.

**Logical thoughts** are thoughts that stem from reason rather than emotion. If
a friend started behaving differently, my emotional thoughts would've started
asking questions like *Are they getting tired of me? Did I do something wrong?*
However, logical thoughts would've stepped in to answer the questions for me.
*They didn't tell you anything, so this probably isn't about you. Just give them
time, they're probably going through something themselves too.*

## Tricking the brain

So, how do we trick the brain? Even though the brain is complex, it's still very
easy to trick if you know how to do it. Software developers have done this for
a long time.

I approached this by doing two things.

1. **A chat app:** By setting an environment that's familiar to people
2. **Switching perspectives:** By switching the perspective of the chats

I wanted to set an environment that is familiar to people who use Discord to
keep in touch with friends, and therefore vent with. You'd pretend to text
somebody and talk about all your issues. You let it all out. Then, when you're
done, you switch the perspective of the sent messages to make it seem as if a
friend had texted you what you just sent. By switching the perspective, it makes
it so that you have to respond to your own messages.

## Flask, vanilla TS, and an authentication system

In 2023, I had an authentication system for my websites called Access. It's not
something I use anymore since, quite frankly, it was awful to develop. I had
just started working with frontend after a few years of working primarily on
backend code, so I didn't really know how hosting a website and an API would
work. So, I wrote a Flask server with an API for You Are Typing. The API was
very basic. At the time I wasn't too concerned with the security of users' data
because I knew I was the only person using the
program as it wasn't something I was actively promoting. However, I did try to
implement token-based authentication (just random strings, unfortunately)
through Access, and I encrypted the messages on the server with Fernet. In
retrospect, the encryption should've happened on the client instead of the
server.

The Flask server would not only host the API, but also serve the static assets
and webpages. I built the frontend with basic HTML, SCSS, and TypeScript. (I
love that, even at the very beginning, I understood how important TypeScript is
to a JavaScript-based project.) Some of the code I wrote at the time was very
interesting as I look back, because it looked like I could really benefit from
component-based tools like React. At the time, I didn't know what React was, so
I worked with what I had. I'm grateful I started like that, because it really
helped me transition naturally to React starting from HTML.

### YAT 0 Results

So... the program was created. It was (somewhat) functional. And... I didn't
use it. Quite frankly, I think it was because I kept it in the browser, and
because I didn't like developing with the toolset I had. Often, I use my
programs the most when I know I can still easily improve upon them. The program
felt slow, and overall it just didn't feel like a great enough experience to use
it often.

## A Revival: YAT 1.0

During the summer of 2024, I was in another situation where my mental health was
struggling. I was lost for a little bit until in late July I remembered about
You Are Typing. By this point, I was already working on Iris, so I knew how to
work with Rust and Tauri. I figured it was time to transition You Are Typing
to a desktop app. I was fluent enough in frontend development to really make
You Are Typing into something better than it used to be. I switched from Flask,
HTML, SCSS, and TypeScript to Tauri, Vite, React, and CSS.

The rewrite was quick, easy, and *so* much more enjoyable to work with than the
previous toolset.
