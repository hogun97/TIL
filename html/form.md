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

### Properties
- `autofocus`: designate the first input field to be highlighted when a user enters the page
- `placeholder`: a note to keep in mind while filling the input field
```html
<label class="reg" for="uid">graduation year</label>
<input type="text" id="uid" placeholder="no hyphens needed">
```
- `readonly`: a user can read only - cannot edit the text
```html
<label class="reg" for="subj">English (Speaking)</label>
<input type="text" id="subj" value="9:00~11:00" readonly>
```
- `required`: a required field - must be filled in order to proceed
- `min`, `max`: minimum or maximum value of the field
- `step`: the interval between values of the field
    + Used only when input type is date, datetime, datetime-local, month,week, time, range, number
- `size`: how many characters to display in the field
- `maxlength`: maximum number of characters to display
- `minlength`: minimum number of characters to display
    + Only supported in Chrome and Android browser

#### Display a dropdown menu
Using `select`, `optgroup`, `option` tags
```html
<select id="majors">
    <optgroup label="Engineering">
        <option value="archi">Architecture</option>
        <option value="mechanic">Mechanical</option>
        <option value="indust">Industrial</option>
        <option value="elec">Electrical</option>
        <option value="computer">Computer</option>
        <option value="chemical">Chemical</option>
    </optgroup>
    <optgroup label="Humanities">
        <option value="history">History</option>
        <option value="lang">Language</option>
        <option value="philo">Philosophy</option>
    </optgroup>
</select>
```
Using `datalist` and `option` tags
```html
<input type="text" id="interest" list="choices">
<datalist id="choices">
    <option value="grammar" label="Grammar"></option>
    <option value="vocab" label="Vocabulary"></option>
    <option value="speaking" label="Speaking"></option>
    <option value="listening" label="Listening"></option>
    <option value="news" label="News"></option>
</datalist>
```
Using `textarea` to write multiple lines of text as input
```html
<textarea [property="value"]>Content</textarea>
```
- Properties
    + `name`: name of the textarea
    + `cols`: width of the textarea (in characters)
    + `rows`: height of the textarea (in lines)

### Additional Properties
`buttons` provide various types and forms of buttons
```html
<button [type="submit | reset | button"]>Content</button>
```
- Properties
    + `submit`: deliver the form to the server
    + `reset`: initialize all fields in the form
    + `button`: provides the button structure

`output` displays the calculation result on the browser
```html
<form oninput="result.value=parseInt(num1.value)+parseInt(num2.value)">
    <input type="number" name="num1" value="0">
    +<input type="number" name="num2" value="0">
    =<output name="result" for="num"></output>
</form>
```

`progress` shows the progress of a work being done without displaying any units or measurements

- Properties
    + `value`: progress done
    + `max`: total work scope

```html
<label>10 sec left</label>
<progress value="50" max="60"></progress>
```
 
