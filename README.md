# UFO Sightings with JavaScript - Berkeley DA
Yae Jin Park\
Module 11 - UFO Sightings with JavaScript

## Overview
Taking a break from Python, in this assignment, my objective is to create a static webpage that has a dynamic table for visualizing all or filtered data of UFO sightings recorded. Through this project, I was able to learn one method of visualizing data with HTML, JavaScript, and CSS (with Bootstrap).

## Results
The static webpage can be loaded by double clicking the index.html file icon, which will then open the static webpage on the user's default browser. There will be a jumbotron with a space image background and a blurb about UFOs, followed by a preloaded data of all UFO sightings listed in the data.js file. 

Since there are quite a few rows of data, user may lookup a specific record of sighting by filling out all or some of the input fields located on the left of the data table. Make sure to fill the input fields (especially the date) in the same format as the placeholders within the input fields show. The following images show the data table before and after applying a filter, respectively.

![Before Filter](https://github.com/yaejinpark/ufos/blob/main/resources/before_filter.png)
![After Filter](https://github.com/yaejinpark/ufos/blob/main/resources/after_filter.png)

## Summary
The new design is allowing the user to submit more input to narrow down their search of UFO sightings with more specific details, but the drawback is that there is no feature that alerts or stops the user when they make a typo in the input fields. For example, in the date input field, the user may enter the date as 321/321/2010 and the code tries to look for a sighting record with the weird date. Since the number of input fields increased since the previous exercise, there is more room for user input error and it might be good to implement some sort of form validation.

There are several ways to improve this static website, and here are the two I suggest:

1. Implement a form validation and/or calendar for date picker. The date picker can prevent the user from manually typing in the date and allow them to choose a date instead, which would minimize the date format error. 

2. Set up a simple MongoDB database to store the sightings data. Currently, the dataset is small enough just to have it typed out manually on a separate data.js file, but what if the dataset grows? It's also not great in terms of security to simply store the data on file because there is a significant chance of deleting/adding code in the data file unintentionally while editing the webpage, which may cause the webpage to break.