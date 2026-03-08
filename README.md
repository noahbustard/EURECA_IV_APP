# EURECA IV Medication Training Website

## Website Summary

This website was created as an interactive simulation to help users practice the safe administration of IV push medications. Instead of only reading medication instructions on paper, participants move through a guided digital activity where they review medication information, administer the medication using an on-screen syringe, and monitor the time required to complete the task.

The goal of the website is to create a simple, repeatable training experience that allows participants to practice medication timing in a controlled setting. It also makes it possible to collect results in a consistent way so the research team can review performance across participants.

## Simplified Method / Approach

The website was built to mirror the main steps a participant would follow during the simulation.

1. The participant begins by entering basic background information, such as patient ID, years of experience, and level of nursing.
2. The participant is then shown one medication at a time with the key order details and instructions needed for that medication.
3. On the same screen, the participant uses an interactive syringe and clock display to complete the medication administration task.
4. The website records how long the medication administration took and compares that time to the expected minimum administration time.
5. After the simulation is complete, the website creates a downloadable spreadsheet file so the results can be reviewed in Excel.

In simple terms, the website was designed to guide the participant through the task, measure timing in a clear way, and organize the results for later analysis.

## Main Features

- Guided medication-by-medication simulation
- Large medication display for readability
- Interactive syringe for simulated IV push administration
- Clock and timer display to support timing awareness
- Drug reference pop-up for quick medication guidance
- Automatic data collection during the simulation
- Downloadable CSV file for use in Excel

## Data Collected

The exported spreadsheet includes:

- Patient ID
- Years of Experience
- Level Of Nursing
- Medication
- Administration Time
- Required Minimum Administration Time
- Compliance Status
- Completed At

## Running the Website

To run the website locally:

```bash
npm install
npm run dev
```

Then open `http://localhost:3000` in a browser.
