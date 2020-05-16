# CPE 1040 - Spring 2020
```
  _           _       _   _       _       _                 _    
 | |         | |     | \ | |     | |     | |               | |   
 | |     __ _| |__   |  \| | ___ | |_ ___| |__   ___   ___ | | __
 | |    / _` | '_ \  | . ` |/ _ \| __/ _ \ '_ \ / _ \ / _ \| |/ /
 | |___| (_| | |_) | | |\  | (_) | ||  __/ |_) | (_) | (_) |   < 
 |______\__,_|_.__/  |_| \_|\___/ \__\___|_.__/ \___/ \___/|_|\_\
                                                                                                                      
```
Art acknowledgement: [taag](http://patorjk.com/software/taag/)
---

**NOTE:** 
1. This lesson & assignment [README](README.md) is _intentionally_ blank, to be used as the Lab Notebook for the study & submission. _It is a great aid for your study and the main component of your submission._
2. Read and follow the [lesson-and-assignment](lesson-and-assignment.md).
2. Refer to the [submission template](submission-template.md) for formatting expectations and examples. 
4. Refer to the [criteria and guide](criteria-and-guide.md) for the different components of your submission.
---

_Your study and submission work here..._

[Project image and video gallery on Imgur](https://imgur.com/gallery/uz29xHA)_(added for clarity by Ivo, 2020-05-16)_

1: I did the exercises but didn't commit the changes and I wrote everything down on this notebook. Lesson learned: Save constantly and write out notes.
2: https://imgur.com/gallery/uz29xHA 
2.1:
2.2:
2.3:
2.4: 2.62V on voltmeter measuring at the HV terminal.
2.5: Had trouble setting up the circuit. Was connecting to the long board ground and not the Microbit ground. Still 2.62V. \n

3.1: Set up circuit and used the driver code from the read-me. The LED isn't very bright in the video but it was full strength in person. \n

4.1: Set up circuit using the diagram. Had an issue where the outputs would not behave as expected when connected to ground. The
groundless circuit would cause the Q1 to be constantly on while Q| would blink out of sync with the clock. When grounded the Q| would
stay on and the Q would stop being illuminated.

5.1: The section highlighted the issues in my original code with the clock pulse. I removed the second pause because it seemed to be
interfering with the cycle. I used an LED to test if the pulses were going through. I still couldn't ground the flip flop for some
reason and I tried wiring Q| to D to see if that helped and it didn't.

Event: something that flags for something to happen. Event handler: provides an outcome after seeing an event occur. Asynchrous
exectutiuon: Can occur out of order in a code exectuion.
onButtonPressed: The button press is the event. The event handler is the function that occurs when the event is detected
We can specify the condition of when the event should be handled. We should use the high edge as the situation when the onPulsed
fuinction executes.
5.2: When the clock cycles once the Q value will switch from high to low.
6.1: Adding the 2 chips was a relatively process. I had issues with not having enough wires to connect all of the CLR and PRE signals
but I ordered some on Amazon with some other jump cables and cleaned up the circuit a bit. I used 3 LED circuits to check the output
before I read all of the outputs to the microbit.
0 to n-1. Binary so we need 2^n bits for a mod-n counter. The mod 8 counter is driven exclusively by the input of the clock.
You can read the timing diagram as the inverses of the b0-b2 timing cycles. Each cyle on the clock will increment. The bits at the first
cycle are 1 1 1, so the inverse is 0 0 0 and is 0. 
6.2: b0 then b1 then b2. The pins should be read in order with bit0 being the right most bit in the binary number. My counter was
counting down from 7(the max). Mine didn't seem to restart the count or change direction when resetting the microbit.
7.1: The hardest part of this section was the code to convert the counter to decimal but the end result ended up being a lot more
elegant than I intended. Taking the each input and multiplying it by its bit value in binary and adding the result was the most
efficient way to convert it from what I could tell. Originally I had the reading in declaration part and I couldn't figure out why it
would only increment when I reset the microbit. It took an embarassing amount of staring at the code to figure out what I was doing
wrong. So the bit reading went into the 2nd forever loop and it started immediately. It was reversed though like I thought from looking
at the LED pulses from before.
1 digit. Events are linear in microbit programming. The microbits scheduler is the solution to the concurrency issue. Queueing up the
events in order and using functions that can insert themselves into the code stack. For example when you put a forever loop within an
event handler like onButtonPressed or onPulsed it will only execute whenever the buttom is pressed or the pulse is sensed, which is
usually not what you want with those functions.  
7.2: It is displaying what the circuit is outputting, so its technically correct. When the clock pulse was normal speed a few numbers
did lag a bit but halving the pause time gradually made them almost all the same. The LED is a little bit inconsistent with the
additional forever loop being executed everytime the code is exectuted.
8.1: When I first updated the circuit I didn't change the code and the counter behaved strangely. When  I updated the pulse code I
forgot to update the bit2 functions and they were still operating, making the counter not do anything. I didn't understand the second
step in the circuit changing and If I did I could ahve left the code in. Whoops.
In teh description it mentions that they are control signals. Other inputs can't be accepted while CLR and PRE are active(low). They
are active when the signal in them is low and is deactivated when it is set to high making it active on the low signal. This is known
from the function of how the D flip flop operates.
8.2: The ground will make bit2 constantly 0 making the counter work still. Put in an on button pressed function that pulses a low level
signal in the corresponding pin. It is now a 2 bit counter that goes 0-3.This made the counter count up from 0 on AB pressed.
