# Form 

When users surf the web, they encounter forms all the time.
Logging in with a user ID, answering a survey, and many more.

Form tag in HTML allows such functionality.
The form tag receives input from the user, sends it to the server and saves it to the database. 
ASP or PHP is used to deliver the input to the server but general scheme of processing input it done by HTML.

## Form tag
### Properties
- method
    + get: limited byte length and the input is shown in URL
    + post: unlimited byte length and the input is not shown in URL
- action: decides the program to use while processing the input
- name: assigns a name for the new form
- target: chooses whether to opne the form in a new tab or the existing one

## Label tag
Places a label next to the input field

```html
<label> ID <input type="text"...></label>

<label for="user-id"> ID </label>
<input type="text" id="user-id">
```
These are two ways to label ID input field.
You can use a `for` property to specify that the input will be a user-id.

## Fieldset tag
Groups the form elements using `legend tags`.

## Input tag
One can use input tags to designate the type of input required.
Here are some tags that are commonly used:
- `hidden`: will be delivered to the server but is not displayed on the screen.
```html
<input type="hidden" name="input_name" value="value_to_deliver">
```
- `password`: password input - will be displayed as * or other symbols.
```html
<input type="password" [property="value"]>
```
- `text`: a line of text - usually ID, name, address, etc.
```html
<input type="text" [property="value"]>
```
- `search`: search field
- `email`: email field - automatically checks the syntax of the email
- `url`: url field - automatically checks the url syntax `http://`
- `tel`: telephon number field - does not check for syntax validity

