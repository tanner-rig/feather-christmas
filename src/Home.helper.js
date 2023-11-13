const kira = require("./assets/kira.png");
const ben = require("./assets/ben.png");
const ashley = require("./assets/ash.png");
const mike = require("./assets/mike.png");
const david = require("./assets/david.png");
const sarah = require("./assets/sarah.png");
const tanner = require("./assets/tan.png");
const kylee = require("./assets/ky.png");
const reese = require("./assets/reese.png");
const riley = require("./assets/riley.png");
const rowen = require("./assets/rowen.png");
const max = require("./assets/max.png");
const gavin = require("./assets/gavin.png");
const bailey = require("./assets/bailey.png");
const leah = require("./assets/leah.png");
const oakley = require("./assets/oakley.png");
const jovi = require("./assets/jovi.png");

export const adultMatchups = [
  {
    giveFrom: { name: "kira", img: kira },
    giveTo: { name: "ashley", img: ashley },
  },
  {
    giveFrom: { name: "ben", img: ben },
    giveTo: { name: "david", img: david },
  },
  {
    giveFrom: { name: "ashley", img: ashley },
    giveTo: { name: "kylee", img: kylee },
  },
  {
    giveFrom: { name: "mike", img: mike },
    giveTo: { name: "sarah", img: sarah },
  },
  {
    giveFrom: { name: "david", img: david },
    giveTo: { name: "tanner", img: tanner },
  },
  {
    giveFrom: { name: "sarah", img: sarah },
    giveTo: { name: "kira", img: kira },
  },
  {
    giveFrom: { name: "tanner", img: tanner },
    giveTo: { name: "ben", img: ben },
  },
  {
    giveFrom: { name: "kylee", img: kylee },
    giveTo: { name: "mike", img: mike },
  },
];

export const kidMatchups = [
  {
    giveFrom: { name: "reese", img: reese },
    giveTo: { name: "max", img: max },
  },
  {
    giveFrom: { name: "riley", img: riley },
    giveTo: { name: "jovi", img: jovi },
  },
  {
    giveFrom: { name: "rowen", img: rowen },
    giveTo: { name: "bailey", img: bailey },
  },
  {
    giveFrom: { name: "max", img: max },
    giveTo: { name: "rowen", img: rowen },
  },
  {
    giveFrom: { name: "gavin", img: gavin },
    giveTo: { name: "reese", img: reese },
  },
  {
    giveFrom: { name: "bailey", img: bailey },
    giveTo: { name: "riley", img: riley },
  },
  {
    giveFrom: { name: "leah", img: leah },
    giveTo: { name: "oakley", img: oakley },
  },
  {
    giveFrom: { name: "oakley", img: oakley },
    giveTo: { name: "leah", img: leah },
  },
  {
    giveFrom: { name: "jovi", img: jovi },
    giveTo: { name: "gavin", img: gavin },
  },
];
