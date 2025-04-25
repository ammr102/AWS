WhoRme
#### Video Demo:  <URL HERE>
#### Description:


Hey there! Welcome to the code for my personal webpage

HTML Here :

First off, we have the doctype declaration `<!DOCTYPE html>`, signaling that this is an HTML5 document. Then, the `<html>` tag encapsulates the entire content of the page , like David said

Moving on to the `<head>` section, here's where we set up metadata like character encoding, viewport settings, and other important information for search engines. You'll notice some meta tags providing a brief description of the page and keywords to enhance its visibility in search results.

We link to a couple of CSS files (`style.css` and `responsive.css`) to ensure our page looks great on all devices. FontAwesome's CSS is also included for those awesome icons you see scattered throughout the page. Oh, and we can't forget the JavaScript file `main.js` for adding some interactive functionalities later on.

Now, let's dive into the `<body>`:

1. **Navigation**: We've got two navbars here. The main navbar for larger screens and a responsive navbar for smaller ones like mobile devices. Both offer smooth navigation to different sections of the page.

2. **Content Sections**:
   - **Home Section**: This is where I introduce myself, my background, and the purpose of this website. It's a neat way for visitors to get to know me better and understand why I'm here.
   - **Skills Section**: Here, I showcase my skills with cool icons. From programming languages like Python and Java to cybersecurity essentials like Linux and Networking, it's all laid out here.
   - **Certificates Section**: I proudly display my certificates earned from various courses and programs. Each certificate is clickable, leading to the respective platform for verification.
   - **Contact Section**: Last but not least, I offer visitors a way to get in touch with me. There's a simple contact form where they can drop me a message, and I've also listed my social media links for those who prefer that route.

And at the bottom of the page, we reference our JavaScript file for implementing additional functionalities, especially for toggling the mobile navbar.

That's about it! It's a clean and organized layout designed to showcase my skills, accomplishments, and provide an easy way for people to reach out to me. Hope you like it! If you have any questions or suggestions, feel free to let me know.

CSS Here :

1. **Font Import and Global Styles**:
   - The code begins by importing the Roboto font from Google Fonts and applying it as the default font for the entire document.
   - Then, it resets some default styles such as margin, padding, text-decoration, and overflow.
   - It sets the `overflow` property to `hidden` to prevent any content from overflowing its container.

2. **HTML Styles**:
   - Sets the background color of the HTML element to a deep blue shade (`#272575`).
   - Enables smooth scrolling behavior and resets the vertical overflow property to `unset`.

3. **Navigation Bar Styles**:
   - Styles the navigation bar (`navBar`) with a transparent background, centered text, and padding.
   - Adds a box shadow effect and transition for smooth changes.
   - Defines styles for anchor links (`navBar a`), including color, font weight, padding, and border-radius.
   - Handles hover effects and styling for the active link (`activeNav`).
   - Specifies styles for the responsive navigation menu (`navResponsive`) and its container.

4. **Home Section Styles**:
   - Styles the home section (`#home`) with margin, padding, background color, and flex display for layout.
   - Sets styles for various text elements within the home section, such as headings (`hiWord`, `changeName`), and paragraphs (`#home p`).
   - Defines an animation (`cursor`) for a text cursor effect.
   - Specifies styles for the logo image (`logo`) and home buttons (`homeButtons`).

5. **Skills Section Styles**:
   - Styles the skills section (`#skills`) with padding, margin, and width.
   - Defines styles for the heading (`skillsHeading`) and skill containers (`skillsContainer`).
   - Specifies styles for individual skills (`skill`), including background color, padding, font size, and transition effects.
   - Adds hover effects for skills and skill images.

6. **Certificates Section Styles**:
   - Styles the certificates section (`#cer`) with padding, margin, and width.
   - Sets styles for the heading (`cersHeading`) and certificate containers (`cerContainer`).
   - Specifies styles for certificate images (`cerificate img`), including width and border-radius.

7. **Contact Section Styles**:
   - Styles the contact section (`#contact`) with padding, margin, and width.
   - Sets styles for the heading (`contactHeading`), contact form (`contactForm`), form labels, inputs, textareas, and buttons.
   - Adds transition effects and hover styles for form inputs and buttons.
   - Defines styles for social links (`socialLinks`) and their hover effects.

These styles combine to create a visually appealing and cohesive design for the webpage. Each section has its unique styling, contributing to the overall aesthetic and functionality of the site.


1. **Media Query for Responsive Design (Max Width: 1150px)**:
   - This part of the code targets screens with a maximum width of 1150 pixels, applying responsive styles for smaller devices.

2. **Responsive Navigation Bar Styles**:
   - Hides the regular navigation bar (`navBar`) and displays the responsive navigation menu (`navResponsive`) instead.
   - Adjusts the width, padding, and alignment of elements within the responsive navigation menu.
   - Styles links and headings within the responsive navigation menu.

3. **Responsive Home Section Styles**:
   - Modifies the margin and padding of the home section (`#home`) for better layout on smaller screens.
   - Aligns text elements (`h1` and `p`) to the center.
   - Hides the logo image (`logo`) on smaller screens.
   - Adjusts the display of home buttons (`homeButtons`) to block-level for proper alignment.

4. **Responsive Skills Section Styles**:
   - Alters padding within the skills section (`#skills`) to ensure content visibility.
   - Adjusts the grid layout of the skills container (`skillsContainer`) to display columns stacked vertically for better readability on small screens.

5. **Responsive Certificates Section Styles**:
   - Modifies padding within the certificates section (`#cer`) to enhance content visibility.
   - Adjusts the grid layout of the certificate container (`cerContainer`) to display columns stacked vertically for better readability on small screens.

6. **Responsive Contact Section Styles**:
   - Adjusts padding within the contact section (`#contact`) for improved layout on smaller devices.
   - Resets the width of the contact form to `unset` and adjusts padding for proper alignment.
   - Ensures that input fields (`input` and `textarea`) span the full width of their container.

These responsive styles ensure that the website adapts well to various screen sizes, providing a seamless user experience across different devices.
 

