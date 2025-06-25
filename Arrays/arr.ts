// DAY 1)
/*
 * Transforms each item in an array and returns a new array of the same length.
 */

//// // // // // // // // // // // //  Map() // // // // // // // // // // // // // // // //
const names = ['alice', 'bob', 'charlie', 'ZIOn'];
const emails = ['bob@gmail.com', 'susan@protonmail.com', 'kaifasdfoutlook.com'];
const scores = [95, 67, 45, 82, 100, 29];
const nav = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'Docs',
    path: '/docs',
    children: [
      {
        title: 'Getting Started',
        path: '/docs/getting-started',
      },
      {
        title: 'API Reference',
        path: '/docs/api',
        children: [
          {
            title: 'Authentication',
            path: '/docs/api/auth',
          },
          {
            title: 'Endpoints',
            path: '/docs/api/endpoints',
          },
        ],
      },
    ],
  },
  {
    title: 'Blog',
    path: '/blog',
    children: [
      {
        title: 'Latest Posts',
        path: '/blog/latest',
      },
      {
        title: 'Archive',
        path: '/blog/archive',
      },
    ],
  },
  {
    title: 'About',
    path: '/about',
  },
];

// Problem 1: Captialize Each Word
const capitalizeNames = (arr: string[]) => {
  return arr.map((names, index) => {
    console.log(names[0].toUpperCase() + names.substring(1));
  });
};

const capitalizeNamesV2 = names.map((element, index) => {
  return element[0].toUpperCase() + element.slice(1); // actual logic
});

// This owrks because we are essentially splitting from that position left to right.
// So we arent going to include the "char"
// This would be not the best because now we need to filter . We will have undefined variables
const fetchDomains = emails.map((element, index) => {
  if (element.includes('@')) {
    return element.split('@')[1];
  }
});

const domains = emails
  .filter((email) => email.includes('@'))
  .map((email) => '@' + email.split('@')[1]); // First Remove Bad ones

// Method Chaining  Calling multiple Methods back to back on an Array where each method passes its results to the next

// Problem 3  Map Numbers To Status
const statuses = scores.map((score) => {
  if (score >= 90) return 'Excellent';
  if (score >= 70) return 'Good';
  if (score >= 50) return 'Average';
  return 'Fail';
});

// console.log(statuses);

// const mapNav = nav.map((element, index) => {
//   console.log(element.children);
// });

// // // // // // // // // // // // // FILTER //// // // // // // // // // // // // //

//Filters out items that don’t meet a condition, returning a (possibly smaller) new array.
// array method used to remove elements. Retursn new array with only that passed that test.
let users = [
  { name: 'John', age: 25, occupation: 'gardener' },
  { name: 'Lenny', age: 51, occupation: 'programmer' },
  { name: 'Andrew', age: 43, occupation: 'teacher' },
  { name: 'Peter', age: 81, occupation: 'teacher' },
  { name: 'Anna', age: 47, occupation: 'programmer' },
  { name: 'Albert', age: 76, occupation: 'programmer' },
];

const filteredUsers = users.filter((user) => {
  return user.age > 40 && user.occupation === 'programmer';
});

const navItems = [
  { title: 'Home', hidden: false },
  { title: 'Admin', hidden: true },
];

const visibleNav = navItems.filter((item) => !item.hidden);
// [{ title: "Home", hidden: false }]
console.log(visibleNav);
