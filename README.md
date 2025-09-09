# Dictionary App
A dictionary app with a search function and a word of the day splash page, built in ReactJS using two dictionary APIs. Designed primarily for mobile.

## Features  
- Word of the day on splash page
- Search bar to search any word
- Image library in addition to written definitions, example sentences and synonyms
- Audio clips of pronunciation
- Clean responsive design

## Installation  
Clone the repository and install the required packages:  

```bash  
git clone https://github.com/chardi90/dictionary.git  
cd dicitonary  
pip install -r requirements.txt 
``` 

## Usage  

You may want to research alternative dictionary apis. This project currently uses:

### API #1

[SheCodes Dictionary API](https://www.shecodes.io/learn/apis/dictionary)

- API key required

### API #2

[freeDictionaryAPI](https://github.com/meetDeveloper/freeDictionaryAPI)
- Free
- No API key required

## Development Ideas

If I were to develop this project further I would:
1. Find a more comprehensive API for the phonetics component (many audio files are missing from FreeDictionaryAPI)
2. Install the [React Audio Player](https://www.npmjs.com/package/react-audio-player) to improve UX for phonetics
3. Find and import a proper random word generator or api (the current word of the day component is built on a short list of 35 words).

## Contributing  

Found a bug or have an idea? Fork the repo, make changes, and submit a pull request.  

## Contact  

Created by [Chardi](https://www.chardi.co.uk/)  
Feel free to reach out with questions or suggestions.
