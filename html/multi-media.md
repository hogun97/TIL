# Multi-media in HTML5

Until HTML4, we were not able to play a multi-media file directly on the web - we had to link it to a plugin program.
However, starting from HTML5, YouTube and Vimeo started using HTML5 player to play multi-media files.

- `object`, `embed`: insert external files
    + Java Applet, PDF, flash movie etc can be inserted
    + If object tag is not supported, use embed tag

```html
<object data="path" type="type" name="name" width="width" height="height"></object>

<embed src="path" type="type" width="width" height="height">
```

## Codec
- Encoding: processing an original file so that it can be played in a computer
- Decoding: process of getting file information and displaying it on a player
- Video Codec: a program that executes encoding and decoding
    + H.264/AVC: .mp4 or .mov in most modern browsers
    + Ogg Theora: firefox, opera, chrome supported
    + v8, v9: open source webm - firefox, opera, chrome supported
- Audio Code: 
    + MPEG-1 AUDIO Layer3: MP3 Codec
    + Ogg Vorbis

## Audio and Video
```html
<audio src="audio file path" [property] [property="value"]></audio>
<video src="video file path" [property] [property="value"]></video>
```
    + `autoplay`: plays the file automatically
    + `controls`: shows control bar - time, volume and download
    + `width`, `height`
    + `preload`: whether to download before playing
    + `muted`: play video without the sound
    + `loop`: loop the file without an end
    + `poster`: an image displayed if the file cannot be played

## Commentary
`track` tag
```html
<track kind="commentary type" src="path" srclang="language" label="title" default>

<track src="media/Painting.vtt" srclang="ko" label="Korean" default>
```
1. `kind`: type of commentary
    + subtitles: displayed
    + captions: displayed
    + descriptions: not displayed
    + chapters: not displayed
    + metadata: not displayed
2. `src`: file path of the commentary file
3. `srclang`: the language of the commentary file
4. `label`: label of the commentary if there are multiple files
5. `default`: the default commentary file if there are multiple files

Use WebVTT file to make a commentary file.
[Link to make vtt file :](https://developer.microsoft.com/en-us/microsoft-edge/testdrive/demos/captionmaker)

