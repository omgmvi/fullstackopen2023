When adding a new note to the form and clicking the Save button, the browser sends a POST request to the server with the new note. If I understood this well, the newly written text is saved in a file also called new_note and sent with the POST. It well may be that the POST request just contain the text string. Whatever is sent, the server << reacts >> by calling javascript code to add the new text note and the date into the data.json file. Inmediately, the server << redirects >> the notes web in a similar way than the get

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    browser-->>server: new_note
    activate server
    Note right of server: JavaScript code push text onto data.json
    server-->>browser: HTML document
    server-->>browser: the css file
    server-->>browser: the JavaScript file
    server-->>browser: ./data.json
    deactivate server
```
