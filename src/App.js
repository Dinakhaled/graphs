import React from "react";
import "./App.css";
//import { generateCountriesData } from "@nivo/generators";
import { HeatMap } from "@nivo/heatmap";

function App() {
  const data = [
    {
      date: "January 2019",
      "0": 1.0,
      zeroColor: "hsl(212, 70%, 50%)",
      "1": 0.908,
      oneColor: "hsl(264, 70%, 50%)",
      "2": 0.719,
      twoColor: "hsl(222, 70%, 50%)",
      "3": 0.758,
      threeColor: "hsl(181, 70%, 50%)",
      "4": 0.51,
      fourColor: "hsl(325, 70%, 50%)",
      "5": 1.119,
      fiveColor: "hsl(225, 70%, 50%)",
      "6": 1.31,
      sixColor: "hsl(200, 70%, 50%)",
      "7": 0.611,
      sevenColor: "hsl(200, 70%, 50%)",
      "8": 1.083,
      eightColor: "hsl(136, 70%, 50%)",
      "9": 0.644,
      nineColor: "hsl(151, 70%, 50%)",
      "10": 1.218,
      tenColor: "hsl(163, 70%, 50%)",
      "11": 0.318,
      elevenColor: "hsl(163, 70%, 50%)",
      "12": 0.931,
      twelveColor: "hsl(163, 70%, 50%)",
      "13": 0.355,
      thirteenColor: "hsl(163, 70%, 50%)",
      "14": 1.218,
      fourteenColor: "hsl(163, 70%, 50%)",
      "15": 0.149,
      fifteenColor: "hsl(163, 70%, 50%)",
      "16": 0.261,
      sixteenColor: "hsl(163, 70%, 50%)"
    },
    {
      date: "February 2019",
      "0": 1.0,
      zeroColor: "hsl(212, 70%, 50%)",
      "1": 0.908,
      oneColor: "hsl(264, 70%, 50%)",
      "2": 0.719,
      twoColor: "hsl(222, 70%, 50%)",
      "3": 0.758,
      threeColor: "hsl(181, 70%, 50%)",
      "4": 0.51,
      fourColor: "hsl(325, 70%, 50%)",
      "5": 1.119,
      fiveColor: "hsl(225, 70%, 50%)",
      "6": 1.31,
      sixColor: "hsl(200, 70%, 50%)",
      "7": 0.611,
      sevenColor: "hsl(200, 70%, 50%)",
      "8": 1.083,
      eightColor: "hsl(136, 70%, 50%)",
      "9": 0.644,
      nineColor: "hsl(151, 70%, 50%)",
      "10": 1.218,
      tenColor: "hsl(163, 70%, 50%)",
      "11": 0.318,
      elevenColor: "hsl(163, 70%, 50%)",
      "12": 0.931,
      twelveColor: "hsl(163, 70%, 50%)",
      "13": 0.355,
      thirteenColor: "hsl(163, 70%, 50%)",
      "14": 1.218,
      fourteenColor: "hsl(163, 70%, 50%)",
      "15": 0.149,
      fifteenColor: "hsl(163, 70%, 50%)",
      "16": 0.261,
      sixteenColor: "hsl(163, 70%, 50%)"
    },
    {
      date: "March 2019",
      "0": 1.0,
      zeroColor: "hsl(212, 70%, 50%)",
      "1": 0.908,
      oneColor: "hsl(264, 70%, 50%)",
      "2": 0.719,
      twoColor: "hsl(222, 70%, 50%)",
      "3": 0.758,
      threeColor: "hsl(181, 70%, 50%)",
      "4": 0.51,
      fourColor: "hsl(325, 70%, 50%)",
      "5": 1.119,
      fiveColor: "hsl(225, 70%, 50%)",
      "6": 1.31,
      sixColor: "hsl(200, 70%, 50%)",
      "7": 0.611,
      sevenColor: "hsl(200, 70%, 50%)",
      "8": 1.083,
      eightColor: "hsl(136, 70%, 50%)",
      "9": 0.644,
      nineColor: "hsl(151, 70%, 50%)",
      "10": 1.218,
      tenColor: "hsl(163, 70%, 50%)",
      "11": 0.318,
      elevenColor: "hsl(163, 70%, 50%)",
      "12": 0.931,
      twelveColor: "hsl(163, 70%, 50%)",
      "13": 0,
      thirteenColor: "hsl(0, 0%, 100%)",
      "14": 1.218,
      fourteenColor: "hsl(163, 70%, 50%)",
      "15": 0.149,
      fifteenColor: "hsl(163, 70%, 50%)",
      "16": 0.261,
      sixteenColor: "hsl(163, 70%, 50%)"
    },
    {
      date: "April 2019",
      "0": 1.0,
      zeroColor: "hsl(212, 70%, 50%)",
      "1": 0.908,
      oneColor: "hsl(264, 70%, 50%)",
      "2": 0.719,
      twoColor: "hsl(222, 70%, 50%)",
      "3": 0.758,
      threeColor: "hsl(181, 70%, 50%)",
      "4": 0.51,
      fourColor: "hsl(325, 70%, 50%)",
      "5": 1.119,
      fiveColor: "hsl(225, 70%, 50%)",
      "6": 1.31,
      sixColor: "hsl(200, 70%, 50%)",
      "7": 0.611,
      sevenColor: "hsl(200, 70%, 50%)",
      "8": 1.083,
      eightColor: "hsl(136, 70%, 50%)",
      "9": 0.644,
      nineColor: "hsl(151, 70%, 50%)",
      "10": 1.218,
      tenColor: "hsl(163, 70%, 50%)",
      "11": 0.318,
      elevenColor: "hsl(163, 70%, 50%)",
      "12": 0.931,
      twelveColor: "hsl(163, 70%, 50%)",
      "13": 0.355,
      thirteenColor: "hsl(163, 70%, 50%)",
      "14": 1.218,
      fourteenColor: "hsl(163, 70%, 50%)",
      "15": 0.149,
      fifteenColor: "hsl(163, 70%, 50%)",
      "16": 0.261,
      sixteenColor: "hsl(163, 70%, 50%)"
    },
    {
      date: "May 2019",
      "0": 1.0,
      zeroColor: "hsl(212, 70%, 50%)",
      "1": 0.908,
      oneColor: "hsl(264, 70%, 50%)",
      "2": 0.719,
      twoColor: "hsl(222, 70%, 50%)",
      "3": 0.758,
      threeColor: "hsl(181, 70%, 50%)",
      "4": 0.51,
      fourColor: "hsl(325, 70%, 50%)",
      "5": 1.119,
      fiveColor: "hsl(225, 70%, 50%)",
      "6": 1.31,
      sixColor: "hsl(200, 70%, 50%)",
      "7": 0.611,
      sevenColor: "hsl(200, 70%, 50%)",
      "8": 1.083,
      eightColor: "hsl(136, 70%, 50%)",
      "9": 0.644,
      nineColor: "hsl(151, 70%, 50%)",
      "10": 1.218,
      tenColor: "hsl(163, 70%, 50%)",
      "11": 0.318,
      elevenColor: "hsl(163, 70%, 50%)",
      "12": 0.931,
      twelveColor: "hsl(163, 70%, 50%)",
      "13": 0.355,
      thirteenColor: "hsl(163, 70%, 50%)",
      "14": 1.218,
      fourteenColor: "hsl(163, 70%, 50%)",
      "15": 0.149,
      fifteenColor: "hsl(163, 70%, 50%)",
      "16": 0.261,
      sixteenColor: "hsl(163, 70%, 50%)"
    },
    {
      date: "June 2019",
      "0": 1.0,
      zeroColor: "hsl(212, 70%, 50%)",
      "1": 0.908,
      oneColor: "hsl(264, 70%, 50%)",
      "2": 0.719,
      twoColor: "hsl(222, 70%, 50%)",
      "3": 0.758,
      threeColor: "hsl(181, 70%, 50%)",
      "4": 0.51,
      fourColor: "hsl(325, 70%, 50%)",
      "5": 1.119,
      fiveColor: "hsl(225, 70%, 50%)",
      "6": 1.31,
      sixColor: "hsl(200, 70%, 50%)",
      "7": 0.611,
      sevenColor: "hsl(200, 70%, 50%)",
      "8": 1.083,
      eightColor: "hsl(136, 70%, 50%)",
      "9": 0.644,
      nineColor: "hsl(151, 70%, 50%)",
      "10": 1.218,
      tenColor: "hsl(163, 70%, 50%)",
      "11": 0.318,
      elevenColor: "hsl(163, 70%, 50%)",
      "12": 0.931,
      twelveColor: "hsl(163, 70%, 50%)",
      "13": 0.355,
      thirteenColor: "hsl(163, 70%, 50%)",
      "14": 1.218,
      fourteenColor: "hsl(163, 70%, 50%)",
      "15": 0.149,
      fifteenColor: "hsl(163, 70%, 50%)",
      "16": 0.261,
      sixteenColor: "hsl(163, 70%, 50%)"
    },
    {
      date: "July 2019",
      "0": 1.0,
      zeroColor: "hsl(212, 70%, 50%)",
      "1": 0.908,
      oneColor: "hsl(264, 70%, 50%)",
      "2": 0.719,
      twoColor: "hsl(222, 70%, 50%)",
      "3": 0.758,
      threeColor: "hsl(181, 70%, 50%)",
      "4": 0.51,
      fourColor: "hsl(325, 70%, 50%)",
      "5": 1.119,
      fiveColor: "hsl(225, 70%, 50%)",
      "6": 1.31,
      sixColor: "hsl(200, 70%, 50%)",
      "7": 0.611,
      sevenColor: "hsl(200, 70%, 50%)",
      "8": 1.083,
      eightColor: "hsl(136, 70%, 50%)",
      "9": 0.644,
      nineColor: "hsl(151, 70%, 50%)",
      "10": 1.218,
      tenColor: "hsl(163, 70%, 50%)",
      "11": 0.318,
      elevenColor: "hsl(163, 70%, 50%)",
      "12": 0.931,
      twelveColor: "hsl(163, 70%, 50%)",
      "13": 0.355,
      thirteenColor: "hsl(163, 70%, 50%)",
      "14": 1.218,
      fourteenColor: "hsl(163, 70%, 50%)",
      "15": 0.149,
      fifteenColor: "hsl(163, 70%, 50%)",
      "16": 0.261,
      sixteenColor: "hsl(163, 70%, 50%)"
    },
    {
      date: "August 2019 ",
      "0": 1.0,
      zeroColor: "hsl(212, 70%, 50%)",
      "1": 0.908,
      oneColor: "hsl(264, 70%, 50%)",
      "2": 0.719,
      twoColor: "hsl(222, 70%, 50%)",
      "3": 0.758,
      threeColor: "hsl(181, 70%, 50%)",
      "4": 0.51,
      fourColor: "hsl(325, 70%, 50%)",
      "5": 1.119,
      fiveColor: "hsl(225, 70%, 50%)",
      "6": 1.31,
      sixColor: "hsl(200, 70%, 50%)",
      "7": 0.611,
      sevenColor: "hsl(200, 70%, 50%)",
      "8": 1.083,
      eightColor: "hsl(136, 70%, 50%)",
      "9": 0.644,
      nineColor: "hsl(151, 70%, 50%)",
      "10": 1.218,
      tenColor: "hsl(163, 70%, 50%)",
      "11": 0.318,
      elevenColor: "hsl(163, 70%, 50%)",
      "12": 0.931,
      twelveColor: "hsl(163, 70%, 50%)",
      "13": 0.355,
      thirteenColor: "hsl(163, 70%, 50%)",
      "14": 1.218,
      fourteenColor: "hsl(163, 70%, 50%)",
      "15": 0.149,
      fifteenColor: "hsl(163, 70%, 50%)",
      "16": 0.261,
      sixteenColor: "hsl(163, 70%, 50%)"
    },
    {
      date: "September 2019",
      "0": 1.0,
      zeroColor: "hsl(212, 70%, 50%)",
      "1": 0.908,
      oneColor: "hsl(264, 70%, 50%)",
      "2": 0.719,
      twoColor: "hsl(222, 70%, 50%)",
      "3": 0.758,
      threeColor: "hsl(181, 70%, 50%)",
      "4": 0.51,
      fourColor: "hsl(325, 70%, 50%)",
      "5": 1.119,
      fiveColor: "hsl(225, 70%, 50%)",
      "6": 1.31,
      sixColor: "hsl(200, 70%, 50%)",
      "7": 0.611,
      sevenColor: "hsl(200, 70%, 50%)",
      "8": 1.083,
      eightColor: "hsl(136, 70%, 50%)",
      "9": 0.644,
      nineColor: "hsl(151, 70%, 50%)",
      "10": 1.218,
      tenColor: "hsl(163, 70%, 50%)",
      "11": 0.318,
      elevenColor: "hsl(163, 70%, 50%)",
      "12": 0.931,
      twelveColor: "hsl(163, 70%, 50%)",
      "13": 0.355,
      thirteenColor: "hsl(163, 70%, 50%)",
      "14": 1.218,
      fourteenColor: "hsl(163, 70%, 50%)",
      "15": 0.149,
      fifteenColor: "hsl(163, 70%, 50%)",
      "16": 0.261,
      sixteenColor: "hsl(163, 70%, 50%)"
    },
    {
      date: "October 2019",
      "0": 1.0,
      zeroColor: "hsl(212, 70%, 50%)",
      "1": 0.908,
      oneColor: "hsl(264, 70%, 50%)",
      "2": 0.719,
      twoColor: "hsl(222, 70%, 50%)",
      "3": 0.758,
      threeColor: "hsl(181, 70%, 50%)",
      "4": 0.51,
      fourColor: "hsl(325, 70%, 50%)",
      "5": 1.119,
      fiveColor: "hsl(225, 70%, 50%)",
      "6": 1.31,
      sixColor: "hsl(200, 70%, 50%)",
      "7": 0.611,
      sevenColor: "hsl(200, 70%, 50%)",
      "8": 1.083,
      eightColor: "hsl(136, 70%, 50%)",
      "9": 0.644,
      nineColor: "hsl(151, 70%, 50%)",
      "10": 1.218,
      tenColor: "hsl(163, 70%, 50%)",
      "11": 0.318,
      elevenColor: "hsl(163, 70%, 50%)",
      "12": 0.931,
      twelveColor: "hsl(163, 70%, 50%)",
      "13": 0.355,
      thirteenColor: "hsl(163, 70%, 50%)",
      "14": 1.218,
      fourteenColor: "hsl(163, 70%, 50%)",
      "15": 0.149,
      fifteenColor: "hsl(163, 70%, 50%)",
      "16": 0.261,
      sixteenColor: "hsl(163, 70%, 50%)"
    },
    {
      date: "November 2019",
      "0": 1.0,
      zeroColor: "hsl(212, 70%, 50%)",
      "1": 0.908,
      oneColor: "hsl(264, 70%, 50%)",
      "2": 0.719,
      twoColor: "hsl(222, 70%, 50%)",
      "3": 0.758,
      threeColor: "hsl(181, 70%, 50%)",
      "4": 0.51,
      fourColor: "hsl(325, 70%, 50%)",
      "5": 1.119,
      fiveColor: "hsl(225, 70%, 50%)",
      "6": 1.31,
      sixColor: "hsl(200, 70%, 50%)",
      "7": 0.611,
      sevenColor: "hsl(200, 70%, 50%)",
      "8": 1.083,
      eightColor: "hsl(136, 70%, 50%)",
      "9": 0.644,
      nineColor: "hsl(151, 70%, 50%)",
      "10": 1.218,
      tenColor: "hsl(163, 70%, 50%)",
      "11": 0.318,
      elevenColor: "hsl(163, 70%, 50%)",
      "12": 0.931,
      twelveColor: "hsl(163, 70%, 50%)",
      "13": 0.355,
      thirteenColor: "hsl(163, 70%, 50%)",
      "14": 1.218,
      fourteenColor: "hsl(163, 70%, 50%)",
      "15": 0.149,
      fifteenColor: "hsl(163, 70%, 50%)",
      "16": 0.261,
      sixteenColor: "hsl(163, 70%, 50%)"
    },
    {
      date: "December 2019",
      "0": 1.0,
      zeroColor: "hsl(212, 70%, 50%)",
      "1": 0.908,
      oneColor: "hsl(264, 70%, 50%)",
      "2": 0.719,
      twoColor: "hsl(222, 70%, 50%)",
      "3": 0.758,
      threeColor: "hsl(181, 70%, 50%)",
      "4": 0.51,
      fourColor: "hsl(325, 70%, 50%)",
      "5": 1.119,
      fiveColor: "hsl(225, 70%, 50%)",
      "6": 1.31,
      sixColor: "hsl(200, 70%, 50%)",
      "7": 0.611,
      sevenColor: "hsl(200, 70%, 50%)",
      "8": 1.083,
      eightColor: "hsl(136, 70%, 50%)",
      "9": 0.644,
      nineColor: "hsl(151, 70%, 50%)",
      "10": 1.218,
      tenColor: "hsl(163, 70%, 50%)",
      "11": 0.318,
      elevenColor: "hsl(163, 70%, 50%)",
      "12": 0.931,
      twelveColor: "hsl(163, 70%, 50%)",
      "13": 0.355,
      thirteenColor: "hsl(163, 70%, 50%)",
      "14": 1.218,
      fourteenColor: "hsl(163, 70%, 50%)",
      "15": 0.149,
      fifteenColor: "hsl(163, 70%, 50%)",
      "16": 0.261,
      sixteenColor: "hsl(163, 70%, 50%)"
    },
    {
      date: "January 2020",
      "0": 1.0,
      zeroColor: "hsl(212, 70%, 50%)",
      "1": 0.908,
      oneColor: "hsl(264, 70%, 50%)",
      "2": 0.719,
      twoColor: "hsl(222, 70%, 50%)",
      "3": 0.758,
      threeColor: "hsl(181, 70%, 50%)",
      "4": 0.51,
      fourColor: "hsl(325, 70%, 50%)",
      "5": 1.119,
      fiveColor: "hsl(225, 70%, 50%)",
      "6": 1.31,
      sixColor: "hsl(200, 70%, 50%)",
      "7": 0.611,
      sevenColor: "hsl(200, 70%, 50%)",
      "8": 1.083,
      eightColor: "hsl(136, 70%, 50%)",
      "9": 0.644,
      nineColor: "hsl(151, 70%, 50%)",
      "10": 1.218,
      tenColor: "hsl(163, 70%, 50%)",
      "11": 0.318,
      elevenColor: "hsl(163, 70%, 50%)",
      "12": 0.931,
      twelveColor: "hsl(163, 70%, 50%)",
      "13": 0.355,
      thirteenColor: "hsl(163, 70%, 50%)",
      "14": 1.218,
      fourteenColor: "hsl(163, 70%, 50%)",
      "15": 0.149,
      fifteenColor: "hsl(163, 70%, 50%)",
      "16": 0.261,
      sixteenColor: "hsl(163, 70%, 50%)"
    },
    {
      date: "February 2020",
      "0": 1.0,
      zeroColor: "hsl(212, 70%, 50%)",
      "1": 0.908,
      oneColor: "hsl(264, 70%, 50%)",
      "2": 0.719,
      twoColor: "hsl(222, 70%, 50%)",
      "3": 0.758,
      threeColor: "hsl(181, 70%, 50%)",
      "4": 0.51,
      fourColor: "hsl(325, 70%, 50%)",
      "5": 1.119,
      fiveColor: "hsl(225, 70%, 50%)",
      "6": 1.31,
      sixColor: "hsl(200, 70%, 50%)",
      "7": 0.611,
      sevenColor: "hsl(200, 70%, 50%)",
      "8": 1.083,
      eightColor: "hsl(136, 70%, 50%)",
      "9": 0.644,
      nineColor: "hsl(151, 70%, 50%)",
      "10": 1.218,
      tenColor: "hsl(163, 70%, 50%)",
      "11": 0.318,
      elevenColor: "hsl(163, 70%, 50%)",
      "12": 0.931,
      twelveColor: "hsl(163, 70%, 50%)",
      "13": 0.355,
      thirteenColor: "hsl(163, 70%, 50%)",
      "14": 1.218,
      fourteenColor: "hsl(163, 70%, 50%)",
      "15": 0.149,
      fifteenColor: "hsl(163, 70%, 50%)",
      "16": 0.261,
      sixteenColor: "hsl(163, 70%, 50%)"
    },
    {
      date: "March 2020",
      "0": 1.0,
      zeroColor: "hsl(212, 70%, 50%)",
      "1": 0.908,
      oneColor: "hsl(264, 70%, 50%)",
      "2": 0.719,
      twoColor: "hsl(222, 70%, 50%)",
      "3": 0.758,
      threeColor: "hsl(181, 70%, 50%)",
      "4": 0.51,
      fourColor: "hsl(325, 70%, 50%)",
      "5": 1.119,
      fiveColor: "hsl(225, 70%, 50%)",
      "6": 1.31,
      sixColor: "hsl(200, 70%, 50%)",
      "7": 0.611,
      sevenColor: "hsl(200, 70%, 50%)",
      "8": 1.083,
      eightColor: "hsl(136, 70%, 50%)",
      "9": 0.644,
      nineColor: "hsl(151, 70%, 50%)",
      "10": 1.218,
      tenColor: "hsl(163, 70%, 50%)",
      "11": 0.318,
      elevenColor: "hsl(163, 70%, 50%)",
      "12": 0.931,
      twelveColor: "hsl(163, 70%, 50%)",
      "13": 0.355,
      thirteenColor: "hsl(163, 70%, 50%)",
      "14": 1.218,
      fourteenColor: "hsl(163, 70%, 50%)",
      "15": 0.149,
      fifteenColor: "hsl(163, 70%, 50%)",
      "16": 0.261,
      sixteenColor: "hsl(163, 70%, 50%)"
    },
    {
      date: "April 2020",
      "0": 1.0,
      zeroColor: "hsl(212, 70%, 50%)",
      "1": 0.908,
      oneColor: "hsl(264, 70%, 50%)",
      "2": 0.719,
      twoColor: "hsl(222, 70%, 50%)",
      "3": 0.758,
      threeColor: "hsl(181, 70%, 50%)",
      "4": 0.51,
      fourColor: "hsl(325, 70%, 50%)",
      "5": 1.119,
      fiveColor: "hsl(225, 70%, 50%)",
      "6": 1.31,
      sixColor: "hsl(200, 70%, 50%)",
      "7": 0.611,
      sevenColor: "hsl(200, 70%, 50%)",
      "8": 1.083,
      eightColor: "hsl(136, 70%, 50%)",
      "9": 0.644,
      nineColor: "hsl(151, 70%, 50%)",
      "10": 1.218,
      tenColor: "hsl(163, 70%, 50%)",
      "11": 0.318,
      elevenColor: "hsl(163, 70%, 50%)",
      "12": 0.931,
      twelveColor: "hsl(163, 70%, 50%)",
      "13": 0.355,
      thirteenColor: "hsl(163, 70%, 50%)",
      "14": 1.218,
      fourteenColor: "hsl(163, 70%, 50%)",
      "15": 0.149,
      fifteenColor: "hsl(163, 70%, 50%)",
      "16": 0.261,
      sixteenColor: "hsl(163, 70%, 50%)"
    },
    {
      date: "May 2020",
      "0": 1.0,
      zeroColor: "hsl(212, 70%, 50%)",
      "1": 0.908,
      oneColor: "hsl(264, 70%, 50%)",
      "2": 0.719,
      twoColor: "hsl(222, 70%, 50%)",
      "3": 0.758,
      threeColor: "hsl(181, 70%, 50%)",
      "4": 0.51,
      fourColor: "hsl(325, 70%, 50%)",
      "5": 1.119,
      fiveColor: "hsl(225, 70%, 50%)",
      "6": 1.31,
      sixColor: "hsl(200, 70%, 50%)",
      "7": 0.611,
      sevenColor: "hsl(200, 70%, 50%)",
      "8": 1.083,
      eightColor: "hsl(136, 70%, 50%)",
      "9": 0.644,
      nineColor: "hsl(151, 70%, 50%)",
      "10": 1.218,
      tenColor: "hsl(163, 70%, 50%)",
      "11": 0.318,
      elevenColor: "hsl(163, 70%, 50%)",
      "12": 0.931,
      twelveColor: "hsl(163, 70%, 50%)",
      "13": 0.355,
      thirteenColor: "hsl(163, 70%, 50%)",
      "14": 1.218,
      fourteenColor: "hsl(163, 70%, 50%)",
      "15": 0.149,
      fifteenColor: "hsl(163, 70%, 50%)",
      "16": 0.261,
      sixteenColor: "hsl(163, 70%, 50%)"
    }
  ];
  const keys = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16"
  ];

  const commonProperties = {
    width: 900,
    height: 500,
    margin: { top: 60, right: 80, bottom: 60, left: 80 },
    data: data,
    indexBy: "date",
    keys
  };

  return (
    <div className="App">
      <HeatMap
        {...commonProperties}
        forceSquare={false}
        axisTop={{
          orient: "top",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "",
          legendOffset: 36
        }}
        tooltipFormat={value =>
          `${Number(value).toLocaleString("ru-RU", {
            minimumFractionDigits: 2
          })} ₽`
        }
      />
    </div>
  );
}

export default App;
