# Web Development Project 3 - SpongeBob Flashcards 🍍

Submitted by: **James So**

This web app: Contains a set of flashcards based on the TV show, SpongeBob SquarePants. The user can progress through the deck of flashcards while keeping track of how many answers they got wrong and how many they got right. The cards will progress in a fixed order.

Time spent: **4** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The user can enter their guess in a box before seeing the flipside of the card**
- [x] **Clicking on a submit button shows visual feedback about whether the answer was correct or incorrect**
- [x] **A back button is displayed on the card and can be used to return to the previous card in a set sequence**
- [x] **A next button is displayed on the card and can be used to navigate to the next card in a set sequence**

The following **optional** features are implemented:

- [ ] A shuffle button is used to randomize the order of the cards
- [x] A user's answer may be counted as correct even when it is slightly different from the target answer
- [ ] A counter displays the user's current and longest streak of correct responses
- [ ] A user can mark a card that they have mastered and have it removed from the pool of answers as well as added to a list of mastered cards

The following **additional** features are implemented:

* [x] A counter displays the number of questions that the user got wrong

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<div>
    <a href="https://www.loom.com/share/331e4a04ef1642bfbdff7459c633f433">
      <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/331e4a04ef1642bfbdff7459c633f433-with-play.gif">
    </a>
  </div>

<!-- Replace this with whatever GIF tool you used! -->
GIF created with Loom  
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Managing all the React hooks used within the app was quite challenging. The large number of hooks made it somewhat confusing to keep track of their purposes. Another challenge was ensuring that the text input box only had a border color after the user made a guess. To deal with this challenge, I created a hook that kept track of whether or not the user attempted to answer or not.

## License

    Copyright 2024 James So

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
