import { readFileSync } from "fs";
import path from "path";
import { act } from "@testing-library/react";
import { JestEnvironment } from "@jest/environment";
import jest from "jest";

const breeds = [
  { name: "Bichon Frise" },
  { name: "Bolonese" },
  { name: "Puddle" },
  { name: "Maltese" },
  { name: "Dog" }
];

const doggos = JSON.parse(
  readFileSync(path.join(__dirname, "res.json")).toString()
);

export const ANIMALS = ["dog", "cat", "bird"];
export const _breeds = breeds;
export const _dogs = doggos.animals;

const mock = {
  breeds: jest.fn(() => {
    return {
      then: callback => act(() => callback({ breeds: breeds }))
    };
  }),
  animals: jest.fn(() => {
    return {
      then: callback => act(() => callback(doggos))
    };
  })
};

export default mock;
