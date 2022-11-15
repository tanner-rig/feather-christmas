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

export const adultMatchups = [
  {
    giveFrom: { name: "kira", img: kira },
    giveTo: { name: "mike", img: mike },
  },
  {
    giveFrom: { name: "ben", img: ben },
    giveTo: { name: "sarah", img: sarah },
  },
  {
    giveFrom: { name: "ashley", img: ashley },
    giveTo: { name: "david", img: david },
  },
  {
    giveFrom: { name: "mike", img: mike },
    giveTo: { name: "kylee", img: kylee },
  },
  {
    giveFrom: { name: "david", img: david },
    giveTo: { name: "ashley", img: ashley },
  },
  {
    giveFrom: { name: "sarah", img: sarah },
    giveTo: { name: "tanner", img: tanner },
  },
  {
    giveFrom: { name: "tanner", img: tanner },
    giveTo: { name: "kira", img: kira },
  },
  {
    giveFrom: { name: "kylee", img: kylee },
    giveTo: { name: "ben", img: ben },
  },
];

export const kidMatchups = [
  {
    giveFrom: { name: "reese", img: reese },
    giveTo: { name: "gavin", img: gavin },
  },
  {
    giveFrom: { name: "riley", img: riley },
    giveTo: { name: "max", img: max },
  },
  {
    giveFrom: { name: "rowen", img: rowen },
    giveTo: { name: "leah", img: leah },
  },
  {
    giveFrom: { name: "max", img: max },
    giveTo: { name: "riley", img: riley },
  },
  {
    giveFrom: { name: "gavin", img: gavin },
    giveTo: { name: "rowen", img: rowen },
  },
  {
    giveFrom: { name: "bailey", img: bailey },
    giveTo: { name: "reese", img: reese },
  },
  {
    giveFrom: { name: "leah", img: leah },
    giveTo: { name: "oakley", img: oakley },
  },
  {
    giveFrom: { name: "oakley", img: oakley },
    giveTo: { name: "bailey", img: bailey },
  },
];
