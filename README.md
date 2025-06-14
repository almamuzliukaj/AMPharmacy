# AMPharmacy 💊

AMPharmacy is a responsive and user-friendly web platform for browsing and managing pharmacy medicines. Built using HTML, CSS, JavaScript, and Bootstrap, it offers users a way to view various medicine categories, get service and contact information, and securely log in to personalize their experience.

## 🌐 Features

- ✅ Responsive design with Bootstrap
- ✅ Category-based medicine browsing (Analgesics, Antibiotics, Antidepressants, Diuretics, Antihistamins)
- ✅ Individual medicine cards with pricing and image
- ✅ Login system with session memory (LocalStorage)
- ✅ Personalized greeting with username on navigation
- ✅ Logout functionality
- ✅ "Save" button support to bookmark medicine (coming soon)
- ✅ Structured layout with consistent navigation bar and footer
- ✅ Google Maps integration on the Contacts page
- ✅ Modern UI theme with vintage green background

## 📁 Project Structure

```
project-root/
│
├── index.html
├── login.html
├── advices.html
├── service.html
├── contacts.html
│
├── medicines/
│   ├── analgesics.html
│   ├── antibiotics.html
│   ├── antidepressants.html
│   ├── diuretics.html
│   └── antihistamins.html
│
├── assets/
│   ├── css/
│   │   ├── main.css
│   │   ├── login.css
│   │   ├── service.css
│   │   ├── contacts.css
│   │   ├── analgesics.css
│   │   └── [other category styles]
│   ├── images/
│   │   ├── logo.png
│   │   ├── GREEN-BACKGROUND.jpg
│   │   └── [medicine photos & gifs]
│   └── js/
│       └── navbar.js
```

## 💻 Technologies Used

- HTML5 & CSS3
- JavaScript (Vanilla)
- Bootstrap 5
- Font Awesome
- Google Fonts
- Google Maps Embed
- LocalStorage for session management

## 🔐 Login Functionality

- Stores username in localStorage
- Displays username in the navbar once logged in
- Provides a Logout button which clears localStorage and redirects to login page

## 👷️ Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/yourusername/ampharmacy.git
```

2. Navigate into the project folder:

```bash
cd ampharmacy
```

3. Open index.html in your browser or launch with Live Server (for VSCode).

4. To test login:
   - Go to login.html
   - Enter a username and password (no backend; demo only)
   - Redirects to Home and shows the username in navbar

## 📸 Screenshots

| Home Page                        | Medicines Page                    | Contact Page                     |
|----------------------------------|-----------------------------------|----------------------------------|
| ![Home](assets/images/Homepage.png) | ![Analgesics](assets/images/MedicinePage.png) | ![Contact](assets/images/ContactsPage.png) |

> Note: Replace the above image paths with real screenshots you upload.

## 🙌 Credits

Made with 💚 by Alma  
Project for Web Development course / portfolio demo

## 📄 License

This project is open-source and available under the MIT License.

