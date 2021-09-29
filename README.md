Portfolio Site
=======
## *for Linnéa Olofsson*  

### Overview
This project is build with [NextJS](https://nextjs.org/docs) and [TailwindCSS](https://tailwindcss.com/docs).
The main goal of this project is to create a portfolio-page for myself, with a side goal of practising React/Javascript. The decision to use NextJS came from pure curiosity, as did tailwindCSS, with a pretty solid result. It took some time getting used to how to use TailwindCSS in a way that doesn't make the files all too clunky (and there's still some work left to do), but it's a nice tool to create smaller pages.

This project will be ongoing and grow dynamically as time passes.
You can find the page up and running [here](https://developer.linneaolofsson.me/) (powered by vercel and digital ocean)

### In the pipeline
Upcoming features for this projects includes:
- full implementation of ReCAPTCHA for contact-form (started but not completed yet)
- Updated styling
- linking to actual resume in PDF-form
- splitting components to smaller parts

### Forking and implementing
If you should want to implement and build upon this repo, you will need to do the following steps:
- run npm install
- Create the following environment variables in a .env-file  
    *burnermail*: sending email-address  
    *personalmail*: receiving email-address  
    *password*: password for burnermail  
    *recaptchasitekey*: sitekey for ReCAPTCHA (not yet used)



To run the site locally, use command *npm run dev*
