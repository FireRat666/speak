<pre>
Request: Supports GET and POST, query and body, JSON and FormData.
Options:
  text  (required)     Text to read
  lang  (default: en)  Speaker language, reference:
                       https://developers.google.com/admin-sdk/directory/v1/languages
  speed (default: 1)   Audio speed, higher value is faster
  pitch (default: 1)   Audio pitch, higher value is higher (yeah)
Example:
  (original female) <a href="/?text=This+actually+Works&lang=en">/?text=This+actually+Works&lang=en</a>
  (male pitch) <a href="/?text=Amazing%20wow&lang=en&pitch=0.8">/?text=Amazing%20wow&lang=en&pitch=0.8</a>
  (json) { "text": "Selamat dunia", "lang": "id" }
Forked from Repository:
<a href="https://github.com/sglkc/tts-api">https://github.com/sglkc/tts-api</a> ;)
</pre>
