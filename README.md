# Onboarding Flow

The task was to create a frontend project that represents an onboarding flow with multiple views.

## Technologies used
- Framework: **React.js** 
- Styling: **TailwindCSS**
- Animations: **Framer Motion**
- Forms: **React Hook Form**
- Form and payload validation: **Zod**

## Key Features

### Forms
Since I followed a predefined design, I decided not to use a UI library but to create my own custom input fields, that can be used with react-hook-form.

### Validation
Form data is first validated on every screen. If the validation passes, the data is stored in context. Before sending the data to a server, the final payload is validated again in the request handler. 

### Animations 
Animations are used mostly for transitions between different screens. I chose to animate screens moving in and out from both sides of the page depending on whether the user is navigating forward or backward in order to create a feeling of moving through the onboarding process.

## Try It Out

### Live Page
To try the live app hosted on Netlify, click [here](https://onboarding-flow-af.netlify.app).

### Run It Locally
To run the app on your local machine, follow the steps: 

Create an empty directory in a preffered location and move into it:
```bash
mkdir onboarding-flow
cd onboarding-flow
```

Clone the Git repository
```
git clone https://github.com/aljaz-ferenc/onboarding-flow.git .
```

Install required dependencies
```
npm install
```

Run the development server
```
npm run dev
```
Navigate to `http://localhost:5173/` in your browser.
