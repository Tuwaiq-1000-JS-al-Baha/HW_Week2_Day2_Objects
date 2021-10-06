# HW Week 2 day 1: JS Objects


### Exercice: The Movie Database

It's like IMDB, but much much smaller!

- Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
- Print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
- Maybe the [join](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) method will be helpful here

---

### Exercice 2: Modeling a Run Tracker

Create an object `person` that has methods that helps
him prepare for running a 5k.

And the `person` can perform some calculations:

- total distance run of all runs
- longest run distance 
- average speed of all runs

Each day that a person runs, they create a
record of their run which contains:

- the date and time of the run
- the distance covered, in meters
- the time taken, in seconds

The `person` object also stores information about the person
- person name 
- person email
- person address


### Hints:
* The person has runs.
* He can do calculations based on **his** runs.
* We will use the program like this:
```js
const person = {
  ...
}

person.longestRunDistance() // outputs the longest run based on his runs **property**
person.totalDistance() // outputs the total distance covered based on his runs **property**
person.averageSpeed() // outputs the average speed based on his runs **property**

```
