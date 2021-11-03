# Exercise 1b

## Extracting components

Looks like we have a few React components that we could pull out into separate files. Extract these components and move them to separate files:

- NavBar
- Logo
- FeaturedMovie
- MoviePoster (inside `FeaturedMovie`)
- Watchlist

You will need to import the `db.json` file a couple times.

We are not looking for using props yet; just cut the code and paste them into separate files.

<details><summary>This is how your App code might look by the end</summary>

App.js:

```js
<div>
  <NavBar />
  <FeaturedMovie />
  <Watchlist />
</div>
```

</details>
