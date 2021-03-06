# text-transformer spec

## Layout

![text-transformer-layout](layouts/transformer_2.png)

## Page Load Spec

1. When the page loads, the user should see three panels: __input__, __transforms__ and __output__.
2. When the page loads, the user should see the __input__ panel containing the following elements: a dropdown for encoding selection, and a text area.
3. When the page loads, the user should see the __transforms__ panel containing one empty transform element (see below), and a plus button to the right of it.
4. When the page loads, the user should see the __output__ panel containing the following elements: a dropdown for encoding selection, and a text area with text input disabled.

## Input Panel Spec

5. When the user clicks the __input__ panel encoding dropdown, the dropdown should open and they should see three options: `utf8`, `base16` and `base64`.
6. Given that the __input__ panel encoding dropdown is open, when the user clicks any option, the dropdown should close.
7. Given that the __input__ panel encoding dropdown is open, when the user clicks any option other than the current one, the user should see the text in the text area change.

## Base Transforms Panel Spec

8. When the user clicks the plus button in the __transforms__ panel, an [Empty Transform Element](#empty-transform-element-spec) should appear in its place, and the plus button should move to the right.
9. When the user clicks the cross button at the top right of any of the __transforms__ panel elements, that element should be removed and the plus button should move to the left.

## Transform Elements

### Transform Element Spec

10. When any __transforms__ panel element is created, the users should see a _transformation selection dropdown_ on top showing which transformation this element represents.
11. When the user clicks the _transformation selection dropdown_, they should see the following options: `AES`, `None`

### Empty Transform Element Spec

12. When an empty element is created, it should have `None` value in the _transformation selection dropdown_

### AES Transform Element Spec

13. Given that the _transformation selection dropdown_ is open and the current element is not the `AES` transform element, when the user clicks the `AES` option in the dropdown, all old element's fields not present in the `AES` element should disappear and the element should become the AES transform element.
14. When an element is selected to be an AES transform element in the _transformation selection dropdown_, the user should see `AES` value in the _transformation selection dropdown_
15. When an element is selected to be an AES transform element in the _transformation selection dropdown_, the user should see the bit selection dropdown
16. When the user clicks the bit selection dropdown, the user should see options `128`, `192` and `256`
17. When an element is selected to be an AES transform element in the _transformation selection dropdown_, the user should see the block mode selection dropdown
18. When the user clicks the block mode selection dropdown, the user should options `ecb` and `cbc`
19. When an element is selected to be an AES transform element in the _transformation selection dropdown_, the user should see key input with a random key in base64 format
20. When an element is selected to be an AES transform element in the _transformation selection dropdown_, the user should see iv input with a random value in base64 format

## Output Panel Spec

21. When the user changes text in the __input__ text area, the user should immediately see the result of transforming this text using the transforms from the __transforms panel__
22. When the user clicks the encoding selection dropdown in the __output__ area, resulting text should be transformed into the given encoding
23. When the user removes any transform element from the __transforms__ panel, the text in the __output__ panel text area should change too, reflecting the change in text transformation.
24. When the user adds any transform element to the __transforms__ panel, the text in the __output__ panel text area should change too, reflecting the change in text transformation
25. When the user changes any parameter of any transform element, such as changing the key in the `AES` transform element, the text in the __output__ panel text area should change too, reflecting the change in text transformation

## App Bar

34. When the page loads, the user should see an App Bar (id="trs-app-bar").
- 35. When the page loads, the user should see a menu button (id='trs-app-bar-menu-button') in the leftmost part of the App Bar.
36. When the page loads, the user should see a github icon (id='trs-app-bar-github-button') to the right of the menu button.
37. When the page loads, the user should see a twitter icon (id='trs-app-bar-twitter-button') to the right of the github icon.
- 38. When the user clicks the app bar menu button(id="trs-app-bar-menu-button"), they should see a dropdown with a single option "About" (id="trs-app-bar-about") open.
- 39. When the user clicks the "About" option in the topbar menu dropdown (id="trs-app-bar-about"), they should see a popup (id="trs-about-popup") saying: "Text transformer. Author: Andrei Chernikov".
40. When the user clicks the github icon (id="trs-app-bar-github-button") the github repo page should open in another tab: https://github.com/aikei/text-transformer.
41. When the user clicks the twitter icon (id="trs-app-bar-twitter-button", the twitter page should open in another tab: https://twitter.com/aikei_en
42. When the page loads, the user should see an App Name (id="trs-app-name") in the App Bar.
