## stardown
A simple showdown between two GitHub users!

![example](http://i.imgur.com/xb5UzpD.png)

#### Purpose

The goal of this project was to learn [dogescript](https://dogescript.com/) because it seemed like a fun challenge.

#### Usage

Clone this repository and then `cd` into it and run `npm i`. This will install the necessary files, and the `postinstall` task will take care of compiling the dogescript for you.

You will need to generate your own GH access token and save it to the root directory in a `token.json` file that looks like this:

```
{
  "token": "yoursupersecrettokenhere"
}
```

You can then run `npm start` and then visit `localhost:6969` to see the app running.

Feel free to mess around with the [main dogescript file](https://github.com/himynameisdave/stardown/blob/master/src/app.djs), in the `src` directory. To see your changes, run the `npm run compile` command and reload the page (when the compile task is finished).

#### Dogescript

...is a ridiculous language, and you have to structure your code in a very cumbersome way. Nothing is simple, and so many times I just forgot to add a `wow` or a `plz`. If it wasn't such a hilarious language, I probably would have stopped earlier.

---

*Created by [Dave Lunny]() in the wonderful year 2016*
